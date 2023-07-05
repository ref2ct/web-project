function darkMode() {
    var element = document.body;
    var logo = document.getElementById("logo");
    var darkmodeBtn = document.getElementById("darkmode-btn");
    var footer = document.getElementById("footer");
    var searchColumn = document.getElementById("searchColumn");
    element.classList.toggle("dark-mode");
    logo.classList.toggle("logo-dark");
    darkmodeBtn.classList.toggle("darkmode-btn-dark");
    footer.classList.toggle("footer-dark");
    searchColumn.classList.toogle("searchColumn-dark")
 }