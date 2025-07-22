function toggleMenu() {
    const menu = document.getElementById("navLinks");
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    } else {
        menu.classList.add("active");
    }
}
