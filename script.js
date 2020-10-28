"use strict";

window.addEventListener("load", start);

//for the resume page

const sub_title = document.querySelectorAll(".sub_title");

function start() {
    sub_title.forEach(title => {
        let newBar = document.createElement("div");
        newBar.classList.add("horizontal_resume_right"); newBar.style.width = `${title.textContent.length + 4}vw`;
        title.after(newBar);
    });
}

const burger_bars = document.querySelector(".burger_bars");
const burger_wrapper = document.querySelector(".burger_wrapper");
const white_cross = document.querySelector(".white_cross");
const burger_bars_about = document.querySelector(".burger_bars_about");

if (burger_bars_about != null) {
    burger_bars_about.addEventListener("click", displayBurger);
}

if (burger_bars != null) {
    burger_bars.addEventListener("click", displayBurger);
}

white_cross.addEventListener("click", displayBurger);

function displayBurger() {
    console.log("hello!");
    burger_wrapper.classList.toggle("hidden");
    burger_wrapper.classList.toggle("showing");
}