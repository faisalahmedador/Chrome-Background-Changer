export const storeColor = (bgColor) => {
    console.log(bgColor, 'store')
    chrome.storage.sync.set({currentColor: bgColor});
}