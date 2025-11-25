function reveal() {
    const box = document.getElementById("clickBox");
    const wrapper = document.getElementById("messageWrapper");

    // Hide the box
    box.style.transform = "scale(0.3)";
    box.style.opacity = "0";

    setTimeout(() => {
        box.style.display = "none";

        // Show message wrapper
        wrapper.style.display = "block";

        setTimeout(() => {
            wrapper.style.opacity = "1";
            wrapper.style.transform = "translateY(0)";

            // Add animation classes to each child
            const elements = wrapper.children;
            [...elements].forEach(el => el.classList.add("fadeIn"));
        }, 50);
    }, 400);
}
