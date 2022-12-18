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
      "primary-1": "#E148F2",
      "primary-2": "#AA28B8",
      "primary-3": "#861E91",
      "secondary-1": "#FF7FD0",
      "secondary-2": "#F7079E",
      "secondary-3": "#D10F8A",
      //Background Colors
      "background-10": "#EDEDED",
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
