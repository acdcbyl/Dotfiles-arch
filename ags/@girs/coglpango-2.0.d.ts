/// <reference path="./pangocairo-1.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./cogl-2.0.d.ts" />
/// <reference path="./gl-1.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://CoglPango?version=2.0' {
    // Module dependencies
    import type PangoCairo from 'gi://PangoCairo?version=1.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type Cogl from 'gi://Cogl?version=2.0';
    import type GL from 'gi://GL?version=1.0';

    export namespace CoglPango {
        /**
         * CoglPango-2.0
         */

        /**
         * This updates any internal glyph cache textures as necessary to be
         * able to render the given `layout`.
         *
         * This api should be used to avoid mid-scene modifications of
         * glyph-cache textures which can lead to undefined rendering results.
         * @param layout A #PangoLayout
         */
        function ensure_glyph_cache_for_layout(layout: Pango.Layout): void;
        /**
         * Clears the glyph cache for `font_map`.
         * @param font_map a #CoglPangoFontMap
         */
        function font_map_clear_glyph_cache(font_map: FontMap): void;
        /**
         * Create a #PangoContext for the given `font_map`.
         * @param font_map a #CoglPangoFontMap
         * @returns the newly created context: free with g_object_unref().
         */
        function font_map_create_context(font_map: FontMap): Pango.Context;
        /**
         * Retrieves the #CoglPangoRenderer for the passed `font_map`.
         * @param font_map a #CoglPangoFontMap
         * @returns a #PangoRenderer
         */
        function font_map_get_renderer(font_map: FontMap): Pango.Renderer;
        /**
         * Retrieves whether the #CoglPangoRenderer used by `font_map` will use
         * mipmapping when rendering the glyphs.
         * @param font_map a #CoglPangoFontMap
         * @returns %TRUE if mipmapping is used, %FALSE otherwise.
         */
        function font_map_get_use_mipmapping(font_map: FontMap): Cogl.Bool;
        /**
         * Creates a new font map.
         * @returns the newly created #PangoFontMap
         */
        function font_map_new(): Pango.FontMap;
        /**
         * Sets the resolution for the `font_map`. This is a scale factor
         * between points specified in a #PangoFontDescription and Cogl units.
         * The default value is %96, meaning that a 10 point font will be 13
         * units high. (10 * 96. / 72. = 13.3).
         * @param font_map a #CoglPangoFontMap
         * @param dpi The resolution in "dots per inch". (Physical inches aren't       actually involved; the terminology is conventional.)
         */
        function font_map_set_resolution(font_map: FontMap, dpi: number): void;
        /**
         * Sets whether the renderer for the passed font map should use
         * mipmapping when rendering a #PangoLayout.
         * @param font_map a #CoglPangoFontMap
         * @param value %TRUE to enable the use of mipmapping
         */
        function font_map_set_use_mipmapping(font_map: FontMap, value: Cogl.Bool): void;
        /**
         * Draws a solidly coloured `layout` on the given `framebuffer` at (`x,`
         * `y)` within the `framebuffer<`!-- -->'s current model-view coordinate
         * space.
         * @param layout a #PangoLayout
         * @param x X coordinate to render the layout at
         * @param y Y coordinate to render the layout at
         * @param color color to use when rendering the layout
         * @param flags
         */
        function render_layout(layout: Pango.Layout, x: number, y: number, color: Cogl.Color, flags: number): void;
        /**
         * Renders `line` at the given coordinates using the given color.
         * @param line a #PangoLayoutLine
         * @param x X coordinate to render the line at
         * @param y Y coordinate to render the line at
         * @param color color to use when rendering the line
         */
        function render_layout_line(line: Pango.LayoutLine, x: number, y: number, color: Cogl.Color): void;
        /**
         * Draws a solidly coloured `layout` on the given `framebuffer` at (`x,`
         * `y)` within the `framebuffer<`!-- -->'s current model-view coordinate
         * space.
         * @param layout a #PangoLayout
         * @param x X coordinate (in Pango units) to render the layout at
         * @param y Y coordinate (in Pango units) to render the layout at
         * @param color color to use when rendering the layout
         * @param flags
         */
        function render_layout_subpixel(
            layout: Pango.Layout,
            x: number,
            y: number,
            color: Cogl.Color,
            flags: number,
        ): void;
        /**
         * Draws a solidly coloured `layout` on the given `framebuffer` at (`x,`
         * `y)` within the `framebuffer<`!-- -->'s current model-view coordinate
         * space.
         * @param framebuffer A #CoglFramebuffer to draw too.
         * @param layout a #PangoLayout
         * @param x X coordinate to render the layout at
         * @param y Y coordinate to render the layout at
         * @param color color to use when rendering the layout
         */
        function show_layout(
            framebuffer: Cogl.Framebuffer,
            layout: Pango.Layout,
            x: number,
            y: number,
            color: Cogl.Color,
        ): void;
        /**
         * Draws a solidly coloured `line` on the given `framebuffer` at (`x,`
         * `y)` within the `framebuffer<`!-- -->'s current model-view coordinate
         * space.
         * @param framebuffer A #CoglFramebuffer to draw too.
         * @param line a #PangoLayoutLine
         * @param x X coordinate to render the line at
         * @param y Y coordinate to render the line at
         * @param color color to use when rendering the line
         */
        function show_layout_line(
            framebuffer: Cogl.Framebuffer,
            line: Pango.LayoutLine,
            x: number,
            y: number,
            color: Cogl.Color,
        ): void;
        module Renderer {
            // Constructor properties interface

            interface ConstructorProps extends Pango.Renderer.ConstructorProps {
                context: any;
            }
        }

        class Renderer extends Pango.Renderer {
            static $gtype: GObject.GType<Renderer>;

            // Properties

            set context(val: any);

            // Constructors

            constructor(properties?: Partial<Renderer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        type RendererClass = typeof Renderer;
        type FontMap = PangoCairo.FontMap;
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

    export default CoglPango;
}

declare module 'gi://CoglPango' {
    import CoglPango20 from 'gi://CoglPango?version=2.0';
    export default CoglPango20;
}
// END
