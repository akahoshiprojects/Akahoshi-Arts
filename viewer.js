const viewer = document.querySelector(".image-viewer");
const viewerImage = viewer.querySelector("img");
const closeViewer = document.querySelector(".viewer-close");


document.querySelectorAll("img").forEach(img => {

    if (
        img.closest(".home-button") ||
        img.closest(".request-button") ||
        img.closest(".gallery-title")
    ) {
        return;
    }


    img.addEventListener("click", () => {

        viewerImage.src = img.src;

        viewer.style.display = "flex";

        document.body.style.overflow = "hidden";

    });

});


closeViewer.addEventListener("click", () => {

    viewer.style.display = "none";

    document.body.style.overflow = "";

});


viewer.addEventListener("click", (e) => {

    if (e.target === viewer) {

        viewer.style.display = "none";

        document.body.style.overflow = "";

    }

});
