/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

module.exports = {
    content: [

        '../../templates/**/*.html',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'xcheck-white': "url('../../../static/images/x_white_centered.png')",
            },
            transitionProperty: {
                height: 'height'
            },
            colors: {
                cgray: {
                    100: "#a9a9a9",
                    200: "9#79799",
                    300: '#878789',
                    400: "#767678",
                    DEFAULT: '#656567',
                    500: "#555557",
                    600: "#2c2e32",
                    700: "#212327",
                    800: "#191a1e",
                    900: "#111113"
                },
                main: {
                    100: "#024375",
                    200: "#024375",
                    300: "#024375",
                    400: "#024375",
                    DEFAULT: "#024375",
                },
                theme: {
                    main: "#5dcfb8",
                    bg: "#0e152e",
                },
                pink: {
                    DEFAULT: "#ff948e",
                    light: "#ffdddb",
                },
                cblue: {
                    light: "#99b4cf",
                    DEFAULT: "#5dcfb8"
                },
                acc: {
                    salmon: "#ee5c7a",
                    pink: "#ff948e",
                    back: "#f2f2f7",
                },
                pastel: {
                    red: "#fddfdf",
                    yellow: "#fcf7de",
                    green: "#defde0",
                    blue: "#def3fd",
                    purple: "#f0fefd",
                },
                xcheck: {
                    1: "#00a1ff",
                    2: "#00ff8f",
                },
                cheetah: {
                    gold: "#fadb52"
                },
                etsi: {
                    green: "#8cc63e"
                }
            },
        },
    },
    variants: {
        extend: {},
        width: ["responsive", "hover", "focus"],
        height: ["responsive", "hover", "focus"],
    },
    plugins: [
        /**
         * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
         * for forms. If you don't like it or have own styling for forms,
         * comment the line below to disable '@tailwindcss/forms'.
         */
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
