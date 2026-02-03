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

function addToFavorite(star) {
    star.classList.toggle('favorite');
    // star.classList.toggle('star');
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