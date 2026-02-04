// navigatin logic


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
        } if (link.textContent === 'TV Series') {
            console.log('TV Series');
        } if (link.textContent === 'Movies') {
            console.log('movis');
        } if (link.textContent === 'Settings') {
            console.log('Settings');
        }
    })

}

export {clickNavLists};