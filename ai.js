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


// Crear lista de todos los tags disponibles

let allTags = [];


aiArts.forEach(art => {

    art.tags.forEach(tag => {

        if (!allTags.includes(tag)) {

            allTags.push(tag);

        }

    });

});



// Mostrar imágenes

const gallery = document.querySelector(".gallery-grid");


aiArts.forEach(art => {


    const card = document.createElement("div");

    card.classList.add("card-item");



    card.innerHTML = `

        <img
            src="Assets/AI/${art.image}"
            alt="${art.name}">


        <h3>
            ${art.name}
        </h3>


        <p>
            ${art.tags.join(" • ")}
        </p>

    `;


    gallery.appendChild(card);


});



// Buscador de tags

const searchInput = document.querySelector("#tagSearch");

const suggestions = document.querySelector(".tag-suggestions");



searchInput.addEventListener("input", () => {


    const text = searchInput.value.toLowerCase().trim();


    suggestions.innerHTML = "";


    if (text === "") {

        return;

    }



    allTags.forEach(tag => {


        if (tag.toLowerCase().includes(text)) {



            const option = document.createElement("div");


            option.classList.add("tag-option");


            option.textContent = tag;



            suggestions.appendChild(option);


        }


    });


});
});
