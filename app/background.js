import {storeColor} from "./storeChormeColor";
import {getColor} from "./getChromeColor";
import {changeBackground} from "./changeChormeBackground";

chrome.runtime.onConnect.addListener(function () {
    console.log('connected')
})

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    console.log(tabId, 'onUpdated')
    if (changeInfo.status === 'complete' && tab.active) {
        getColor().then(value => {
            console.log(value)
            changeBackground(tabId, value.currentColor)
        })
        // do your things

    }
})

