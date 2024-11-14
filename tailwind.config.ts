import type { Config } from 'tailwindcss'

export default {
    content: [],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        }, //optional?


        colors: {
            'background': '#1e293b',
            'text' : '#FFFFFF',
            'fugly': '#bf6ed7'
        },

        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },

        extend: {},
    },
    plugins: [],
} satisfies Config