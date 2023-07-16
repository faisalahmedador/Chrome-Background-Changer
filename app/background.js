import {storeColor} from "./storeChormeColor";

chrome.runtime.onInstalled.addListener(function () {
    storeColor('#ffffff');
})

chrome.runtime.onMessage.addListener(function (req, sender, sendResponse) {
    if(req.color) {
        storeColor(req.color);
    }
})