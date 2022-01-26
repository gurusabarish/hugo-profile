function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function getDarkmodeSetting() {
    switch(getCookie("darkmode")) {
        case "true":
            return true;
        case "false":
            return false;
        default:
            return null;
    }
}

function setDarkmodeSetting(value) {
    if (value) {
        setCookie("darkmode", "true", 100);
    } else {
        setCookie("darkmode", "false", 100);
    }
}

function switchDarkmodeSetting() {
    const darkmode = getDarkmodeSetting();
    switch(darkmode) {
        case true:
            setDarkmodeSetting(false);
            break;
        case false:
            setDarkmodeSetting(true);
            break;
        default:
            setDarkmodeSetting(true);
            break;
    } 
}

const check_darkmode = getDarkmodeSetting();
const darkmode_prefer = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (darkmode_prefer && check_darkmode === null) {
    autoDarkMode();
    setDarkmodeSetting(true);
} else if (check_darkmode) {
    autoDarkMode();
}
