document.addEventListener('DOMContentLoaded', async function () {
    await loadFooterPlaceholder();
})

async function loadFooterPlaceholder() {
    try {
        const footerElement = document.getElementById('footer-placeholder');

        if (footerElement) {
            const response = await fetch('footer.html')
            footerElement.innerHTML = await response.text();

            const yearElement = document.getElementById('copyright-year');
            if (yearElement) {
                yearElement.textContent = new Date().getFullYear();
            }
        }
    } catch (error) {
        console.log("Error loading footer:", error);
    }
}