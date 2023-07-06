function darkMode() {
    var htmlElement = document.querySelector("html");
    var logo = document.getElementById("logo");
    var darkModeBtn = document.getElementById("darkmode-btn");

    htmlElement.classList.toggle("dark_mode");
    logo.classList.toggle("logo-dark");
    darkModeBtn.classList.toggle("darkmode-btn-dark");
}
  