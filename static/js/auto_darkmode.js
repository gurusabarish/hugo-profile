function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/;";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
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
        setCookie("darkmode", "true");
    } else {
        setCookie("darkmode", "false");
    }
}

function switchDarkmodeSetting() {
    let darkmode = getDarkmodeSetting();
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

let darkmode = getDarkmodeSetting();
let darkmode_prefer = window.matchMedia('(prefers-color-scheme: dark)').matches;
if ((darkmode_prefer && darkmode===null) || darkmode) {
    $(".darkmode-label").click();
}