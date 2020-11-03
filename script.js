"use strict";

window.addEventListener("load", start);

//for the resume page

const sub_title = document.querySelectorAll(".sub_title");

function start() {
    sub_title.forEach(title => {
        title.addEventListener("click", expandJob);
        let newBar = document.createElement("div");
        newBar.classList.add("horizontal_resume_right"); newBar.style.width = `${title.textContent.length + 4}vw`;
        title.after(newBar);
    });
}

/* const burger_bars = document.querySelector(".burger_bars");
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
} */


function expandJob(e) {
    console.log(e.currentTarget.nextSibling.nextElementSibling);
    e.currentTarget.nextSibling.nextElementSibling.classList.toggle("appear");

}

// Adding event for the portfolio page - scrolling event

const trigger = document.querySelector("#img_webdesign").offsetTop;
const second_trigger = document.querySelector("#second_category").offsetTop;

const horizontal_animation = document.querySelector("#horizontal_animation");
const vertical_animation = document.querySelector("#vertical_animation");
const title_animation = document.querySelector("#title_animation");

const horizontal_content = document.querySelector("#horizontal_content");
const vertical_content = document.querySelector("#vertical_content");
const title_content_left = document.querySelector("#title_content_left");
const title_content_right = document.querySelector("#title_content_right");

window.addEventListener("scroll", function () {

    let currentScroll = window.scrollY;
    console.log(second_trigger);
    console.log(currentScroll);

    switch (true) {
        case currentScroll > trigger:

            vertical_animation.classList.add("line_coming_top");
            vertical_animation.classList.remove("hidden");

            horizontal_animation.classList.add("line_coming_side");
            horizontal_animation.classList.remove("hidden");

            title_animation.classList.add("sliding_title");
            title_animation.classList.remove("hidden");

            break;
    }

    switch (true) {
        case currentScroll > second_trigger:

            vertical_content.classList.add("line_coming_top");
            vertical_content.classList.remove("hidden");

            horizontal_content.classList.add("line_coming_side");
            horizontal_content.classList.remove("hidden");

            title_content_left.classList.add("sliding_title");
            title_content_left.classList.remove("hidden");

            title_content_right.classList.add("sliding_title_right");
            title_content_right.classList.remove("hidden");
    }

})