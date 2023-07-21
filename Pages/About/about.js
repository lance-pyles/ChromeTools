window.addEventListener('DOMContentLoaded', (e) => {

    L = document.getElementById("versionLabel");

    L.innerText = 'Version: ' + chrome.runtime.getManifest().version;
})