/*
Author: Dylan Nelson
File name: navBar.js
Last edited: 03/01/23
Description: This js file is used to create a function that triggers
    when the user scrolls and keeps the navigation bar stuck to the
    top of the screen.
*/

// get navbar
let navbar = document.querySelector(('#NavBar'))

// get navbar's offset from the top
let sticky = navbar.offsetTop;

// create sticky function
function stickyNav() {
    // add sticky when the offset is greater, remove otherwise
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}

// attach stickyNav function to scroll event
window.onscroll = function () {stickyNav()};