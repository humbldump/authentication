export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,css}",
        "./src/css/index.css",
    ],
    theme: {
        extend: {



            fontFamily: {
                'poppins': ['Poppins', 'ui-serif', 'Roboto'],
                'sans': ['ui-sans-serif', 'system-ui'],
                'serif': ['ui-serif', 'Georgia'],
                'mono': ['ui-monospace', 'SFMono-Regular'],
                'display': ['Oswald'],
                'body': ['Open Sans'],
            }
        },
    },
    plugins: [require("@tailwindcss/forms")],
}