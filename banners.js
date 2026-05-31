const banners = [

    { image: "Banner01.png", series: "Isekai Tensei: Recruited to Another World" },
];


// 🔥 ORDEN: primero serie
banners.sort((a, b) => {
    return a.series.localeCompare(b.series);
});

const gallery = document.querySelector(".banner-gallery");

banners.forEach(banner => {

    const item = document.createElement("div");
    item.classList.add("banner-item");

    item.innerHTML = `
        <img src="Assets/Banners/${banner.image}" alt="${banner.series}">
    `;

    gallery.appendChild(item);

});
