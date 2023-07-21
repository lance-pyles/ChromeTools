async function fetchWindowsTabs() {

    var tab_count = 0;
    var tl = document.getElementById("tableList");
    tl.innerHTML = "";

    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");

    td.appendChild(document.createTextNode(""));
    td2.appendChild(document.createTextNode(""));

    td.id = "windows";
    tr.appendChild(td);

    td2.id = "tabs";
    tr.appendChild(td2);

    tl.appendChild(tr);
    var x = document.getElementById("BackLink");
    if (x) {
        x.remove();
    }
    chrome.windows.getAll({ populate: true }, function (windows) {

        windows.forEach(function (window) {

            window.tabs.forEach(function (tab) {

                tab_count++;

            });

        });

        document.getElementById("windows").innerHTML = '<a id="windowslink">' + windows.length + '</a>';
        document.getElementById("tabs").innerHTML = '<a id="tabslink">' + tab_count + '</a>';

        windowsLink = document.getElementById("windowslink");
        tabsLink = document.getElementById("tabslink");

        if (windowsLink) { windowsLink.addEventListener("click", fetchWindows, false); }
        if (tabsLink) { tabsLink.addEventListener("click", fetchTabs, false); }

    });


};
async function fetchTabs() {

    var tl = document.getElementById("tableList");
    tl.innerHTML = "";
    chrome.windows.getAll({ populate: true }, function (windows) {

        windows.forEach(function (window) {

            window.tabs.forEach(function (tab) {

                var tl = document.getElementById("tableList");

                var tr = document.createElement("tr");
                var td = document.createElement("td");
                var td2 = document.createElement("td");

                td.appendChild(document.createTextNode(tab.title));
                td2.appendChild(document.createTextNode(window.id));
                tr.appendChild(td);
                tr.appendChild(td2);
                tl.appendChild(tr);

            });



        });

    });
    document.getElementById("WindowsTabs").remove;
    if (!document.getElementById("BackLink")) {
        var tl = document.getElementById("WindowsTabs");
        var td2 = document.createElement("a");
        td2.innerHTML = "Back"
        td2.id = "BackLink"
        tl.appendChild(td2);
        if (td2) { td2.addEventListener("click", fetchWindowsTabs, false); }
    }
}

async function fetchWindows() {
    tab_count = 0;
    var tl = document.getElementById("tableList");
    tl.innerHTML = "";
    chrome.windows.getAll({ populate: true }, function (windows) {

        windows.forEach(function (window) {

            window.tabs.forEach(function (tab) {

                tab_count++;

            });

            var tl = document.getElementById("tableList");
            
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var td2 = document.createElement("td");

            td.appendChild(document.createTextNode(window.id));
            td2.appendChild(document.createTextNode(tab_count));
            tr.appendChild(td);
            tr.appendChild(td2);
            tl.appendChild(tr);
            tab_count = 0;
        });
        
    });
    if (!document.getElementById("BackLink")) {
        var tl = document.getElementById("WindowsTabs");
        var td2 = document.createElement("a");
        td2.innerHTML = "Back"
        td2.id = "BackLink"
        tl.appendChild(td2);
        if (td2) { td2.addEventListener("click", fetchWindowsTabs, false); }
    }
}

window.addEventListener('DOMContentLoaded', (e) => {    

    fetchWindowsTabs();

}

)