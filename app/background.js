chrome.runtime.onInstalled.addListener(function () {
    chrome?.storage?.sync.set({color: '#ffffff'}, function () {
        console.log('color is white')
    })
})

chrome.runtime.onMessage.addListener(function (req, sender, sendResponse) {
    if(req.color) {
        chrome?.storage?.sync.set({ color: req.color}, function () {
            console.log('color is set to' + req.color)
        })
    }
})