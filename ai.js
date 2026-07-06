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


// Crear lista única de tags
const allTags = [
    ...new Set(
        aiArts.flatMap(art => art.tags)
    )
];


// Galería

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


// Buscador de tags

const searchInput = document.querySelector("#tagSearch");


// Crear caja de sugerencias

const suggestions = document.createElement("div");

suggestions.classList.add("tag-suggestions");

searchInput.parentElement.appendChild(suggestions);



searchInput.addEventListener("input", () => {

    const text = searchInput.value.toLowerCase();

    suggestions.innerHTML = "";


    if (text === "") {
        return;
    }


    const matches = allTags.filter(tag =>
        tag.toLowerCase().includes(text)
    );


    matches.forEach(tag => {

        const option = document.createElement("div");

        option.classList.add("tag-option");

        option.textContent = tag;


        option.addEventListener("click", () => {

            searchInput.value = tag;

            suggestions.innerHTML = "";

        });


        suggestions.appendChild(option);

    });

});
