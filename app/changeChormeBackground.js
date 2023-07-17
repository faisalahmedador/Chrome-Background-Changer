import {storeColor} from "./storeChormeColor";

export const changeBackground = (tabId, color) => {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
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
}