const cards = [

    { image: "Paint01.png", name: "Rukia Kuchiki", series: "Bleach" },
    { image: "Paint02.png", name: "Ichigo Kurosaki", series: "Bleach" },
    { image: "Paint03.png", name: "Akane Minagawa", series: "Scum's Wish" },
    { image: "Paint04.png", name: "Bulma", series: "Dragon Ball" },
    { image: "Paint05.webp", name: "Clark Kent?", series: "DC Comics" },

    { image: "Paint06.png", name: "Himiko Toga", series: "My Hero Academia" },
    { image: "Paint07.png", name: "Momonga", series: "Overlord" },
    { image: "Paint08.png", name: "Ai Hoshino", series: "Oshi no Ko" },
    { image: "Paint09.png", name: "Hinata Shoyo", series: "Haikyu" },
    { image: "Paint10.png", name: "Jinshi & Maomao", series: "The Apothecary Diaries" },

    { image: "Paint11.png", name: "Xe Lian", series: "Tian Guan Ci Fu" },
    { image: "Paint12.png", name: "Leona Kingscholar", series: "Twisted Wonderland" },
    { image: "Paint13.png", name: "Ikuyo Kita", series: "Bocchi the Rock!" },
    { image: "Paint14.png", name: "Hinata Hyuuga", series: "Naruto" },
    { image: "Paint15.png", name: "Naruhina II", series: "Naruto" },

    { image: "Paint16.png", name: "Ishimori Uka", series: "Honey Lemmon Soda" },
    { image: "Paint17.png", name: "Tsuyu Asui", series: "My Hero Academia" },
    { image: "Paint18.png", name: "Momoshiki Ootsutsuki", series: "Naruto" },
    { image: "Paint19.png", name: "Tomura Shigaraki", series: "My Hero Academia" },
    { image: "Paint20.png", name: "Ruby Hoshino", series: "Oshi no Ko" },

    { image: "Paint21.png", name: "Aigis", series: "Persona 3" },
    { image: "Paint22.webp", name: "Beru", series: "Solo Leveling" },
    { image: "Paint23.png", name: "Lucoa", series: "Miss Kobayashi's Dragon Maid" },
    { image: "Paint24.png", name: "Daidoji", series: "Senran Kagura" },
    { image: "Paint25.png", name: "Fried Chicken", series: "Foodie" },

    { image: "Paint26.png", name: "Vermeil", series: "Vermeil in Gold" },
    { image: "Paint27.png", name: "Barry Allen?", series: "DC Comics" },
    { image: "Paint28.png", name: "Tier Harribel", series: "Bleach" },
    { image: "Paint29.png", name: "Jason Todd", series: "DC Comics" },
    { image: "Paint30.png", name: "Chisa Kotegawa", series: "Granblue" },

    { image: "Paint31.png", name: "Leon S. Kennedy", series: "Resident Evil" },
    { image: "Paint32.png", name: "Kyoujurou & Akaza", series: "Demon Slayer" },
    { image: "Paint33.png", name: "Itadori Yuji", series: "Jujutsu Kaisen" },
    { image: "Paint34.png", name: "Mahiru Shiina", series: "The Angel Next Door Spoils Me Rotten" },
    { image: "Paint35.png", name: "Tohka Yatogami", series: "Date a Live" },

    { image: "Paint36.webp", name: "Winter", series: "Aespa" },
    { image: "Paint37.png", name: "Hitagi Senjougahara", series: "Bakemonogatari" },
    { image: "Paint38.png", name: "Ayanami Rei", series: "Neon Genesis Evangelion" },
    { image: "Paint39.png", name: "Steve Harrington", series: "Stranger Things" },
    { image: "Paint40.webp", name: "Rebecca", series: "Cyberpunk: Edgeruners" },

    { image: "Paint41.png", name: "Alisa Mikhailovna Kujou", series: "Alya Sometimes Hides Her Feelings in Russian" }
    
];


// 🔥 ORDENAR: primero serie, luego nombre
cards.sort((a, b) => {

    if (a.series !== b.series) {
        return a.series.localeCompare(b.series);
    }

    return a.name.localeCompare(b.name);

});


// 📦 CONTENEDOR DONDE SE INSERTAN LAS CARDS
const grid = document.querySelector(".gallery-grid");


// 🧠 GENERAR LA GALERÍA AUTOMÁTICAMENTE
cards.forEach(card => {

    const item = document.createElement("div");
    item.classList.add("card-item");

    item.innerHTML = `
        <img src="Assets/Cards/${card.image}" alt="${card.name}">
    `;

    grid.appendChild(item);

});
