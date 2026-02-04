// DOM creation/rendering
import { shows } from "../logic/shows.js";
import { getFavoriteShows, isFavoriteList } from "../ui/event.js";

function renderShows(container) {
    const list = isFavoriteList() ? getFavoriteShows(shows) : loadFromLocalStorage();

    container.innerHTML = ''; // clear before re-rendering
    list.forEach(
        show => {
            const card = document.createElement('div');
            // const cardImg = document.createElement('img');
            card.classList.add('card');
            // cardImg.src = show.poster;
            // cardImg.alt = show.title;

            card.dataset.id = show.id; // 🔑 LINK UI → DATA

            // 3️⃣ Add 'favorite' class to star if show is marked as favorite
            const starClass = show.isFavorite ? 'fa-solid fa-star star favorite' : 'fa-solid fa-star star';
            card.innerHTML = `
                <img src = "${show.poster}" alt = "${show.title}">
                <i class="${starClass}"></i>

                `;
                // card.appendChild(cardImg);
            container.appendChild(card);
        }
    )
};

// !2- load from local Storage
function loadFromLocalStorage() {

    if (!checkLocalStorgae()) {
        // runs ONLY when 'shows' does NOT exist in localStorage
    }
    const shows = JSON.parse(localStorage.getItem('shows'));

    return shows;
}

function checkLocalStorgae() {
    const value = localStorage.getItem('shows');

    if (value === null) return false;
    return true;
}

export {renderShows};