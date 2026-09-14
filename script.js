const replayButton = document.getElementById("replayButton");

replayButton.addEventListener("click", function () {

    const animatedElements = document.querySelectorAll(
        ".brand, .ganesha, .light-rays, .light, .flower-decoration"
    );

    animatedElements.forEach(function (element) {

        element.style.animation = "none";

        // Force browser to restart the animation
        void element.offsetWidth;

        element.style.animation = "";

    });

});
