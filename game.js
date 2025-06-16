const board = document.getElementById("game-board");
const message = document.getElementById("message");

// ive chose logos that i think are relevant for the charity ball the autisic society because we work within the sen department

const logos =[
    "images/british-heart-foundation-logo-1000x1000px.jpg",
   "images/Cancer-Research-UK-Logo-2012.png",
   "images/Macmillan-Cancer-Support-Symbol.png",
   "images/Marie_Curie_Logo_2023_Landscape_CMYK-pdf.jpg",
   "images/Mind-Logo.png",
   "images/nas-1-1024x512.png",
   "images/St-Giles-logo_Hospice_orange-7-800x422.png",
   "images/Teenage-Cancer-Trust_social-share_1.png",
   "images/british-heart-foundation-logo-1000x1000px.jpg",
   "images/Cancer-Research-UK-Logo-2012.png",
   "images/Macmillan-Cancer-Support-Symbol.png",
   "images/Marie_Curie_Logo_2023_Landscape_CMYK-pdf.jpg",
   "images/Mind-Logo.png",
   "images/nas-1-1024x512.png",
   "images/St-Giles-logo_Hospice_orange-7-800x422.png",
   "images/Teenage-Cancer-Trust_social-share_1.png"
]

let cards = {...logos, ...logos}; //create 8 pairs of cards
cards = cards.sort(() => 0.5 - Math.random()); //shuffle the cards

let flippedCards = [];
let matchedCount = 0;
function createCard(imageSrc) {
    const card = document.createElement("div");
    card.classList.add("card");

    const front = document.createElement("div");
    front.classList.add("front");

    const back = document.createElement("div");
    back.classList.add("back");

    const img = document.createElement("img");
    img.src = imageSrc;
    back.appendChild(img);

    card.appendChild(front);
    card.appendChild(back);
    
    card.addEventListener("click", () => {
        if (
            card.classList.contains("flip") || 
            flippedCards.length === 2
        ) return;

        card.classList.add("flip");
        flippedCards.push({ card, imageSrc });

        if (flippedCards.length ===2) {
            if (flippedCards[0].imageSrc});
        }

    })

}