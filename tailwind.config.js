/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				"2xl": "0 0 10px rgba(0, 0, 0, 0.3)",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
