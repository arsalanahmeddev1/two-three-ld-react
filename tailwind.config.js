import flowbite from "flowbite-react/tailwind"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),       // Includes Flowbite React templates
  ],
  plugins: [
    flowbite.plugin(),        // Enables Flowbite plugin for Tailwind
  ],
}
