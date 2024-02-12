import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
		  "light",
		  "dark",
		  "cupcake",
		  "bumblebee",
		  "emerald",
		  "corporate",
		  "synthwave",
		  "retro",
		  "cyberpunk",
		  "valentine",
		  "halloween",
		  "garden",
		  "forest",
		  "aqua",
		  "lofi",
		  "pastel",
		  "fantasy",
		  "wireframe",
		  "black",
		  "luxury",
		  "dracula",
		  "cmyk",
		  "autumn",
		  "business",
		  "acid",
		  "lemonade",
		  "night",
		  "coffee",
		  "winter",
		  "dim",
		  "nord",
		  "sunset",
		],
	},
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
  	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		}
	},
};

export default config;
