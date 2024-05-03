import flowbite from "flowbite-react/tailwind";

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        flowbite.content(),
    ],
    theme: {
        theme: {
            screens: {
                '2xl': { 'max': '1535px' },
                // => @media (max-width: 1535px) { ... }

                'xl': { 'max': '1279px' },
                // => @media (max-width: 1279px) { ... }

                'lg': { 'max': '1023px' },
                // => @media (max-width: 1023px) { ... }

                'md': { 'max': '767px' },
                // => @media (max-width: 767px) { ... }

                'sm': { 'max': '639px' },
                // => @media (max-width: 639px) { ... }
            }
        },
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