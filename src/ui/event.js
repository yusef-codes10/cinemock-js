// event listeners (click, submit)
const getStartedBtn = document.querySelector('#getStartedBtn');

function loadPage() {
    getStartedBtn.addEventListener('click', () => {
        console.log('getting started');
        console.log(getStartedBtn.closest('.hero-section'));
        getStartedBtn.closest('.hero-section').classList.add('hidden');
        document.querySelector('.main-section').classList.remove('hidden');
    })
}

export {loadPage };