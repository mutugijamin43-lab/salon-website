// Simple animation for smooth feel
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigation clicked");
    });
});

// Auto year (optional improvement)
const footer = document.querySelector("footer");
footer.innerHTML += ` - ${new Date().getFullYear()}`;