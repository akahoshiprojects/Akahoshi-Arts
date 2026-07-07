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
    },

    {
        image: "Ai03.png",
        name: "Doraemon",
        tags: ["Doraemon", "Gender Bender", "Design"]
    },

    {
        image: "Ai04.png",
        name: "Yami Sukehiro",
        tags: ["Black Clover", "Gender Bender"]
    },

    {
        image: "Ai05.png",
        name: "Julius Novachrono",
        tags: ["Black Clover", "Gender Bender"]
    }

];



const gallery = document.querySelector(".gallery-grid");
const searchInput = document.getElementById("tagSearch");
const suggestions = document.querySelector(".tag-suggestions");



// =========================
// CARGAR GALERÍA
// =========================

function loadGallery(list) {

    gallery.innerHTML = "";

    list.forEach(art => {

        const card = document.createElement("div");

        card.className = "card-item";

        card.innerHTML = `

            <img src="Assets/AI/${art.image}" alt="${art.name}">

            <div class="ai-info">

                <span class="ai-name">${art.name}</span>

                ${art.tags.map(tag =>
                    `<span class="tag">${tag}</span>`
                ).join("")}

            </div>

        `;

        gallery.appendChild(card);

    });

}



// =========================
// TAGS
// =========================

const allTags = [...new Set(aiArts.flatMap(art => art.tags))].sort();



// =========================
// BUSCADOR
// =========================

searchInput.addEventListener("input", () => {

    const text = searchInput.value.trim().toLowerCase();

    suggestions.innerHTML = "";

    if (text === "") return;

    allTags
        .filter(tag => tag.toLowerCase().includes(text))
        .forEach(tag => {

            const option = document.createElement("div");

            option.className = "tag-option";

            option.textContent = tag;

            option.onclick = () => {

                searchInput.value = tag;

                suggestions.innerHTML = "";

                const filtered = aiArts.filter(art =>
                    art.tags.includes(tag)
                );

                loadGallery(filtered);

            };

            suggestions.appendChild(option);

        });

});



// =========================
// MOSTRAR TODO AL ABRIR
// =========================

loadGallery(aiArts);
