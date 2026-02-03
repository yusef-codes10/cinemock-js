// this is the main js file
console.log('js is working');
import { getStarted, addToFavorite } from "./ui/event.js";
import { renderShows } from "./ui/render.js";
import { shows } from "./logic/shows.js";

const mainSection = document.querySelector('.main-section');
const cardsContainer = document.querySelector('.cards');

getStarted();

renderShows(cardsContainer);

// the icon star event
cardsContainer.addEventListener('click', e => {
    const star = e.target.closest('.star');
    if (!star) return;

    const card = star.closest('.card');
    console.log(card);

    // find the show and switch its favorite property
    const show = shows.find(s => s.id === id);
    if (!show) return;


    // console.log(star);
    addToFavorite(star);
})