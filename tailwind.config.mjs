/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'cyan-400': "#87D9DE",
                'gray-900': "#231F20",
                'primary-black': "#231F20"
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
