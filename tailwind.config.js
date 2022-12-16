/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      //Primary
      "primary": "#113448",
      "secondary-1": "#35F0C4",
      "secondary-2": "#14BF98",
      "secondary-3": "#2A8C73",
      //Background Colors
      "background-10": "#FFFFFF",
      //Status Colors
      success: "#3BBF31",
      warning: "#E8B100",
      error: "#FF0E0E",
      info: "#3366FF",
      //Status Colors
      verified: "#03AC0E",
      revision: "#E8B100",
      draft: "#757575",
      default: "#3366FF",
      notfilled: "#F28449",
      reject: "#C93B3B",
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
