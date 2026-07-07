const aiArts = [

    {
        image: "Ai01.png",
        name: "Ryomen Sukuna",
        tags: ["Jujutsu Kaisen", "Gender Bender"]
    },

    {
        image: "Ai02.png",
        name: "Ichigo Kurosaki",
        tags: ["Bleach", "Gender Bender"]
    }

];



const gallery = document.querySelector(".gallery-grid");


aiArts.forEach(art => {

    const card = document.createElement("div");

    card.classList.add("card-item");

    card.innerHTML = `
        <img src="Assets/AI/${art.image}" alt="${art.name}">
        <h3>${art.name}</h3>
        <div class="ai-tags">
            ${art.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
    `;

    gallery.appendChild(card);

});



const allTags = [
    ...new Set(aiArts.flatMap(art => art.tags))
];


const searchInput = document.querySelector("#tagSearch");
const suggestions = document.querySelector(".tag-suggestions");


searchInput.addEventListener("input", () => {

    const text = searchInput.value.toLowerCase();

    suggestions.innerHTML = "";

    allTags
        .filter(tag => tag.toLowerCase().includes(text))
        .forEach(tag => {

            const option = document.createElement("div");

            option.textContent = tag;

            suggestions.appendChild(option);

        });

});


            const option = document.createElement("div");


            option.classList.add("tag-option");


            option.textContent = tag;



            suggestions.appendChild(option);


        }


    });


});
});
