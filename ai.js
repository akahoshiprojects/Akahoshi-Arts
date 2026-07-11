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
        name: "Subg Jin Woo",
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
        name: "Hitsugaya Tôshirô",
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



const gallery = document.querySelector(".ai-gallery");;
const searchInput = document.getElementById("tagSearch");
const suggestions = document.querySelector(".tag-suggestions");



// =========================
// CARGAR GALERÍA
// =========================

function loadGallery(list) {

    gallery.innerHTML = "";

    list.forEach(art => {

        const card = document.createElement("div");

        card.className = "ai-card";

        card.innerHTML = `

            <img src="Assets/AI/${art.image}" alt="${art.name}">

            <div class="ai-info">

                <span class="ai-name">
                    ${art.name}
                </span>


                ${art.series ? 
                    `<span class="ai-series">
                        ${art.series}
                    </span>` 
                    : ""}


                ${art.tags.map(tag =>
                    `<span class="tag">
                        ${tag}
                    </span>`
                ).join("")}

            </div>

        `;

        gallery.appendChild(card);

    });

}



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


// Eliminar duplicados

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


    if (text === "") return;



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


                loadGallery(filtered);

            };


            suggestions.appendChild(option);


        });


});

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
// MOSTRAR TODO AL ABRIR
// =========================

loadGallery(shuffle(aiArts));
