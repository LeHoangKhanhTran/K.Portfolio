const baseTop = 65;

document.addEventListener("DOMContentLoaded", () => {
    const screenHeight = screen.height
    const screenWidth = screen.width;
    const links = document.querySelectorAll(".project-link");
    let previewImg = null;

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        link.style.color = "var(--hover-text-color)";

        if (previewImg) {
          previewImg.remove();
          previewImg = null;
        }

        const projectName = link.getAttribute("data-name");

        const img = document.createElement("img");
        img.id = "project-img";
        img.style.position = "fixed";

        img.src = `./assets/images/${projectName}/${projectName}-0.png`;

        img.onload = () => {
          const randomTop =
            baseTop +
            getRandomCoor(screenHeight - 2 * baseTop - img.height - 20);

          const randomLeft = getRandomCoor(screenWidth - img.width);

          img.style.top = `${randomTop}px`;
          img.style.left = `${randomLeft}px`;

          document.body.appendChild(img);
          previewImg = img;
        };
      });

      link.addEventListener("mouseleave", () => {
        link.style.color = "var(--primary-text-color)";

        if (previewImg) {
          previewImg.remove();
          previewImg = null;
        }
      });
    });
})

function getRandomCoor(max) {
    return Math.random() * max;
}