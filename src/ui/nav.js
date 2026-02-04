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

        // 2️⃣ call enderShows() each time + setFavoriteList(), that's it.
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

// 1️⃣ get rid of showFavorite() that causes double event listener, thus double carContainer elememt

export {clickNavLists};