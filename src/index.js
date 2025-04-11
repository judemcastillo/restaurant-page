import "./styles.css";
import { createHomepage } from "./homepage.js";
import { createMenupage } from "./menu.js";

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");

home.addEventListener("click", (event) => {
    event.preventDefault();
    createHomepage();
}
);
menu.addEventListener("click", (event) => {
    event.preventDefault();
    createMenupage();
}
);
createHomepage()

