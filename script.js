const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");
const navigationLinks = document.querySelectorAll(".navigation a");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const menuIsOpen = navigation.classList.contains("open");

    menuButton.textContent = menuIsOpen ? "Close" : "Menu";

    menuButton.setAttribute(
        "aria-expanded",
        menuIsOpen
    );

});


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menuButton.textContent = "Menu";

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});