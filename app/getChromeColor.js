export const getColor = () => {
    return chrome.storage.sync.get('currentColor');
}