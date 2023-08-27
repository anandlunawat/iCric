/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'back' : "url('../public/background.png')",
        'cardBgG' : "url('../public/CardImage.png')",
        'cardBgB' : "url('../public/CardImageB.png')",
        'contact' : "url('../public/home_contact.jpg')",
        'about' : "url('../public/About.jpg')"
      },
    },
  },
  plugins: [],
}