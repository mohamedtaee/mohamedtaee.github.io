document.addEventListener('DOMContentLoaded', async function () {
    await loadFooterPlaceholder();
})

async function loadFooterPlaceholder() {
    try {
        const footerElement = document.getElementById('footer-placeholder');

        if (footerElement) {
            const response = await fetch('footer.html')
            footerElement.innerHTML = await response.text();;
        }
    } catch (error) {
        console.log("Error loading footer:", error);
    }
}