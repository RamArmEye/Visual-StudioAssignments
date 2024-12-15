document.addEventListener("DOMContentLoaded", () => {
    // Reference the heading
    const heading = document.getElementById("Man_And_Machine");

    // Add the color-changing animation on hover
    heading.addEventListener("mouseover", () => {
        heading.classList.add("color-transition");
    });

    // Remove the animation when the mouse leaves
    heading.addEventListener("mouseout", () => {
        heading.classList.remove("color-transition");
    });

    // Reference WIN letters
    const letters = document.querySelectorAll(".letter");

    letters.forEach(letter => {
        // Pause animation on hover
        letter.addEventListener("mouseover", () => {
            letter.style.animationPlayState = "paused";
        });

        // Resume animation when mouse leaves
        letter.addEventListener("mouseout", () => {
            letter.style.animationPlayState = "running";
        });

        // Speed up animation on click
        letter.addEventListener("click", () => {
            letter.style.animationDuration = "1s";
        });
    });
});
