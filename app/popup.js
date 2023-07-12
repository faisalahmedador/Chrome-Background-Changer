import './popup.scss';

document.addEventListener('DOMContentLoaded', function () {
    const changeColorBtn = document.getElementById('changeColorBtn');
    const colorPicker = document.getElementById('colorPicker');

    changeColorBtn.addEventListener('click', function () {
        console.log('chrome', chrome);

        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            const tab = tabs[0];
            const color = colorPicker.value;

            console.log(color)
            chrome.tabs.executeScript(tab.id, {
                code: `document.body.style.backgroundColor = ${color}`
            })
        })
    })
})