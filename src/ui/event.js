// event listeners (click, submit)
const getStartedBtn = document.querySelector('#getStartedBtn');

let favoriteList = false;

function getStarted() {
    getStartedBtn.addEventListener('click', () => {
        hideHeroSection();
        loadContent();
    })
}

function loadContent() {
    document.querySelector('.main-section').classList.remove('hidden');
}

function hideHeroSection() {
    getStartedBtn.closest('.hero-section').classList.add('hidden');
}

function addToFavorite(star, shows) {
    const card = star.closest('.card');
    console.log(card);

    const id = Number(card.dataset.id);

    // find the show and switch its favorite property
    const show = shows.find(show => show.id === id);
    if (!show) return;

    show.isFavorite = !show.isFavorite;

    //!1- we should save to localStorage here, no need for another array. Since we do have one Source of truth
    localStorage.setItem('shows', JSON.stringify(shows));

    console.log(shows.filter(show => show.isFavorite));
    toggleStarColor(star);
}

function getFavoriteShows(shows) {
    const favoriteShows = shows.filter(show => show.isFavorite);
    return favoriteShows;
}

function isFavoriteList() {
    return favoriteList;
}

function setFavoritList(isFavorite) {
    favoriteList = isFavorite;
}

function toggleStarColor(star) {
    star.classList.toggle('favorite');
}

export {getStarted, addToFavorite, getFavoriteShows, isFavoriteList,
    setFavoritList
};