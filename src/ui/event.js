// event listeners (click, submit)
const getStartedBtn = document.querySelector('#getStartedBtn');

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
    console.log(shows.filter(show => show.isFavorite === 'true'));
    toggleStarColor(star);
}

function toggleStarColor(star) {
    star.classList.toggle('favorite');
}




// // Card icon fav event
// function addToFavorite(card) {
//     card.addEventListener('click',
//         e => {
//             const star = e.target.classList.contains('star');
//             console.log(star);
//         })
// }

export {getStarted, addToFavorite};