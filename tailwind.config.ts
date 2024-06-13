/* eslint-disable import/no-extraneous-dependencies */
import tailwindTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      avenir: ["var(--font-avenir)", ...fontFamily.sans],
    },
    extend: {
      boxShadow: {
        'custom': '0px 0px 15px 1px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        '3xl': '2040px',
      },
      keyframes: {
        pulse: {
          '0%': { backgroundColor: '#f3f4f6' },
          '50%': { backgroundColor: '#d1d5db' },
          '100%': { backgroundColor: '#e5e7eb' },
        },
        sweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        pulse: 'pulse 1.5s infinite ease-in-out',
        sweep: 'sweep 2s infinite',
      },
    }
  },
  plugins: [tailwindTypography],
} satisfies Config;
