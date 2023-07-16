import {storeColor} from "./storeChormeColor";

export const changeBackground = (tabs, color) => {
    chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: changeBackgroundColor,
        args: [color]
    }).then(() => {
        console.log("working");
        storeColor(color)
    });


}



function changeBackgroundColor(backgroundColor) {
    console.log('ba', backgroundColor);
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = '#ffffff';
}