function searchText() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeTab = document.querySelector('.tab-pane.active');
    const content = activeTab.querySelector('pre');
    const text = content.innerText;

    // Remove existing highlights
    content.innerHTML = text.replace(/<mark>/g, '').replace(/<\/mark>/g, '');

    if (searchTerm.length > 0) {
        const regex = new RegExp(searchTerm, 'gi');
        const highlightedText = text.replace(regex, match => `<mark>${match}</mark>`);
        content.innerHTML = highlightedText;

        // Scroll to the first occurrence
        const firstMark = content.querySelector('mark');
        if (firstMark) {
            firstMark.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

// Add event listener for tab changes
document.querySelectorAll('button[data-bs-toggle="tab"]').forEach(tab => {
    tab.addEventListener('shown.bs.tab', () => {
        // Clear search input and remove highlights when changing tabs
        document.getElementById('searchInput').value = '';
        searchText();
    });
});