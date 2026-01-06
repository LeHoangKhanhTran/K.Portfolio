const baseTop = 65;
const maxImageWidth = 381;
const maxImageHeight = 303;
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".project-link");
    const screenHeight = screen.height;
    const screenWidth = screen.width;
    let currentProject = null;
    if (screenWidth > 961) {
      links.forEach((link) => {
        link.addEventListener("mouseenter", async () => {
          link.style.color = "var(--hover-text-color)";
          const images = document.getElementsByClassName("preview-img");
          if (images.length > 0) {
            images.forEach((img) => img.remove());
          }
          let projectName = link.getAttribute("data-name");
          const img = document.createElement("img");
          img.src = `./assets/images/${projectName}/${projectName}-0.png`;
          img.className = "preview-img";
          img.id = "project-img";
          let randomTop =
            baseTop + getRandomCoor(screenHeight - 2 * baseTop - maxImageHeight);
          let randomLeft = getRandomCoor(screenWidth - maxImageWidth);
          img.style.top = `${randomTop}px`;
          img.style.left = `${randomLeft}px`;
          document.body.appendChild(img);
        });

        link.addEventListener("mouseleave", () => {
          link.style.color = "var(--primary-text-color)";
          const image = document.getElementById("project-img");
          if (image) image.remove();
        });
      });
    } else {
      links.forEach((link) => {
        link.addEventListener("click", async (e) => {
          let projectName = link.getAttribute("data-name");
          if (projectName !== currentProject) {
            e.preventDefault();
            currentProject = projectName;
            document
              .querySelectorAll(".preview-img")
              .forEach((img) => img.remove());
            const img = document.createElement("img");
            img.src = `./assets/images/${projectName}/${projectName}-0.png`;
            img.className = "preview-img";
            img.id = "project-img";
            let randomTop =
              baseTop + getRandomCoor(screenHeight - 2 * baseTop - maxImageHeight);
            let randomLeft = getRandomCoor(screenWidth - maxImageWidth);
            img.style.top = `${randomTop}px`;
            img.style.left = `${randomLeft}px`;
            document.body.appendChild(img);
            img.addEventListener("click", () => {
                window.location.href = link.href;
            })
          }
        });
      });
    }
    
})

function getRandomCoor(max) {
    return Math.random() * max;
}