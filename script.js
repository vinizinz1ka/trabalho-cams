var btn_toggle_theme = document.querySelector("#toggle-theme");

var theme_img = document.querySelector("#theme-img");

const SUN_IMG_PATH = "/images/sun.png";
const MOON_IMG_PATH = "/images/moon.png";
const DARK = "dark";
const LIGHT = "light"

var theme = DARK;

btn_toggle_theme.addEventListener("click", function() {
    if (theme == DARK) {
        theme = LIGHT;
        theme_img.src = MOON_IMG_PATH;

        document.documentElement.style.setProperty("--background-color", "var(--light-background)");
        document.documentElement.style.setProperty("--header-color", "var(--light-header)");
        document.documentElement.style.setProperty("--font-color", "var(--light-font)");

    } else if (theme == LIGHT) {
        theme = DARK;
        theme_img.src = SUN_IMG_PATH;

        document.documentElement.style.setProperty("--background-color", "var(--dark-background)");
        document.documentElement.style.setProperty("--header-color", "var(--dark-header)");
        document.documentElement.style.setProperty("--font-color", "var(--dark-font)");
    }
});

