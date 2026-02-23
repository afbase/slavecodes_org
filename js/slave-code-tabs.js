document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentMatchIndex = -1;
    let matches = [];

    function highlightMatches(searchTerm) {
        const activeTab = document.querySelector('.tab-pane.active');
        const content = activeTab.querySelector('pre');
        const text = content.innerText;

        // Remove existing highlights
        content.innerHTML = text.replace(/<mark class="current-match">/g, '<mark>').replace(/<mark>/g, '').replace(/<\/mark>/g, '');

        if (searchTerm.length > 0) {
            const regex = new RegExp(searchTerm, 'gi');
            const highlightedText = text.replace(regex, match => `<mark>${match}</mark>`);
            content.innerHTML = highlightedText;

            matches = Array.from(content.querySelectorAll('mark'));
            currentMatchIndex = -1;
        } else {
            matches = [];
            currentMatchIndex = -1;
        }

        updateMatchNavigation();
    }

    function updateMatchNavigation() {
        // Remove disabled state as we now have circular navigation
        prevButton.disabled = matches.length === 0;
        nextButton.disabled = matches.length === 0;
    }

    function scrollToMatch(index) {
        if (matches.length > 0) {
            // Implement circular navigation
            if (index < 0) {
                index = matches.length - 1;
            } else if (index >= matches.length) {
                index = 0;
            }

            matches.forEach(match => match.classList.remove('current-match'));
            const match = matches[index];
            match.classList.add('current-match');
            match.scrollIntoView({ behavior: 'smooth', block: 'center' });
            currentMatchIndex = index;
            updateMatchNavigation();
        }
    }

    searchInput.addEventListener('input', function() {
        highlightMatches(this.value);
        scrollToMatch(0);
    });

    prevButton.addEventListener('click', function() {
        scrollToMatch(currentMatchIndex - 1);
    });

    nextButton.addEventListener('click', function() {
        scrollToMatch(currentMatchIndex + 1);
    });

    // Find the first tab with is_transcribed=true and activate it
    const transcribedTab = document.querySelector('.nav-link[data-transcribed="true"]');
    if (transcribedTab) {
        const tab = new bootstrap.Tab(transcribedTab);
        tab.show();
    }

    // Add event listener for tab changes
    document.querySelectorAll('button[data-bs-toggle="tab"]').forEach(tab => {
        tab.addEventListener('shown.bs.tab', () => {
            // Re-apply search when changing tabs
            highlightMatches(searchInput.value);
            scrollToMatch(0);
        });
    });
});