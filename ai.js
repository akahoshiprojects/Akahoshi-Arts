const aiArts = [

    {
        image: "Ai01.png",
        name: "Ryomen Sukuna",
        tags: [
            "Jujutsu Kaisen",
            "Gender Bender"
        ]
    }

];


const gallery = document.querySelector(".gallery-grid");


aiArts.forEach(art => {

    const item = document.createElement("div");

    item.classList.add("card-item");


    item.innerHTML = `

        <img
            src="Assets/AI/${art.image}"
            alt="${art.name}">

    `;


    gallery.appendChild(item);

});
