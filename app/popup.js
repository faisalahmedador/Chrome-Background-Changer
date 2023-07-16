import './popup.scss';
import {changeBackground} from "./changeChormeBackground";

document.addEventListener('DOMContentLoaded', function () {
    const changeColorBtn = document.getElementById('changeColorBtn');
    const colorPicker = document.getElementById('colorPicker');

    changeColorBtn.addEventListener('click', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            console.log(tabs)
            changeBackground(tabs, colorPicker.value)
        })
    })
})