import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                d_light_blue: "#c6bef7",
                d_dark_blue: "#51545e",
                d_white: "#ffffff",
                d_black: "#000000",
                d_gray: "#c9c9c9",
                d_green: "#00ff00",
                d_red: "#ff0000",
                d_orange: "#ef9e23",
            },
        },
    },

    plugins: [forms],
    darkMode: "selector",
};
