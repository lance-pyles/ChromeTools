// Add a listener to create the initial context menu items,
// context menu items only need to be created at runtime.onInstalled
chrome.runtime.onInstalled.addListener(async () => {

    chrome.contextMenus.create({
      id: '1',
      title: 'Generate password',
      type: 'normal',
      contexts: ['editable']
    });

});

// A generic onclick callback function.
chrome.contextMenus.onClicked.addListener(genericOnClick);

// A generic onclick callback function.
function genericOnClick(info) {
     //if (info.menuItemId == '1')
     //{
     //document.getElementById(info.frameId).value='new value here';
     //}
}