/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.html",
        "./src/**/*.{html,js}",
        "./*.js"
    ],
    theme: {
        extend: {
            colors: {
                'sculptique-green': '#008a6a',
                'sculptique-dark': '#000000',
                'sculptique-beige': '#f7f4ed',
                'sculptique-cream': '#faf8f3',
                'sculptique-red': '#e31e24',
            },
            fontFamily: {
                'sans': ['Montserrat', 'sans-serif'],
                'serif': ['Lora', 'serif'],
            },
        },
    },
    plugins: [],
}
