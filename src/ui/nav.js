// navigatin logic
import { setFavoritList } from "./event.js";
import { renderShows } from "./render.js";

function clickNavLists(navLists) {
    navLists.forEach(nav => clickNav(nav));
}

function clickNav(nav) {
    nav.addEventListener('click', e => {
        const link = e.target.closest('a');
        if (!link) return;
        e.preventDefault(); // Optional: stops default link behavior

        if (link.textContent === 'Home') {
            console.log('hhome');
            setFavoritList(false); // Show all shows
            renderShows(cardsContainer);
        } if (link.textContent === 'TV Series') {
            console.log('TV Series');
            setFavoritList(true); // Show only favorites
            renderShows(cardsContainer);
        } if (link.textContent === 'Movies') {
            console.log('movis');
        } if (link.textContent === 'Settings') {
            console.log('Settings');
        }
    })

}


//? cardContainer is not defined
// ? declaring the container twice is causign some bugs
const cardsContainer = document.querySelector('.cards');

// load favorite list
function showFavorite(element) {
    element.addEventListener('click',
        () => {
            setFavoritList(true);
            console.log('yes');
            renderShows(cardsContainer);
        }
    )
}

export {clickNavLists};