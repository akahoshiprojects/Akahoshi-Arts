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


// Obtener todos los tags disponibles sin repetir

const allTags = [
    ...new Set(
        aiArts.flatMap(art => art.tags)
    )
];


// Cargar galería

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


// Buscador

const searchInput = document.querySelector("#tagSearch");

const suggestions = document.querySelector(".tag-suggestions");



searchInput.addEventListener("input", () => {

    const text = searchInput.value.toLowerCase().trim();


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
