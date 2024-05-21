

function getSystemTheme() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return 'dark';
    }
    else {
        return 'light';
    }
}

function switchDarkModeSetting() {

    if (localStorage.getItem('userTheme') != 'dark') {

        localStorage.setItem('userTheme', 'dark');

    }

    else {

        localStorage.setItem('userTheme', 'light');

    }
    setTheme();

}

function switchUseSystemSetting() {

    if (localStorage.getItem('useSystemSettings') === 'true') {

        localStorage.setItem('useSystemSettings', 'false');
        document.getElementById("darkmodecheckbox").disabled = false;
        document.getElementById("darkmodelabel").classList.remove('disabled');
        document.getElementById("darkmode").classList.remove('disabled');
    }

    else {

        localStorage.setItem('useSystemSettings', 'true');
        document.getElementById("darkmodecheckbox").disabled = true;
        document.getElementById("darkmodelabel").classList.add('disabled');
        document.getElementById("darkmode").classList.add('disabled');
    }
    setTheme();

}

function setTheme() {

    var currentTheme = '';

    if (localStorage.getItem('useSystemSettings') === 'true') {

        currentTheme = getSystemTheme();
    }
    else {
        currentTheme = localStorage.getItem('userTheme');

    }

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');

    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

function switchDevelopmentModeSetting() {

    if (localStorage.getItem('developmentMode') === 'true') {
        localStorage.setItem('developmentMode', 'false');
    }

    else {
        localStorage.setItem('developmentMode', 'true');
    }
    setDevelopmentMode();
}

function setDevelopmentMode() {

    if (localStorage.getItem('developmentMode') === 'true') {
        document.documentElement.style.setProperty('--border-color', 'var(--font-color)');
    }
    else {
        document.documentElement.style.setProperty('--border-color', 'var(--bg-color)');
    }
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setTheme, false);

window.addEventListener('DOMContentLoaded', (e) => {

    var useDarkModeCheckbox = document.querySelector('.dark-mode-switch input[type="checkbox"]');
    var useSystemSettingCheckbox = document.querySelector('.theme-switch2 input[type="checkbox"]');
    var useDevelopmentModeCheckbox = document.querySelector('.dev-mode-switch input[type="checkbox"]');



    if (useDarkModeCheckbox) {
        var userTheme = localStorage.getItem('userTheme');
        useDarkModeCheckbox.addEventListener('change', switchDarkModeSetting, false);

        if (userTheme === 'dark') {

            useDarkModeCheckbox.checked = true;

        }

    };

    if (useSystemSettingCheckbox) {
        var useSystemSettings = localStorage.getItem('useSystemSettings');
        useSystemSettingCheckbox.addEventListener('change', switchUseSystemSetting, false);

        if (useSystemSettings === 'true') {

            useSystemSettingCheckbox.checked = true;
            document.getElementById("darkmodecheckbox").disabled = true;
            document.getElementById("darkmodelabel").classList.add('disabled');
            document.getElementById("darkmode").classList.add('disabled');
        }
        else {
            document.getElementById("darkmodecheckbox").disabled = false;
            document.getElementById("darkmodelabel").classList.remove('disabled');
            document.getElementById("darkmode").classList.remove('disabled');
        }

    };

    if (useDevelopmentModeCheckbox) {
        var developmentMode = localStorage.getItem('developmentMode');
        useDevelopmentModeCheckbox.addEventListener('change', switchDevelopmentModeSetting, false);

        if (developmentMode === 'true') {

            useDevelopmentModeCheckbox.checked = true;

        }

    };
    setTheme();
    setDevelopmentMode();
});