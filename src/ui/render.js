// DOM creation/rendering
import { shows } from "../logic/shows.js";

function renderShows(container) {
    shows.forEach(
        show => {
            const card = document.createElement('div');
            const cardImg = document.createElement('img');
            card.classList.add('card');
            cardImg.src = show.poster;
            cardImg.alt = show.title;

            card.appendChild(cardImg);
            container.appendChild(card);
        }
    )
};

export {renderShows};