import flowbite from "flowbite-react/tailwind";

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        flowbite.content(),
    ],
    theme: {
        extend: {
            backgroundImage: {
                'Banner': "url('./src/assets/Banner.webp')",
                'mypic': "url('./src/assets/pic2.png')",
            },
        },
        fontFamily: {
            'kalam': ['"Kalam", cursive'],
            'poppins': ['"Poppins", sans-serif'],
        }
    },
    plugins: [
        flowbite.plugin(),
    ],
}