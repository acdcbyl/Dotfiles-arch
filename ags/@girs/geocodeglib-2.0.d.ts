/// <reference path="./soup-3.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./json-1.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GeocodeGlib?version=2.0' {
    // Module dependencies
    import type Soup from 'gi://Soup?version=3.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type Json from 'gi://Json?version=1.0';

    export namespace GeocodeGlib {
        /**
         * GeocodeGlib-2.0
         */

        /**
         * Error codes returned by geocode-glib functions.
         */
        class Error extends GLib.Error {
            static $gtype: GObject.GType<Error>;

            // Static fields

            /**
             * An error occured parsing the response from the web service.
             */
            static PARSE: number;
            /**
             * The request made was not supported.
             */
            static NOT_SUPPORTED: number;
            /**
             * The requests made didn't have any matches.
             */
            static NO_MATCHES: number;
            /**
             * The request made contained invalid arguments.
             */
            static INVALID_ARGUMENTS: number;
            /**
             * The server encountered an (possibly unrecoverable) internal error.
             */
            static INTERNAL_SERVER: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            /**
             * Gets the geocode-glib error quark.
             */
            static quark(): GLib.Quark;
        }

        /**
         * Coordinate Reference System Identification for a location.
         */

        /**
         * Coordinate Reference System Identification for a location.
         */
        export namespace LocationCRS {
            export const $gtype: GObject.GType<LocationCRS>;
        }

        enum LocationCRS {
            /**
             * CRS is World Geodetic System, standard for Earth.
             */
            WGS84,
        }
        /**
         * The URI scheme for this location.
         */

        /**
         * The URI scheme for this location.
         */
        export namespace LocationURIScheme {
            export const $gtype: GObject.GType<LocationURIScheme>;
        }

        enum LocationURIScheme {
            /**
             * The 'geo' URI scheme, RFC 5870
             */
            GEO,
        }
        /**
         * Osm type of the place.
         */

        /**
         * Osm type of the place.
         */
        export namespace PlaceOsmType {
            export const $gtype: GObject.GType<PlaceOsmType>;
        }

        enum PlaceOsmType {
            /**
             * Unknown type
             */
            UNKNOWN,
            /**
             * Defines a point in space.
             */
            NODE,
            /**
             * Used to explain how other elements work together.
             */
            RELATION,
            /**
             * Defines a linear feature and area boundaries.
             */
            WAY,
        }
        /**
         * Type of the place.
         */

        /**
         * Type of the place.
         */
        export namespace PlaceType {
            export const $gtype: GObject.GType<PlaceType>;
        }

        enum PlaceType {
            /**
             * Type is unknown for this place.
             */
            UNKNOWN,
            /**
             * A building or house.
             */
            BUILDING,
            /**
             * A street.
             */
            STREET,
            /**
             * A populated settlement such as a city, town, village.
             */
            TOWN,
            /**
             * One of the primary administrative areas within a country.
             */
            STATE,
            /**
             * One of the secondary administrative areas within a country.
             */
            COUNTY,
            /**
             * One of the tertiary administrative areas within a country.
             */
            LOCAL_ADMINISTRATIVE_AREA,
            /**
             * A partial or full postal code.
             */
            POSTAL_CODE,
            /**
             * One of the countries or dependent territories defined by the ISO 3166-1 standard.
             */
            COUNTRY,
            /**
             * An island.
             */
            ISLAND,
            /**
             * An airport.
             */
            AIRPORT,
            /**
             * A railway station.
             */
            RAILWAY_STATION,
            /**
             * A bus stop.
             */
            BUS_STOP,
            /**
             * A high capacity highways designed to safely carry fast motor traffic.
             */
            MOTORWAY,
            /**
             * A water feature such as a river, canal, lake, bay or ocean.
             */
            DRAINAGE,
            /**
             * A land feature such as a park, mountain or beach.
             */
            LAND_FEATURE,
            /**
             * A uncategorized place.
             */
            MISCELLANEOUS,
            /**
             * An area covering multiple countries.
             */
            SUPERNAME,
            /**
             * A point of interest such as a school, hospital or tourist attraction.
             */
            POINT_OF_INTEREST,
            /**
             * A subdivision of a town such as a suburb or neighborhood.
             */
            SUBURB,
            /**
             * A place known by a colloquial name.
             */
            COLLOQUIAL,
            /**
             * An area known within a specific context such as MSA or area code.
             */
            ZONE,
            /**
             * A historical primary administrative area within a country.
             */
            HISTORICAL_STATE,
            /**
             * A historical secondary administrative area within a country.
             */
            HISTORICAL_COUNTY,
            /**
             * One of the major land masses on the Earth.
             */
            CONTINENT,
            /**
             * An area defined by the Olson standard (tz database).
             */
            TIME_ZONE,
            /**
             * A housing development or subdivision known by name.
             */
            ESTATE,
            /**
             * A historical populated settlement that is no longer known by its original name.
             */
            HISTORICAL_TOWN,
            /**
             * One of the five major bodies of water on the Earth.
             */
            OCEAN,
            /**
             * An area of open water smaller than an ocean.
             */
            SEA,
            /**
             * Institution designed for learning under the supervision of teachers.
             */
            SCHOOL,
            /**
             * All places of worship independently of the religion or denomination.
             */
            PLACE_OF_WORSHIP,
            /**
             * Generally formal place with sit-down facilities selling full meals served by waiters.
             */
            RESTAURANT,
            /**
             * A bar or pub.
             */
            BAR,
            /**
             * A light rail station or tram stop.
             */
            LIGHT_RAIL_STATION,
        }
        /**
         * Constant representing city-level accuracy.
         */
        const LOCATION_ACCURACY_CITY: number;
        /**
         * Constant representing continent-level accuracy.
         */
        const LOCATION_ACCURACY_CONTINENT: number;
        /**
         * Constant representing country-level accuracy.
         */
        const LOCATION_ACCURACY_COUNTRY: number;
        /**
         * Constant representing region-level accuracy.
         */
        const LOCATION_ACCURACY_REGION: number;
        /**
         * Constant representing street-level accuracy.
         */
        const LOCATION_ACCURACY_STREET: number;
        /**
         * Constant representing unknown accuracy.
         */
        const LOCATION_ACCURACY_UNKNOWN: number;
        /**
         * Gets the geocode-glib error quark.
         * @returns a #GQuark.
         */
        function error_quark(): GLib.Quark;
        module BoundingBox {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                bottom: number;
                left: number;
                right: number;
                top: number;
            }
        }

        /**
         * All the fields in the #GeocodeLocation structure are private and should
         * never be accessed directly.
         */
        class BoundingBox extends GObject.Object {
            static $gtype: GObject.GType<BoundingBox>;

            // Properties

            /**
             * Bottom coordinate.
             */
            get bottom(): number;
            /**
             * Left coordinate.
             */
            get left(): number;
            /**
             * Right coordinate.
             */
            get right(): number;
            /**
             * Top coordinate.
             */
            get top(): number;

            // Constructors

            constructor(properties?: Partial<BoundingBox.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](top: number, bottom: number, left: number, right: number): BoundingBox;

            // Methods

            /**
             * Compare two #GeocodeBoundingBox instances for equality. This compares all
             * fields and only returns %TRUE if the instances are exactly equal.
             *
             * Both instances must be non-%NULL.
             * @param b another bounding box
             * @returns %TRUE if the instances are equal, %FALSE otherwise
             */
            equal(b: BoundingBox): boolean;
            /**
             * Gets the bottom coordinate of `bbox`.
             * @returns the bottom coordinate of @bbox.
             */
            get_bottom(): number;
            /**
             * Gets the left coordinate of `bbox`.
             * @returns the left coordinate of @bbox.
             */
            get_left(): number;
            /**
             * Gets the right coordinate of `bbox`.
             * @returns the right coordinate of @bbox.
             */
            get_right(): number;
            /**
             * Gets the top coordinate of `bbox`.
             * @returns the top coordinate of @bbox.
             */
            get_top(): number;
        }

        module Forward {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                answer_count: number;
                answerCount: number;
                bounded: boolean;
                search_area: BoundingBox;
                searchArea: BoundingBox;
            }
        }

        /**
         * All the fields in the #GeocodeForward structure are private and should never be accessed directly.
         */
        class Forward extends GObject.Object {
            static $gtype: GObject.GType<Forward>;

            // Properties

            /**
             * The number of requested results to a search query.
             */
            get answer_count(): number;
            set answer_count(val: number);
            /**
             * The number of requested results to a search query.
             */
            get answerCount(): number;
            set answerCount(val: number);
            /**
             * If set to #TRUE then only results in the #GeocodeForward:search-area
             * bounding box are returned.
             * If set to #FALSE the #GeocodeForward:search-area is treated like a
             * preferred area for results.
             */
            get bounded(): boolean;
            set bounded(val: boolean);
            /**
             * The bounding box that limits the search area.
             * If #GeocodeForward:bounded property is set to #TRUE only results from
             * this area is returned.
             */
            get search_area(): BoundingBox;
            set search_area(val: BoundingBox);
            /**
             * The bounding box that limits the search area.
             * If #GeocodeForward:bounded property is set to #TRUE only results from
             * this area is returned.
             */
            get searchArea(): BoundingBox;
            set searchArea(val: BoundingBox);

            // Constructors

            constructor(properties?: Partial<Forward.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_for_params(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>): Forward;

            static new_for_string(str: string): Forward;

            // Methods

            /**
             * Gets the number of requested results for searches.
             */
            get_answer_count(): number;
            /**
             * Gets the #GeocodeForward:bounded property that regulates whether the
             * #GeocodeForward:search-area property acts restricting or not.
             */
            get_bounded(): boolean;
            /**
             * Gets the area to limit searches within.
             * @returns the search area, or %NULL if none is set
             */
            get_search_area(): BoundingBox | null;
            /**
             * Gets the result of a forward geocoding
             * query using the current backend (see geocode_forward_set_backend()). By
             * default the GNOME Nominatim server is used. See #GeocodeBackend for more
             * information.
             *
             * If no results are found, a %GEOCODE_ERROR_NO_MATCHES error is returned.
             * @returns A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
             */
            search(): Place[];
            /**
             * Asynchronously performs a forward geocoding
             * query using a web service. Use geocode_forward_search() to do the same
             * thing synchronously.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_forward_search_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable forward, %NULL to ignore.
             */
            search_async(cancellable?: Gio.Cancellable | null): Promise<Place[]>;
            /**
             * Asynchronously performs a forward geocoding
             * query using a web service. Use geocode_forward_search() to do the same
             * thing synchronously.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_forward_search_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable forward, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            search_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Asynchronously performs a forward geocoding
             * query using a web service. Use geocode_forward_search() to do the same
             * thing synchronously.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_forward_search_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable forward, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            search_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Place[]> | void;
            /**
             * Finishes a forward geocoding operation. See geocode_forward_search_async().
             * @param res a #GAsyncResult.
             * @returns A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
             */
            search_finish(res: Gio.AsyncResult): Place[];
            /**
             * Sets the number of requested results to `count`.
             * @param count the number of requested results, which must be greater than zero
             */
            set_answer_count(count: number): void;
            /**
             * Specifies the backend to use in the forward geocoding operation.
             *
             * If none is given, the default GNOME Nominatim server is used.
             * @param backend a #GeocodeBackend, or %NULL to use the    default one.
             */
            set_backend(backend?: Backend | null): void;
            /**
             * Set the #GeocodeForward:bounded property that regulates whether the
             * #GeocodeForward:search-area property acts restricting or not.
             * @param bounded #TRUE to restrict results to only items contained within the #GeocodeForward:search-area bounding box.
             */
            set_bounded(bounded: boolean): void;
            /**
             * Sets the area to limit searches within.
             * @param box a bounding box to limit the search area.
             */
            set_search_area(box: BoundingBox): void;
        }

        module Location {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                accuracy: number;
                altitude: number;
                crs: LocationCRS;
                description: string;
                latitude: number;
                longitude: number;
                timestamp: number;
            }
        }

        /**
         * All the fields in the #GeocodeLocation structure are private and should never be accessed directly.
         */
        class Location extends GObject.Object {
            static $gtype: GObject.GType<Location>;

            // Properties

            /**
             * The accuracy of this location in meters.
             */
            get accuracy(): number;
            set accuracy(val: number);
            /**
             * The altitude of this location in meters.
             */
            get altitude(): number;
            set altitude(val: number);
            /**
             * The Coordinate Reference System Identification of this location.
             * Only the value 'wgs84' is currently valid.
             */
            get crs(): LocationCRS;
            /**
             * The description of this location.
             */
            get description(): string;
            set description(val: string);
            /**
             * The latitude of this location in degrees.
             */
            get latitude(): number;
            set latitude(val: number);
            /**
             * The longitude of this location in degrees.
             */
            get longitude(): number;
            set longitude(val: number);
            /**
             * A timestamp in seconds since
             * <ulink url="http://en.wikipedia.org/wiki/Unix_epoch">Epoch</ulink>,
             * giving when the location was resolved from an address.
             *
             * A value of 0 (zero) will be interpreted as the current time.
             */
            get timestamp(): number;

            // Constructors

            constructor(properties?: Partial<Location.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](latitude: number, longitude: number, accuracy: number): Location;

            static new_with_description(
                latitude: number,
                longitude: number,
                accuracy: number,
                description: string,
            ): Location;

            // Methods

            /**
             * Compare two #GeocodeLocation instances for equality. This compares all fields
             * and only returns %TRUE if the instances are exactly equal. For example, if
             * both locations have the same physical coordinates, but one location has its
             * #GeocodeLocation:description property set and the other does not, %FALSE
             * will be returned. Similarly, if both locations have the same
             * #GeocodeLocation:latitude, #GeocodeLocation:longitude and
             * #GeocodeLocation:altitude, but a different #GeocodeLocation:accuracy or
             * #GeocodeLocation:timestamp, %FALSE will be returned. Or if both locations
             * have the same#GeocodeLocation:latitude and #GeocodeLocation:longitude but a
             * different #GeocodeLocation:altitude, %FALSE will be returned.
             *
             * Both instances must be non-%NULL.
             * @param b another location
             * @returns %TRUE if the instances are equal, %FALSE otherwise
             */
            equal(b: Location): boolean;
            /**
             * Gets the accuracy (in meters) of location `loc`.
             * @returns The accuracy of location @loc.
             */
            get_accuracy(): number;
            /**
             * Gets the altitude of location `loc`.
             * @returns The altitude of location @loc.
             */
            get_altitude(): number;
            /**
             * Gets the Coordinate Reference System Identification of location `loc`.
             * @returns The CRS of location @loc.
             */
            get_crs(): LocationCRS;
            /**
             * Gets the description of location `loc`.
             * @returns The description of location @loc.
             */
            get_description(): string;
            /**
             * Calculates the distance in km, along the curvature of the Earth,
             * between 2 locations. Note that altitude changes are not
             * taken into account.
             * @param locb a #GeocodeLocation
             * @returns a distance in km.
             */
            get_distance_from(locb: Location): number;
            /**
             * Gets the latitude of location `loc`.
             * @returns The latitude of location @loc.
             */
            get_latitude(): number;
            /**
             * Gets the longitude of location `loc`.
             * @returns The longitude of location @loc.
             */
            get_longitude(): number;
            /**
             * Gets the timestamp (in seconds since the Epoch) of location `loc`. See
             * #GeocodeLocation:timestamp.
             * @returns The timestamp of location @loc.
             */
            get_timestamp(): number;
            /**
             * Sets the description of `loc` to `description`.
             * @param description a description for the location
             */
            set_description(description: string): void;
            /**
             * Initialize a #GeocodeLocation object with the given `uri`.
             *
             * The URI should be in the geo scheme (RFC 5870) which in its simplest form
             * looks like:
             *
             * - geo:latitude,longitude
             *
             * An <ulink
             * url="http://developer.android.com/guide/components/intents-common.html#Maps">
             * Android extension</ulink> to set a description is also supported in the form of:
             *
             * - geo:0,0?q=latitude,longitude(description)
             * @param uri a URI mapping out a location
             * @returns %TRUE on success and %FALSE on error.
             */
            set_from_uri(uri: string): boolean;
            /**
             * Creates a URI representing `loc` in the scheme specified in `scheme`.
             * @param scheme the scheme of the requested URI
             * @returns a URI representing the location. The returned string should be freed with g_free() when no longer needed.
             */
            to_uri(scheme: LocationURIScheme | null): string;
        }

        module MockBackend {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Backend.ConstructorProps {}
        }

        /**
         * All the fields in the #GeocodeMockBackend structure are private and should
         * never be accessed directly.
         */
        class MockBackend extends GObject.Object implements Backend {
            static $gtype: GObject.GType<MockBackend>;

            // Constructors

            constructor(properties?: Partial<MockBackend.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): MockBackend;

            // Methods

            /**
             * Add a query and corresponding result (or error) to the mock backend, meaning
             * that if it receives a forward search for `params` through
             * geocode_backend_forward_search() (or its asynchronous variants), the mock
             * backend will return the given `results` or `error` to the caller.
             *
             * If a set of `params` is added to the backend multiple times, the most
             * recently provided `results` and `error` will be used.
             *
             * Exactly one of `results` and `error` must be set. Empty result sets are
             * represented as a %GEOCODE_ERROR_NO_MATCHES error.
             * @param params query parameters to     respond to, in the same format as accepted by geocode_forward_search()
             * @param results result set     to return for the query, or %NULL if @error is non-%NULL; result sets     must be in the same format as returned by geocode_forward_search()
             * @param error error to return for the query, or %NULL if @results     should be returned instead; errors must match those returned by     geocode_forward_search()
             */
            add_forward_result(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                results?: Place[] | null,
                error?: GLib.Error | null,
            ): void;
            /**
             * Add a query and corresponding result (or error) to the mock backend, meaning
             * that if it receives a reverse search for `params` through
             * geocode_backend_reverse_resolve() (or its asynchronous variants), the mock
             * backend will return the given `results` or `error` to the caller.
             *
             * If a set of `params` is added to the backend multiple times, the most
             * recently provided `results` and `error` will be used.
             *
             * Exactly one of `results` and `error` must be set. Empty result sets are
             * represented as a %GEOCODE_ERROR_NOT_SUPPORTED error.
             * @param params query parameters to     respond to, in the same format as accepted by geocode_reverse_resolve()
             * @param results result set     to return for the query, or %NULL if @error is non-%NULL; result sets     must be in the same format as returned by geocode_reverse_resolve()
             * @param error error to return for the query, or %NULL if @results     should be returned instead; errors must match those returned by     geocode_reverse_resolve()
             */
            add_reverse_result(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                results?: Place[] | null,
                error?: GLib.Error | null,
            ): void;
            /**
             * Clear the set of stored results in the mock backend which have been added
             * using geocode_mock_backend_add_forward_result() and
             * geocode_mock_backend_add_reverse_result(). Additionally, clear the query log
             * so far (see geocode_mock_backend_get_query_log()).
             *
             * This effectively resets the mock backend to its initial state.
             */
            clear(): void;
            /**
             * Get the details of the forward and reverse queries which have been requested
             * of the mock backend since the most recent call to
             * geocode_mock_backend_clear(). The query details are provided as
             * #GeocodeMockBackendQuery structures, which map the query parameters to
             * either the result set or the error which geocode_backend_forward_search()
             * or geocode_backend_reverse_resolve() (or their asynchronous variants)
             * returned to the caller.
             *
             * The results are provided in the order in which calls were made to
             * geocode_backend_forward_search() and geocode_backend_reverse_resolve().
             * Results for forward and reverse queries may be interleaved.
             * @returns potentially     empty sequence of forward and reverse query details
             */
            get_query_log(): MockBackendQuery[];

            // Inherited methods
            /**
             * Gets the result of a forward geocoding query using the `backend`.
             *
             * If no results are found, a %GEOCODE_ERROR_NO_MATCHES error is returned.
             *
             * This is a synchronous function, which means it may block on network requests.
             * In most situations, the asynchronous version
             * (geocode_backend_forward_search_async()) is more appropriate. See its
             * documentation for more information on usage.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable, %NULL to ignore.
             * @returns A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
             */
            forward_search(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
            ): Place[];
            /**
             * Asynchronously performs a forward geocoding query using the `backend`. Use
             * geocode_backend_forward_search() to do the same thing synchronously.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_forward_search_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable, %NULL to ignore.
             */
            forward_search_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Place[]>;
            /**
             * Asynchronously performs a forward geocoding query using the `backend`. Use
             * geocode_backend_forward_search() to do the same thing synchronously.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_forward_search_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            forward_search_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously performs a forward geocoding query using the `backend`. Use
             * geocode_backend_forward_search() to do the same thing synchronously.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_forward_search_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            forward_search_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Place[]> | void;
            /**
             * Finishes a forward geocoding operation. See
             * geocode_backend_forward_search_async().
             * @param result a #GAsyncResult.
             * @returns A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
             */
            forward_search_finish(result: Gio.AsyncResult): Place[];
            /**
             * Gets the result of a reverse geocoding query using the `backend`.
             *
             * If no result could be found, a %GEOCODE_ERROR_NOT_SUPPORTED error will be
             * returned. This typically happens if the coordinates to geocode are in the
             * middle of the ocean.
             *
             * This is a synchronous function, which means it may block on network requests.
             * In most situations, the asynchronous version,
             * geocode_backend_forward_search_async(), is more appropriate. See its
             * documentation for more information on usage.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns A list of    #GeocodePlace instances, or %NULL in case of errors. The list is ordered    by relevance, with most relevant results first. Free the returned    instances with g_object_unref() and the list with g_list_free() when done.
             */
            reverse_resolve(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
            ): Place[];
            /**
             * Asynchronously gets the result of a reverse geocoding query using the
             * backend.
             *
             * Typically, a single result will be returned representing the place at a
             * given latitude and longitude (the `lat` and `lon` keys to `params)`; but in
             * some cases the results will be ambiguous and *multiple* results will be
             * returned. They will be returned in order of relevance, with the most
             * relevant result first in the list.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * Use geocode_backend_reverse_resolve() to do the same thing synchronously.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_reverse_resolve_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            reverse_resolve_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Place[]>;
            /**
             * Asynchronously gets the result of a reverse geocoding query using the
             * backend.
             *
             * Typically, a single result will be returned representing the place at a
             * given latitude and longitude (the `lat` and `lon` keys to `params)`; but in
             * some cases the results will be ambiguous and *multiple* results will be
             * returned. They will be returned in order of relevance, with the most
             * relevant result first in the list.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * Use geocode_backend_reverse_resolve() to do the same thing synchronously.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_reverse_resolve_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
             */
            reverse_resolve_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously gets the result of a reverse geocoding query using the
             * backend.
             *
             * Typically, a single result will be returned representing the place at a
             * given latitude and longitude (the `lat` and `lon` keys to `params)`; but in
             * some cases the results will be ambiguous and *multiple* results will be
             * returned. They will be returned in order of relevance, with the most
             * relevant result first in the list.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * Use geocode_backend_reverse_resolve() to do the same thing synchronously.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_reverse_resolve_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
             */
            reverse_resolve_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Place[]> | void;
            /**
             * Finishes a reverse geocoding operation. See geocode_backend_reverse_resolve_async().
             * @param result a #GAsyncResult.
             * @returns A list of    #GeocodePlace instances, or %NULL in case of errors. The list is ordered    by relevance, with most relevant results first. Free the returned    instances with g_object_unref() and the list with g_list_free() when done.
             */
            reverse_resolve_finish(result: Gio.AsyncResult): Place[];
            /**
             * Gets the result of a forward geocoding query using the `backend`.
             *
             * If no results are found, a %GEOCODE_ERROR_NO_MATCHES error is returned.
             *
             * This is a synchronous function, which means it may block on network requests.
             * In most situations, the asynchronous version
             * (geocode_backend_forward_search_async()) is more appropriate. See its
             * documentation for more information on usage.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable, %NULL to ignore.
             */
            vfunc_forward_search(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
            ): Place[];
            /**
             * Asynchronously performs a forward geocoding query using the `backend`. Use
             * geocode_backend_forward_search() to do the same thing synchronously.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_forward_search_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_forward_search_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a forward geocoding operation. See
             * geocode_backend_forward_search_async().
             * @param result a #GAsyncResult.
             */
            vfunc_forward_search_finish(result: Gio.AsyncResult): Place[];
            /**
             * Gets the result of a reverse geocoding query using the `backend`.
             *
             * If no result could be found, a %GEOCODE_ERROR_NOT_SUPPORTED error will be
             * returned. This typically happens if the coordinates to geocode are in the
             * middle of the ocean.
             *
             * This is a synchronous function, which means it may block on network requests.
             * In most situations, the asynchronous version,
             * geocode_backend_forward_search_async(), is more appropriate. See its
             * documentation for more information on usage.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_reverse_resolve(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
            ): Place[];
            /**
             * Asynchronously gets the result of a reverse geocoding query using the
             * backend.
             *
             * Typically, a single result will be returned representing the place at a
             * given latitude and longitude (the `lat` and `lon` keys to `params)`; but in
             * some cases the results will be ambiguous and *multiple* results will be
             * returned. They will be returned in order of relevance, with the most
             * relevant result first in the list.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * Use geocode_backend_reverse_resolve() to do the same thing synchronously.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_reverse_resolve_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
             */
            vfunc_reverse_resolve_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a reverse geocoding operation. See geocode_backend_reverse_resolve_async().
             * @param result a #GAsyncResult.
             */
            vfunc_reverse_resolve_finish(result: Gio.AsyncResult): Place[];
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module Nominatim {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Backend.ConstructorProps {
                base_url: string;
                baseUrl: string;
                maintainer_email_address: string;
                maintainerEmailAddress: string;
                user_agent: string;
                userAgent: string;
            }
        }

        /**
         * All the fields in the #GeocodeNominatim structure are private and should
         * never be accessed directly.
         */
        class Nominatim extends GObject.Object implements Backend {
            static $gtype: GObject.GType<Nominatim>;

            // Properties

            /**
             * The base URL of the Nominatim service, for example
             * `https://nominatim.example.org`.
             */
            get base_url(): string;
            /**
             * The base URL of the Nominatim service, for example
             * `https://nominatim.example.org`.
             */
            get baseUrl(): string;
            /**
             * E-mail address of the maintainer of the software making the
             * geocoding requests to the  Nominatim server. This is used to contact
             * them in the event of a problem with their usage. See
             * [the Nominatim API](http://wiki.openstreetmap.org/wiki/Nominatim).
             */
            get maintainer_email_address(): string;
            /**
             * E-mail address of the maintainer of the software making the
             * geocoding requests to the  Nominatim server. This is used to contact
             * them in the event of a problem with their usage. See
             * [the Nominatim API](http://wiki.openstreetmap.org/wiki/Nominatim).
             */
            get maintainerEmailAddress(): string;
            /**
             * User-Agent string to send with HTTP(S) requests, or %NULL to use the
             * default user agent, which is derived from the geocode-glib version
             * and #GApplication:id, for example: `geocode-glib/3.20 (MyAppId)`.
             *
             * As per the
             * [Nominatim usage policy](http://wiki.openstreetmap.org/wiki/Nominatim_usage_policy),
             * it should be set to a string which identifies the application which
             * is using geocode-glib, and must be a valid
             * [user agent](https://tools.ietf.org/html/rfc7231#section-5.5.3)
             * string.
             */
            get user_agent(): string;
            set user_agent(val: string);
            /**
             * User-Agent string to send with HTTP(S) requests, or %NULL to use the
             * default user agent, which is derived from the geocode-glib version
             * and #GApplication:id, for example: `geocode-glib/3.20 (MyAppId)`.
             *
             * As per the
             * [Nominatim usage policy](http://wiki.openstreetmap.org/wiki/Nominatim_usage_policy),
             * it should be set to a string which identifies the application which
             * is using geocode-glib, and must be a valid
             * [user agent](https://tools.ietf.org/html/rfc7231#section-5.5.3)
             * string.
             */
            get userAgent(): string;
            set userAgent(val: string);

            // Constructors

            constructor(properties?: Partial<Nominatim.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](base_url: string, maintainer_email_address: string): Nominatim;

            // Static methods

            /**
             * Gets a reference to the default Nominatim server on nominatim.gnome.org.
             *
             * This function is thread-safe.
             */
            static get_gnome(): Nominatim;

            // Virtual methods

            vfunc_query(uri: string, cancellable?: Gio.Cancellable | null): string;
            vfunc_query_async(
                uri: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            vfunc_query_finish(res: Gio.AsyncResult): string;

            // Inherited methods
            /**
             * Gets the result of a forward geocoding query using the `backend`.
             *
             * If no results are found, a %GEOCODE_ERROR_NO_MATCHES error is returned.
             *
             * This is a synchronous function, which means it may block on network requests.
             * In most situations, the asynchronous version
             * (geocode_backend_forward_search_async()) is more appropriate. See its
             * documentation for more information on usage.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable, %NULL to ignore.
             * @returns A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
             */
            forward_search(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
            ): Place[];
            /**
             * Asynchronously performs a forward geocoding query using the `backend`. Use
             * geocode_backend_forward_search() to do the same thing synchronously.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_forward_search_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable, %NULL to ignore.
             */
            forward_search_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Place[]>;
            /**
             * Asynchronously performs a forward geocoding query using the `backend`. Use
             * geocode_backend_forward_search() to do the same thing synchronously.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_forward_search_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            forward_search_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously performs a forward geocoding query using the `backend`. Use
             * geocode_backend_forward_search() to do the same thing synchronously.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_forward_search_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            forward_search_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Place[]> | void;
            /**
             * Finishes a forward geocoding operation. See
             * geocode_backend_forward_search_async().
             * @param result a #GAsyncResult.
             * @returns A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
             */
            forward_search_finish(result: Gio.AsyncResult): Place[];
            /**
             * Gets the result of a reverse geocoding query using the `backend`.
             *
             * If no result could be found, a %GEOCODE_ERROR_NOT_SUPPORTED error will be
             * returned. This typically happens if the coordinates to geocode are in the
             * middle of the ocean.
             *
             * This is a synchronous function, which means it may block on network requests.
             * In most situations, the asynchronous version,
             * geocode_backend_forward_search_async(), is more appropriate. See its
             * documentation for more information on usage.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns A list of    #GeocodePlace instances, or %NULL in case of errors. The list is ordered    by relevance, with most relevant results first. Free the returned    instances with g_object_unref() and the list with g_list_free() when done.
             */
            reverse_resolve(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
            ): Place[];
            /**
             * Asynchronously gets the result of a reverse geocoding query using the
             * backend.
             *
             * Typically, a single result will be returned representing the place at a
             * given latitude and longitude (the `lat` and `lon` keys to `params)`; but in
             * some cases the results will be ambiguous and *multiple* results will be
             * returned. They will be returned in order of relevance, with the most
             * relevant result first in the list.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * Use geocode_backend_reverse_resolve() to do the same thing synchronously.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_reverse_resolve_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            reverse_resolve_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Place[]>;
            /**
             * Asynchronously gets the result of a reverse geocoding query using the
             * backend.
             *
             * Typically, a single result will be returned representing the place at a
             * given latitude and longitude (the `lat` and `lon` keys to `params)`; but in
             * some cases the results will be ambiguous and *multiple* results will be
             * returned. They will be returned in order of relevance, with the most
             * relevant result first in the list.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * Use geocode_backend_reverse_resolve() to do the same thing synchronously.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_reverse_resolve_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
             */
            reverse_resolve_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously gets the result of a reverse geocoding query using the
             * backend.
             *
             * Typically, a single result will be returned representing the place at a
             * given latitude and longitude (the `lat` and `lon` keys to `params)`; but in
             * some cases the results will be ambiguous and *multiple* results will be
             * returned. They will be returned in order of relevance, with the most
             * relevant result first in the list.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * Use geocode_backend_reverse_resolve() to do the same thing synchronously.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_reverse_resolve_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
             */
            reverse_resolve_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Place[]> | void;
            /**
             * Finishes a reverse geocoding operation. See geocode_backend_reverse_resolve_async().
             * @param result a #GAsyncResult.
             * @returns A list of    #GeocodePlace instances, or %NULL in case of errors. The list is ordered    by relevance, with most relevant results first. Free the returned    instances with g_object_unref() and the list with g_list_free() when done.
             */
            reverse_resolve_finish(result: Gio.AsyncResult): Place[];
            /**
             * Gets the result of a forward geocoding query using the `backend`.
             *
             * If no results are found, a %GEOCODE_ERROR_NO_MATCHES error is returned.
             *
             * This is a synchronous function, which means it may block on network requests.
             * In most situations, the asynchronous version
             * (geocode_backend_forward_search_async()) is more appropriate. See its
             * documentation for more information on usage.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable, %NULL to ignore.
             */
            vfunc_forward_search(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
            ): Place[];
            /**
             * Asynchronously performs a forward geocoding query using the `backend`. Use
             * geocode_backend_forward_search() to do the same thing synchronously.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_forward_search_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_forward_search_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a forward geocoding operation. See
             * geocode_backend_forward_search_async().
             * @param result a #GAsyncResult.
             */
            vfunc_forward_search_finish(result: Gio.AsyncResult): Place[];
            /**
             * Gets the result of a reverse geocoding query using the `backend`.
             *
             * If no result could be found, a %GEOCODE_ERROR_NOT_SUPPORTED error will be
             * returned. This typically happens if the coordinates to geocode are in the
             * middle of the ocean.
             *
             * This is a synchronous function, which means it may block on network requests.
             * In most situations, the asynchronous version,
             * geocode_backend_forward_search_async(), is more appropriate. See its
             * documentation for more information on usage.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_reverse_resolve(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
            ): Place[];
            /**
             * Asynchronously gets the result of a reverse geocoding query using the
             * backend.
             *
             * Typically, a single result will be returned representing the place at a
             * given latitude and longitude (the `lat` and `lon` keys to `params)`; but in
             * some cases the results will be ambiguous and *multiple* results will be
             * returned. They will be returned in order of relevance, with the most
             * relevant result first in the list.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * Use geocode_backend_reverse_resolve() to do the same thing synchronously.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_reverse_resolve_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
             */
            vfunc_reverse_resolve_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a reverse geocoding operation. See geocode_backend_reverse_resolve_async().
             * @param result a #GAsyncResult.
             */
            vfunc_reverse_resolve_finish(result: Gio.AsyncResult): Place[];
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module Place {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                administrative_area: string;
                administrativeArea: string;
                area: string;
                bounding_box: BoundingBox;
                boundingBox: BoundingBox;
                building: string;
                continent: string;
                country: string;
                country_code: string;
                countryCode: string;
                county: string;
                icon: Gio.Icon;
                location: Location;
                name: string;
                osm_id: string;
                osmId: string;
                osm_type: PlaceOsmType;
                osmType: PlaceOsmType;
                place_type: PlaceType;
                placeType: PlaceType;
                postal_code: string;
                postalCode: string;
                state: string;
                street: string;
                street_address: string;
                streetAddress: string;
                town: string;
            }
        }

        /**
         * All the fields in the #GeocodePlace structure are private and should never be accessed directly.
         */
        class Place extends GObject.Object {
            static $gtype: GObject.GType<Place>;

            // Properties

            /**
             * The local administrative area.
             */
            get administrative_area(): string;
            set administrative_area(val: string);
            /**
             * The local administrative area.
             */
            get administrativeArea(): string;
            set administrativeArea(val: string);
            /**
             * A named area such as a campus or neighborhood.
             */
            get area(): string;
            set area(val: string);
            /**
             * The bounding box for the place.
             */
            get bounding_box(): BoundingBox;
            set bounding_box(val: BoundingBox);
            /**
             * The bounding box for the place.
             */
            get boundingBox(): BoundingBox;
            set boundingBox(val: BoundingBox);
            /**
             * A specific building on a street or in an area.
             */
            get building(): string;
            set building(val: string);
            /**
             * The continent.
             */
            get continent(): string;
            set continent(val: string);
            /**
             * The country.
             */
            get country(): string;
            set country(val: string);
            /**
             * The country code.
             */
            get country_code(): string;
            set country_code(val: string);
            /**
             * The country code.
             */
            get countryCode(): string;
            set countryCode(val: string);
            /**
             * The county.
             */
            get county(): string;
            set county(val: string);
            /**
             * #GIcon representing the `GeocodePlace`.
             */
            get icon(): Gio.Icon;
            /**
             * The location info for the place.
             */
            get location(): Location;
            set location(val: Location);
            /**
             * The name of the place.
             */
            get name(): string;
            set name(val: string);
            /**
             * The OpenStreetMap id of the place.
             */
            get osm_id(): string;
            set osm_id(val: string);
            /**
             * The OpenStreetMap id of the place.
             */
            get osmId(): string;
            set osmId(val: string);
            /**
             * The OpenStreetMap type of the place.
             */
            get osm_type(): PlaceOsmType;
            set osm_type(val: PlaceOsmType);
            /**
             * The OpenStreetMap type of the place.
             */
            get osmType(): PlaceOsmType;
            set osmType(val: PlaceOsmType);
            /**
             * The type of the place.
             */
            get place_type(): PlaceType;
            /**
             * The type of the place.
             */
            get placeType(): PlaceType;
            /**
             * The postal code.
             */
            get postal_code(): string;
            set postal_code(val: string);
            /**
             * The postal code.
             */
            get postalCode(): string;
            set postalCode(val: string);
            /**
             * The state.
             */
            get state(): string;
            set state(val: string);
            /**
             * The street name.
             */
            get street(): string;
            set street(val: string);
            /**
             * The street address.
             */
            get street_address(): string;
            set street_address(val: string);
            /**
             * The street address.
             */
            get streetAddress(): string;
            set streetAddress(val: string);
            /**
             * The town.
             */
            get town(): string;
            set town(val: string);

            // Constructors

            constructor(properties?: Partial<Place.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name: string, place_type: PlaceType): Place;

            static new_with_location(name: string, place_type: PlaceType, location: Location): Place;

            // Methods

            /**
             * Compare two #GeocodePlace instances for equality. This compares all fields
             * and only returns %TRUE if the instances are exactly equal. For example, if
             * both places have the same #GeocodePlace:location, but place `b` has its
             * #GeocodePlace:continent property set and place `a` does not, %FALSE will be
             * returned.
             *
             * Both instances must be non-%NULL.
             * @param b another place
             * @returns %TRUE if the instances are equal, %FALSE otherwise
             */
            equal(b: Place): boolean;
            /**
             * Gets the local administrative area of the `place`.
             * @returns The local administrative area of the @place.
             */
            get_administrative_area(): string;
            /**
             * Gets the area of the `place`.
             * @returns The area of the @place.
             */
            get_area(): string;
            /**
             * Gets the bounding box for the place `place`.
             * @returns A #GeocodeBoundingBox, or NULL if boundaries are unknown.
             */
            get_bounding_box(): BoundingBox;
            /**
             * Gets the building of the `place`.
             * @returns The building of the @place.
             */
            get_building(): string;
            /**
             * Gets the continent of the `place`.
             * @returns The continent of the @place.
             */
            get_continent(): string;
            /**
             * Gets the country of the `place`.
             * @returns The country of the @place.
             */
            get_country(): string;
            /**
             * Gets the ISO-3166 country code of the `place`.
             * @returns The ISO-3166 country code of the @place, in upper case.
             */
            get_country_code(): string;
            /**
             * Gets the county of the `place`.
             * @returns The country of the @place.
             */
            get_county(): string;
            /**
             * Gets the #GIcon representing the `place`.
             * @returns The #GIcon representing the @place.
             */
            get_icon(): Gio.Icon;
            /**
             * Gets the associated location object.
             * @returns The associated location object.
             */
            get_location(): Location;
            /**
             * Gets the name of the `place`.
             * @returns The name of the @place.
             */
            get_name(): string;
            /**
             * Gets the OpenStreetMap ID of the `place`.
             * @returns The osm ID of the @place.
             */
            get_osm_id(): string;
            /**
             * Gets the OpenStreetMap type of the `place`.
             * @returns The osm type of the @place.
             */
            get_osm_type(): PlaceOsmType;
            /**
             * Gets the type of the `place`.
             * @returns The type of the @place.
             */
            get_place_type(): PlaceType;
            /**
             * Gets the postal code of the `place`.
             * @returns The postal code of the @place.
             */
            get_postal_code(): string;
            /**
             * Gets the state of the `place`.
             * @returns The state of the @place.
             */
            get_state(): string;
            /**
             * Gets the street of the `place`.
             * @returns The street of the @place.
             */
            get_street(): string;
            /**
             * Gets the street address of the `place`.
             * @returns The street address of the @place.
             */
            get_street_address(): string;
            /**
             * Gets the town of the `place`.
             * @returns The town of the @place.
             */
            get_town(): string;
            /**
             * Sets the local administrative area of `place` to `admin_area`.
             * @param admin_area an administrative area for the place
             */
            set_administrative_area(admin_area: string): void;
            /**
             * Sets the area of `place` to `area`.
             * @param area a area
             */
            set_area(area: string): void;
            /**
             * Sets the #GeocodeBoundingBox for the place `place`.
             * @param bbox A #GeocodeBoundingBox for the place
             */
            set_bounding_box(bbox: BoundingBox): void;
            /**
             * Sets the building of `place` to `building`.
             * @param building a building
             */
            set_building(building: string): void;
            /**
             * Sets the continent of `place` to `continent`.
             * @param continent a continent for the place
             */
            set_continent(continent: string): void;
            /**
             * Sets the country of `place` to `country`.
             * @param country a country for the place
             */
            set_country(country: string): void;
            /**
             * Sets the ISO country code of `place` to `country_code`.
             * @param country_code an ISO country code for the place
             */
            set_country_code(country_code: string): void;
            /**
             * Sets the county of `place` to `county`.
             * @param county a county for the place
             */
            set_county(county: string): void;
            /**
             * Sets the location of `place` to `location`.
             * @param location A location
             */
            set_location(location: Location): void;
            /**
             * Sets the name of the `place` to `name`.
             * @param name the name of place
             */
            set_name(name: string): void;
            /**
             * Sets the postal code of `place` to `postal_code`.
             * @param postal_code a postal code for the place
             */
            set_postal_code(postal_code: string): void;
            /**
             * Sets the state of `place` to `state`.
             * @param state a state for the place
             */
            set_state(state: string): void;
            /**
             * Sets the street of `place` to `street`.
             * @param street a street
             */
            set_street(street: string): void;
            /**
             * Sets the street address of `place` to `street_address`.
             * @param street_address a street address for the place
             */
            set_street_address(street_address: string): void;
            /**
             * Sets the town of `place` to `town`.
             * @param town a town for the place
             */
            set_town(town: string): void;
        }

        module Reverse {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * All the fields in the #GeocodeReverse structure are private and should never be accessed directly.
         */
        class Reverse extends GObject.Object {
            static $gtype: GObject.GType<Reverse>;

            // Constructors

            constructor(properties?: Partial<Reverse.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_for_location(location: Location): Reverse;

            // Methods

            /**
             * Gets the result of a reverse geocoding
             * query using the current backend (see geocode_reverse_set_backend()). By
             * default the GNOME Nominatim server is used. See #GeocodeBackend for more
             * information.
             *
             * If no result could be found, a %GEOCODE_ERROR_NOT_SUPPORTED error will be
             * returned. This typically happens if the coordinates to geocode are in the
             * middle of the ocean.
             * @returns A #GeocodePlace instance, or %NULL in case of errors. Free the returned instance with #g_object_unref() when done.
             */
            resolve(): Place;
            /**
             * Asynchronously gets the result of a reverse geocoding
             * query using a web service. Use geocode_reverse_resolve() to do the same
             * thing synchronously.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_reverse_resolve_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            resolve_async(cancellable?: Gio.Cancellable | null): Promise<Place>;
            /**
             * Asynchronously gets the result of a reverse geocoding
             * query using a web service. Use geocode_reverse_resolve() to do the same
             * thing synchronously.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_reverse_resolve_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            resolve_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Asynchronously gets the result of a reverse geocoding
             * query using a web service. Use geocode_reverse_resolve() to do the same
             * thing synchronously.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_reverse_resolve_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            resolve_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Place> | void;
            /**
             * Finishes a reverse geocoding operation. See geocode_reverse_resolve_async().
             * @param res a #GAsyncResult.
             * @returns A #GeocodePlace instance, or %NULL in case of errors. Free the returned instance with #g_object_unref() when done.
             */
            resolve_finish(res: Gio.AsyncResult): Place;
            /**
             * Specifies the backend to use in the reverse geocoding operation.
             *
             * If none is given, the default GNOME Nominatim server is used.
             * @param backend a #GeocodeBackend, or %NULL to use the default one.
             */
            set_backend(backend?: Backend | null): void;
        }

        type BackendInterface = typeof Backend;
        type BoundingBoxClass = typeof BoundingBox;
        abstract class BoundingBoxPrivate {
            static $gtype: GObject.GType<BoundingBoxPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ForwardClass = typeof Forward;
        abstract class ForwardPrivate {
            static $gtype: GObject.GType<ForwardPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type LocationClass = typeof Location;
        abstract class LocationPrivate {
            static $gtype: GObject.GType<LocationPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type MockBackendClass = typeof MockBackend;
        /**
         * The details of a forward or reverse query which was performed on a
         * #GeocodeMockBackend by application code. This includes the input (`params,`
         * `is_forward)`, and the output which was returned (`results` or `error)`.
         *
         * Empty result sets are represented by the %GEOCODE_ERROR_NO_MATCHES error
         * (for forward queries) or the %GEOCODE_ERROR_NOT_SUPPORTED error (for reverse
         * queries), rather than an empty `results` list.
         */
        class MockBackendQuery {
            static $gtype: GObject.GType<MockBackendQuery>;

            // Fields

            is_forward: boolean;
            results: Place[];
            error: GLib.Error;

            // Constructors

            _init(...args: any[]): void;
        }

        type NominatimClass = typeof Nominatim;
        type PlaceClass = typeof Place;
        abstract class PlacePrivate {
            static $gtype: GObject.GType<PlacePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ReverseClass = typeof Reverse;
        abstract class ReversePrivate {
            static $gtype: GObject.GType<ReversePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        module Backend {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface BackendNamespace {
            $gtype: GObject.GType<Backend>;
            prototype: Backend;
        }
        interface Backend extends GObject.Object {
            // Methods

            /**
             * Gets the result of a forward geocoding query using the `backend`.
             *
             * If no results are found, a %GEOCODE_ERROR_NO_MATCHES error is returned.
             *
             * This is a synchronous function, which means it may block on network requests.
             * In most situations, the asynchronous version
             * (geocode_backend_forward_search_async()) is more appropriate. See its
             * documentation for more information on usage.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable, %NULL to ignore.
             * @returns A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
             */
            forward_search(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
            ): Place[];
            /**
             * Asynchronously performs a forward geocoding query using the `backend`. Use
             * geocode_backend_forward_search() to do the same thing synchronously.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_forward_search_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable, %NULL to ignore.
             */
            forward_search_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Place[]>;
            /**
             * Asynchronously performs a forward geocoding query using the `backend`. Use
             * geocode_backend_forward_search() to do the same thing synchronously.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_forward_search_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            forward_search_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously performs a forward geocoding query using the `backend`. Use
             * geocode_backend_forward_search() to do the same thing synchronously.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_forward_search_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            forward_search_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Place[]> | void;
            /**
             * Finishes a forward geocoding operation. See
             * geocode_backend_forward_search_async().
             * @param result a #GAsyncResult.
             * @returns A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
             */
            forward_search_finish(result: Gio.AsyncResult): Place[];
            /**
             * Gets the result of a reverse geocoding query using the `backend`.
             *
             * If no result could be found, a %GEOCODE_ERROR_NOT_SUPPORTED error will be
             * returned. This typically happens if the coordinates to geocode are in the
             * middle of the ocean.
             *
             * This is a synchronous function, which means it may block on network requests.
             * In most situations, the asynchronous version,
             * geocode_backend_forward_search_async(), is more appropriate. See its
             * documentation for more information on usage.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns A list of    #GeocodePlace instances, or %NULL in case of errors. The list is ordered    by relevance, with most relevant results first. Free the returned    instances with g_object_unref() and the list with g_list_free() when done.
             */
            reverse_resolve(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
            ): Place[];
            /**
             * Asynchronously gets the result of a reverse geocoding query using the
             * backend.
             *
             * Typically, a single result will be returned representing the place at a
             * given latitude and longitude (the `lat` and `lon` keys to `params)`; but in
             * some cases the results will be ambiguous and *multiple* results will be
             * returned. They will be returned in order of relevance, with the most
             * relevant result first in the list.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * Use geocode_backend_reverse_resolve() to do the same thing synchronously.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_reverse_resolve_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            reverse_resolve_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Place[]>;
            /**
             * Asynchronously gets the result of a reverse geocoding query using the
             * backend.
             *
             * Typically, a single result will be returned representing the place at a
             * given latitude and longitude (the `lat` and `lon` keys to `params)`; but in
             * some cases the results will be ambiguous and *multiple* results will be
             * returned. They will be returned in order of relevance, with the most
             * relevant result first in the list.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * Use geocode_backend_reverse_resolve() to do the same thing synchronously.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_reverse_resolve_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
             */
            reverse_resolve_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously gets the result of a reverse geocoding query using the
             * backend.
             *
             * Typically, a single result will be returned representing the place at a
             * given latitude and longitude (the `lat` and `lon` keys to `params)`; but in
             * some cases the results will be ambiguous and *multiple* results will be
             * returned. They will be returned in order of relevance, with the most
             * relevant result first in the list.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * Use geocode_backend_reverse_resolve() to do the same thing synchronously.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_reverse_resolve_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
             */
            reverse_resolve_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Place[]> | void;
            /**
             * Finishes a reverse geocoding operation. See geocode_backend_reverse_resolve_async().
             * @param result a #GAsyncResult.
             * @returns A list of    #GeocodePlace instances, or %NULL in case of errors. The list is ordered    by relevance, with most relevant results first. Free the returned    instances with g_object_unref() and the list with g_list_free() when done.
             */
            reverse_resolve_finish(result: Gio.AsyncResult): Place[];

            // Virtual methods

            /**
             * Gets the result of a forward geocoding query using the `backend`.
             *
             * If no results are found, a %GEOCODE_ERROR_NO_MATCHES error is returned.
             *
             * This is a synchronous function, which means it may block on network requests.
             * In most situations, the asynchronous version
             * (geocode_backend_forward_search_async()) is more appropriate. See its
             * documentation for more information on usage.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable, %NULL to ignore.
             */
            vfunc_forward_search(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
            ): Place[];
            /**
             * Asynchronously performs a forward geocoding query using the `backend`. Use
             * geocode_backend_forward_search() to do the same thing synchronously.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_forward_search_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_forward_search_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a forward geocoding operation. See
             * geocode_backend_forward_search_async().
             * @param result a #GAsyncResult.
             */
            vfunc_forward_search_finish(result: Gio.AsyncResult): Place[];
            /**
             * Gets the result of a reverse geocoding query using the `backend`.
             *
             * If no result could be found, a %GEOCODE_ERROR_NOT_SUPPORTED error will be
             * returned. This typically happens if the coordinates to geocode are in the
             * middle of the ocean.
             *
             * This is a synchronous function, which means it may block on network requests.
             * In most situations, the asynchronous version,
             * geocode_backend_forward_search_async(), is more appropriate. See its
             * documentation for more information on usage.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_reverse_resolve(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
            ): Place[];
            /**
             * Asynchronously gets the result of a reverse geocoding query using the
             * backend.
             *
             * Typically, a single result will be returned representing the place at a
             * given latitude and longitude (the `lat` and `lon` keys to `params)`; but in
             * some cases the results will be ambiguous and *multiple* results will be
             * returned. They will be returned in order of relevance, with the most
             * relevant result first in the list.
             *
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             *
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             *
             * Use geocode_backend_reverse_resolve() to do the same thing synchronously.
             *
             * When the operation is finished, `callback` will be called. You can then call
             * geocode_backend_reverse_resolve_finish() to get the result of the operation.
             * @param params a #GHashTable with string keys, and #GValue values.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
             */
            vfunc_reverse_resolve_async(
                params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes a reverse geocoding operation. See geocode_backend_reverse_resolve_async().
             * @param result a #GAsyncResult.
             */
            vfunc_reverse_resolve_finish(result: Gio.AsyncResult): Place[];
        }

        export const Backend: BackendNamespace & {
            new (): Backend; // This allows `obj instanceof Backend`
        };

        /**
         * Name of the imported GIR library
         * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
         */
        const __name__: string;
        /**
         * Version of the imported GIR library
         * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
         */
        const __version__: string;
    }

    export default GeocodeGlib;
}

declare module 'gi://GeocodeGlib' {
    import GeocodeGlib20 from 'gi://GeocodeGlib?version=2.0';
    export default GeocodeGlib20;
}
// END
