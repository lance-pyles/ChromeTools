window.addEventListener('DOMContentLoaded', (e) => {

    L = document.getElementById("WindowsTabsBtn");
    C = document.getElementById("PasswordGeneratorBtn");
    P = document.getElementById("SettingsBtn");
    a = document.getElementById("AboutBtn");

    if (L) { L.addEventListener("click", () => { openTab(event, "WindowsTabs") }, false); }
    if (C) { C.addEventListener("click", () => { openTab(event, "PasswordGenerator") }, false); }
    if (P) { P.addEventListener("click", () => { openTab(event, "Settings") }, false); }
    if (a) { a.addEventListener("click", () => { openTab(event, "About") }, false); }
    openLandingPage();

    vers = document.getElementById("versionLabelLanding");

    vers.innerText = 'v' + chrome.runtime.getManifest().version;
})

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";

    evt.currentTarget.className += " active";
}

function openLandingPage() {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById("LandingPage").style.display = "block";

    //evt.currentTarget.className += " active";
}