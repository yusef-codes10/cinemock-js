// DOM creation/rendering
import { shows } from "../logic/shows.js";
import { getFavoriteShows, isFavoriteList } from "../ui/event.js";

function renderShows(container) {
    // Always use the shows array - it's already synced with localStorage
    const list = isFavoriteList() ? getFavoriteShows(shows) : shows;

    container.innerHTML = ''; // clear before re-rendering
    list.forEach(show => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = show.id;

        // Add 'favorite' class to star if show is marked as favorite
        const starClass = show.isFavorite ? 'fa-solid fa-star star favorite' : 'fa-solid fa-star star';

        card.innerHTML = `
            <img src="${show.poster}" alt="${show.title}">
            <i class="${starClass}"></i>
        `;

        container.appendChild(card);
    });
}

export {renderShows};