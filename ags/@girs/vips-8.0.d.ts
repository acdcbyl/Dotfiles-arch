/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://Vips?version=8.0' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';

    export namespace Vips {
        /**
         * Vips-8.0
         */

        /**
         * The type of access an operation has to supply. See vips_tilecache()
         * and #VipsForeign.
         *
         * `VIPS_ACCESS_RANDOM` means requests can come in any order.
         *
         * `VIPS_ACCESS_SEQUENTIAL` means requests will be top-to-bottom, but with some
         * amount of buffering behind the read point for small non-local accesses.
         */

        /**
         * The type of access an operation has to supply. See vips_tilecache()
         * and #VipsForeign.
         *
         * `VIPS_ACCESS_RANDOM` means requests can come in any order.
         *
         * `VIPS_ACCESS_SEQUENTIAL` means requests will be top-to-bottom, but with some
         * amount of buffering behind the read point for small non-local accesses.
         */
        export namespace Access {
            export const $gtype: GObject.GType<Access>;
        }

        enum Access {
            /**
             * can read anywhere
             */
            RANDOM,
            /**
             * top-to-bottom reading only, but with a small buffer
             */
            SEQUENTIAL,
            SEQUENTIAL_UNBUFFERED,
            LAST,
        }
        /**
         * See vips_join() and so on.
         *
         * Operations like vips_join() need to be told whether to align images on the
         * low or high coordinate edge, or centre.
         *
         * See also: vips_join().
         */

        /**
         * See vips_join() and so on.
         *
         * Operations like vips_join() need to be told whether to align images on the
         * low or high coordinate edge, or centre.
         *
         * See also: vips_join().
         */
        export namespace Align {
            export const $gtype: GObject.GType<Align>;
        }

        enum Align {
            /**
             * align low coordinate edge
             */
            LOW,
            /**
             * align centre
             */
            CENTRE,
            /**
             * align high coordinate edge
             */
            HIGH,
            LAST,
        }
        /**
         * See vips_rot() and so on.
         *
         * Fixed rotate angles.
         *
         * See also: vips_rot().
         */

        /**
         * See vips_rot() and so on.
         *
         * Fixed rotate angles.
         *
         * See also: vips_rot().
         */
        export namespace Angle {
            export const $gtype: GObject.GType<Angle>;
        }

        enum Angle {
            /**
             * no rotate
             */
            D0,
            /**
             * 90 degrees clockwise
             */
            D90,
            /**
             * 180 degree rotate
             */
            D180,
            /**
             * 90 degrees anti-clockwise
             */
            D270,
            LAST,
        }
        /**
         * See vips_rot45() and so on.
         *
         * Fixed rotate angles.
         *
         * See also: vips_rot45().
         */

        /**
         * See vips_rot45() and so on.
         *
         * Fixed rotate angles.
         *
         * See also: vips_rot45().
         */
        export namespace Angle45 {
            export const $gtype: GObject.GType<Angle45>;
        }

        enum Angle45 {
            /**
             * no rotate
             */
            D0,
            /**
             * 45 degrees clockwise
             */
            D45,
            /**
             * 90 degrees clockwise
             */
            D90,
            /**
             * 135 degrees clockwise
             */
            D135,
            /**
             * 180 degrees
             */
            D180,
            /**
             * 135 degrees anti-clockwise
             */
            D225,
            /**
             * 90 degrees anti-clockwise
             */
            D270,
            /**
             * 45 degrees anti-clockwise
             */
            D315,
            LAST,
        }
        /**
         * The format used for each band element.
         *
         * Each corresponds to a native C type for the current machine. For example,
         * #VIPS_FORMAT_USHORT is <type>unsigned short</type>.
         */

        /**
         * The format used for each band element.
         *
         * Each corresponds to a native C type for the current machine. For example,
         * #VIPS_FORMAT_USHORT is <type>unsigned short</type>.
         */
        export namespace BandFormat {
            export const $gtype: GObject.GType<BandFormat>;
        }

        enum BandFormat {
            /**
             * invalid setting
             */
            NOTSET,
            /**
             * unsigned char format
             */
            UCHAR,
            /**
             * char format
             */
            CHAR,
            /**
             * unsigned short format
             */
            USHORT,
            /**
             * short format
             */
            SHORT,
            /**
             * unsigned int format
             */
            UINT,
            /**
             * int format
             */
            INT,
            /**
             * float format
             */
            FLOAT,
            /**
             * complex (two floats) format
             */
            COMPLEX,
            /**
             * double float format
             */
            DOUBLE,
            /**
             * double complex (two double) format
             */
            DPCOMPLEX,
            LAST,
        }
        /**
         * The various Porter-Duff and PDF blend modes. See vips_composite(),
         * for example.
         *
         * The Cairo docs have a nice explanation of all the blend modes:
         *
         * https://www.cairographics.org/operators
         *
         * The non-separable modes are not implemented.
         */

        /**
         * The various Porter-Duff and PDF blend modes. See vips_composite(),
         * for example.
         *
         * The Cairo docs have a nice explanation of all the blend modes:
         *
         * https://www.cairographics.org/operators
         *
         * The non-separable modes are not implemented.
         */
        export namespace BlendMode {
            export const $gtype: GObject.GType<BlendMode>;
        }

        enum BlendMode {
            /**
             * where the second object is drawn, the first is removed
             */
            CLEAR,
            /**
             * the second object is drawn as if nothing were below
             */
            SOURCE,
            /**
             * the image shows what you would expect if you held two semi-transparent slides on top of each other
             */
            OVER,
            /**
             * the first object is removed completely, the second is only drawn where the first was
             */
            IN,
            /**
             * the second is drawn only where the first isn't
             */
            OUT,
            /**
             * this leaves the first object mostly intact, but mixes both objects in the overlapping area
             */
            ATOP,
            /**
             * leaves the first object untouched, the second is discarded completely
             */
            DEST,
            /**
             * like OVER, but swaps the arguments
             */
            DEST_OVER,
            /**
             * like IN, but swaps the arguments
             */
            DEST_IN,
            /**
             * like OUT, but swaps the arguments
             */
            DEST_OUT,
            /**
             * like ATOP, but swaps the arguments
             */
            DEST_ATOP,
            /**
             * something like a difference operator
             */
            XOR,
            /**
             * a bit like adding the two images
             */
            ADD,
            /**
             * a bit like the darker of the two
             */
            SATURATE,
            /**
             * at least as dark as the darker of the two inputs
             */
            MULTIPLY,
            /**
             * at least as light as the lighter of the inputs
             */
            SCREEN,
            /**
             * multiplies or screens colors, depending on the lightness
             */
            OVERLAY,
            /**
             * the darker of each component
             */
            DARKEN,
            /**
             * the lighter of each component
             */
            LIGHTEN,
            /**
             * brighten first by a factor second
             */
            COLOUR_DODGE,
            /**
             * darken first by a factor of second
             */
            COLOUR_BURN,
            /**
             * multiply or screen, depending on lightness
             */
            HARD_LIGHT,
            /**
             * darken or lighten, depending on lightness
             */
            SOFT_LIGHT,
            /**
             * difference of the two
             */
            DIFFERENCE,
            /**
             * somewhat like DIFFERENCE, but lower-contrast
             */
            EXCLUSION,
            LAST,
        }
        /**
         * How pixels are coded.
         *
         * Normally, pixels are uncoded and can be manipulated as you would expect.
         * However some file formats code pixels for compression, and sometimes it's
         * useful to be able to manipulate images in the coded format.
         *
         * The gaps in the numbering are historical and must be maintained. Allocate
         * new numbers from the end.
         */

        /**
         * How pixels are coded.
         *
         * Normally, pixels are uncoded and can be manipulated as you would expect.
         * However some file formats code pixels for compression, and sometimes it's
         * useful to be able to manipulate images in the coded format.
         *
         * The gaps in the numbering are historical and must be maintained. Allocate
         * new numbers from the end.
         */
        export namespace Coding {
            export const $gtype: GObject.GType<Coding>;
        }

        enum Coding {
            ERROR,
            /**
             * pixels are not coded
             */
            NONE,
            /**
             * pixels encode 3 float CIELAB values as 4 uchar
             */
            LABQ,
            /**
             * pixels encode 3 float RGB as 4 uchar (Radiance coding)
             */
            RAD,
            LAST,
        }
        /**
         * How to combine values. See vips_compass(), for example.
         */

        /**
         * How to combine values. See vips_compass(), for example.
         */
        export namespace Combine {
            export const $gtype: GObject.GType<Combine>;
        }

        enum Combine {
            /**
             * take the maximum of the possible values
             */
            MAX,
            /**
             * sum all the values
             */
            SUM,
            /**
             * take the minimum value
             */
            MIN,
            LAST,
        }
        /**
         * See vips_draw_image() and so on.
         *
         * Operations like vips_draw_image() need to be told how to combine images
         * from two sources.
         *
         * See also: vips_join().
         */

        /**
         * See vips_draw_image() and so on.
         *
         * Operations like vips_draw_image() need to be told how to combine images
         * from two sources.
         *
         * See also: vips_join().
         */
        export namespace CombineMode {
            export const $gtype: GObject.GType<CombineMode>;
        }

        enum CombineMode {
            /**
             * set pixels to the new value
             */
            SET,
            /**
             * add pixels
             */
            ADD,
            LAST,
        }
        /**
         * A direction on a compass. Used for vips_gravity(), for example.
         */

        /**
         * A direction on a compass. Used for vips_gravity(), for example.
         */
        export namespace CompassDirection {
            export const $gtype: GObject.GType<CompassDirection>;
        }

        enum CompassDirection {
            /**
             * centre
             */
            CENTRE,
            /**
             * north
             */
            NORTH,
            /**
             * east
             */
            EAST,
            /**
             * south
             */
            SOUTH,
            /**
             * west
             */
            WEST,
            /**
             * north-east
             */
            NORTH_EAST,
            /**
             * south-east
             */
            SOUTH_EAST,
            /**
             * south-west
             */
            SOUTH_WEST,
            /**
             * north-west
             */
            NORTH_WEST,
            LAST,
        }
        /**
         * See vips_image_pipelinev(). Operations can hint
         * the kind of demand geometry they prefer
         * to the VIPS image IO system.
         *
         * These demand styles are given below in order of increasing
         * specialisation.  When demanding output from a pipeline,
         * vips_image_generate()
         * will use the most general style requested by the operations
         * in the pipeline.
         *
         * #VIPS_DEMAND_STYLE_SMALLTILE --- This is the most general demand format.
         * Output is demanded in small (around 100x100 pel) sections. This style works
         * reasonably efficiently, even for bizarre operations like 45 degree rotate.
         *
         * #VIPS_DEMAND_STYLE_FATSTRIP --- This operation would like to output strips
         * the width of the image and as high as possible. This option is suitable
         * for area operations which do not violently transform coordinates, such
         * as vips_conv().
         *
         * #VIPS_DEMAND_STYLE_THINSTRIP --- This operation would like to output strips
         * the width of the image and a few pels high. This option is suitable for
         * point-to-point operations, such as those in the arithmetic package.
         *
         * #VIPS_DEMAND_STYLE_ANY --- This image is not being demand-read from a disc
         * file (even indirectly) so any demand style is OK. It's used for things like
         * vips_black() where the pixels are calculated.
         *
         * See also: vips_image_pipelinev().
         */

        /**
         * See vips_image_pipelinev(). Operations can hint
         * the kind of demand geometry they prefer
         * to the VIPS image IO system.
         *
         * These demand styles are given below in order of increasing
         * specialisation.  When demanding output from a pipeline,
         * vips_image_generate()
         * will use the most general style requested by the operations
         * in the pipeline.
         *
         * #VIPS_DEMAND_STYLE_SMALLTILE --- This is the most general demand format.
         * Output is demanded in small (around 100x100 pel) sections. This style works
         * reasonably efficiently, even for bizarre operations like 45 degree rotate.
         *
         * #VIPS_DEMAND_STYLE_FATSTRIP --- This operation would like to output strips
         * the width of the image and as high as possible. This option is suitable
         * for area operations which do not violently transform coordinates, such
         * as vips_conv().
         *
         * #VIPS_DEMAND_STYLE_THINSTRIP --- This operation would like to output strips
         * the width of the image and a few pels high. This option is suitable for
         * point-to-point operations, such as those in the arithmetic package.
         *
         * #VIPS_DEMAND_STYLE_ANY --- This image is not being demand-read from a disc
         * file (even indirectly) so any demand style is OK. It's used for things like
         * vips_black() where the pixels are calculated.
         *
         * See also: vips_image_pipelinev().
         */
        export namespace DemandStyle {
            export const $gtype: GObject.GType<DemandStyle>;
        }

        enum DemandStyle {
            ERROR,
            /**
             * demand in small (typically 128x128 pixel) tiles
             */
            SMALLTILE,
            /**
             * demand in fat (typically 16 pixel high) strips
             */
            FATSTRIP,
            /**
             * demand in thin (typically 1 pixel high) strips
             */
            THINSTRIP,
            /**
             * demand geometry does not matter
             */
            ANY,
        }
        /**
         * See vips_flip(), vips_join() and so on.
         *
         * Operations like vips_flip() need to be told whether to flip left-right or
         * top-bottom.
         *
         * See also: vips_flip(), vips_join().
         */

        /**
         * See vips_flip(), vips_join() and so on.
         *
         * Operations like vips_flip() need to be told whether to flip left-right or
         * top-bottom.
         *
         * See also: vips_flip(), vips_join().
         */
        export namespace Direction {
            export const $gtype: GObject.GType<Direction>;
        }

        enum Direction {
            /**
             * left-right
             */
            HORIZONTAL,
            /**
             * top-bottom
             */
            VERTICAL,
            LAST,
        }
        /**
         * See vips_embed(), vips_conv(), vips_affine() and so on.
         *
         * When the edges of an image are extended, you can specify
         * how you want the extension done.
         *
         * #VIPS_EXTEND_BLACK --- new pixels are black, ie. all bits are zero.
         *
         * #VIPS_EXTEND_COPY --- each new pixel takes the value of the nearest edge
         * pixel
         *
         * #VIPS_EXTEND_REPEAT --- the image is tiled to fill the new area
         *
         * #VIPS_EXTEND_MIRROR --- the image is reflected and tiled to reduce hash
         * edges
         *
         * #VIPS_EXTEND_WHITE --- new pixels are white, ie. all bits are set
         *
         * #VIPS_EXTEND_BACKGROUND --- colour set from the `background` property
         *
         * We have to specify the exact value of each enum member since we have to
         * keep these frozen for back compat with vips7.
         *
         * See also: vips_embed().
         */

        /**
         * See vips_embed(), vips_conv(), vips_affine() and so on.
         *
         * When the edges of an image are extended, you can specify
         * how you want the extension done.
         *
         * #VIPS_EXTEND_BLACK --- new pixels are black, ie. all bits are zero.
         *
         * #VIPS_EXTEND_COPY --- each new pixel takes the value of the nearest edge
         * pixel
         *
         * #VIPS_EXTEND_REPEAT --- the image is tiled to fill the new area
         *
         * #VIPS_EXTEND_MIRROR --- the image is reflected and tiled to reduce hash
         * edges
         *
         * #VIPS_EXTEND_WHITE --- new pixels are white, ie. all bits are set
         *
         * #VIPS_EXTEND_BACKGROUND --- colour set from the `background` property
         *
         * We have to specify the exact value of each enum member since we have to
         * keep these frozen for back compat with vips7.
         *
         * See also: vips_embed().
         */
        export namespace Extend {
            export const $gtype: GObject.GType<Extend>;
        }

        enum Extend {
            /**
             * extend with black (all 0) pixels
             */
            BLACK,
            /**
             * copy the image edges
             */
            COPY,
            /**
             * repeat the whole image
             */
            REPEAT,
            /**
             * mirror the whole image
             */
            MIRROR,
            /**
             * extend with white (all bits set) pixels
             */
            WHITE,
            /**
             * extend with colour from the `background` property
             */
            BACKGROUND,
            LAST,
        }
        /**
         * How sensitive loaders are to errors, from never stop (very insensitive), to
         * stop on the smallest warning (very sensitive).
         *
         * Each one implies the ones before it, so #VIPS_FAIL_ON_ERROR implies
         * #VIPS_FAIL_ON_TRUNCATED.
         */

        /**
         * How sensitive loaders are to errors, from never stop (very insensitive), to
         * stop on the smallest warning (very sensitive).
         *
         * Each one implies the ones before it, so #VIPS_FAIL_ON_ERROR implies
         * #VIPS_FAIL_ON_TRUNCATED.
         */
        export namespace FailOn {
            export const $gtype: GObject.GType<FailOn>;
        }

        enum FailOn {
            /**
             * never stop
             */
            NONE,
            /**
             * stop on image truncated, nothing else
             */
            TRUNCATED,
            /**
             * stop on serious error or truncation
             */
            ERROR,
            /**
             * stop on anything, even warnings
             */
            WARNING,
            LAST,
        }
        /**
         * How many pyramid layers to create.
         */

        /**
         * How many pyramid layers to create.
         */
        export namespace ForeignDzContainer {
            export const $gtype: GObject.GType<ForeignDzContainer>;
        }

        enum ForeignDzContainer {
            /**
             * write tiles to the filesystem
             */
            FS,
            /**
             * write tiles to a zip file
             */
            ZIP,
            /**
             * write to a szi file
             */
            SZI,
            LAST,
        }
        /**
         * How many pyramid layers to create.
         */

        /**
         * How many pyramid layers to create.
         */
        export namespace ForeignDzDepth {
            export const $gtype: GObject.GType<ForeignDzDepth>;
        }

        enum ForeignDzDepth {
            /**
             * create layers down to 1x1 pixel
             */
            ONEPIXEL,
            /**
             * create layers down to 1x1 tile
             */
            ONETILE,
            /**
             * only create a single layer
             */
            ONE,
            LAST,
        }
        /**
         * What directory layout and metadata standard to use.
         */

        /**
         * What directory layout and metadata standard to use.
         */
        export namespace ForeignDzLayout {
            export const $gtype: GObject.GType<ForeignDzLayout>;
        }

        enum ForeignDzLayout {
            /**
             * use DeepZoom directory layout
             */
            DZ,
            /**
             * use Zoomify directory layout
             */
            ZOOMIFY,
            /**
             * use Google maps directory layout
             */
            GOOGLE,
            /**
             * use IIIF v2 directory layout
             */
            IIIF,
            /**
             * use IIIF v3 directory layout
             */
            IIIF3,
            LAST,
        }
        /**
         * The compression format to use inside a HEIF container.
         *
         * This is assumed to use the same numbering as %heif_compression_format.
         */

        /**
         * The compression format to use inside a HEIF container.
         *
         * This is assumed to use the same numbering as %heif_compression_format.
         */
        export namespace ForeignHeifCompression {
            export const $gtype: GObject.GType<ForeignHeifCompression>;
        }

        enum ForeignHeifCompression {
            /**
             * x265
             */
            HEVC,
            /**
             * x264
             */
            AVC,
            /**
             * jpeg
             */
            JPEG,
            /**
             * aom
             */
            AV1,
            LAST,
        }
        /**
         * The selected encoder to use.
         * If libheif hasn't been compiled with the selected encoder,
         * we will fallback to the default encoder for the compression format.
         */

        /**
         * The selected encoder to use.
         * If libheif hasn't been compiled with the selected encoder,
         * we will fallback to the default encoder for the compression format.
         */
        export namespace ForeignHeifEncoder {
            export const $gtype: GObject.GType<ForeignHeifEncoder>;
        }

        enum ForeignHeifEncoder {
            /**
             * auto
             */
            AUTO,
            /**
             * aom
             */
            AOM,
            /**
             * RAV1E
             */
            RAV1E,
            /**
             * SVT-AV1
             */
            SVT,
            /**
             * x265
             */
            X265,
            LAST,
        }

        export namespace ForeignJpegSubsample {
            export const $gtype: GObject.GType<ForeignJpegSubsample>;
        }

        enum ForeignJpegSubsample {
            AUTO,
            ON,
            OFF,
            LAST,
        }
        /**
         * The netpbm file format to save as.
         *
         * #VIPS_FOREIGN_PPM_FORMAT_PBM images are single bit.
         *
         * #VIPS_FOREIGN_PPM_FORMAT_PGM images are 8, 16, or 32-bits, one band.
         *
         * #VIPS_FOREIGN_PPM_FORMAT_PPM images are 8, 16, or 32-bits, three bands.
         *
         * #VIPS_FOREIGN_PPM_FORMAT_PFM images are 32-bit float pixels.
         *
         * #VIPS_FOREIGN_PPM_FORMAT_PNM images are anymap images -- the image format
         * is used to pick the saver.
         */

        /**
         * The netpbm file format to save as.
         *
         * #VIPS_FOREIGN_PPM_FORMAT_PBM images are single bit.
         *
         * #VIPS_FOREIGN_PPM_FORMAT_PGM images are 8, 16, or 32-bits, one band.
         *
         * #VIPS_FOREIGN_PPM_FORMAT_PPM images are 8, 16, or 32-bits, three bands.
         *
         * #VIPS_FOREIGN_PPM_FORMAT_PFM images are 32-bit float pixels.
         *
         * #VIPS_FOREIGN_PPM_FORMAT_PNM images are anymap images -- the image format
         * is used to pick the saver.
         */
        export namespace ForeignPpmFormat {
            export const $gtype: GObject.GType<ForeignPpmFormat>;
        }

        enum ForeignPpmFormat {
            /**
             * portable bitmap
             */
            PBM,
            /**
             * portable greymap
             */
            PGM,
            /**
             * portable pixmap
             */
            PPM,
            /**
             * portable float map
             */
            PFM,
            /**
             * portable anymap
             */
            PNM,
            LAST,
        }
        /**
         * Set subsampling mode.
         */

        /**
         * Set subsampling mode.
         */
        export namespace ForeignSubsample {
            export const $gtype: GObject.GType<ForeignSubsample>;
        }

        enum ForeignSubsample {
            /**
             * prevent subsampling when quality >= 90
             */
            AUTO,
            /**
             * always perform subsampling
             */
            ON,
            /**
             * never perform subsampling
             */
            OFF,
            LAST,
        }
        /**
         * The compression types supported by the tiff writer.
         *
         * Use `Q` to set the jpeg compression level, default 75.
         *
         * Use `predictor` to set the lzw or deflate prediction, default horizontal.
         *
         * Use `lossless` to set WEBP lossless compression.
         *
         * Use `level` to set webp and zstd compression level.
         */

        /**
         * The compression types supported by the tiff writer.
         *
         * Use `Q` to set the jpeg compression level, default 75.
         *
         * Use `predictor` to set the lzw or deflate prediction, default horizontal.
         *
         * Use `lossless` to set WEBP lossless compression.
         *
         * Use `level` to set webp and zstd compression level.
         */
        export namespace ForeignTiffCompression {
            export const $gtype: GObject.GType<ForeignTiffCompression>;
        }

        enum ForeignTiffCompression {
            /**
             * no compression
             */
            NONE,
            /**
             * jpeg compression
             */
            JPEG,
            /**
             * deflate (zip) compression
             */
            DEFLATE,
            /**
             * packbits compression
             */
            PACKBITS,
            /**
             * fax4 compression
             */
            CCITTFAX4,
            /**
             * LZW compression
             */
            LZW,
            /**
             * WEBP compression
             */
            WEBP,
            /**
             * ZSTD compression
             */
            ZSTD,
            /**
             * JP2K compression
             */
            JP2K,
            LAST,
        }
        /**
         * The predictor can help deflate and lzw compression. The values are fixed by
         * the tiff library.
         */

        /**
         * The predictor can help deflate and lzw compression. The values are fixed by
         * the tiff library.
         */
        export namespace ForeignTiffPredictor {
            export const $gtype: GObject.GType<ForeignTiffPredictor>;
        }

        enum ForeignTiffPredictor {
            /**
             * no prediction
             */
            NONE,
            /**
             * horizontal differencing
             */
            HORIZONTAL,
            /**
             * float predictor
             */
            FLOAT,
            LAST,
        }
        /**
         * Use inches or centimeters as the resolution unit for a tiff file.
         */

        /**
         * Use inches or centimeters as the resolution unit for a tiff file.
         */
        export namespace ForeignTiffResunit {
            export const $gtype: GObject.GType<ForeignTiffResunit>;
        }

        enum ForeignTiffResunit {
            /**
             * use centimeters
             */
            CM,
            /**
             * use inches
             */
            INCH,
            LAST,
        }
        /**
         * Tune lossy encoder settings for different image types.
         */

        /**
         * Tune lossy encoder settings for different image types.
         */
        export namespace ForeignWebpPreset {
            export const $gtype: GObject.GType<ForeignWebpPreset>;
        }

        enum ForeignWebpPreset {
            /**
             * default preset
             */
            DEFAULT,
            /**
             * digital picture, like portrait, inner shot
             */
            PICTURE,
            /**
             * outdoor photograph, with natural lighting
             */
            PHOTO,
            /**
             * hand or line drawing, with high-contrast details
             */
            DRAWING,
            /**
             * small-sized colorful images
             */
            ICON,
            /**
             * text-like
             */
            TEXT,
            LAST,
        }

        export namespace ImageType {
            export const $gtype: GObject.GType<ImageType>;
        }

        enum ImageType {
            ERROR,
            NONE,
            SETBUF,
            SETBUF_FOREIGN,
            OPENIN,
            MMAPIN,
            MMAPINRW,
            OPENOUT,
            PARTIAL,
        }
        /**
         * The rendering intent. #VIPS_INTENT_ABSOLUTE is best for
         * scientific work, #VIPS_INTENT_RELATIVE is usually best for
         * accurate communication with other imaging libraries.
         */

        /**
         * The rendering intent. #VIPS_INTENT_ABSOLUTE is best for
         * scientific work, #VIPS_INTENT_RELATIVE is usually best for
         * accurate communication with other imaging libraries.
         */
        export namespace Intent {
            export const $gtype: GObject.GType<Intent>;
        }

        enum Intent {
            /**
             * perceptual rendering intent
             */
            PERCEPTUAL,
            /**
             * relative colorimetric rendering intent
             */
            RELATIVE,
            /**
             * saturation rendering intent
             */
            SATURATION,
            /**
             * absolute colorimetric rendering intent
             */
            ABSOLUTE,
            LAST,
        }
        /**
         * Pick the algorithm vips uses to decide image "interestingness". This is used
         * by vips_smartcrop(), for example, to decide what parts of the image to
         * keep.
         *
         * #VIPS_INTERESTING_NONE and #VIPS_INTERESTING_LOW mean the same -- the
         * crop is positioned at the top or left. #VIPS_INTERESTING_HIGH positions at
         * the bottom or right.
         *
         * See also: vips_smartcrop().
         */

        /**
         * Pick the algorithm vips uses to decide image "interestingness". This is used
         * by vips_smartcrop(), for example, to decide what parts of the image to
         * keep.
         *
         * #VIPS_INTERESTING_NONE and #VIPS_INTERESTING_LOW mean the same -- the
         * crop is positioned at the top or left. #VIPS_INTERESTING_HIGH positions at
         * the bottom or right.
         *
         * See also: vips_smartcrop().
         */
        export namespace Interesting {
            export const $gtype: GObject.GType<Interesting>;
        }

        enum Interesting {
            /**
             * do nothing
             */
            NONE,
            /**
             * just take the centre
             */
            CENTRE,
            /**
             * use an entropy measure
             */
            ENTROPY,
            /**
             * look for features likely to draw human attention
             */
            ATTENTION,
            /**
             * position the crop towards the low coordinate
             */
            LOW,
            /**
             * position the crop towards the high coordinate
             */
            HIGH,
            /**
             * everything is interesting
             */
            ALL,
            LAST,
        }
        /**
         * How the values in an image should be interpreted. For example, a
         * three-band float image of type #VIPS_INTERPRETATION_LAB should have its
         * pixels interpreted as coordinates in CIE Lab space.
         *
         * RGB and sRGB are treated in the same way. Use the colourspace functions if
         * you want some other behaviour.
         *
         * The gaps in numbering are historical and must be maintained. Allocate
         * new numbers from the end.
         */

        /**
         * How the values in an image should be interpreted. For example, a
         * three-band float image of type #VIPS_INTERPRETATION_LAB should have its
         * pixels interpreted as coordinates in CIE Lab space.
         *
         * RGB and sRGB are treated in the same way. Use the colourspace functions if
         * you want some other behaviour.
         *
         * The gaps in numbering are historical and must be maintained. Allocate
         * new numbers from the end.
         */
        export namespace Interpretation {
            export const $gtype: GObject.GType<Interpretation>;
        }

        enum Interpretation {
            ERROR,
            /**
             * generic many-band image
             */
            MULTIBAND,
            /**
             * some kind of single-band image
             */
            B_W,
            /**
             * a 1D image, eg. histogram or lookup table
             */
            HISTOGRAM,
            /**
             * the first three bands are CIE XYZ
             */
            XYZ,
            /**
             * pixels are in CIE Lab space
             */
            LAB,
            /**
             * the first four bands are in CMYK space
             */
            CMYK,
            /**
             * implies #VIPS_CODING_LABQ
             */
            LABQ,
            /**
             * generic RGB space
             */
            RGB,
            /**
             * a uniform colourspace based on CMC(1:1)
             */
            CMC,
            /**
             * pixels are in CIE LCh space
             */
            LCH,
            /**
             * CIE LAB coded as three signed 16-bit values
             */
            LABS,
            /**
             * pixels are sRGB
             */
            SRGB,
            /**
             * pixels are CIE Yxy
             */
            YXY,
            /**
             * image is in fourier space
             */
            FOURIER,
            /**
             * generic 16-bit RGB
             */
            RGB16,
            /**
             * generic 16-bit mono
             */
            GREY16,
            /**
             * a matrix
             */
            MATRIX,
            /**
             * pixels are scRGB
             */
            SCRGB,
            /**
             * pixels are HSV
             */
            HSV,
            LAST,
        }
        /**
         * The resampling kernels vips supports. See vips_reduce(), for example.
         */

        /**
         * The resampling kernels vips supports. See vips_reduce(), for example.
         */
        export namespace Kernel {
            export const $gtype: GObject.GType<Kernel>;
        }

        enum Kernel {
            /**
             * The nearest pixel to the point.
             */
            NEAREST,
            /**
             * Convolve with a triangle filter.
             */
            LINEAR,
            /**
             * Convolve with a cubic filter.
             */
            CUBIC,
            /**
             * Convolve with a Mitchell kernel.
             */
            MITCHELL,
            /**
             * Convolve with a two-lobe Lanczos kernel.
             */
            LANCZOS2,
            /**
             * Convolve with a three-lobe Lanczos kernel.
             */
            LANCZOS3,
            LAST,
        }
        /**
         * See also: vips_boolean().
         */

        /**
         * See also: vips_boolean().
         */
        export namespace OperationBoolean {
            export const $gtype: GObject.GType<OperationBoolean>;
        }

        enum OperationBoolean {
            /**
             * &
             */
            AND,
            /**
             * |
             */
            OR,
            /**
             * ^
             */
            EOR,
            /**
             * >>
             */
            LSHIFT,
            /**
             * <<
             */
            RSHIFT,
            LAST,
        }
        /**
         * See also: vips_complex().
         */

        /**
         * See also: vips_complex().
         */
        export namespace OperationComplex {
            export const $gtype: GObject.GType<OperationComplex>;
        }

        enum OperationComplex {
            /**
             * convert to polar coordinates
             */
            POLAR,
            /**
             * convert to rectangular coordinates
             */
            RECT,
            /**
             * complex conjugate
             */
            CONJ,
            LAST,
        }
        /**
         * See also: vips_complex2().
         */

        /**
         * See also: vips_complex2().
         */
        export namespace OperationComplex2 {
            export const $gtype: GObject.GType<OperationComplex2>;
        }

        enum OperationComplex2 {
            /**
             * convert to polar coordinates
             */
            CROSS_PHASE,
            LAST,
        }
        /**
         * See also: vips_complexget().
         */

        /**
         * See also: vips_complexget().
         */
        export namespace OperationComplexget {
            export const $gtype: GObject.GType<OperationComplexget>;
        }

        enum OperationComplexget {
            /**
             * get real component
             */
            REAL,
            /**
             * get imaginary component
             */
            IMAG,
            LAST,
        }
        /**
         * See also: vips_math().
         */

        /**
         * See also: vips_math().
         */
        export namespace OperationMath {
            export const $gtype: GObject.GType<OperationMath>;
        }

        enum OperationMath {
            /**
             * sin(), angles in degrees
             */
            SIN,
            /**
             * cos(), angles in degrees
             */
            COS,
            /**
             * tan(), angles in degrees
             */
            TAN,
            /**
             * asin(), angles in degrees
             */
            ASIN,
            /**
             * acos(), angles in degrees
             */
            ACOS,
            /**
             * atan(), angles in degrees
             */
            ATAN,
            /**
             * log base e
             */
            LOG,
            /**
             * log base 10
             */
            LOG10,
            /**
             * e to the something
             */
            EXP,
            /**
             * 10 to the something
             */
            EXP10,
            /**
             * sinh(), angles in radians
             */
            SINH,
            /**
             * cosh(), angles in radians
             */
            COSH,
            /**
             * tanh(), angles in radians
             */
            TANH,
            /**
             * asinh(), angles in radians
             */
            ASINH,
            /**
             * acosh(), angles in radians
             */
            ACOSH,
            /**
             * atanh(), angles in radians
             */
            ATANH,
            LAST,
        }
        /**
         * See also: vips_math().
         */

        /**
         * See also: vips_math().
         */
        export namespace OperationMath2 {
            export const $gtype: GObject.GType<OperationMath2>;
        }

        enum OperationMath2 {
            /**
             * pow(left, right)
             */
            POW,
            /**
             * pow(right, left)
             */
            WOP,
            /**
             * atan2(left, right)
             */
            ATAN2,
            LAST,
        }
        /**
         * More like hit-miss, really.
         *
         * See also: vips_morph().
         */

        /**
         * More like hit-miss, really.
         *
         * See also: vips_morph().
         */
        export namespace OperationMorphology {
            export const $gtype: GObject.GType<OperationMorphology>;
        }

        enum OperationMorphology {
            /**
             * true if all set
             */
            ERODE,
            /**
             * true if one set
             */
            DILATE,
            LAST,
        }
        /**
         * See also: vips_relational().
         */

        /**
         * See also: vips_relational().
         */
        export namespace OperationRelational {
            export const $gtype: GObject.GType<OperationRelational>;
        }

        enum OperationRelational {
            /**
             * ==
             */
            EQUAL,
            /**
             * !=
             */
            NOTEQ,
            /**
             * <
             */
            LESS,
            /**
             * <=
             */
            LESSEQ,
            /**
             * >
             */
            MORE,
            /**
             * >=
             */
            MOREEQ,
            LAST,
        }
        /**
         * See also: vips_round().
         */

        /**
         * See also: vips_round().
         */
        export namespace OperationRound {
            export const $gtype: GObject.GType<OperationRound>;
        }

        enum OperationRound {
            /**
             * round to nearest
             */
            RINT,
            /**
             * the smallest integral value not less than
             */
            CEIL,
            /**
             * largest integral value not greater than
             */
            FLOOR,
            LAST,
        }
        /**
         * Pick a Profile Connection Space for vips_icc_import() and
         * vips_icc_export(). LAB is usually best, XYZ can be more convenient in some
         * cases.
         */

        /**
         * Pick a Profile Connection Space for vips_icc_import() and
         * vips_icc_export(). LAB is usually best, XYZ can be more convenient in some
         * cases.
         */
        export namespace PCS {
            export const $gtype: GObject.GType<PCS>;
        }

        enum PCS {
            /**
             * use CIELAB D65 as the Profile Connection Space
             */
            LAB,
            /**
             * use XYZ as the Profile Connection Space
             */
            XYZ,
            LAST,
        }
        /**
         * How accurate an operation should be.
         */

        /**
         * How accurate an operation should be.
         */
        export namespace Precision {
            export const $gtype: GObject.GType<Precision>;
        }

        enum Precision {
            /**
             * int everywhere
             */
            INTEGER,
            /**
             * float everywhere
             */
            FLOAT,
            /**
             * approximate integer output
             */
            APPROXIMATE,
            LAST,
        }
        /**
         * How to calculate the output pixels when shrinking a 2x2 region.
         */

        /**
         * How to calculate the output pixels when shrinking a 2x2 region.
         */
        export namespace RegionShrink {
            export const $gtype: GObject.GType<RegionShrink>;
        }

        enum RegionShrink {
            /**
             * use the average
             */
            MEAN,
            /**
             * use the median
             */
            MEDIAN,
            /**
             * use the mode
             */
            MODE,
            /**
             * use the maximum
             */
            MAX,
            /**
             * use the minimum
             */
            MIN,
            /**
             * use the top-left pixel
             */
            NEAREST,
            LAST,
        }
        /**
         * See also: #VipsForeignSave.
         */

        /**
         * See also: #VipsForeignSave.
         */
        export namespace Saveable {
            export const $gtype: GObject.GType<Saveable>;
        }

        enum Saveable {
            /**
             * 1 band (eg. CSV)
             */
            MONO,
            /**
             * 1 or 3 bands (eg. PPM)
             */
            RGB,
            /**
             * 1, 2, 3 or 4 bands (eg. PNG)
             */
            RGBA,
            /**
             * 3 or 4 bands (eg. WEBP)
             */
            RGBA_ONLY,
            /**
             * 1, 3 or 4 bands (eg. JPEG)
             */
            RGB_CMYK,
            /**
             * any number of bands (eg. TIFF)
             */
            ANY,
            LAST,
        }
        /**
         * The SDF to generate,
         *
         * See also: vips_sdf().
         */

        /**
         * The SDF to generate,
         *
         * See also: vips_sdf().
         */
        export namespace SdfShape {
            export const $gtype: GObject.GType<SdfShape>;
        }

        enum SdfShape {
            /**
             * a circle at `a,` radius `r`
             */
            CIRCLE,
            /**
             * a box from `a` to `b`
             */
            BOX,
            /**
             * a box with rounded `corners` from `a` to `b`
             */
            ROUNDED_BOX,
            /**
             * a line from `a` to `b`
             */
            LINE,
            LAST,
        }
        /**
         * Controls whether an operation should upsize, downsize, both up and
         * downsize, or force a size.
         *
         * See also: vips_thumbnail().
         */

        /**
         * Controls whether an operation should upsize, downsize, both up and
         * downsize, or force a size.
         *
         * See also: vips_thumbnail().
         */
        export namespace Size {
            export const $gtype: GObject.GType<Size>;
        }

        enum Size {
            /**
             * size both up and down
             */
            BOTH,
            /**
             * only upsize
             */
            UP,
            /**
             * only downsize
             */
            DOWN,
            /**
             * force size, that is, break aspect ratio
             */
            FORCE,
            LAST,
        }
        /**
         * Sets the word wrapping style for vips_text() when used with a maximum
         * width.
         *
         * See also: vips_text().
         */

        /**
         * Sets the word wrapping style for vips_text() when used with a maximum
         * width.
         *
         * See also: vips_text().
         */
        export namespace TextWrap {
            export const $gtype: GObject.GType<TextWrap>;
        }

        enum TextWrap {
            /**
             * wrap at word boundaries
             */
            WORD,
            /**
             * wrap at character boundaries
             */
            CHAR,
            /**
             * wrap at word boundaries, but fall back to character boundaries if there is not enough space for a full word
             */
            WORD_CHAR,
            /**
             * no wrapping
             */
            NONE,
            LAST,
        }

        export namespace Token {
            export const $gtype: GObject.GType<Token>;
        }

        enum Token {
            LEFT,
            RIGHT,
            STRING,
            EQUALS,
            COMMA,
        }
        const ARGUMENT_OPTIONAL_INPUT: number;
        const ARGUMENT_OPTIONAL_OUTPUT: number;
        const ARGUMENT_REQUIRED_INPUT: number;
        const ARGUMENT_REQUIRED_OUTPUT: number;
        /**
         * Areas under curves for illuminant A (2856K), 2 degree observer.
         */
        const A_X0: number;
        const A_Y0: number;
        const A_Z0: number;
        /**
         * Areas under curves for illuminant B (4874K), 2 degree observer.
         */
        const B_X0: number;
        const B_Y0: number;
        const B_Z0: number;
        const CONFIG: string;
        /**
         * Areas under curves for illuminant C (6774K), 2 degree observer.
         */
        const C_X0: number;
        const C_Y0: number;
        const C_Z0: number;
        /**
         * Areas under curves for black body at 3250K, 2 degree observer.
         */
        const D3250_X0: number;
        const D3250_Y0: number;
        const D3250_Z0: number;
        /**
         * Areas under curves for D50, 2 degree observer.
         */
        const D50_X0: number;
        const D50_Y0: number;
        const D50_Z0: number;
        /**
         * Areas under curves for D55, 2 degree observer.
         */
        const D55_X0: number;
        const D55_Y0: number;
        const D55_Z0: number;
        /**
         * Areas under curves for D65, 2 degree observer.
         */
        const D65_X0: number;
        const D65_Y0: number;
        const D65_Z0: number;
        /**
         * Areas under curves for D75, 2 degree observer.
         */
        const D75_X0: number;
        const D75_Y0: number;
        const D75_Z0: number;
        /**
         * Areas under curves for D93, 2 degree observer.
         */
        const D93_X0: number;
        const D93_Y0: number;
        const D93_Z0: number;
        const DEFAULT_MAX_COORD: number;
        const ENABLE_DEPRECATED: number;
        /**
         * Areas under curves for equal energy illuminant E.
         */
        const E_X0: number;
        const E_Y0: number;
        const E_Z0: number;
        /**
         * #VIPS_INTERPOLATE_SHIFT as a multiplicative constant.
         */
        const INTERPOLATE_SCALE: number;
        /**
         * Many of the vips interpolators use fixed-point arithmetic for value
         * calculation. This is how many bits of precision they use.
         */
        const INTERPOLATE_SHIFT: number;
        const LIBRARY_AGE: number;
        const LIBRARY_CURRENT: number;
        const LIBRARY_REVISION: number;
        /**
         * The first four bytes of a VIPS file in Intel byte ordering.
         */
        const MAGIC_INTEL: number;
        /**
         * The first four bytes of a VIPS file in SPARC byte ordering.
         */
        const MAGIC_SPARC: number;
        const MAJOR_VERSION: number;
        /**
         * The bits per sample for each channel.
         */
        const META_BITS_PER_SAMPLE: string;
        /**
         * If set, the suggested concurrency for this image.
         */
        const META_CONCURRENCY: string;
        /**
         * The name that read and write operations use for the image's EXIF data.
         */
        const META_EXIF_NAME: string;
        /**
         * The name we use to attach an ICC profile. The file read and write
         * operations for TIFF, JPEG, PNG and others use this item of metadata to
         * attach and save ICC profiles. The profile is updated by the
         * vips_icc_transform() operations.
         */
        const META_ICC_NAME: string;
        /**
         * The IMAGEDESCRIPTION tag. Often has useful metadata.
         */
        const META_IMAGEDESCRIPTION: string;
        /**
         * The name that read and write operations use for the image's IPTC data.
         */
        const META_IPTC_NAME: string;
        /**
         * Record the name of the original loader here. Handy for hinting file formats
         * and for debugging.
         */
        const META_LOADER: string;
        /**
         * If set, the number of pages in the original file.
         */
        const META_N_PAGES: string;
        /**
         * If set, the number of subifds in the first page of the file.
         */
        const META_N_SUBIFDS: string;
        /**
         * The orientation tag for this image. An int from 1 - 8 using the standard
         * exif/tiff meanings.
         *
         * * 1 - The 0th row represents the visual top of the image, and the 0th column
         *   represents the visual left-hand side.
         * * 2 - The 0th row represents the visual top of the image, and the 0th column
         *   represents the visual right-hand side.
         * * 3 - The 0th row represents the visual bottom of the image, and the 0th
         *   column represents the visual right-hand side.
         * * 4 - The 0th row represents the visual bottom of the image, and the 0th
         *   column represents the visual left-hand side.
         * * 5 - The 0th row represents the visual left-hand side of the image, and the
         *   0th column represents the visual top.
         * * 6 - The 0th row represents the visual right-hand side of the image, and the
         *   0th column represents the visual top.
         * * 7 - The 0th row represents the visual right-hand side of the image, and the
         *   0th column represents the visual bottom.
         * * 8 - The 0th row represents the visual left-hand side of the image, and the
         *   0th column represents the visual bottom.
         */
        const META_ORIENTATION: string;
        /**
         * If set, the height of each page when this image was loaded. If you save an
         * image with "page-height" set to a format that supports multiple pages, such
         * as tiff, the image will be saved as a series of pages.
         */
        const META_PAGE_HEIGHT: string;
        /**
         * Does this image have a palette?
         */
        const META_PALETTE: string;
        /**
         * The name that TIFF read and write operations use for the image's
         * TIFFTAG_PHOTOSHOP data.
         */
        const META_PHOTOSHOP_NAME: string;
        /**
         * The JPEG and TIFF read and write operations use this to record the
         * file's preferred unit for resolution.
         */
        const META_RESOLUTION_UNIT: string;
        /**
         * Images loaded via vips_sequential() have this int field defined. Some
         * operations (eg. vips_shrinkv()) add extra caches if they see it on their
         * input.
         */
        const META_SEQUENTIAL: string;
        /**
         * The name that read and write operations use for the image's XMP data.
         */
        const META_XMP_NAME: string;
        const MICRO_VERSION: number;
        const MINOR_VERSION: number;
        /**
         * #VIPS_TRANSFORM_SHIFT as a multiplicative constant.
         */
        const TRANSFORM_SCALE: number;
        /**
         * Many of the vips interpolators use fixed-point arithmetic for coordinate
         * calculation. This is how many bits of precision they use.
         */
        const TRANSFORM_SHIFT: number;
        const VERSION: string;
        const VERSION_STRING: string;
        function _object_set_member(
            object: Object,
            pspec: GObject.ParamSpec,
            member: GObject.Object,
            argument: GObject.Object,
        ): void;
        /**
         * Add the standard vips %GOptionEntry to a %GOptionGroup.
         *
         * See also: g_option_group_new().
         * @param option_group group to add to
         */
        function add_option_entries(option_group: GLib.OptionGroup): void;
        function area_free_cb(mem: any | null, area: Area): number;
        /**
         * Return %TRUE if `format` is uchar or schar.
         * @param format format to test
         */
        function band_format_is8bit(format: BandFormat | null): boolean;
        /**
         * Return %TRUE if `fmt` is one of the complex types.
         * @param format format to test
         */
        function band_format_iscomplex(format: BandFormat | null): boolean;
        /**
         * Return %TRUE if `format` is one of the float types.
         * @param format format to test
         */
        function band_format_isfloat(format: BandFormat | null): boolean;
        /**
         * Return %TRUE if `format` is one of the integer types.
         * @param format format to test
         */
        function band_format_isint(format: BandFormat | null): boolean;
        /**
         * Return %TRUE if `format` is one of the unsigned integer types.
         * @param format format to test
         */
        function band_format_isuint(format: BandFormat | null): boolean;
        /**
         * Like vips_blob_new(), but take a copy of the data. Useful for bindings
         * which struggle with callbacks.
         *
         * See also: vips_blob_new().
         * @param data data to store
         * @returns the new #VipsBlob.
         */
        function blob_copy(data: Uint8Array | string): Blob;
        /**
         * Set the block state on all untrusted operations.
         *
         *
         * ```
         * vips_block_untrusted_set(TRUE);
         * ```
         *
         *
         * Will block all untrusted operations from running.
         *
         * Use `vips -l` at the command-line to see the class hierarchy and which
         * operations are marked as untrusted.
         *
         * Set the environment variable `VIPS_BLOCK_UNTRUSTED` to block all untrusted
         * operations on vips_init().
         * @param state the block state to set
         */
        function block_untrusted_set(state: boolean): void;
        /**
         * Drop the whole operation cache, handy for leak tracking. Also called
         * automatically on vips_shutdown().
         */
        function cache_drop_all(): void;
        /**
         * Get the maximum number of operations we keep in cache.
         * @returns the maximum number of operations we keep in cache
         */
        function cache_get_max(): number;
        /**
         * Get the maximum number of tracked files we allow before we start dropping
         * cached operations. See vips_tracked_get_files().
         *
         * libvips only tracks file descriptors it allocates, it can't track ones
         * allocated by external libraries. If you use an operation like
         * vips_magickload(), most of the descriptors it uses won't be included.
         *
         * See also: vips_tracked_get_files().
         * @returns the maximum number of tracked files we allow
         */
        function cache_get_max_files(): number;
        /**
         * Get the maximum amount of tracked memory we allow before we start dropping
         * cached operations. See vips_tracked_get_mem().
         *
         * See also: vips_tracked_get_mem().
         * @returns the maximum amount of tracked memory we allow
         */
        function cache_get_max_mem(): number;
        /**
         * Get the current number of operations in cache.
         * @returns get the current number of operations in cache.
         */
        function cache_get_size(): number;
        /**
         * A binding-friendly version of vips_cache_operation_buildp().
         *
         * After calling this, `operation` has the same ref count as when it went in,
         * and the result must be freed with vips_object_unref_outputs() and
         * g_object_unref().
         * @param operation operation to lookup
         * @returns The built operation.
         */
        function cache_operation_build(operation: Operation): Operation;
        /**
         * Print the whole operation cache to stdout. Handy for debugging.
         */
        function cache_print(): void;
        /**
         * Handy for debugging. Print the operation cache to stdout just before exit.
         *
         * See also: vips_cache_set_trace().
         * @param dump if %TRUE, dump the operation cache on exit
         */
        function cache_set_dump(dump: boolean): void;
        /**
         * Set the maximum number of operations we keep in cache.
         * @param max maximum number of operation to cache
         */
        function cache_set_max(max: number): void;
        /**
         * Set the maximum number of tracked files we allow before we start dropping
         * cached operations. See vips_tracked_get_files().
         *
         * See also: vips_tracked_get_files().
         * @param max_files max open files we allow
         */
        function cache_set_max_files(max_files: number): void;
        /**
         * Set the maximum amount of tracked memory we allow before we start dropping
         * cached operations. See vips_tracked_get_mem().
         *
         * libvips only tracks memory it allocates, it can't track memory allocated by
         * external libraries. If you use an operation like vips_magickload(), most of
         * the memory it uses won't be included.
         *
         * See also: vips_tracked_get_mem().
         * @param max_mem maximum amount of tracked memory we use
         */
        function cache_set_max_mem(max_mem: number): void;
        /**
         * Handy for debugging. Print operation cache actions to stdout as we run.
         *
         * You can set the environment variable `VIPS_TRACE` to turn this option on, or
         * use the command-line flag `--vips-cache-trace`.
         *
         * See also: vips_cache_set_dump().
         * @param trace if %TRUE, trace the operation cache
         */
        function cache_set_trace(trace: boolean): void;
        function call_argv(operation: Operation, argc: number, argv: string): number;
        function call_options(group: GLib.OptionGroup, operation: Operation): void;
        /**
         * Check that the image is 8 or 16-bit integer, signed or unsigned.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_8or16(domain: string, im: Image): number;
        /**
         * `bandno` should be a valid band number (ie. 0 to im->Bands - 1), or can be
         * -1, meaning all bands.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @param bandno band number
         * @returns 0 if OK, -1 otherwise.
         */
        function check_bandno(domain: string, im: Image, bandno: number): number;
        /**
         * Check that the image has `bands` bands.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @param bands must have this many bands
         * @returns 0 if OK, -1 otherwise.
         */
        function check_bands(domain: string, im: Image, bands: number): number;
        /**
         * Check that the image has either one or three bands.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_bands_1or3(domain: string, im: Image): number;
        /**
         * Check that the images have the same number of bands, or that one of the
         * images has just 1 band.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im1 first image to check
         * @param im2 second image to check
         * @returns 0 on OK, or -1 on error.
         */
        function check_bands_1orn(domain: string, im1: Image, im2: Image): number;
        /**
         * Check that an image has 1 or `n` bands. Handy for unary operations, cf.
         * vips_check_bands_1orn().
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_check_bands_1orn().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @param n number of bands, or 1
         * @returns 0 on OK, or -1 on error.
         */
        function check_bands_1orn_unary(domain: string, im: Image, n: number): number;
        /**
         * Check that the image has at least `bands` bands.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @param bands at least this many bands
         * @returns 0 if OK, -1 otherwise.
         */
        function check_bands_atleast(domain: string, im: Image, bands: number): number;
        /**
         * Check that the images have the same number of bands.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im1 first image to check
         * @param im2 second image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_bands_same(domain: string, im1: Image, im2: Image): number;
        /**
         * Check that the image has the required `coding`.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @param coding required coding
         * @returns 0 on OK, or -1 on error.
         */
        function check_coding(domain: string, im: Image, coding: Coding | null): number;
        /**
         * Check that the image is uncoded, LABQ coded or RAD coded.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @returns 0 on OK, or -1 on error.
         */
        function check_coding_known(domain: string, im: Image): number;
        /**
         * Check that the image is uncoded or LABQ coded.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @returns 0 on OK, or -1 on error.
         */
        function check_coding_noneorlabq(domain: string, im: Image): number;
        /**
         * Check that the images have the same coding.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im1 first image to check
         * @param im2 second image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_coding_same(domain: string, im1: Image, im2: Image): number;
        /**
         * Check that the image is complex.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_complex(domain: string, im: Image): number;
        /**
         * Check that the image has the specified format.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @param fmt format to test for
         * @returns 0 if OK, -1 otherwise.
         */
        function check_format(domain: string, im: Image, fmt: BandFormat | null): number;
        /**
         * Check that the images have the same format.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im1 first image to check
         * @param im2 second image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_format_same(domain: string, im1: Image, im2: Image): number;
        /**
         * Histogram images must have width or height 1, and must not have more than
         * 65536 elements. Return 0 if the image will pass as a histogram, or -1 and
         * set an error message otherwise.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_hist(domain: string, im: Image): number;
        /**
         * Check that the image is in one of the integer formats.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_int(domain: string, im: Image): number;
        /**
         * Matrix images must have width and height less than 100000 and have 1 band.
         *
         * Return 0 if the image will pass as a matrix, or -1 and set an error
         * message otherwise.
         *
         * `out` is set to be `im` cast to double and stored in memory. Use
         * VIPS_MATRIX() to address values in `out`.
         *
         * You must unref `out` when you are done with it.
         *
         * See also: VIPS_MATRIX(), vips_object_local()
         * @param domain the originating domain for the error message
         * @param im image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_matrix(domain: string, im: Image): [number, Image];
        /**
         * Check that the image has exactly one band.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_mono(domain: string, im: Image): number;
        /**
         * Check that the image is not complex.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_noncomplex(domain: string, im: Image): number;
        /**
         * Check that the image is square and that the sides are odd.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_oddsquare(domain: string, im: Image): number;
        /**
         * Check that `prec` image is either float or int.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param precision precision to check
         * @returns 0 on OK, or -1 on error.
         */
        function check_precision_intfloat(domain: string, precision: Precision | null): number;
        /**
         * Separable matrix images must have width or height 1.
         * Return 0 if the image will pass, or -1 and
         * set an error message otherwise.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_separable(domain: string, im: Image): number;
        /**
         * Check that the images have the same size.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im1 first image to check
         * @param im2 second image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_size_same(domain: string, im1: Image, im2: Image): number;
        /**
         * Check that the image is has two "components", ie. is a one-band complex or
         * a two-band non-complex.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_twocomponents(domain: string, im: Image): number;
        /**
         * Check that the image is 8 or 16-bit unsigned integer.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_u8or16(domain: string, im: Image): number;
        /**
         * Check that the image is 8 or 16-bit unsigned integer, or float.
         * Otherwise set an error message and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_u8or16orf(domain: string, im: Image): number;
        /**
         * Check that the image is in one of the unsigned integer formats.
         * Otherwise set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_uint(domain: string, im: Image): number;
        /**
         * Check that the image is unsigned int or float.
         * Otherwise set an error message and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @returns 0 if OK, -1 otherwise.
         */
        function check_uintorf(domain: string, im: Image): number;
        /**
         * Check that the image is not coded.
         * If not, set an error message
         * and return non-zero.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param im image to check
         * @returns 0 on OK, or -1 on error.
         */
        function check_uncoded(domain: string, im: Image): number;
        /**
         * Operations with a vector constant need a 1-element vector, or a vector with
         * the same number of elements as there are bands in the image, or a 1-band
         * image and a many-element vector.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param n number of elements in vector
         * @param im image to check against
         * @returns 0 if OK, -1 otherwise.
         */
        function check_vector(domain: string, n: number, im: Image): number;
        /**
         * Check that `n` == `len`.
         *
         * See also: vips_error().
         * @param domain the originating domain for the error message
         * @param n number of elements in vector
         * @param len number of elements vector should have
         * @returns 0 if OK, -1 otherwise.
         */
        function check_vector_length(domain: string, n: number, len: number): number;
        /**
         * Search below `basename,` return the first class whose name or `nickname`
         * matches.
         *
         * See also: vips_type_find()
         * @param basename name of base class
         * @param nickname search for a class with this nickname
         * @returns the found class.
         */
        function class_find(basename: string, nickname: string): typeof Object;
        /**
         * Calculate Ccmc from C.
         * @param C Chroma
         * @returns Ccmc.
         */
        function col_C2Ccmc(C: number): number;
        /**
         * Calculate C from Ccmc using a table.
         * Call vips_col_make_tables_CMC() at
         * least once before using this function.
         * @param Ccmc Ccmc
         * @returns C.
         */
        function col_Ccmc2C(Ccmc: number): number;
        /**
         * Calculate ab from Ch, h in degrees.
         * @param C Chroma
         * @param h Hue angle (degrees)
         * @param a return CIE a* value
         * @param b return CIE b* value
         */
        function col_Ch2ab(C: number, h: number, a: number, b: number): void;
        /**
         * Calculate hcmc from C and h.
         * @param C Chroma
         * @param h Hue (degrees)
         * @returns hcmc.
         */
        function col_Ch2hcmc(C: number, h: number): number;
        /**
         * Calculate h from C and hcmc, using a table.
         * Call vips_col_make_tables_CMC() at
         * least once before using this function.
         * @param C Chroma
         * @param hcmc Hue cmc (degrees)
         * @returns h.
         */
        function col_Chcmc2h(C: number, hcmc: number): number;
        /**
         * Calculate Lcmc from L.
         * @param L CIE L*
         * @returns Lcmc
         */
        function col_L2Lcmc(L: number): number;
        /**
         * Calculate XYZ from Lab, D65.
         *
         * See also: vips_Lab2XYZ().
         * @param L Input CIE Lab value
         * @param a Input CIE Lab value
         * @param b Input CIE Lab value
         */
        function col_Lab2XYZ(L: number, a: number, b: number): [number, number, number];
        /**
         * Calculate L from Lcmc using a table. Call vips_col_make_tables_CMC() at
         * least once before using this function.
         * @param Lcmc L cmc
         * @returns L*
         */
        function col_Lcmc2L(Lcmc: number): number;
        /**
         * Calculate XYZ from Lab, D65.
         *
         * See also: vips_XYZ2Lab().
         * @param X Input CIE XYZ colour
         * @param Y Input CIE XYZ colour
         * @param Z Input CIE XYZ colour
         */
        function col_XYZ2Lab(X: number, Y: number, Z: number): [number, number, number];
        /**
         * Turn XYZ into scRGB.
         *
         * See also: vips_XYZ2scRGB().
         * @param X Input XYZ value
         * @param Y Input XYZ value
         * @param Z Input XYZ value
         */
        function col_XYZ2scRGB(X: number, Y: number, Z: number): [number, number, number, number];
        function col_ab2Ch(a: number, b: number, C: number, h: number): void;
        function col_ab2h(a: number, b: number): number;
        /**
         * CIEDE2000, from:
         *
         * Luo, Cui, Rigg, "The Development of the CIE 2000 Colour-Difference
         * Formula: CIEDE2000", COLOR research and application, pp 340
         * @param L1 Input coordinate 1
         * @param a1 Input coordinate 1
         * @param b1 Input coordinate 1
         * @param L2 Input coordinate 2
         * @param a2 Input coordinate 2
         * @param b2 Input coordinate 2
         * @returns CIE dE2000 colour difference.
         */
        function col_dE00(L1: number, a1: number, b1: number, L2: number, a2: number, b2: number): number;
        /**
         * Make the lookup tables for cmc.
         */
        function col_make_tables_CMC(): void;
        function col_sRGB2scRGB_16(r: number, g: number, b: number, R: number, G: number, B: number): number;
        function col_sRGB2scRGB_16_noclip(r: number, g: number, b: number, R: number, G: number, B: number): number;
        function col_sRGB2scRGB_8(r: number, g: number, b: number, R: number, G: number, B: number): number;
        function col_sRGB2scRGB_8_noclip(r: number, g: number, b: number, R: number, G: number, B: number): number;
        function col_scRGB2BW_16(R: number, G: number, B: number, g: number, og: number): number;
        function col_scRGB2BW_8(R: number, G: number, B: number, g: number, og: number): number;
        /**
         * Turn scRGB into XYZ.
         *
         * See also: vips_scRGB2XYZ().
         * @param R Input scRGB value
         * @param G Input scRGB value
         * @param B Input scRGB value
         */
        function col_scRGB2XYZ(R: number, G: number, B: number): [number, number, number, number];
        function col_scRGB2sRGB_16(
            R: number,
            G: number,
            B: number,
            r: number,
            g: number,
            b: number,
            og: number,
        ): number;
        function col_scRGB2sRGB_8(R: number, G: number, B: number, r: number, g: number, b: number, og: number): number;
        /**
         * Returns the number of worker threads that vips should use when running a
         * #VipsThreadPool.
         *
         * vips gets this values from these sources in turn:
         *
         * If vips_concurrency_set() has been called, this value is used. The special
         * value 0 means "default". You can also use the command-line argument
         * "--vips-concurrency" to set this value.
         *
         * If vips_concurrency_set() has not been called and no command-line argument
         * was used, vips uses the value of the environment variable VIPS_CONCURRENCY,
         *
         * If VIPS_CONCURRENCY has not been set, vips finds the number of hardware
         * threads that the host machine can run in parallel and uses that value.
         *
         * The final value is clipped to the range 1 - 1024.
         *
         * See also: vips_concurrency_get().
         * @returns number of worker threads to use.
         */
        function concurrency_get(): number;
        /**
         * Sets the number of worker threads that vips should use when running a
         * #VipsThreadPool.
         *
         * The special value 0 means "default". In this case, the number of threads
         * is set by the environment variable VIPS_CONCURRENCY, or if that is not
         * set, the number of threads available on the host machine.
         *
         * See also: vips_concurrency_get().
         * @param concurrency number of threads to run
         */
        function concurrency_set(concurrency: number): void;
        /**
         * Get a pointer to the start of the error buffer as a C string.
         * The string is owned by the error system and must not be freed.
         *
         * See also: vips_error_clear().
         * @returns the error buffer as a C string which must not be freed
         */
        function error_buffer(): string;
        /**
         * Return a copy of the vips error buffer, and clear it.
         * @returns a copy of the libvips error buffer
         */
        function error_buffer_copy(): string;
        /**
         * Clear and reset the error buffer. This is typically called after presenting
         * an error to the user.
         *
         * See also: vips_error_buffer().
         */
        function error_clear(): void;
        /**
         * Stop errors being logged. Use vips_error_thaw() to unfreeze. You can
         * nest freeze/thaw pairs.
         */
        function error_freeze(): void;
        /**
         * This function sets the glib error pointer from the vips error buffer and
         * clears it. It's handy for returning errors to glib functions from vips.
         *
         * See vips_g_error() for the inverse operation.
         *
         * See also: g_set_error(), vips_g_error().
         */
        function error_g(): void;
        /**
         * Re-enable error logging.
         */
        function error_thaw(): void;
        /**
         * Given a vips filename like "fred.jpg[Q=90]", return a new string of
         * just the filename part, "fred.jpg" in this case.
         *
         * Useful for language bindings.
         *
         * See also: vips_filename_get_options().
         * @param vips_filename a filename including a set of options
         * @returns transfer full: just the filename component.
         */
        function filename_get_filename(vips_filename: string): string;
        /**
         * Given a vips filename like "fred.jpg[Q=90]", return a new string of
         * just the options part, "[Q=90]" in this case.
         *
         * Useful for language bindings.
         *
         * See also: vips_filename_get_filename().
         * @param vips_filename a filename including a set of options
         * @returns transfer full: just the options component.
         */
        function filename_get_options(vips_filename: string): string;
        /**
         * Return the flags for `filename` using `loader`.
         * `loader` is something like "tiffload" or "VipsForeignLoadTiff".
         * @param loader name of loader to use for test
         * @param filename file to test
         * @returns the flags for @filename.
         */
        function foreign_flags(loader: string, filename: string): ForeignFlags;
        function format_sizeof(format: BandFormat | null): number;
        /**
         * This function adds the %GError to the vips error buffer and clears it. It's
         * the opposite of vips_error_g().
         *
         * See also: vips_error_g().
         */
        function g_error(): void;
        /**
         * See also: VIPS_INIT().
         * @returns a pointer to an internal copy of the argv0 string passed to VIPS_INIT(). Do not free this value
         */
        function get_argv0(): string;
        /**
         * Return the number of bytes at which we flip between open via memory and
         * open via disc. This defaults to 100mb, but can be changed with the
         * VIPS_DISC_THRESHOLD environment variable or the --vips-disc-threshold
         * command-line flag. See vips_image_new_from_file().
         * @returns disc threshold in bytes.
         */
        function get_disc_threshold(): number;
        /**
         * Return the program name. This can be useful for the user tio see,.
         *
         * See also: VIPS_INIT().
         * @returns a pointer to an internal copy of the program name. Do not free this value
         */
        function get_prgname(): string;
        /**
         * vips_guess_libdir() tries to guess the install directory (usually the
         * configure libdir, or $prefix/lib). You should pass
         * in the value of argv[0] (the name your program was run as) as a clue to
         * help it out, plus the name of the environment variable you let the user
         * override your package install area with (eg. "VIPSHOME").
         *
         * On success, vips_guess_libdir() returns the libdir it discovered, and as a
         * side effect, sets the prefix environment variable (if it's not set).
         *
         * Don't free the return string!
         *
         * See also: vips_guess_prefix().
         * @param argv0 program name (typically argv[0])
         * @param env_name save prefix in this environment variable
         * @returns the libdir as a static string, do not free.
         */
        function guess_libdir(argv0: string, env_name: string): string;
        /**
         * vips_guess_prefix() tries to guess the install directory. You should pass
         * in the value of argv[0] (the name your program was run as) as a clue to
         * help it out, plus the name of the environment variable you let the user
         * override your package install area with (eg. "VIPSHOME").
         *
         * On success, vips_guess_prefix() returns the prefix it discovered, and as a
         * side effect, sets the environment variable (if it's not set).
         *
         * Don't free the return string!
         *
         * See also: vips_guess_libdir().
         * @param argv0 program name (typically argv[0])
         * @param env_name save prefix in this environment variable
         * @returns the install prefix as a static string, do not free.
         */
        function guess_prefix(argv0: string, env_name: string): string;
        function icc_is_compatible_profile(image: Image, data: any | null, data_length: number): boolean;
        /**
         * VIPS can optionally be built without the ICC library. Use this function to
         * test for its availability.
         * @returns non-zero if the ICC library is present.
         */
        function icc_present(): number;
        /**
         * This function starts up libvips, see VIPS_INIT().
         *
         * This function is for bindings which need to start up vips. C programs
         * should use the VIPS_INIT() macro, which does some extra checks.
         *
         * See also: VIPS_INIT().
         * @param argv0 name of application
         * @returns 0 on success, -1 otherwise
         */
        function init(argv0: string): number;
        function interpretation_max_alpha(interpretation: Interpretation | null): number;
        /**
         * Turn on or off vips leak checking. See also --vips-leak,
         * vips_add_option_entries() and the `VIPS_LEAK` environment variable.
         *
         * You should call this very early in your program.
         * @param leak turn leak checking on or off
         */
        function leak_set(leak: boolean): void;
        /**
         * g_malloc() local to `object,` that is, the memory will be automatically
         * freed for you when the object is closed. If `object` is %NULL, you need to
         * free the memory explicitly with g_free().
         *
         * This function cannot fail. See vips_tracked_malloc() if you are
         * allocating large amounts of memory.
         *
         * See also: vips_tracked_malloc().
         * @param object allocate memory local to this #VipsObject, or %NULL
         * @param size number of bytes to allocate
         * @returns a pointer to the allocated memory.
         */
        function malloc(object: Object | null, size: number): any | null;
        /**
         * Return the maximum coordinate value. This can be the default, a value set
         * set by the `--vips-max-coord` CLI arg, or a value set in the `VIPS_MAX_COORD`
         * environment variable.
         *
         * These strings can include unit specifiers, eg. "10m" for 10 million pixels.
         * Values above INT_MAX are not supported.
         * @returns The maximum value a coordinate, or image dimension, can have.
         */
        function max_coord_get(): number;
        /**
         * Return the VIPS nickname for a %GType. Handy for language bindings.
         * @param type #GType to search for
         * @returns the class nickname.
         */
        function nickname_find(type: GObject.GType): string;
        /**
         * Return the filename part of a vips7 path. For testing only.
         * @param path path to split
         */
        function path_filename7(path: string): string;
        /**
         * Return the mode part of a vips7 path. For testing only.
         * @param path path to split
         */
        function path_mode7(path: string): string;
        /**
         * If set, vips will print messages about the progress of computation to
         * stdout. This can also be enabled with the --vips-progress option, or by
         * setting the environment variable VIPS_PROGRESS.
         * @param progress %TRUE to enable progress messages
         */
        function progress_set(progress: boolean): void;
        /**
         * Pythagorean distance between two points in colour space. Lab/XYZ/CMC etc.
         * @param L1 Input coordinate 1
         * @param a1 Input coordinate 1
         * @param b1 Input coordinate 1
         * @param L2 Input coordinate 2
         * @param a2 Input coordinate 2
         * @param b2 Input coordinate 2
         */
        function pythagoras(L1: number, a1: number, b1: number, L2: number, a2: number, b2: number): number;
        /**
         * Call this to drop caches, close plugins, terminate background threads, and
         * finalize any internal library testing.
         *
         * vips_shutdown() is optional. If you don't call it, your platform will
         * clean up for you. The only negative consequences are that the leak checker
         * and the profiler will not work.
         *
         * You may call VIPS_INIT() many times and vips_shutdown() many times, but you
         * must not call VIPS_INIT() after vips_shutdown(). In other words, you cannot
         * stop and restart libvips.
         *
         * See also: vips_profile_set(), vips_leak_set().
         */
        function shutdown(): void;
        /**
         * g_strdup() a string. When `object` is freed, the string will be freed for
         * you.  If `object` is %NULL, you need to
         * free the memory yourself with g_free().
         *
         * This function cannot fail.
         *
         * See also: vips_malloc().
         * @param object allocate memory local to this #VipsObject, or %NULL
         * @param str string to copy
         * @returns a pointer to the allocated memory
         */
        function strdup(object: Object | null, str: string): string;
        /**
         * Free any thread-private data and flush any profiling information.
         *
         * This function needs to be called when a thread that has been using vips
         * exits. It is called for you by vips_shutdown() and for any threads created
         * within the #VipsThreadPool.
         *
         * You will need to call it from threads created in
         * other ways or there will be memory leaks. If you do not call it, vips
         * will generate a warning message.
         *
         * It may be called many times, and you can continue using vips after
         * calling it. Calling it too often will reduce performance.
         */
        function thread_shutdown(): void;
        /**
         * Allocate an area of memory aligned on a boundary specified
         * by `align` that will be tracked by vips_tracked_get_mem()
         * and friends.
         *
         * If allocation fails, vips_tracked_aligned_alloc() returns %NULL
         * and sets an error message.
         *
         * You must only free the memory returned with vips_tracked_aligned_free().
         *
         * See also: vips_tracked_malloc(), vips_tracked_aligned_free(), vips_malloc().
         * @param size number of bytes to allocate
         * @param align specifies the alignment
         * @returns a pointer to the allocated memory, or %NULL on error.
         */
        function tracked_aligned_alloc(size: number, align: number): any | null;
        /**
         * Only use it to free memory that was
         * previously allocated with vips_tracked_aligned_alloc()
         * with a %NULL first argument.
         *
         * See also: vips_tracked_aligned_alloc().
         * @param s memory to free
         */
        function tracked_aligned_free(s?: any | null): void;
        /**
         * Exactly as close(2), but update the number of files currently open via
         * vips_tracked_get_files(). This is used
         * by the vips operation cache to drop cache when the number of files
         * available is low.
         *
         * You must only close file descriptors opened with vips_tracked_open().
         *
         * See also: vips_tracked_open(), vips_tracked_get_files().
         * @param fd file to close()
         * @returns a file descriptor, or -1 on error.
         */
        function tracked_close(fd: number): number;
        /**
         * Only use it to free memory that was
         * previously allocated with vips_tracked_malloc()
         * with a %NULL first argument.
         *
         * See also: vips_tracked_malloc().
         * @param s memory to free
         */
        function tracked_free(s?: any | null): void;
        /**
         * Returns the number of active allocations.
         * @returns the number of active allocations
         */
        function tracked_get_allocs(): number;
        /**
         * Returns the number of open files.
         * @returns the number of open files
         */
        function tracked_get_files(): number;
        /**
         * Returns the number of bytes currently allocated via vips_malloc() and
         * friends. vips uses this figure to decide when to start dropping cache, see
         * #VipsOperation.
         * @returns the number of currently allocated bytes
         */
        function tracked_get_mem(): number;
        /**
         * Returns the largest number of bytes simultaneously allocated via
         * vips_tracked_malloc(). Handy for estimating max memory requirements for a
         * program.
         * @returns the largest number of currently allocated bytes
         */
        function tracked_get_mem_highwater(): number;
        /**
         * Allocate an area of memory that will be tracked by vips_tracked_get_mem()
         * and friends.
         *
         * If allocation fails, vips_tracked_malloc() returns %NULL and
         * sets an error message.
         *
         * You must only free the memory returned with vips_tracked_free().
         *
         * See also: vips_tracked_free(), vips_malloc().
         * @param size number of bytes to allocate
         * @returns a pointer to the allocated memory, or %NULL on error.
         */
        function tracked_malloc(size: number): any | null;
        /**
         * Exactly as open(2), but the number of files currently open via
         * vips_tracked_open() is available via vips_tracked_get_files(). This is used
         * by the vips operation cache to drop cache when the number of files
         * available is low.
         *
         * You must only close the file descriptor with vips_tracked_close().
         *
         * `pathname` should be utf8.
         *
         * See also: vips_tracked_close(), vips_tracked_get_files().
         * @param pathname name of file to open
         * @param flags flags for open()
         * @param mode open mode
         * @returns a file descriptor, or -1 on error.
         */
        function tracked_open(pathname: string, flags: number, mode: number): number;
        function type_depth(type: GObject.GType): number;
        /**
         * Search below `basename,` return the %GType of the class whose name or
         * `nickname` matches, or 0 for not found.
         * If `basename` is NULL, the whole of #VipsObject is searched.
         *
         * This function uses a cache, so it should be quick.
         *
         * See also: vips_class_find()
         * @param basename name of base class
         * @param nickname search for a class with this nickname
         * @returns the %GType of the class, or 0 if the class is not found.
         */
        function type_find(basename: string, nickname: string): GObject.GType;
        /**
         * Get the pointer from an area. Don't touch count (area is static).
         * @param value get from this value
         * @returns The pointer held by @value.
         */
        function value_get_area(value: GObject.Value | any): [any | null, number];
        /**
         * Return the pointer to the array held by `value`.
         * Optionally return the other properties of the array in `n,` `type,`
         * `sizeof_type`.
         *
         * See also: vips_value_set_array().
         * @param value %GValue to get from
         * @returns The array address.
         */
        function value_get_array(value: GObject.Value | any): [any | null, number, GObject.GType | null, number];
        /**
         * Return the start of the array of doubles held by `value`.
         * optionally return the number of elements in `n`.
         *
         * See also: vips_array_double_new().
         * @param value %GValue to get from
         * @returns The array address.
         */
        function value_get_array_double(value: GObject.Value | any): number[];
        /**
         * Return the start of the array of images held by `value`.
         * optionally return the number of elements in `n`.
         *
         * See also: vips_value_set_array_image().
         * @param value %GValue to get from
         * @returns The array address.
         */
        function value_get_array_image(value: GObject.Value | any): Image[];
        /**
         * Return the start of the array of ints held by `value`.
         * optionally return the number of elements in `n`.
         *
         * See also: vips_array_int_new().
         * @param value %GValue to get from
         * @returns The array address.
         */
        function value_get_array_int(value: GObject.Value | any): number[];
        /**
         * Returns the data pointer from a blob. Optionally returns the length too.
         *
         * blobs are things like ICC profiles or EXIF data. They are relocatable, and
         * are saved to VIPS files for you coded as base64 inside the XML. They are
         * copied by copying reference-counted pointers.
         *
         * See also: vips_value_set_blob()
         * @param value GValue to set
         * @returns The pointer held by @value.
         */
        function value_get_blob(value: GObject.Value | any): Uint8Array;
        /**
         * Get the C string held internally by the %GValue.
         * @param value %GValue to get from
         * @returns The C string held by @value.
         */
        function value_get_ref_string(value: GObject.Value | any): [string, number];
        /**
         * Get the C string held internally by the GValue.
         * @param value GValue to get from
         * @returns The C string held by @value.
         */
        function value_get_save_string(value: GObject.Value | any): string;
        function value_is_null(psoec: GObject.ParamSpec, value: GObject.Value | any): boolean;
        /**
         * Set value to be a ref-counted area of memory with a free function.
         * @param value set this value
         * @param free_fn data will be freed with this function
         */
        function value_set_area(value: GObject.Value | any, free_fn?: CallbackFn | null): void;
        /**
         * Set `value` to be an array of things.
         *
         * This allocates memory but does not
         * initialise the contents: get the pointer and write instead.
         * @param n number of elements
         * @param type the type of each element
         * @param sizeof_type the sizeof each element
         */
        function value_set_array(n: number, type: GObject.GType, sizeof_type: number): unknown;
        /**
         * Set `value` to hold a copy of `array`. Pass in the array length in `n`.
         *
         * See also: vips_array_double_get().
         * @param value %GValue to get from
         * @param array array of doubles
         */
        function value_set_array_double(value: GObject.Value | any, array?: number[] | null): void;
        /**
         * Set `value` to hold an array of images. Pass in the array length in `n`.
         *
         * See also: vips_array_image_get().
         * @param value %GValue to get from
         * @param n the number of elements
         */
        function value_set_array_image(value: GObject.Value | any, n: number): void;
        /**
         * Set `value` to hold a copy of `array`. Pass in the array length in `n`.
         *
         * See also: vips_array_int_get().
         * @param value %GValue to get from
         * @param array array of ints
         */
        function value_set_array_int(value: GObject.Value | any, array?: number[] | null): void;
        /**
         * Set `value` to hold an array of %GObject. Pass in the array length in `n`.
         *
         * See also: vips_value_get_array_object().
         * @param n the number of elements
         */
        function value_set_array_object(n: number): unknown;
        /**
         * Sets `value` to hold a `data`. When `value` is freed, `data` will be
         * freed with `free_fn`. `value` also holds a note of the size of the memory
         * area.
         *
         * blobs are things like ICC profiles or EXIF data. They are relocatable, and
         * are saved to VIPS files for you coded as base64 inside the XML. They are
         * copied by copying reference-counted pointers.
         *
         * See also: vips_value_get_blob()
         * @param free_fn free function for @data
         * @param data pointer to area of memory
         */
        function value_set_blob(free_fn: CallbackFn | null, data: Uint8Array | string): unknown;
        /**
         * Just like vips_value_set_blob(), but when
         * `value` is freed, `data` will be
         * freed with g_free().
         *
         * This can be easier to call for language bindings.
         *
         * See also: vips_value_set_blob()
         * @param value GValue to set
         * @param data pointer to area of memory
         */
        function value_set_blob_free(value: GObject.Value | any, data: Uint8Array | string): void;
        /**
         * Copies the C string `str` into `value`.
         *
         * vips_ref_string are immutable C strings that are copied between images by
         * copying reference-counted pointers, making them much more efficient than
         * regular %GValue strings.
         *
         * `str` should be a valid utf-8 string.
         * @param str C string to copy into the GValue
         */
        function value_set_ref_string(str: string): unknown;
        /**
         * Copies the C string into `value`.
         *
         * `str` should be a valid utf-8 string.
         * @param str C string to copy into the GValue
         */
        function value_set_save_string(str: string): unknown;
        /**
         * Get the major, minor or micro library version, with `flag` values 0, 1 and
         * 2.
         *
         * Get the ABI current, revision and age (as used by Meson) with `flag`
         * values 3, 4, 5.
         * @param flag which field of the version to get
         * @returns library version number
         */
        function version(flag: number): number;
        /**
         * Get the VIPS version as a static string, including a build date and time.
         * Do not free.
         * @returns a static version string
         */
        function version_string(): string;
        interface ArgumentClassMapFn {
            (
                object_class: typeof Object,
                pspec: GObject.ParamSpec,
                argument_class: ArgumentClass,
                a?: any | null,
                b?: any | null,
            ): any | null;
        }
        interface ArgumentMapFn {
            (
                object: Object,
                pspec: GObject.ParamSpec,
                argument_class: ArgumentClass,
                argument_instance: ArgumentInstance,
                a?: any | null,
                b?: any | null,
            ): any | null;
        }
        interface CallbackFn {
            (a?: any | null, b?: any | null): number;
        }
        interface ClassMapFn {
            (cls: typeof Object, a?: any | null): any | null;
        }
        interface GenerateFn {
            (out: Region, seq: any | null, a: any | null, b: any | null, stop: boolean): number;
        }
        interface ImageMapFn {
            (image: Image, name: string, value: GObject.Value | any, a?: any | null): any | null;
        }
        interface InterpolateMethod {
            (interpolate: Interpolate, out: any | null, _in: Region, x: number, y: number): void;
        }
        interface ObjectSetArguments {
            (object: Object, a?: any | null, b?: any | null): any | null;
        }
        interface OperationBuildFn {
            (object: Object): boolean;
        }
        interface SListFold2Fn {
            (item?: any | null, a?: any | null, b?: any | null, c?: any | null): any | null;
        }
        interface SListMap2Fn {
            (item?: any | null, a?: any | null, b?: any | null): any | null;
        }
        interface SListMap4Fn {
            (item?: any | null, a?: any | null, b?: any | null, c?: any | null, d?: any | null): any | null;
        }
        interface StartFn {
            (out: Image, a?: any | null, b?: any | null): any | null;
        }
        interface StopFn {
            (seq?: any | null, a?: any | null, b?: any | null): number;
        }
        interface TypeMap2Fn {
            (type: GObject.GType, a?: any | null, b?: any | null): any | null;
        }
        interface TypeMapFn {
            (type: GObject.GType, a?: any | null): any | null;
        }
        /**
         * Flags we associate with each object argument.
         *
         * Have separate input & output flags. Both set is an error; neither set is OK.
         *
         * Input gobjects are automatically reffed, output gobjects automatically ref
         * us. We also automatically watch for "destroy" and unlink.
         *
         * `VIPS_ARGUMENT_SET_ALWAYS` is handy for arguments which are set from C. For
         * example, VipsImage::width is a property that gives access to the Xsize
         * member of struct _VipsImage. We default its 'assigned' to TRUE
         * since the field is always set directly by C.
         *
         * `VIPS_ARGUMENT_DEPRECATED` arguments are not shown in help text, are not
         * looked for if required, are not checked for "have-been-set". You can
         * deprecate a required argument, but you must obviously add a new required
         * argument if you do.
         *
         * Input args with `VIPS_ARGUMENT_MODIFY` will be modified by the operation.
         * This is used for things like the in-place drawing operations.
         *
         * `VIPS_ARGUMENT_NON_HASHABLE` stops the argument being used in hash and
         * equality tests. It's useful for arguments like `revalidate` which
         * control the behaviour of the operator cache.
         */

        /**
         * Flags we associate with each object argument.
         *
         * Have separate input & output flags. Both set is an error; neither set is OK.
         *
         * Input gobjects are automatically reffed, output gobjects automatically ref
         * us. We also automatically watch for "destroy" and unlink.
         *
         * `VIPS_ARGUMENT_SET_ALWAYS` is handy for arguments which are set from C. For
         * example, VipsImage::width is a property that gives access to the Xsize
         * member of struct _VipsImage. We default its 'assigned' to TRUE
         * since the field is always set directly by C.
         *
         * `VIPS_ARGUMENT_DEPRECATED` arguments are not shown in help text, are not
         * looked for if required, are not checked for "have-been-set". You can
         * deprecate a required argument, but you must obviously add a new required
         * argument if you do.
         *
         * Input args with `VIPS_ARGUMENT_MODIFY` will be modified by the operation.
         * This is used for things like the in-place drawing operations.
         *
         * `VIPS_ARGUMENT_NON_HASHABLE` stops the argument being used in hash and
         * equality tests. It's useful for arguments like `revalidate` which
         * control the behaviour of the operator cache.
         */
        export namespace ArgumentFlags {
            export const $gtype: GObject.GType<ArgumentFlags>;
        }

        enum ArgumentFlags {
            /**
             * no flags
             */
            NONE,
            /**
             * must be set in the constructor
             */
            REQUIRED,
            /**
             * can only be set in the constructor
             */
            CONSTRUCT,
            /**
             * can only be set once
             */
            SET_ONCE,
            /**
             * don't do use-before-set checks
             */
            SET_ALWAYS,
            /**
             * is an input argument (one we depend on)
             */
            INPUT,
            /**
             * is an output argument (depends on us)
             */
            OUTPUT,
            /**
             * just there for back-compat, hide
             */
            DEPRECATED,
            /**
             * the input argument will be modified
             */
            MODIFY,
            /**
             * the argument is non-hashable
             */
            NON_HASHABLE,
        }
        /**
         * Some hints about the image loader.
         *
         * #VIPS_FOREIGN_PARTIAL means that the image can be read directly from the
         * file without needing to be unpacked to a temporary image first.
         *
         * #VIPS_FOREIGN_SEQUENTIAL means that the loader supports lazy reading, but
         * only top-to-bottom (sequential) access. Formats like PNG can read sets of
         * scanlines, for example, but only in order.
         *
         * If neither PARTIAL or SEQUENTIAL is set, the loader only supports whole
         * image read. Setting both PARTIAL and SEQUENTIAL is an error.
         *
         * #VIPS_FOREIGN_BIGENDIAN means that image pixels are most-significant byte
         * first. Depending on the native byte order of the host machine, you may
         * need to swap bytes. See vips_copy().
         */

        /**
         * Some hints about the image loader.
         *
         * #VIPS_FOREIGN_PARTIAL means that the image can be read directly from the
         * file without needing to be unpacked to a temporary image first.
         *
         * #VIPS_FOREIGN_SEQUENTIAL means that the loader supports lazy reading, but
         * only top-to-bottom (sequential) access. Formats like PNG can read sets of
         * scanlines, for example, but only in order.
         *
         * If neither PARTIAL or SEQUENTIAL is set, the loader only supports whole
         * image read. Setting both PARTIAL and SEQUENTIAL is an error.
         *
         * #VIPS_FOREIGN_BIGENDIAN means that image pixels are most-significant byte
         * first. Depending on the native byte order of the host machine, you may
         * need to swap bytes. See vips_copy().
         */
        export namespace ForeignFlags {
            export const $gtype: GObject.GType<ForeignFlags>;
        }

        enum ForeignFlags {
            /**
             * no flags set
             */
            NONE,
            /**
             * the image may be read lazilly
             */
            PARTIAL,
            /**
             * image pixels are most-significant byte first
             */
            BIGENDIAN,
            /**
             * top-to-bottom lazy reading
             */
            SEQUENTIAL,
            ALL,
        }
        /**
         * Which metadata to retain.
         */

        /**
         * Which metadata to retain.
         */
        export namespace ForeignKeep {
            export const $gtype: GObject.GType<ForeignKeep>;
        }

        enum ForeignKeep {
            /**
             * don't attach metadata
             */
            NONE,
            /**
             * keep Exif metadata
             */
            EXIF,
            /**
             * keep XMP metadata
             */
            XMP,
            /**
             * keep IPTC metadata
             */
            IPTC,
            /**
             * keep ICC metadata
             */
            ICC,
            /**
             * keep other metadata (e.g. PNG comments and some TIFF tags)
             */
            OTHER,
            /**
             * keep all metadata
             */
            ALL,
        }
        /**
         * http://www.w3.org/TR/PNG-Filters.html
         * The values mirror those of png.h in libpng.
         */

        /**
         * http://www.w3.org/TR/PNG-Filters.html
         * The values mirror those of png.h in libpng.
         */
        export namespace ForeignPngFilter {
            export const $gtype: GObject.GType<ForeignPngFilter>;
        }

        enum ForeignPngFilter {
            /**
             * no filtering
             */
            NONE,
            /**
             * difference to the left
             */
            SUB,
            /**
             * difference up
             */
            UP,
            /**
             * average of left and up
             */
            AVG,
            /**
             * pick best neighbor predictor automatically
             */
            PAETH,
            /**
             * adaptive
             */
            ALL,
        }
        /**
         * Flags we associate with an operation.
         *
         * `VIPS_OPERATION_SEQUENTIAL` means that the operation works like vips_conv():
         * it can process images top-to-bottom with only small non-local
         * references.
         *
         * Every scan-line must be requested, you are not allowed to skip
         * ahead, but as a special case, the very first request can be for a region
         * not at the top of the image. In this case, the first part of the image will
         * be read and discarded
         *
         * Every scan-line must be requested, you are not allowed to skip
         * ahead, but as a special case, the very first request can be for a region
         * not at the top of the image. In this case, the first part of the image will
         * be read and discarded
         *
         * `VIPS_OPERATION_NOCACHE` means that the operation must not be cached by
         * vips.
         *
         * `VIPS_OPERATION_DEPRECATED` means this is an old operation kept in vips for
         * compatibility only and should be hidden from users.
         *
         * `VIPS_OPERATION_UNTRUSTED` means the operation depends on external libraries
         * which have not been hardened against attack. It should probably not be used
         * on untrusted input. Use vips_block_untrusted_set() to block all
         * untrusted operations.
         *
         * `VIPS_OPERATION_BLOCKED` means the operation is prevented from executing. Use
         * vips_operation_block_set() to enable and disable groups of operations.
         *
         * `VIPS_OPERATION_REVALIDATE` force the operation to run, updating the cache
         * with the new value. This is used by eg. VipsForeignLoad to implement the
         * "revalidate" argument.
         */

        /**
         * Flags we associate with an operation.
         *
         * `VIPS_OPERATION_SEQUENTIAL` means that the operation works like vips_conv():
         * it can process images top-to-bottom with only small non-local
         * references.
         *
         * Every scan-line must be requested, you are not allowed to skip
         * ahead, but as a special case, the very first request can be for a region
         * not at the top of the image. In this case, the first part of the image will
         * be read and discarded
         *
         * Every scan-line must be requested, you are not allowed to skip
         * ahead, but as a special case, the very first request can be for a region
         * not at the top of the image. In this case, the first part of the image will
         * be read and discarded
         *
         * `VIPS_OPERATION_NOCACHE` means that the operation must not be cached by
         * vips.
         *
         * `VIPS_OPERATION_DEPRECATED` means this is an old operation kept in vips for
         * compatibility only and should be hidden from users.
         *
         * `VIPS_OPERATION_UNTRUSTED` means the operation depends on external libraries
         * which have not been hardened against attack. It should probably not be used
         * on untrusted input. Use vips_block_untrusted_set() to block all
         * untrusted operations.
         *
         * `VIPS_OPERATION_BLOCKED` means the operation is prevented from executing. Use
         * vips_operation_block_set() to enable and disable groups of operations.
         *
         * `VIPS_OPERATION_REVALIDATE` force the operation to run, updating the cache
         * with the new value. This is used by eg. VipsForeignLoad to implement the
         * "revalidate" argument.
         */
        export namespace OperationFlags {
            export const $gtype: GObject.GType<OperationFlags>;
        }

        enum OperationFlags {
            /**
             * no flags
             */
            NONE,
            /**
             * can work sequentially with a small buffer
             */
            SEQUENTIAL,
            SEQUENTIAL_UNBUFFERED,
            /**
             * must not be cached
             */
            NOCACHE,
            /**
             * a compatibility thing
             */
            DEPRECATED,
            /**
             * not hardened for untrusted input
             */
            UNTRUSTED,
            /**
             * prevent this operation from running
             */
            BLOCKED,
            /**
             * force the operation to run
             */
            REVALIDATE,
        }
        module Foreign {
            // Constructor properties interface

            interface ConstructorProps extends Operation.ConstructorProps {}
        }

        abstract class Foreign extends Operation {
            static $gtype: GObject.GType<Foreign>;

            // Fields

            parent_object: Operation;

            // Constructors

            constructor(properties?: Partial<Foreign.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Searches for an operation you could use to load `filename`. Any trailing
             * options on `filename` are stripped and ignored.
             *
             * See also: vips_foreign_find_load_buffer(), vips_image_new_from_file().
             * @param filename file to find a loader for
             */
            static find_load(filename: string): string;
            /**
             * Searches for an operation you could use to load a memory buffer. To see the
             * range of buffer loaders supported by your vips, try something like:
             *
             * 	vips -l | grep load_buffer
             *
             * See also: vips_image_new_from_buffer().
             * @param data start of memory buffer
             */
            static find_load_buffer(data: Uint8Array | string): string;
            /**
             * Searches for an operation you could use to load a source. To see the
             * range of source loaders supported by your vips, try something like:
             *
             * 	vips -l | grep load_source
             *
             * See also: vips_image_new_from_source().
             * @param source source to load from
             */
            static find_load_source(source: Source): string;
            /**
             * Searches for an operation you could use to write to `filename`.
             * Any trailing options on `filename` are stripped and ignored.
             *
             * See also: vips_foreign_find_save_buffer(), vips_image_write_to_file().
             * @param filename name to find a saver for
             */
            static find_save(filename: string): string | null;
            /**
             * Searches for an operation you could use to write to a buffer in `suffix`
             * format.
             *
             * See also: vips_image_write_to_buffer().
             * @param suffix name to find a saver for
             */
            static find_save_buffer(suffix: string): string | null;
            /**
             * Searches for an operation you could use to write to a target in `suffix`
             * format.
             *
             * See also: vips_image_write_to_buffer().
             * @param suffix format to find a saver for
             */
            static find_save_target(suffix: string): string | null;
            /**
             * Get a %NULL-terminated array listing all the supported suffixes.
             *
             * This is not the same as all the supported file types, since libvips
             * detects image format for load by testing the first few bytes.
             *
             * Use vips_foreign_find_load() to detect type for a specific file.
             *
             * Free the return result with g_strfreev().
             */
            static get_suffixes(): string[];
            /**
             * Return %TRUE if `filename` can be loaded by `loader`. `loader` is something
             * like "tiffload" or "VipsForeignLoadTiff".
             * @param loader name of loader to use for test
             * @param filename file to test
             */
            static is_a(loader: string, filename: string): boolean;
            /**
             * Return %TRUE if `data` can be loaded by `loader`. `loader` is something
             * like "tiffload_buffer" or "VipsForeignLoadTiffBuffer".
             * @param loader name of loader to use for test
             * @param data pointer to the buffer to test
             */
            static is_a_buffer(loader: string, data: Uint8Array | string): boolean;
            /**
             * Return %TRUE if `source` can be loaded by `loader`. `loader` is something
             * like "tiffload_source" or "VipsForeignLoadTiffSource".
             * @param loader name of loader to use for test
             * @param source source to test
             */
            static is_a_source(loader: string, source: Source): boolean;
            /**
             * Apply a function to every #VipsForeignClass that VIPS knows about. Foreigns
             * are presented to the function in priority order.
             *
             * Like all VIPS map functions, if `fn` returns %NULL, iteration continues. If
             * it returns non-%NULL, iteration terminates and that value is returned. The
             * map function returns %NULL if all calls return %NULL.
             *
             * See also: vips_slist_map().
             * @param base base class to search below (eg. "VipsForeignLoad")
             * @param fn function to apply to each #VipsForeignClass
             * @param a user data
             * @param b user data
             */
            static map(base: string, fn: SListMap2Fn, a?: any | null, b?: any | null): any | null;
        }

        module ForeignLoad {
            // Constructor properties interface

            interface ConstructorProps extends Foreign.ConstructorProps {
                access: Access;
                disc: boolean;
                fail: boolean;
                fail_on: FailOn;
                failOn: FailOn;
                flags: ForeignFlags;
                memory: boolean;
                out: Image;
                revalidate: boolean;
                sequential: boolean;
            }
        }

        abstract class ForeignLoad extends Foreign {
            static $gtype: GObject.GType<ForeignLoad>;

            // Properties

            get access(): Access;
            set access(val: Access);
            get disc(): boolean;
            set disc(val: boolean);
            get fail(): boolean;
            set fail(val: boolean);
            get fail_on(): FailOn;
            set fail_on(val: FailOn);
            get failOn(): FailOn;
            set failOn(val: FailOn);
            get flags(): ForeignFlags;
            set flags(val: ForeignFlags);
            get memory(): boolean;
            set memory(val: boolean);
            get out(): Image;
            set out(val: Image);
            get revalidate(): boolean;
            set revalidate(val: boolean);
            get sequential(): boolean;
            set sequential(val: boolean);

            // Fields

            parent_object: Foreign;
            real: Image;
            nocache: boolean;
            error: boolean;

            // Constructors

            constructor(properties?: Partial<ForeignLoad.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            vfunc_get_flags(): ForeignFlags;
            // Conflicted with Vips.Operation.vfunc_get_flags
            vfunc_get_flags(...args: never[]): any;
            vfunc_header(): number;
            vfunc_load(): number;
        }

        module ForeignSave {
            // Constructor properties interface

            interface ConstructorProps extends Foreign.ConstructorProps {
                background: ArrayDouble;
                in: Image;
                keep: ForeignKeep;
                page_height: number;
                pageHeight: number;
                profile: string;
                strip: boolean;
            }
        }

        abstract class ForeignSave extends Foreign {
            static $gtype: GObject.GType<ForeignSave>;

            // Properties

            get background(): ArrayDouble;
            set background(val: ArrayDouble);
            get in(): Image;
            set in(val: Image);
            get keep(): ForeignKeep;
            set keep(val: ForeignKeep);
            get page_height(): number;
            set page_height(val: number);
            get pageHeight(): number;
            set pageHeight(val: number);
            get profile(): string;
            set profile(val: string);
            get strip(): boolean;
            set strip(val: boolean);

            // Fields

            parent_object: Foreign;
            ready: Image;

            // Constructors

            constructor(properties?: Partial<ForeignSave.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module Image {
            // Signal callback interfaces

            interface Eval {
                (progress: Progress): void;
            }

            interface Invalidate {
                (): void;
            }

            interface Minimise {
                (): void;
            }

            interface Posteval {
                (progress: Progress): void;
            }

            interface Preeval {
                (progress: Progress): void;
            }

            interface Written {
                (result: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {
                bands: number;
                coding: Coding;
                demand: DemandStyle;
                filename: string;
                foreign_buffer: any;
                foreignBuffer: any;
                format: BandFormat;
                height: number;
                interpretation: Interpretation;
                kill: boolean;
                mode: string;
                sizeof_header: number;
                sizeofHeader: number;
                width: number;
                xoffset: number;
                xres: number;
                yoffset: number;
                yres: number;
            }
        }

        /**
         * An image. These can represent an image on disc, a memory buffer, an image
         * in the process of being written to disc or a partially evaluated image
         * in memory.
         */
        class Image extends Object {
            static $gtype: GObject.GType<Image>;

            // Properties

            get bands(): number;
            set bands(val: number);
            get coding(): Coding;
            set coding(val: Coding);
            get demand(): DemandStyle;
            set demand(val: DemandStyle);
            get filename(): string;
            set filename(val: string);
            get foreign_buffer(): any;
            set foreign_buffer(val: any);
            get foreignBuffer(): any;
            set foreignBuffer(val: any);
            get format(): BandFormat;
            set format(val: BandFormat);
            get height(): number;
            set height(val: number);
            get interpretation(): Interpretation;
            set interpretation(val: Interpretation);
            get kill(): boolean;
            set kill(val: boolean);
            get mode(): string;
            set mode(val: string);
            get sizeof_header(): number;
            set sizeof_header(val: number);
            get sizeofHeader(): number;
            set sizeofHeader(val: number);
            get width(): number;
            set width(val: number);
            get xoffset(): number;
            set xoffset(val: number);
            get xres(): number;
            set xres(val: number);
            get yoffset(): number;
            set yoffset(val: number);
            get yres(): number;
            set yres(val: number);

            // Constructors

            constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static memory(): Image;

            static ['new'](): Image;

            static new_from_file_RW(filename: string): Image;

            static new_from_file_raw(
                filename: string,
                xsize: number,
                ysize: number,
                bands: number,
                offset: number,
            ): Image;

            static new_from_image(image: Image, c: number[]): Image;

            static new_from_image1(image: Image, c: number): Image;

            static new_from_memory(
                data: Uint8Array | string,
                width: number,
                height: number,
                bands: number,
                format: BandFormat,
            ): Image;

            static new_from_memory_copy(
                data: Uint8Array | string,
                width: number,
                height: number,
                bands: number,
                format: BandFormat,
            ): Image;

            static new_matrix(width: number, height: number): Image;

            static new_matrix_from_array(width: number, height: number, array: number[]): Image;

            static new_temp_file(format: string): Image;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'eval', callback: (_source: this, progress: Progress) => void): number;
            connect_after(signal: 'eval', callback: (_source: this, progress: Progress) => void): number;
            emit(signal: 'eval', progress: Progress): void;
            connect(signal: 'invalidate', callback: (_source: this) => void): number;
            connect_after(signal: 'invalidate', callback: (_source: this) => void): number;
            emit(signal: 'invalidate'): void;
            connect(signal: 'minimise', callback: (_source: this) => void): number;
            connect_after(signal: 'minimise', callback: (_source: this) => void): number;
            emit(signal: 'minimise'): void;
            connect(signal: 'posteval', callback: (_source: this, progress: Progress) => void): number;
            connect_after(signal: 'posteval', callback: (_source: this, progress: Progress) => void): number;
            emit(signal: 'posteval', progress: Progress): void;
            connect(signal: 'preeval', callback: (_source: this, progress: Progress) => void): number;
            connect_after(signal: 'preeval', callback: (_source: this, progress: Progress) => void): number;
            emit(signal: 'preeval', progress: Progress): void;
            connect(signal: 'written', callback: (_source: this, result: number) => void): number;
            connect_after(signal: 'written', callback: (_source: this, result: number) => void): number;
            emit(signal: 'written', result: number): void;

            // Static methods

            static get_format_max(format: BandFormat): number;

            // Virtual methods

            vfunc_eval(progress: Progress, data?: any | null): void;
            vfunc_invalidate(data?: any | null): void;
            vfunc_minimise(data?: any | null): void;
            vfunc_posteval(progress: Progress, data?: any | null): void;
            vfunc_preeval(progress: Progress, data?: any | null): void;
            vfunc_written(result: number, data?: any | null): void;

            // Methods

            /**
             * Remove the orientation tag on `image`. Also remove any exif orientation tags.
             * You must vips_copy() the image before calling this function since it
             * modifies metadata.
             */
            autorot_remove_angle(): void;
            /**
             * Test if `image` is in a colourspace that vips_colourspace() can process.
             * @returns %TRUE if @image is in a supported colourspace.
             */
            colourspace_issupported(): boolean;
            /**
             * This function allocates memory, renders `image` into it, builds a new
             * image around the memory area, and returns that.
             *
             * If the image is already a simple area of memory, it just refs `image` and
             * returns it.
             *
             * Call this before using the draw operations to make sure you have a
             * memory image that can be modified.
             *
             * vips_copy() adds a null "copy" node to a pipeline. Use that
             * instead if you want to change metadata and not pixels.
             *
             * This operation is thread-safe, unlike vips_image_wio_input().
             *
             * If you are sure that `image` is not shared with another thread (perhaps you
             * have made it yourself), use vips_image_wio_input() instead.
             *
             * See also: vips_image_wio_input().
             * @returns the new #VipsImage, or %NULL on error.
             */
            copy_memory(): Image;
            /**
             * A convenience function to unpack to a format that we can compute with.
             * `out`.coding is always #VIPS_CODING_NONE.
             *
             * This unpacks LABQ to plain LAB. Use vips_LabQ2LabS() for a bit more speed
             * if you need it.
             *
             * See also: vips_image_encode(), vips_LabQ2Lab(), vips_rad2float().
             * @returns 0 on success, or -1 on error.
             */
            decode(): [number, Image];
            /**
             * We often need to know what an image will decode to without actually
             * decoding it, for example, in arg checking.
             *
             * See also: vips_image_decode().
             */
            decode_predict(): [number, number, BandFormat];
            /**
             * A convenience function to pack to a coding. The inverse of
             * vips_image_decode().
             *
             * See also: vips_image_decode().
             * @param coding coding to apply
             * @returns 0 on success, or -1 on error.
             */
            encode(coding: Coding | null): [number, Image];
            /**
             * Loaders can call this on the image they are making if they see a read error
             * from the load library. It signals "invalidate" on the load operation and
             * will cause it to be dropped from cache.
             *
             * If we know a file will cause a read error, we don't want to cache the
             * failing operation, we want to make sure the image will really be opened
             * again if our caller tries again. For example, a broken file might be
             * replaced by a working one.
             */
            foreign_load_invalidate(): void;
            /**
             * Free the externally allocated buffer found in the input image. This function
             * is intended to be used with g_signal_connect.
             * @param buffer the original buffer that was stolen
             */
            free_buffer(buffer?: any | null): void;
            /**
             * Fill `value_copy` with a copy of the header field. `value_copy` must be zeroed
             * but uninitialised.
             *
             * This will return -1 and add a message to the error buffer if the field
             * does not exist. Use vips_image_get_typeof() to test for the
             * existence of a field first if you are not certain it will be there.
             *
             * For example, to read a double from an image (though of course you would use
             * vips_image_get_double() in practice):
             *
             *
             * ```
             * GValue value = G_VALUE_INIT;
             * double d;
             *
             * if (vips_image_get(image, name, &value))
             *     return -1;
             *
             * if (G_VALUE_TYPE(&value) != G_TYPE_DOUBLE) {
             *     vips_error("mydomain",
             *         _("field \"%s\" is of type %s, not double"),
             *         name,
             *         g_type_name(G_VALUE_TYPE(&value)));
             *     g_value_unset(&value);
             *     return -1;
             * }
             *
             * d = g_value_get_double(&value);
             * g_value_unset(&value);
             * ```
             *
             *
             * See also: vips_image_get_typeof(), vips_image_get_double().
             * @param name the name to fetch
             * @returns 0 on success, -1 otherwise.
             */
            get(name: string): [number, unknown];
            /**
             * Gets `data` from `image` under the name `name`. A convenience
             * function over vips_image_get(). Use vips_image_get_typeof() to test for
             * the existence of a piece of metadata.
             *
             * See also: vips_image_set_area(), vips_image_get(),
             * vips_image_get_typeof()
             * @param name metadata name
             * @returns 0 on success, -1 otherwise.
             */
            get_area(name: string): [number, any];
            /**
             * Gets `out` from `im` under the name `name`.
             * The field must be of type
             * #VIPS_TYPE_ARRAY_INT.
             *
             * Do not free `out`. `out` is valid as long as `image` is valid.
             *
             * Use vips_image_get_typeof() to test for the
             * existence of a piece of metadata.
             *
             * See also: vips_image_get(), vips_image_set_image()
             * @param name metadata name
             * @returns 0 on success, -1 otherwise.
             */
            get_array_double(name: string): [number, number[]];
            /**
             * Gets `out` from `im` under the name `name`.
             * The field must be of type
             * #VIPS_TYPE_ARRAY_INT.
             *
             * Do not free `out`. `out` is valid as long as `image` is valid.
             *
             * Use vips_image_get_typeof() to test for the
             * existence of a piece of metadata.
             *
             * See also: vips_image_get(), vips_image_set_image()
             * @param name metadata name
             * @returns 0 on success, -1 otherwise.
             */
            get_array_int(name: string): [number, number[]];
            /**
             * Returns `name` from `image` in `out`.
             * This function will read any field, returning it as a printable string.
             * You need to free the string with g_free() when you are done with it.
             *
             * This will base64-encode BLOBs, for example. Use vips_buf_appendgv() to
             * make a string that's for humans.
             *
             * See also: vips_image_get(), vips_image_get_typeof(), vips_buf_appendgv().
             * @param name field name
             * @returns 0 on success, -1 otherwise.
             */
            get_as_string(name: string): [number, string];
            get_bands(): number;
            /**
             * Gets `data` from `image` under the name `name,` optionally returns its
             * length in `length`. Use vips_image_get_typeof() to test for the existence
             * of a piece of metadata.
             *
             * See also: vips_image_get(), vips_image_get_typeof(), vips_blob_get(),
             * @param name metadata name
             * @returns 0 on success, -1 otherwise.
             */
            get_blob(name: string): [number, Uint8Array];
            get_coding(): Coding;
            /**
             * Fetch and sanity-check #VIPS_CONCURRENCY. Default to 1 if not present or
             * crazy.
             * @param default_concurrency
             * @returns the suggested concurrency for this image
             */
            get_concurrency(default_concurrency: number): number;
            /**
             * Return a pointer to the image's pixel data, if possible. This can involve
             * allocating large amounts of memory and performing a long computation. Image
             * pixels are laid out in band-packed rows.
             *
             * Since this function modifies `image,` it is not threadsafe. Only call it on
             * images which you are sure have not been shared with another thread.
             *
             * See also: vips_image_wio_input(), vips_image_copy_memory().
             * @returns a pointer to pixel data, if possible.
             */
            get_data(): any | null;
            /**
             * Gets `out` from `im` under the name `name`.
             * The value will be transformed into
             * a double, if possible.
             *
             * See also: vips_image_get(), vips_image_get_typeof()
             * @param name field name
             * @returns 0 on success, -1 otherwise.
             */
            get_double(name: string): [number, number];
            /**
             * Get a %NULL-terminated array listing all the metadata field names on `image`.
             * Free the return result with g_strfreev().
             *
             * This is handy for language bindings. From C, it's usually more convenient to
             * use vips_image_map().
             * @returns metadata fields in image, as a %NULL-terminated array.
             */
            get_fields(): string[];
            get_filename(): string;
            get_format(): BandFormat;
            get_height(): number;
            /**
             * This function reads the image history as a C string. The string is owned
             * by VIPS and must not be freed.
             *
             * VIPS tracks the history of each image, that is, the sequence of operations
             * that generated that image. Applications built on VIPS need to call
             * vips_image_history_printf() for each action they perform, setting the
             * command-line equivalent for the action.
             *
             * See also: vips_image_history_printf().
             * @returns The history of @image as a C string. Do not free!
             */
            get_history(): string;
            /**
             * Gets `out` from `im` under the name `name`.
             * The field must be of type
             * #VIPS_TYPE_IMAGE. You must unref `out` with g_object_unref().
             *
             * Use vips_image_get_typeof() to test for the
             * existence of a piece of metadata.
             *
             * See also: vips_image_get(), vips_image_set_image()
             * @param name metadata name
             * @returns 0 on success, -1 otherwise.
             */
            get_image(name: string): [number, Image];
            /**
             * Gets `out` from `im` under the name `name`.
             * The value will be transformed into
             * an int, if possible.
             *
             * See also: vips_image_get(), vips_image_get_typeof()
             * @param name field name
             * @returns 0 on success, -1 otherwise.
             */
            get_int(name: string): [number, number];
            /**
             * Return the #VipsInterpretation set in the image header.
             * Use vips_image_guess_interpretation() if you want a sanity-checked value.
             * @returns the #VipsInterpretation from the image header.
             */
            get_interpretation(): Interpretation;
            /**
             * Image modes are things like `"t"`, meaning a memory buffer, and `"p"`
             * meaning a delayed computation.
             * @returns the image mode.
             */
            get_mode(): string;
            /**
             * Fetch and sanity-check #VIPS_META_N_PAGES. Default to 1 if not present or
             * crazy.
             *
             * This is the number of pages in the image file, not the number of pages that
             * have been loaded into `image`.
             * @returns the number of pages in the image file
             */
            get_n_pages(): number;
            /**
             * Fetch and sanity-check #VIPS_META_N_SUBIFDS. Default to 0 if not present or
             * crazy.
             * @returns the number of subifds in the image file
             */
            get_n_subifds(): number;
            /**
             * Matrix images can have an optional `offset` field for use by integer
             * convolution.
             * @returns the offset.
             */
            get_offset(): number;
            /**
             * Fetch and sanity-check #VIPS_META_ORIENTATION. Default to 1 (no rotate,
             * no flip) if not present or crazy.
             * @returns the image orientation.
             */
            get_orientation(): number;
            /**
             * Return %TRUE if applying the orientation would swap width and height.
             * @returns if width/height will swap
             */
            get_orientation_swap(): boolean;
            /**
             * Multi-page images can have a page height. Fetch it, and sanity check it. If
             * page-height is not set, it defaults to the image height.
             * @returns the page height.
             */
            get_page_height(): number;
            /**
             * Matrix images can have an optional `scale` field for use by integer
             * convolution.
             * @returns the scale.
             */
            get_scale(): number;
            /**
             * Gets `out` from `im` under the name `name`.
             * The field must be of type
             * G_TYPE_STRING, VIPS_TYPE_REF_STRING.
             *
             * Do not free `out`.
             *
             * Use vips_image_get_as_string() to fetch any field as a string.
             *
             * See also: vips_image_get(), vips_image_get_typeof()
             * @param name field name
             * @returns 0 on success, -1 otherwise.
             */
            get_string(name: string): [number, string];
            /**
             * Read the %GType for a header field. Returns zero if there is no
             * field of that name.
             *
             * See also: vips_image_get().
             * @param name the name to search for
             * @returns the %GType of the field, or zero if there is no field of that name.
             */
            get_typeof(name: string): GObject.GType;
            get_width(): number;
            get_xoffset(): number;
            get_xres(): number;
            get_yoffset(): number;
            get_yres(): number;
            /**
             * Return the #VipsBandFormat for an image, guessing a sane value if
             * the set value looks crazy.
             *
             * For example, for a float image tagged as rgb16, we'd return ushort.
             * @returns a sensible #VipsBandFormat for the image.
             */
            guess_format(): BandFormat;
            /**
             * Return the #VipsInterpretation for an image, guessing a sane value if
             * the set value looks crazy.
             * @returns a sensible #VipsInterpretation for the image.
             */
            guess_interpretation(): Interpretation;
            /**
             * Look at an image's interpretation and see if it has extra alpha bands. For
             * example, a 4-band #VIPS_INTERPRETATION_sRGB would, but a six-band
             * #VIPS_INTERPRETATION_MULTIBAND would not.
             *
             * Return %TRUE if `image` has an alpha channel.
             */
            hasalpha(): boolean;
            /**
             * Formats the name/argv as a single string and calls
             * vips_image_history_printf(). A
             * convenience function for command-line prorams.
             *
             * See also: vips_image_get_history().
             * @param name program name
             * @param argv program arguments
             * @returns 0 on success, -1 on error.
             */
            history_args(name: string, argv: string[]): number;
            /**
             * Transform an image from absolute to relative colorimetry using the
             * MediaWhitePoint stored in the ICC profile.
             *
             * See also: vips_icc_transform(), vips_icc_import().
             * @param profile_filename use this profile
             * @returns 0 on success, -1 on error.
             */
            icc_ac2rc(profile_filename: string): [number, Image];
            /**
             * A convenience function to set the header fields after creating an image.
             * Normally you copy the fields from your input images with
             * vips_image_pipelinev() and then make
             * any adjustments you need, but if you are creating an image from scratch,
             * for example vips_black() or vips_jpegload(), you do need to set all the
             * fields yourself.
             *
             * See also: vips_image_pipelinev().
             * @param xsize image width
             * @param ysize image height
             * @param bands image bands
             * @param format band format
             * @param coding image coding
             * @param interpretation image type
             * @param xres horizontal resolution, pixels per millimetre
             * @param yres vertical resolution, pixels per millimetre
             */
            init_fields(
                xsize: number,
                ysize: number,
                bands: number,
                format: BandFormat | null,
                coding: Coding | null,
                interpretation: Interpretation | null,
                xres: number,
                yres: number,
            ): void;
            /**
             * Gets `image` ready for an in-place operation, such as vips_draw_circle().
             * After calling this function you can both read and write the image with
             * VIPS_IMAGE_ADDR().
             *
             * This method is called for you by the base class of the draw operations,
             * there's no need to call it yourself.
             *
             * Since this function modifies `image,` it is not thread-safe. Only call it on
             * images which you are sure have not been shared with another thread.
             * All in-place operations are inherently not thread-safe, so you need to take
             * great care in any case.
             *
             * See also: vips_draw_circle(), vips_image_wio_input().
             * @returns 0 on success, or -1 on error.
             */
            inplace(): number;
            /**
             * Invalidate all pixel caches on `image` and any downstream images, that
             * is, images which depend on this image. Additionally, all operations which
             * depend upon this image are dropped from the VIPS operation cache.
             *
             * You should call this function after
             * destructively modifying an image with something like vips_draw_circle().
             *
             * The #VipsImage::invalidate signal is emitted for all invalidated images.
             *
             * See also: vips_region_invalidate().
             */
            invalidate_all(): void;
            /**
             * Return %TRUE if `image` is in most-significant-
             * byte first form. This is the byte order used on the SPARC
             * architecture and others.
             */
            isMSBfirst(): boolean;
            /**
             * TRUE if any of the images upstream from `image` were opened in sequential
             * mode. Some operations change behaviour slightly in sequential mode to
             * optimize memory behaviour.
             * @returns %TRUE if @image is in sequential mode.
             */
            is_sequential(): boolean;
            /**
             * Return %TRUE if `image` represents a file on disc in some way.
             */
            isfile(): boolean;
            /**
             * If `image` has been killed (see vips_image_set_kill()), set an error message,
             * clear the #VipsImage.kill flag and return %TRUE. Otherwise return %FALSE.
             *
             * Handy for loops which need to run sets of threads which can fail.
             *
             * See also: vips_image_set_kill().
             * @returns %TRUE if @image has been killed.
             */
            iskilled(): boolean;
            /**
             * Return %TRUE if `im` represents a partial image (a delayed calculation).
             */
            ispartial(): boolean;
            /**
             * This function calls `fn` for every header field, including every item of
             * metadata.
             *
             * Like all _map functions, the user function should return %NULL to continue
             * iteration, or a non-%NULL pointer to indicate early termination.
             *
             * See also: vips_image_get_typeof(), vips_image_get().
             * @param fn function to call for each header field
             * @param a user data for function
             * @returns %NULL on success, the failing pointer otherwise.
             */
            map(fn: ImageMapFn, a?: any | null): any | null;
            /**
             * Minimise memory use on this image and any upstream images, that is, images
             * which this image depends upon. This function is called automatically at the
             * end of a computation, but it might be useful to call at other times.
             *
             * The #VipsImage::minimise signal is emitted for all minimised images.
             */
            minimise_all(): void;
            /**
             * Check that an image is readable with vips_region_prepare() and friends.
             * If it isn't, try to transform the image so that vips_region_prepare() can
             * work.
             *
             * See also: vips_image_pio_output(), vips_region_prepare().
             * @returns 0 on success, or -1 on error.
             */
            pio_input(): number;
            /**
             * Check that an image is writeable with vips_image_generate(). If it isn't,
             * try to transform the image so that vips_image_generate() can work.
             *
             * See also: vips_image_pio_input().
             * @returns 0 on success, or -1 on error.
             */
            pio_output(): number;
            /**
             * Prints field `name` to stdout as ASCII. Handy for debugging.
             * @param name field name
             */
            print_field(name: string): void;
            /**
             * Find and remove an item of metadata. Return %FALSE if no metadata of that
             * name was found.
             *
             * See also: vips_image_set(), vips_image_get_typeof().
             * @param name the name to search for
             * @returns %TRUE if an item of metadata of that name was found and removed
             */
            remove(name: string): boolean;
            /**
             * vips_reorder_margin_hint() sets a hint that `image` contains a margin, that
             * is, that each vips_region_prepare() on `image` will request a slightly larger
             * region from it's inputs. A good value for `margin` is (width * height) for
             * the window the operation uses.
             *
             * This information is used by vips_image_prepare_many() to attempt to reorder
             * computations to minimise recomputation.
             *
             * See also: vips_image_prepare_many().
             * @param margin the size of the margin this operation has added
             */
            reorder_margin_hint(margin: number): void;
            /**
             * vips_reorder_prepare_many() runs vips_region_prepare() on each region in
             * `regions,` requesting the pixels in `r`.
             *
             * It tries to request the regions in the order which will cause least
             * recomputation. This can give a large speedup, in some cases.
             *
             * See also: vips_region_prepare(), vips_reorder_margin_hint().
             * @param regions the set of regions to prepare
             * @param r the #VipsRect to prepare on each region
             * @returns 0 on success, or -1 on error.
             */
            reorder_prepare_many(regions: Region[], r: Rect): number;
            /**
             * Set a piece of metadata on `image`. Any old metadata with that name is
             * destroyed. The %GValue is copied into the image, so you need to unset the
             * value when you're done with it.
             *
             * For example, to set an integer on an image (though you would use the
             * convenience function vips_image_set_int() in practice), you would do:
             *
             *
             * ```
             * GValue value = G_VALUE_INIT;
             *
             * g_value_init(&value, G_TYPE_INT);
             * g_value_set_int(&value, 42);
             * vips_image_set(image, name, &value);
             * g_value_unset(&value);
             * ```
             *
             *
             * See also: vips_image_get().
             * @param name the name to give the metadata
             * @param value the %GValue to copy into the image
             */
            set(name: string, value: GObject.Value | any): void;
            // Conflicted with GObject.Object.set
            set(...args: never[]): any;
            /**
             * Attaches `data` as a metadata item on `image` under the name `name`. When
             * VIPS no longer needs the metadata, it will be freed with `free_fn`.
             *
             * See also: vips_image_get_double(), vips_image_set()
             * @param name metadata name
             * @param free_fn free function for @data
             */
            set_area(name: string, free_fn?: CallbackFn | null): void;
            /**
             * Attaches `array` as a metadata item on `image` as `name`.
             * A convenience function over vips_image_set().
             *
             * See also: vips_image_get_image(), vips_image_set().
             * @param name metadata name
             * @param array array of doubles
             */
            set_array_double(name: string, array?: number[] | null): void;
            /**
             * Attaches `array` as a metadata item on `image` as `name`.
             * A convenience function over vips_image_set().
             *
             * See also: vips_image_get_image(), vips_image_set().
             * @param name metadata name
             * @param array array of ints
             */
            set_array_int(name: string, array?: number[] | null): void;
            /**
             * Attaches `data` as a metadata item on `image` under the name `name`.
             *
             * See also: vips_image_get_blob(), vips_image_set().
             * @param name metadata name
             * @param free_fn free function for @data
             * @param data pointer to area of memory
             */
            set_blob(name: string, free_fn: CallbackFn | null, data: Uint8Array | string): void;
            /**
             * Attaches `data` as a metadata item on `image` under the name `name,` taking
             * a copy of the memory area.
             *
             * See also: vips_image_get_blob(), vips_image_set().
             * @param name metadata name
             * @param data pointer to area of memory
             */
            set_blob_copy(name: string, data: Uint8Array | string): void;
            /**
             * Sets the delete_on_close flag for the image. If this flag is set, when
             * `image` is finalized, the filename held in `image->`filename at the time of
             * this call is deleted.
             *
             * This function is clearly extremely dangerous, use with great caution.
             *
             * See also: vips_image_new_temp_file().
             * @param delete_on_close format of file
             */
            set_delete_on_close(delete_on_close: boolean): void;
            /**
             * Attaches `d` as a metadata item on `image` as `name`. A
             * convenience
             * function over vips_image_set().
             *
             * See also: vips_image_get_double(), vips_image_set()
             * @param name metadata name
             * @param d metadata value
             */
            set_double(name: string, d: number): void;
            /**
             * Attaches `im` as a metadata item on `image` as `name`.
             * A convenience function over vips_image_set().
             *
             * See also: vips_image_get_image(), vips_image_set().
             * @param name metadata name
             * @param im metadata value
             */
            set_image(name: string, im: Image): void;
            /**
             * Attaches `i` as a metadata item on `image` under the name `name`. A
             * convenience
             * function over vips_image_set().
             *
             * See also: vips_image_get_int(), vips_image_set()
             * @param name metadata name
             * @param i metadata value
             */
            set_int(name: string, i: number): void;
            /**
             * Set the #VipsImage.kill flag on an image. Handy for stopping sets of
             * threads.
             *
             * See also: vips_image_iskilled().
             * @param kill the kill state
             */
            set_kill(kill: boolean): void;
            /**
             * vips signals evaluation progress via the #VipsImage::preeval,
             * #VipsImage::eval and #VipsImage::posteval
             * signals. Progress is signalled on the most-downstream image for which
             * vips_image_set_progress() was called.
             * @param progress turn progress reporting on or off
             */
            set_progress(progress: boolean): void;
            /**
             * Attaches `str` as a metadata item on `image` as `name`.
             * A convenience
             * function over vips_image_set() using #VIPS_TYPE_REF_STRING.
             *
             * See also: vips_image_get_double(), vips_image_set().
             * @param name metadata name
             * @param str metadata value
             */
            set_string(name: string, str: string): void;
            /**
             * Check that an image is readable via the VIPS_IMAGE_ADDR() macro, that is,
             * that the entire image is in memory and all pixels can be read with
             * VIPS_IMAGE_ADDR().  If it
             * isn't, try to transform it so that VIPS_IMAGE_ADDR() can work.
             *
             * Since this function modifies `image,` it is not thread-safe. Only call it on
             * images which you are sure have not been shared with another thread. If the
             * image might have been shared, use the less efficient
             * vips_image_copy_memory() instead.
             *
             * See also: vips_image_copy_memory(), vips_image_pio_input(),
             * vips_image_inplace(), VIPS_IMAGE_ADDR().
             * @returns 0 on success, or -1 on error.
             */
            wio_input(): number;
            /**
             * Write `image` to `out`. Use vips_image_new() and friends to create the
             * #VipsImage you want to write to.
             *
             * See also: vips_image_new(), vips_copy(), vips_image_write_to_file().
             * @returns 0 on success, or -1 on error.
             */
            write(): [number, Image];
            /**
             * Write a line of pixels to an image. This function must be called repeatedly
             * with `ypos` increasing from 0 to #VipsImage::height .
             * `linebuffer` must be VIPS_IMAGE_SIZEOF_LINE() bytes long.
             *
             * See also: vips_image_generate().
             * @param ypos vertical position of scan-line to write
             * @param linebuffer scanline of pixels
             * @returns 0 on success, or -1 on error.
             */
            write_line(ypos: number, linebuffer: Pel): number;
            /**
             * Call this after setting header fields (width, height, and so on) to
             * allocate resources ready for writing.
             *
             * Normally this function is called for you by vips_image_generate() or
             * vips_image_write_line(). You will need to call it yourself if you plan to
             * write directly to the ->data member of a memory image.
             * @returns 0 on success, or -1 on error.
             */
            write_prepare(): number;
            /**
             * Writes `in` to memory as a simple, unformatted C-style array.
             *
             * The caller is responsible for freeing this memory with g_free().
             *
             * See also: vips_image_write_to_buffer().
             * @returns return buffer start here
             */
            write_to_memory(): Uint8Array;
        }

        module Interpolate {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        abstract class Interpolate extends Object {
            static $gtype: GObject.GType<Interpolate>;

            // Fields

            parent_object: Object;

            // Constructors

            constructor(properties?: Partial<Interpolate.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](nickname: string): Interpolate;

            // Static methods

            /**
             * A convenience function that returns a bilinear interpolator you
             * don't need to free.
             */
            static bilinear_static(): Interpolate;
            /**
             * A convenience function that returns a nearest-neighbour interpolator you
             * don't need to free.
             */
            static nearest_static(): Interpolate;

            // Virtual methods

            /**
             * Look up an interpolators desired window offset.
             */
            vfunc_get_window_offset(): number;
            /**
             * Look up an interpolators desired window size.
             */
            vfunc_get_window_size(): number;
            /**
             * the interpolation method
             * @param out write the interpolated pixel here
             * @param _in read source pixels from here
             * @param x interpolate value at this position
             * @param y interpolate value at this position
             */
            vfunc_interpolate(out: any | null, _in: Region, x: number, y: number): void;

            // Methods

            /**
             * Look up an interpolators desired window offset.
             * @returns the interpolators required window offset
             */
            get_window_offset(): number;
            /**
             * Look up an interpolators desired window size.
             * @returns the interpolators required window size
             */
            get_window_size(): number;
        }

        module Object {
            // Signal callback interfaces

            interface Close {
                (): void;
            }

            interface Postbuild {
                (): number;
            }

            interface Postclose {
                (): void;
            }

            interface Preclose {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                description: string;
                nickname: string;
            }
        }

        abstract class Object extends GObject.Object {
            static $gtype: GObject.GType<Object>;

            // Properties

            get description(): string;
            set description(val: string);
            get nickname(): string;
            set nickname(val: string);

            // Fields

            constructed: boolean;
            static_object: boolean;
            argument_table: ArgumentTable;
            close: boolean;
            postclose: boolean;
            local_memory: number;

            // Constructors

            constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_from_string(object_class: typeof Object, p: string): Object;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'close', callback: (_source: this) => void): number;
            connect_after(signal: 'close', callback: (_source: this) => void): number;
            emit(signal: 'close'): void;
            connect(signal: 'postbuild', callback: (_source: this) => number): number;
            connect_after(signal: 'postbuild', callback: (_source: this) => number): number;
            emit(signal: 'postbuild'): void;
            connect(signal: 'postclose', callback: (_source: this) => void): number;
            connect_after(signal: 'postclose', callback: (_source: this) => void): number;
            emit(signal: 'postclose'): void;
            connect(signal: 'preclose', callback: (_source: this) => void): number;
            connect_after(signal: 'preclose', callback: (_source: this) => void): number;
            emit(signal: 'preclose'): void;

            // Static methods

            static get_property(
                gobject: GObject.Object,
                property_id: number,
                value: GObject.Value | any,
                pspec: GObject.ParamSpec,
            ): void;
            static print_all(): void;
            static print_summary_class(klass: typeof Object): void;
            static sanity_all(): void;
            static set_property(
                gobject: GObject.Object,
                property_id: number,
                value: GObject.Value | any,
                pspec: GObject.ParamSpec,
            ): void;
            static install_argument(
                pspec: GObject.ParamSpec,
                flags: ArgumentFlags,
                priority: number,
                offset: number,
            ): void;

            // Virtual methods

            vfunc_build(): number;
            vfunc_close(): void;
            vfunc_output_to_arg(string: string): number;
            vfunc_postbuild(data?: any | null): number;
            vfunc_postclose(): void;
            vfunc_preclose(): void;
            vfunc_rewind(): void;
            vfunc_sanity(buf: Buf): void;
            /**
             * The inverse of vips_object_new_from_string(): turn `object` into eg.
             * "VipsInterpolateSnohalo1(blur=.333333)".
             * @param buf write string here
             */
            vfunc_to_string(buf: Buf): void;

            // Methods

            /**
             * Convenience: has an argument been assigned. Useful for bindings.
             * @param name arg to fetch
             * @returns %TRUE if the argument has been assigned.
             */
            argument_isset(name: string): boolean;
            argument_needsstring(name: string): boolean;
            build(): number;
            /**
             * Convenience: get the flags for an argument. Useful for bindings.
             * @param name arg to fetch
             * @returns The #VipsArgumentFlags for this argument.
             */
            get_argument_flags(name: string): ArgumentFlags;
            /**
             * Convenience: get the priority for an argument. Useful for bindings.
             * @param name arg to fetch
             * @returns The priority of this argument.
             */
            get_argument_priority(name: string): number;
            get_argument_to_string(name: string, arg: string): number;
            /**
             * Fetch the object description. Useful for language bindings.
             *
             * `object`.description is only available after _build(), which can be too
             * late. This function fetches from the instance, if possible, but falls back
             * to the class description if we are too early.
             * @returns the object description
             */
            get_description(): string;
            local_cb(gobject: GObject.Object): void;
            preclose(): void;
            print_dump(): void;
            print_name(): void;
            print_summary(): void;
            rewind(): void;
            sanity(): boolean;
            set_argument_from_string(name: string, value: string): number;
            /**
             * Set object arguments from a string. The string can be something like
             * "a=12", or "a = 12, b = 13", or "fred". The string can optionally be
             * enclosed in brackets.
             *
             * You'd typically use this between creating the object and building it.
             *
             * See also: vips_object_set(), vips_object_build(),
             * vips_cache_operation_buildp().
             * @param string arguments as a string
             * @returns 0 on success, -1 on error
             */
            set_from_string(string: string): number;
            set_required(value: string): number;
            set_static(static_object: boolean): void;
            /**
             * The inverse of vips_object_new_from_string(): turn `object` into eg.
             * "VipsInterpolateSnohalo1(blur=.333333)".
             * @param buf write string here
             */
            to_string(buf: Buf): void;
            /**
             * Unref all assigned output objects. Useful for language bindings.
             *
             * After an object is built, all output args are owned by the caller. If
             * something goes wrong before then, we have to unref the outputs that have
             * been made so far. This function can also be useful for callers when
             * they've finished processing outputs themselves.
             *
             * See also: vips_cache_operation_build().
             */
            unref_outputs(): void;
        }

        module Operation {
            // Signal callback interfaces

            interface Invalidate {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        abstract class Operation extends Object {
            static $gtype: GObject.GType<Operation>;

            // Fields

            hash: number;
            found_hash: boolean;
            pixels: number;

            // Constructors

            constructor(properties?: Partial<Operation.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name: string): Operation;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'invalidate', callback: (_source: this) => void): number;
            connect_after(signal: 'invalidate', callback: (_source: this) => void): number;
            emit(signal: 'invalidate'): void;

            // Static methods

            /**
             * Set the block state on all operations in the libvips class hierarchy at
             * `name` and below.
             *
             * For example:
             *
             *
             * ```
             * vips_operation_block_set("VipsForeignLoad", TRUE);
             * vips_operation_block_set("VipsForeignLoadJpeg", FALSE);
             * ```
             *
             *
             * Will block all load operations, except JPEG.
             *
             * Use `vips -l` at the command-line to see the class hierarchy.
             *
             * This call does nothing if the named operation is not found.
             *
             * See also: vips_block_untrusted_set().
             * @param name set block state at this point and below
             * @param state the block state to set
             */
            static block_set(name: string, state: boolean): void;

            // Virtual methods

            /**
             * Returns the set of flags for this operation.
             */
            vfunc_get_flags(): OperationFlags;
            vfunc_invalidate(): void;

            // Methods

            /**
             * Returns the set of flags for this operation.
             * @returns 0 on success, or -1 on error.
             */
            get_flags(): OperationFlags;
            invalidate(): void;
        }

        module Region {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {}
        }

        /**
         * A small part of a #VipsImage. `valid` holds the left/top/width/height of the
         * area of pixels that are available from the region.
         *
         * See also: VIPS_REGION_ADDR(), vips_region_new(), vips_region_prepare().
         */
        class Region extends Object {
            static $gtype: GObject.GType<Region>;

            // Fields

            parent_object: Object;
            im: Image;
            valid: Rect;

            // Constructors

            constructor(properties?: Partial<Region.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](image: Image): Region;

            // Methods

            /**
             * Paints 0 into the valid part of `reg`.
             *
             * See also: vips_region_paint().
             */
            black(): void;
            /**
             * The region is transformed so that at least `r` pixels are available as a
             * memory buffer that can be written to.
             * @param r #VipsRect of pixels you need to be able to address
             * @returns 0 on success, or -1 for error.
             */
            buffer(r: Rect): number;
            /**
             * Copy from one region to another. Copy area `r` from inside `reg` to `dest,`
             * positioning the area of pixels at `x,` `y`. The two regions must have pixels
             * which are the same size.
             *
             * See also: vips_region_paint().
             * @param dest destination region
             * @param r #VipsRect of pixels you need to copy
             * @param x position of @r in @dest
             * @param y position of @r in @dest
             */
            copy(dest: Region, r: Rect, x: number, y: number): Region;
            /**
             * Do two regions point to the same piece of image? ie.
             *
             *
             * ```
             * 	VIPS_REGION_ADDR(reg1, x, y) == VIPS_REGION_ADDR(reg2, x, y) &&
             * 	*VIPS_REGION_ADDR(reg1, x, y) ==
             * 		*VIPS_REGION_ADDR(reg2, x, y) for all x, y, reg1, reg2.
             * ```
             *
             * @param reg2 region to test
             * @returns non-zero on equality.
             */
            equalsregion(reg2: Region): number;
            /**
             * Generate an area of pixels and return a copy. The result must be freed
             * with g_free(). The requested area must be completely inside the image.
             *
             * This is equivalent to vips_region_prepare(), followed by a memcpy. It is
             * convenient for language bindings.
             * @param left area of pixels to fetch
             * @param top area of pixels to fetch
             * @param width area of pixels to fetch
             * @param height area of pixels to fetch
             * @param len
             * @returns A copy of the pixel data.
             */
            fetch(left: number, top: number, width: number, height: number, len: number): Pel;
            height(): number;
            /**
             * The region is transformed so that at least `r` pixels are available to be
             * read from the image. The image needs to be a memory buffer or represent a
             * file on disc that has been mapped or can be mapped.
             * @param r #VipsRect of pixels you need to be able to address
             * @returns 0 on success, or -1 for error.
             */
            image(r: Rect): number;
            /**
             * Mark a region as containing invalid pixels. Calling this function means
             * that the next time vips_region_prepare() is called, the region will be
             * recalculated.
             *
             * This is faster than calling vips_image_invalidate_all(), but obviously only
             * affects a single region.
             *
             * See also: vips_image_invalidate_all(), vips_region_prepare().
             */
            invalidate(): void;
            /**
             * Paints `value` into `reg` covering rectangle `r`.
             * `r` is clipped against
             * `reg->`valid.
             *
             * For int images, `value` is
             * passed to memset(), so it usually needs to be 0 or 255. For float images,
             * value is cast to a float and copied in to each band element.
             *
             * `r` is clipped against
             * `reg->`valid.
             *
             * See also: vips_region_black().
             * @param r area to paint
             * @param value value to paint
             */
            paint(r: Rect, value: number): void;
            /**
             * Paints `ink` into `reg` covering rectangle `r`. `r` is clipped against
             * `reg->`valid.
             *
             * `ink` should be a byte array of the same size as an image pixel containing
             * the binary value to write into the pixels.
             *
             * See also: vips_region_paint().
             * @param r area to paint
             * @param ink value to paint
             */
            paint_pel(r: Rect, ink: Pel): void;
            /**
             * Set the position of a region. This only affects reg->valid, ie. the way
             * pixels are addressed, not reg->data, the pixels which are addressed. Clip
             * against the size of the image. Do not allow negative positions, or
             * positions outside the image.
             * @param x position to move to
             * @param y position to move to
             * @returns 0 on success, or -1 for error.
             */
            position(x: number, y: number): number;
            /**
             * vips_region_prepare() fills `reg` with pixels. After calling,
             * you can address at least the area `r` with VIPS_REGION_ADDR() and get
             * valid pixels.
             *
             * vips_region_prepare() runs in-line, that is, computation is done by
             * the calling thread, no new threads are involved, and computation
             * blocks until the pixels are ready.
             *
             * Use vips_sink_screen() to calculate an area of pixels in the
             * background.
             *
             * See also: vips_sink_screen(), vips_region_prepare_to().
             * @param r #VipsRect of pixels you need to be able to address
             * @returns 0 on success, or -1 on error.
             */
            prepare(r: Rect): number;
            /**
             * Like vips_region_prepare(): fill `reg` with the pixels in area `r`.
             *
             * Unlike vips_region_prepare(), rather than writing the result to `reg,` the
             * pixels are written into `dest` at offset `x,` `y`.
             *
             * Also unlike vips_region_prepare(), `dest` is not set up for writing for
             * you with vips_region_buffer(). You can
             * point `dest` at anything, and pixels really will be written there.
             * This makes vips_region_prepare_to() useful for making the ends of
             * pipelines.
             *
             * See also: vips_region_prepare(), vips_sink_disc().
             * @param dest region to write to
             * @param r #VipsRect of pixels you need to be able to address
             * @param x position of @r in @dest
             * @param y position of @r in @dest
             * @returns 0 on success, or -1 on error
             */
            prepare_to(dest: Region, r: Rect, x: number, y: number): number;
            /**
             * Make VIPS_REGION_ADDR() on `reg` go to `dest` instead.
             *
             * `r` is the part of `reg` which you want to be able to address (this
             * effectively becomes the valid field), (`x,` `y)` is the top LH corner of the
             * corresponding area in `dest`.
             *
             * Performs all clipping necessary to ensure that `reg->`valid is indeed
             * valid.
             *
             * If the region we attach to is moved or destroyed, we can be left with
             * dangling pointers! If the region we attach to is on another image, the
             * two images must have the same sizeof(pel).
             * @param dest region to connect to
             * @param r #VipsRect of pixels you need to be able to address
             * @param x position of @r in @dest
             * @param y position of @r in @dest
             * @returns 0 on success, or -1 for error.
             */
            region(dest: Region, r: Rect, x: number, y: number): number;
            /**
             * Write the pixels `target` in `to` from the x2 larger area in `from`.
             * Non-complex uncoded images and LABQ only. Images with alpha (see
             * vips_image_hasalpha()) shrink with pixels scaled by alpha to avoid fringing.
             *
             * `method` selects the method used to do the 2x2 shrink.
             *
             * See also: vips_region_copy().
             * @param to destination region
             * @param target #VipsRect of pixels you need to copy
             * @param method method to use when generating target pixels
             */
            shrink_method(to: Region, target: Rect, method: RegionShrink | null): [number, Region];
            width(): number;
        }

        class Area {
            static $gtype: GObject.GType<Area>;

            // Fields

            data: any;
            length: number;
            n: number;

            // Constructors

            constructor(free_fn?: CallbackFn | null);
            _init(...args: any[]): void;

            static ['new'](free_fn?: CallbackFn | null): Area;

            static new_array(type: GObject.GType, sizeof_type: number, n: number): Area;

            static new_array_object(n: number): Area;

            // Static methods

            static free_cb(mem: any | null, area: Area): number;

            // Methods

            copy(): Area;
            /**
             * Return the data pointer plus optionally the length in bytes of an area,
             * the number of elements, the %GType of each element and the sizeof() each
             * element.
             * @returns The pointer held by @area.
             */
            get_data(): [any | null, number, number, GObject.GType | null, number];
            unref(): void;
        }

        class Argument {
            static $gtype: GObject.GType<Argument>;

            // Fields

            pspec: GObject.ParamSpec;

            // Constructors

            _init(...args: any[]): void;
        }

        class ArgumentClass {
            static $gtype: GObject.GType<ArgumentClass>;

            // Fields

            flags: ArgumentFlags;
            priority: number;
            offset: number;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            needsstring(): boolean;
        }

        class ArgumentInstance {
            static $gtype: GObject.GType<ArgumentInstance>;

            // Fields

            object: Object;
            assigned: boolean;
            close_id: number;
            invalidate_id: number;

            // Constructors

            _init(...args: any[]): void;
        }

        class ArrayDouble {
            static $gtype: GObject.GType<ArrayDouble>;

            // Constructors

            constructor(array: number[]);
            _init(...args: any[]): void;

            static ['new'](array: number[]): ArrayDouble;

            // Methods

            /**
             * Fetch a double array from a #VipsArrayDouble. Useful for language bindings.
             * @returns array of double
             */
            get(): number[];
        }

        class ArrayImage {
            static $gtype: GObject.GType<ArrayImage>;

            // Constructors

            constructor(
                properties?: Partial<{
                    area: Area;
                }>,
            );
            _init(...args: any[]): void;

            static empty(): ArrayImage;

            static ['new'](array: Image[]): ArrayImage;

            static new_from_string(string: string, flags: Access): ArrayImage;

            // Methods

            /**
             * Make a new #VipsArrayImage, one larger than `array,` with `image` appended
             * to the end.
             * Handy with vips_array_image_empty() for bindings
             * which can't handle object array arguments.
             *
             * See also: vips_array_image_empty().
             * @param image add this
             * @returns A new #VipsArrayImage.
             */
            append(image: Image): ArrayImage;
            /**
             * Fetch an image array from a #VipsArrayImage. Useful for language bindings.
             * @returns array of #VipsImage
             */
            get(): Image[];
        }

        class ArrayInt {
            static $gtype: GObject.GType<ArrayInt>;

            // Constructors

            constructor(array: number[]);
            _init(...args: any[]): void;

            static ['new'](array: number[]): ArrayInt;

            // Methods

            /**
             * Fetch an int array from a #VipsArrayInt. Useful for language bindings.
             * @returns array of int
             */
            get(): number[];
        }

        class Blob {
            static $gtype: GObject.GType<Blob>;

            // Constructors

            constructor(free_fn: CallbackFn | null, data: Uint8Array | string);
            _init(...args: any[]): void;

            static ['new'](free_fn: CallbackFn | null, data: Uint8Array | string): Blob;

            // Static methods

            /**
             * Like vips_blob_new(), but take a copy of the data. Useful for bindings
             * which struggle with callbacks.
             *
             * See also: vips_blob_new().
             * @param data data to store
             */
            static copy(data: Uint8Array | string): Blob;

            // Methods

            /**
             * Get the data from a #VipsBlob.
             *
             * See also: vips_blob_new().
             * @returns the data
             */
            get(): Uint8Array;
            /**
             * Any old data is freed and new data attached.
             *
             * It's sometimes useful to be able to create blobs as empty and then fill
             * them later.
             *
             * See also: vips_blob_new().
             * @param free_fn @data will be freed with this function
             * @param data data to store
             */
            set(free_fn: CallbackFn | null, data: Uint8Array | string): void;
        }

        abstract class Buf {
            static $gtype: GObject.GType<Buf>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ForeignClass = typeof Foreign;
        type ForeignLoadClass = typeof ForeignLoad;
        type ForeignSaveClass = typeof ForeignSave;
        type ImageClass = typeof Image;
        type InterpolateClass = typeof Interpolate;
        type ObjectClass = typeof Object;
        type OperationClass = typeof Operation;
        /**
         * A structure available to eval callbacks giving information on evaluation
         * progress. See #VipsImage::eval.
         */
        class Progress {
            static $gtype: GObject.GType<Progress>;

            // Fields

            run: number;
            eta: number;
            tpels: number;
            npels: number;
            percent: number;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * If set, vips will print messages about the progress of computation to
             * stdout. This can also be enabled with the --vips-progress option, or by
             * setting the environment variable VIPS_PROGRESS.
             * @param progress %TRUE to enable progress messages
             */
            static set(progress: boolean): void;
        }

        /**
         * A #VipsRect is a rectangular area of pixels. This is a struct for
         * performing simple rectangle algebra.
         */
        class Rect {
            static $gtype: GObject.GType<Rect>;

            // Fields

            left: number;
            top: number;
            width: number;
            height: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    left: number;
                    top: number;
                    width: number;
                    height: number;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Is `r1` equal to `r2`?
             * @param r2 second rectangle
             * @returns %TRUE if @r1 is equal to @r2.
             */
            equalsrect(r2: Rect): boolean;
            /**
             * Does `r` contain point (`x,` `y)`?
             * @param x position to test for
             * @param y position to test for
             * @returns %TRUE if @r contains (@x, @y).
             */
            includespoint(x: number, y: number): boolean;
            /**
             * Is `r2` a subset of `r1`?
             * @param r2 inner rectangle
             * @returns %TRUE if @r2 is a subset of @r1.
             */
            includesrect(r2: Rect): boolean;
            /**
             * Fill `out` with the intersection of `r1` and `r2`. `out` can equal `r1` or `r2`.
             * @param r2 input rectangle 2
             */
            intersectrect(r2: Rect): Rect;
            /**
             * Is `r` empty? ie. zero width or height.
             * @returns %TRUE if @r contains no pixels.
             */
            isempty(): boolean;
            /**
             * Enlarge `r` by `n`. +1 means out one pixel.
             * @param n enlarge by
             */
            marginadjust(n: number): void;
            /**
             * Make sure width and height are >0 by moving the origin and flipping the
             * rect.
             */
            normalise(): void;
            /**
             * Do `r1` and `r2` have a non-empty intersection?
             * @param r2 second rectangle
             * @returns %TRUE if @r2 and @r1 overlap.
             */
            overlapsrect(r2: Rect): boolean;
            /**
             * Fill `out` with the bounding box of `r1` and `r2`. `out` can equal `r1` or `r2`.
             * @param r2 input rectangle 2
             */
            unionrect(r2: Rect): Rect;
        }

        class RefString {
            static $gtype: GObject.GType<RefString>;

            // Constructors

            constructor(str: string);
            _init(...args: any[]): void;

            static ['new'](str: string): RefString;

            // Methods

            /**
             * Get a pointer to the private string inside a refstr. Handy for language
             * bindings.
             *
             * See also: vips_value_get_ref_string().
             * @returns The C string held by @refstr.
             */
            get(): [string, number];
        }

        type RegionClass = typeof Region;
        class SaveString {
            static $gtype: GObject.GType<SaveString>;

            // Fields

            s: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    s: string;
                }>,
            );
            _init(...args: any[]): void;
        }

        abstract class Source {
            static $gtype: GObject.GType<Source>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class Target {
            static $gtype: GObject.GType<Target>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Thing {
            static $gtype: GObject.GType<Thing>;

            // Fields

            i: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    i: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](i: number): Thing;
        }

        type ArgumentTable = GLib.HashTable;
        type Pel = number;
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

    export default Vips;
}

declare module 'gi://Vips' {
    import Vips80 from 'gi://Vips?version=8.0';
    export default Vips80;
}
// END
