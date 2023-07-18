import {getColor} from "./getChromeColor";
import {changeBackground} from "./changeChormeBackground";


chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    console.log(tabId, 'onUpdated')
    if (changeInfo.status === 'complete' && tab.active) {
        getColor().then(value => {
            if(value.currentColor) {
                changeBackground(tabId, value.currentColor)
            }
        })

    }
})

