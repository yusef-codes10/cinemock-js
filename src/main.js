// this is the main js file
console.log('js is working');
import { getStarted, addToFavorite, setFavoritList } from "./ui/event.js";
import { renderShows } from "./ui/render.js";
import { shows } from "./logic/shows.js";
import { clickNavLists } from "./ui/nav.js";

const mainSection = document.querySelector('.main-section');
const cardsContainer = document.querySelector('.cards');
const signUpBtn = document.getElementById('signUpBtn');
const navLists = document.querySelectorAll('.nav-list ul');

getStarted();

renderShows(cardsContainer);

// the icon star event
cardsContainer.addEventListener('click', e => {
    const star = e.target.closest('.star');
    if (!star) return;

    addToFavorite(star, shows);
})

// load favorite list
signUpBtn.addEventListener('click',
    () => {
        setFavoritList(true);
        console.log('yes');
        renderShows(cardsContainer);
    }
)

console.log(navLists);

clickNavLists(navLists);