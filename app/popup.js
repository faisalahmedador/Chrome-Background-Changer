import './popup.scss';
import {changeBackground} from "./changeChormeBackground";

document.addEventListener('DOMContentLoaded', function () {
    let colorSwatches =
        document.getElementsByClassName("color-swatch");

    // Add click event listener to each color swatch
    for (let i = 0; i < colorSwatches.length; i++) {
        colorSwatches[i].addEventListener("click", function() {

            // Remove the "selected" class from all color swatches
            for (let j = 0; j < colorSwatches.length; j++) {
                colorSwatches[j].classList.remove("selected");
            }

            // Add the "selected" class to the clicked color swatch
            this.classList.add("selected");

            // Get the data-color value
            let colorValue = this.getAttribute("data-color");

            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                changeBackground(tabs[0].id, colorValue)
            })
        });
    }
})