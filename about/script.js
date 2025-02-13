window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(0, 0, 0, 0.8)";
    } else {
        header.style.background = "rgba(0, 0, 0, 0.5)";
    }
});