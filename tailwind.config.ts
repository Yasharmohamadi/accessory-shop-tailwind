import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily : {
        'iranYekanMedium': 'iranyekan medium',
        'iranYekanBold': 'iranyekan bold',
        'iranYekanExBold': 'iranyekan extra bold',
        'iranYekanBlack': 'iranyekan black',
    },
    extend: {
      colors: {
        'primary': '#c83a81',
        'txtclr': '#000000b3',
      },
    },
    container: {
			center: true,
		},
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
