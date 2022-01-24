let darkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (darkmode) {
    $(".darkmode-label").click();
}