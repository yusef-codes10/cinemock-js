// DOM creation/rendering
import { shows } from "../logic/shows.js";

function renderShows(container) {
    shows.forEach(
        show => {
            const card = document.createElement('div');
            card.classList.add('card');

            container.appendChild(card);
        }
    )
};

export {renderShows};