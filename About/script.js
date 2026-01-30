document.addEventListener('DOMContentLoaded', () => {
    let scrollDistance = 0;
    const introduction = document.getElementById("introduction");
    let shouldAutoScroll = true;
    introduction.addEventListener("wheel", (e) => {
       if (e.deltaY > 0) {
        scrollDistance += e.deltaY;
        if (shouldAutoScroll && scrollDistance >= introduction.scrollHeight - 1) {
          window.scrollBy({
            top: e.deltaY + 300,
            behavior: "smooth"
          });
          shouldAutoScroll = false;
          scrollDistance = 0;
        }
       }
       else {
        shouldAutoScroll = true;
       }
    })
    let touchStartY = 0;
    introduction.addEventListener(
      "touchstart",
      function (event) {  
        touchStartY = event.touches[0].clientY;
      },
      { passive: false },
    );

    introduction.addEventListener("touchend", function (event) {
        const touchEndY = event.changedTouches[0].clientY;
        const scrollTop = introduction ? introduction.scrollTop : 0;
        const scrollHeight = introduction ? introduction.scrollHeight : 0;
        const clientHeight = introduction ? introduction.clientHeight : 0;
        const reachBottom = scrollTop + clientHeight >= scrollHeight - 1;
        if (reachBottom) {
            window.scrollBy({
                top: touchStartY - touchEndY,
                behavior: "smooth"
            })
        }
      }
    );
})