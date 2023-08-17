/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat-black": "Montserrat-Black",
        "montserrat-bold": "Montserrat-Bold",
        "montserrat-light": "Montserrat-Light",
        "montserrat-medium": "Montserrat-Medium",
        "montserrat-regular": "Montserrat-Regular",
        "montserrat-semi-bold": "Montserrat-SemiBold",

        "montserrat-alternates-black": "MontserratAlternates-Black",
        "montserrat-alternates-bold": "MontserratAlternates-Bold",
        "montserrat-alternates-light": "MontserratAlternates-Light",
        "montserrat-alternates-medium": "MontserratAlternates-Medium",
        "montserrat-alternates-regular": "MontserratAlternates-Regular",
        "montserrat-alternates-semi-bold": "MontserratAlternates-SemiBold",

        "raleway-black": "Raleway-Black",
        "raleway-bold": "Raleway-Bold",
        "raleway-light": "Raleway-Light",
        "raleway-medium": "Raleway-Medium",
        "raleway-regular": "Raleway-Regular",
        "raleway-semi-bold": "Raleway-SemiBold",

        "roboto-black": "Roboto-Black",
        "roboto-bold": "Roboto-Bold",
        "roboto-light": "Roboto-Light",
        "roboto-medium": "Roboto-Medium",
        "roboto-regular": "Roboto-Regular",
      },
      colors: {
        "blue-dark": "#001342",
        "green-light": "#8ACC50",
        "green-darker": "#116355",
        "gray-dark": "rgba(4, 4, 4, 0.51)",
        "gray-light": "#F1F4F6",
        "blue-dark": "#001342",
      },
      height: {
        line: "0.2rem"
      },
      fontSize: {
        '7xl': '7rem',
      },
      space: {
        '2px': '2',
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}