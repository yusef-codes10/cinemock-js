// this is the main js file
console.log('js is working');
import { getStarted } from "./ui/event.js";
import { renderShows } from "./ui/render.js";

const mainSection = document.querySelector('.main-section');
const cardsContainer = document.querySelector('.cards');


getStarted();

renderShows(cardsContainer);