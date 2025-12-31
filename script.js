const baseTop = 65;

document.addEventListener("DOMContentLoaded", () => {
    const screenHeight = screen.height
    const screenWidth = screen.width;
    const links = document.querySelectorAll(".project-link");
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "var(--hover-text-color)";
            const image = document.getElementById("project-img");
            if (image) image.remove();
            let projectName = link.getAttribute("data-name");
            const img = document.createElement("img");
            img.src = `./assets/images/${projectName}/${projectName}-0.png`;
            img.id = "project-img";
            img.style.position = "fixed";
            document.body.appendChild(img);
            img.onload = () => {
                let randomTop =
                  baseTop +
                  getRandomCoor(screenHeight - 2 * baseTop - img.height - 20);
                let randomLeft =
                  getRandomCoor(screenWidth - img.width);
                img.style.top = `${randomTop}px`;
                img.style.left = `${randomLeft}px`;
            }
        })
        link.addEventListener("mouseleave", () => {
            link.style.color = "var(--primary-text-color)";
            const image = document.getElementById("project-img");
            image.remove();
        });
    })
})

function getRandomCoor(max) {
    return Math.random() * max;
}