const aiArts = [

    {
        image: "Ai01.png",
        name: "Ryomen Sukuna",
        series: "Jujutsu Kaisen",
        tags: ["Gender Bender"]
    },

    {
        image: "Ai02.png",
        name: "Ichigo Kurosaki",
        series: "Bleach",
        tags: ["Gender Bender"]
    },

    {
        image: "Ai03.png",
        name: "Doraemon",
        series: "Doraemon",
        tags: ["Gender Bender", "Character Design"]
    },

    {
        image: "Ai04.png",
        name: "Yami Sukehiro",
        series: "Black Clover",
        tags: ["Gender Bender"]
    },

    {
        image: "Ai05.png",
        name: "Julius Novachrono",
        series: "Black Clover",
        tags: ["Gender Bender"]
    },

    {
        image: "Ai06.png",
        name: "Sung Jin Woo",
        series: "Solo Leveling",
        tags: ["Gender Bender"]
    },

    {
        image: "Ai07.png",
        name: "Cha Hae-in",
        series: "Solo Leveling",
        tags: ["Gender Bender", "Character Design"]
    },

    {
        image: "Ai08.png",
        name: "Abarai Renji",
        series: "Bleach",
        tags: ["Gender Bender"]
    },

    {
        image: "Ai09.png",
        name: "Hitsugaya Tōshirō",
        series: "Bleach",
        tags: ["Gender Bender"]
    },

    {
        image: "Ai10.png",
        name: "Hatake Kakashi",
        series: "Naruto",
        tags: ["Gender Bender"]
    },

    {
        image: "Ai11.png",
        name: "Hatake Kakashi",
        series: "Naruto",
        tags: ["Gender Bender"]
    },

    {
        image: "Ai12.png",
        name: "Navia",
        series: "Genshin Impact",
        tags: ["Character Design", "Fairy Tale"]
    },

    {
        image: "Ai13.png",
        name: "Albedo",
        series: "Overlord",
        tags: ["Cross-referencing"]
    },

    {
        image: "Ai14.png",
        name: "Nami",
        series: "One Piece",
        tags: ["Cross-referencing"]
    }

];


const gallery = document.querySelector(".ai-gallery");
const searchInput = document.getElementById("tagSearch");
const suggestions = document.querySelector(".tag-suggestions");

const ITEMS_PER_LOAD = 30;

let currentList = [];
let currentIndex = 0;


// =========================
// ORDEN ALEATORIO
// =========================

function shuffle(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];

    }

    return shuffled;

}



// =========================
// CREAR TARJETA
// =========================

function createCard(art) {

    const card = document.createElement("div");

    card.className = "ai-card";

    card.innerHTML = `

        <img
            src="Assets/AI/${art.image}"
            alt="${art.name}"
            loading="lazy"
            decoding="async">

        <div class="ai-info">

            <span class="ai-name">
                ${art.name}
            </span>

            ${art.series ?
                `<span class="ai-series">
                    ${art.series}
                </span>`
                : ""}

            ${art.tags.map(tag => `
                <span class="tag">
                    ${tag}
                </span>
            `).join("")}

        </div>

    `;

    return card;

}



// =========================
// INICIAR GALERÍA
// =========================

function startGallery(list) {

    currentList = list;

    currentIndex = 0;

    gallery.innerHTML = "";

    loadMore();

}



// =========================
// CARGAR MÁS IMÁGENES
// =========================

function loadMore() {

    const end = Math.min(
        currentIndex + ITEMS_PER_LOAD,
        currentList.length
    );


    for (let i = currentIndex; i < end; i++) {

        gallery.appendChild(createCard(currentList[i]));

    }


    currentIndex = end;

}



// =========================
// SCROLL INFINITO
// =========================

window.addEventListener("scroll", () => {

    if (currentIndex >= currentList.length) return;


    if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 600
    ) {

        loadMore();

    }

});



// =========================
// BUSQUEDA GENERAL
// =========================

const searchData = [];


aiArts.forEach(art => {

    searchData.push({
        text: art.name,
        type: "character"
    });


    if (art.series) {

        searchData.push({
            text: art.series,
            type: "series"
        });

    }


    art.tags.forEach(tag => {

        searchData.push({
            text: tag,
            type: "tag"
        });

    });

});



const uniqueSearch = searchData.filter((item, index, self) =>
    index === self.findIndex(t =>
        t.text === item.text &&
        t.type === item.type
    )
);



// =========================
// BUSCADOR
// =========================

searchInput.addEventListener("input", () => {

    const text = searchInput.value.trim().toLowerCase();


    suggestions.innerHTML = "";


    if (text === "") {

        startGallery(shuffle(aiArts));

        return;

    }


    uniqueSearch

        .filter(item =>
            item.text.toLowerCase().includes(text)
        )

        .forEach(item => {

            const option = document.createElement("div");


            option.className = "tag-option";


            option.innerHTML = `

                ${item.text}

                <small>
                    • ${item.type}
                </small>

            `;


            option.onclick = () => {

                searchInput.value = item.text;

                suggestions.innerHTML = "";


                const filtered = aiArts.filter(art =>

                    art.name === item.text ||

                    art.series === item.text ||

                    art.tags.includes(item.text)

                );


                startGallery(filtered);

            };


            suggestions.appendChild(option);

        });


});



// =========================
// CARGA INICIAL
// =========================

startGallery(shuffle(aiArts));
