export const themeColors = {
    //blue
    primary: {
        100: "#d5e1f0",
        200: "#abc3e2",
        300: "#80a5d3",
        400: "#5687c5",
        500: "#2c69b6",
        600: "#235492",
        700: "#1a3f6d",
        800: "#122a49",
        900: "#091524"
    },

    //orange
    secondary: {
        100: "#fdebce",
        200: "#fbd69d",
        300: "#f8c26d",
        400: "#f6ad3c",
        500: "#f4990b",
        600: "#c37a09",
        700: "#925c07",
        800: "#623d04",
        900: "#311f02"
},

    //white
    background: {
        100: "#ffffff",
        200: "#ffffff",
        300: "#ffffff",
        400: "#ffffff",
        500: "#ffffff",
        600: "#cccccc",
        700: "#999999",
        800: "#666666",
        900: "#333333"
},


};


export const themeSettings = (mode) => {
    return {
        palette: {
            primary: {
                ...themeColors.primary,
                main: themeColors.primary[400],
                light: themeColors.primary[200],
            },
            secondary: {
                ...themeColors.secondary,
                main: themeColors.secondary[300],
            },
            background: {
                default: themeColors.background[200],
                alt: themeColors.background[500]
            }
        },
        typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 14,
            },
        }
    }
}