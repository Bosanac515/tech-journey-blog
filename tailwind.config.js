/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                hop: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(3px)' },
                    '100%': { transform: 'translateY(-3px)' },
                },
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
            animation: {
                hop: 'hop 300ms infinite',
                fadeIn: 'fadeIn 1s ease-in-out',
                slideIn: 'slideIn 500ms ease-out',
            },
            colors: {
                primary: '#0d9488',
                secondary: '#be185d',
                accent: '#0f766e',
                neutral: '#111827',
                base100: '#f9fafb',
                info: '#3b82f6',
                success: '#10b981',
                warning: '#f59e0b',
                error: '#ef4444',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
                mono: ['Fira Code', 'monospace'],
                monocraft: ['Monocraft', 'monospace'],
            },
        },
    },
    daisyui: {
        themes: [
            {
                "mytheme": {
                    "primary": "#0d9488",
                    "secondary": "#be185d",
                    "accent": "#0f766e",
                    "neutral": "#111827",
                    "base-100": "#f9fafb",
                    "info": "#3b82f6",
                    "success": "#10b981",
                    "warning": "#f59e0b",
                    "error": "#ef4444",
                },
            },
        ],
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
