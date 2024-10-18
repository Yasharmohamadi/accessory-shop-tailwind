import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        'primary': '#c83a81'
      },
    },
    container: {
			center: true,
		},
  },
  plugins: [],
};
export default config;
