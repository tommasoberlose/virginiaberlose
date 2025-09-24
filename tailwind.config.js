/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/index.html"],
  theme: {
    extend: {
      colors: {
        'cream': '#FDFBF5',
        'background-alt': '#F9EBE4',
        'text-dark': '#5C4033',
        'primary-lightest': '#FDF4F0',
        'primary-light': '#FADCD0',
        'primary-medium': '#E8BBAF',
        'primary-dark': '#A17C6B',
        'primary-darker': '#8F6859',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
