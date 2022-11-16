const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
const sliderContainerEl = document.querySelector(".slider-container");
const textContainerEl = document.querySelector(".text-container");
const btnContainerEl = document.querySelector(".buttons-container");
const mainImgContEl = document.querySelector(".main-img-container");
let currentImgIndex = 0;
mainImgContEl.src = images[currentImgIndex].image;
let titleEl = document.createElement("h2");
let textEl = document.createElement("p");
titleEl.innerHTML = images[currentImgIndex].title
textEl.innerHTML = images[currentImgIndex].text
textContainerEl.append(titleEl, textEl)
titleEl.classList.add("absolute60")
textEl.classList.add("absolute30")

// AREA BOTTONI 
// Bottone top per andare indietro
const prevBtnEl = document.createElement("button");
prevBtnEl.classList.add("prev-btn");
prevBtnEl.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;

// Bottone bottom per andare avanti
const nextBtnEl = document.createElement("button");
nextBtnEl.classList.add("next-btn");
nextBtnEl.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
console.log(prevBtnEl, nextBtnEl);

// Inserisco i buttons nel loro container
btnContainerEl.appendChild(prevBtnEl)
btnContainerEl.appendChild(nextBtnEl)

// Funzione sul next-button per scrollare in avanti
nextBtnEl.addEventListener( "click", function () {
    currentImgIndex++;
    const lastIndex = images.length - 1 ;
    
    if ( currentImgIndex > lastIndex ) {
        currentImgIndex = 0;
    }    
    
    titleEl.innerHTML = images[currentImgIndex].title
    textEl.innerHTML = images[currentImgIndex].text
    mainImgContEl.src = images[currentImgIndex].image
    console.log(currentImgIndex);
})

// Funzione sul prev-button per scrollare all'indietro
prevBtnEl.addEventListener( "click", function () {
    currentImgIndex--;

    if ( currentImgIndex < 0 ) {
        currentImgIndex = 4;
      }

      titleEl.innerHTML = images[currentImgIndex].title
      textEl.innerHTML = images[currentImgIndex].text
      mainImgContEl.src = images[currentImgIndex].image
      console.log(currentImgIndex);    
})