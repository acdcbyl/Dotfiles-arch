import { exec, GLib, GObject, readFile, register, writeFileAsync } from "astal";
import { Gtk } from "astal/gtk3";
import { fetch, paramsToString, parseQueryParams } from "../lib/fetch";
import WebKit2 from "gi://WebKit2?version=4.1";
import { ensureDirectory } from "../lib/utils";

@register()
class GoogleOAuth2Service extends GObject.Object {
	_tokensPath = "";
	_clientId = null;
	_clientSecret = null;
	_redirectUri = "http://localhost";
	_scopes = ["https://www.googleapis.com/auth/tasks"];
	_expiresIn: GLib.DateTime | null = null;
	_accessToken = null;
	_refreshToken = null;

	getAuthorizationUrl() {
		const baseUrl = "https://accounts.google.com/o/oauth2/v2/auth";
		const params = {
			scope: this._scopes.join(" "),
			include_granted_scopes: true,
			response_type: "code",
			state: "state_parameter_passthrough_value",
			redirect_uri: this._redirectUri,
			client_id: this._clientId,
			access_type: "offline",
		};

		return `${baseUrl}?${paramsToString(params)}`;
	}

	openAuthorizationWebView() {
		const webView = new WebKit2.WebView();
		const authUrl = this.getAuthorizationUrl();

		webView.load_uri(authUrl);

		webView.connect(
			"resource-load-started",
			(self: WebKit2.WebView, _resource, request) => {
				const uri = request.get_uri();
				if (uri.startsWith(this._redirectUri)) {
					const paramsString = uri.split("?")[1];
					const urlParams = parseQueryParams(paramsString);
					const authCode = urlParams["code"];
					if (authCode)
						this.retrieveAccessToken(authCode).then(() => {});
				}
				return true;
			},
		);

		// Show WebView in a Gtk window
		const window = new Gtk.Window({ title: "Google OAuth2" });
		window.add(webView);
		window.show_all();
	}

	// Method to exchange authorization code for access token
	async retrieveAccessToken(authCode: string) {
		const tokenUrl = "https://oauth2.googleapis.com/token";
		const requestData = {
			client_id: this._clientId,
			client_secret: this._clientSecret,
			redirect_uri: this._redirectUri,
			grant_type: "authorization_code",
			code: authCode,
			access_type: "offline",
		};

		try {
			const response = await fetch(tokenUrl, {
				method: "POST",
				params: requestData,
			});

			if (response.ok) {
				await this.saveTokens(response);
			} else {
				log(`Failed to retrieve token: ${response.status}`);
				const errorData = await response.text();
				log(`Error response: ${errorData}`);
			}
		} catch (error) {
			log(`Error during token exchange: ${error.message}`);
		}
	}

	async refreshToken() {
		const tokenUrl = "https://oauth2.googleapis.com/token";
		const requestData = {
			client_id: this._clientId,
			client_secret: this._clientSecret,
			access_type: "offline",
			refresh_token: this._refreshToken,
			grant_type: "refresh_token",
		};
		try {
			const response = await fetch(tokenUrl, {
				method: "POST",
				params: requestData,
			});

			if (response.ok) {
				await this.saveTokens(response);
			} else {
				log(`Failed to refresh token: ${response.status}`);
				const errorData = await response.text();
				log(`Error response: ${errorData}`);
			}
		} catch (error) {
			log(`Error during token refresh: ${error.message}`);
		}
	}

	async saveTokens(res) {
		const now = GLib.DateTime.new_now_utc();
		const data = await res.json();
		this._expiresIn = now.add_seconds(data["expires_in"]);
		this._accessToken = data.access_token;
		if (data["refresh_token"]) this._refreshToken = data.refresh_token;

		await writeFileAsync(
			this._tokensPath,
			JSON.stringify({
				expiresIn: this._expiresIn?.to_unix(),
				accessToken: this._accessToken,
				refreshToken: this._refreshToken,
			}),
		);
	}

	// Getter for access token
	async getAccessToken() {
		if (
			this._expiresIn &&
			this._expiresIn.to_unix() < GLib.DateTime.new_now_utc().to_unix()
		) {
			console.log("Access token expired, refreshing...");
			await this.refreshToken();
		}
		return this._accessToken;
	}

	// Method to check if the user is authenticated
	isAuthenticated() {
		return this._accessToken !== null;
	}

	constructor() {
		super();
		ensureDirectory(`${GLib.get_user_state_dir()}/ags/user/`);
		const apiKeysPath = `${GLib.get_user_state_dir()}/ags/user/api_keys.json`;
		this._tokensPath = `${GLib.get_user_state_dir()}/ags/user/google_tokens.json`;
		try {
			const apiKeys = readFile(apiKeysPath);
			const apiKeysData = JSON.parse(apiKeys);
			this._clientId = apiKeysData["clientId"];
			this._clientSecret = apiKeysData["clientSecret"];

			const tokens = readFile(this._tokensPath);
			const tokensData = JSON.parse(tokens);
			this._expiresIn = GLib.DateTime.new_from_unix_utc(
				tokensData["expiresIn"],
			);
			this._accessToken = tokensData["accessToken"];
			this._refreshToken = tokensData["refreshToken"];
		} catch {}
	}
}

const service = new GoogleOAuth2Service();
export default service;
