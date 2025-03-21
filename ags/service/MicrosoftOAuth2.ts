import { exec, GLib, GObject, readFile, register, writeFileAsync } from "astal";
import { Gtk } from "astal/gtk3";
import { fetch, paramsToString, parseQueryParams } from "../lib/fetch";
import WebKit2 from "gi://WebKit2?version=4.1";
import { ensureDirectory } from "../lib/utils";

@register()
class MicrosoftOAuth2Service extends GObject.Object {
  _tokensPath = "";
  _clientId = null;
  _clientSecret = null;
  _redirectUri = "http://localhost";
  _scopes = ["Tasks.ReadWrite"];  // Microsoft Tasks scope
  _expiresIn: GLib.DateTime | null = null;
  _accessToken = null;
  _refreshToken = null;

  getAuthorizationUrl() {
    const baseUrl = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
    const params = {
      client_id: this._clientId,
      redirect_uri: this._redirectUri,
      response_type: "code",
      scope: `offline_access https://graph.microsoft.com/${this._scopes.join(' ')}`,
      response_mode: "query",
      state: "state_parameter_passthrough_value",
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
            this.retrieveAccessToken(authCode).then(() => { });
        }
        return true;
      },
    );

    // Show WebView in a Gtk window
    const window = new Gtk.Window({ title: "Microsoft OAuth2" });
    window.add(webView);
    window.show_all();
  }

  // Method to exchange authorization code for access token
  async retrieveAccessToken(authCode: string) {
    const tokenUrl = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
    const requestData = {
      client_id: this._clientId,
      client_secret: this._clientSecret,
      redirect_uri: this._redirectUri,
      grant_type: "authorization_code",
      code: authCode,
      scope: `offline_access https://graph.microsoft.com/${this._scopes.join(' ')}`,
    };

    try {
      const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: paramsToString(requestData),
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
    const tokenUrl = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
    const requestData = {
      client_id: this._clientId,
      client_secret: this._clientSecret,
      grant_type: "refresh_token",
      refresh_token: this._refreshToken,
      scope: `offline_access https://graph.microsoft.com/${this._scopes.join(' ')}`,
    };
    try {
      const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: paramsToString(requestData),
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
    const apiKeysPath = `${GLib.get_user_state_dir()}/ags/user/micro_api_keys.json`;
    this._tokensPath = `${GLib.get_user_state_dir()}/ags/user/microsoft_tokens.json`;
    try {
      const apiKeys = readFile(apiKeysPath);
      const apiKeysData = JSON.parse(apiKeys);
      this._clientId = apiKeysData["microsoftClientId"];
      this._clientSecret = apiKeysData["microsoftClientSecret"];

      const tokens = readFile(this._tokensPath);
      const tokensData = JSON.parse(tokens);
      this._expiresIn = GLib.DateTime.new_from_unix_utc(
        tokensData["expiresIn"],
      );
      this._accessToken = tokensData["accessToken"];
      this._refreshToken = tokensData["refreshToken"];
    } catch { }
  }
}

const service = new MicrosoftOAuth2Service();
export default service;
