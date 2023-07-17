export const storeColor = (bgColor) => {
    chrome.storage.sync.set({currentColor: bgColor});
}