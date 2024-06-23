module.exports = {
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["system", "light", "dark"],
  },
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        jacquard: ["Jacquard 12", "sans-serif"],
        azeret: ["Azeret Mono", "sans-serif"],
        della: ["Della Respira", "sans-serif"],
        sacramento: ["Sacramento", "sans-serif"],
        gideon: ["Gideon Roman", "Abril Fatface"],
      },
    },
  },
};
