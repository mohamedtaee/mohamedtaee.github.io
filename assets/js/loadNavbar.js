document.addEventListener('DOMContentLoaded', async function () {
    await loadNavbar();

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});

async function loadNavbar() {
    try {
        const response = await fetch('navbar.html');
        const data = await response.text();
        document.getElementById('navbar-placeholder').innerHTML = data;
        highlightNavbarCurrentPage();

    } catch (error) {
        console.error('Error loading navbar:', error);
    }
}

function highlightNavbarCurrentPage() {
    const path = window.location.pathname.split("/").pop();
    console.log(path);

    const pageMap = {
        'index.html': 'nav-home',
        'about_me.html': 'nav-about',
        'contact_me.html': 'nav-contact',
    };

    const activeNavItemId = pageMap[path] || 'nav-home';

    document.getElementById(activeNavItemId).classList.add('active');
}
