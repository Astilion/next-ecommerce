import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#393E46',
          100: '#8D9197',
          200: '#757B82',
          300: '#5E646D',
          400: '#464C57',
          500: '#393E46',
          600: '#2C3038',
          700: '#1F2327',
          800: '#121518',
          900: '#050709',
        },
        secondary: {
          DEFAULT: '#F7F7F7',
          100: '#FFFFFF',
          200: '#FDFDFD',
          300: '#FBFBFB',
          400: '#F9F9F9',
          500: '#F7F7F7',
          600: '#F5F5F5',
          700: '#F3F3F3',
          800: '#F1F1F1',
          900: '#EFEFEF',
        },
        accent: {
          DEFAULT: '#6D9886',
          100: '#BFD2C8',
          200: '#A8C1B6',
          300: '#91B0A3',
          400: '#7AAE91',
          500: '#6D9886',
          600: '#617F70',
          700: '#55655A',
          800: '#495043',
          900: '#3D362D',
        },
        creme: {
          DEFAULT: '#F2E7D5',
          100: '#FFFFFF',
          200: '#FDFDFC',
          300: '#FBF9F7',
          400: '#F8F5F2',
          500: '#F2E7D5',
          600: '#E2D1B5',
          700: '#D2BB96',
          800: '#C2A577',
          900: '#B18F57',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
