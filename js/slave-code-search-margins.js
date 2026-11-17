document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentMatchIndex = -1;
    let matches = [];

    function highlightMatches(searchTerm) {
        // Get both the active tab content and all margin sections
        const activeTab = document.querySelector('.tab-pane.active');
        const marginSections = document.querySelectorAll('.margin-section');
        
        function processText(element) {
            // Store the original HTML instead of using innerText
            const originalHTML = element.innerHTML;
            
            // Remove existing highlights while preserving other HTML
            const cleanedHTML = originalHTML
                .replace(/<mark class="current-match">/g, '')
                .replace(/<mark>/g, '')
                .replace(/<\/mark>/g, '');
            
            // If no search term, just restore the cleaned HTML
            if (!searchTerm || searchTerm.length === 0) {
                element.innerHTML = cleanedHTML;
                return;
            }
            
            // Create a temporary DOM element to help with processing
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = cleanedHTML;
            
            // Helper function to highlight text in a text node
            function highlightTextNode(textNode, regex) {
                const text = textNode.nodeValue;
                const matches = text.match(regex);
                
                if (!matches) return null;
                
                const fragment = document.createDocumentFragment();
                let lastIndex = 0;
                
                text.replace(regex, (match, offset) => {
                    // Add text before the match
                    if (offset > lastIndex) {
                        fragment.appendChild(document.createTextNode(text.slice(lastIndex, offset)));
                    }
                    
                    // Add the highlighted match
                    const mark = document.createElement('mark');
                    mark.textContent = match;
                    fragment.appendChild(mark);
                    
                    lastIndex = offset + match.length;
                    return match;
                });
                
                // Add any remaining text after the last match
                if (lastIndex < text.length) {
                    fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
                }
                
                return fragment;
            }
            
            // Recursively process all nodes
            function processNode(node) {
                if (node.nodeType === Node.TEXT_NODE) {
                    const regex = new RegExp(searchTerm, 'gi');
                    const fragment = highlightTextNode(node, regex);
                    
                    if (fragment) {
                        node.parentNode.replaceChild(fragment, node);
                    }
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    // Skip mark elements to avoid nested highlighting
                    if (node.nodeName !== 'MARK') {
                        Array.from(node.childNodes).forEach(child => {
                            processNode(child);
                        });
                    }
                }
            }
            
            // Process the temporary element
            Array.from(tempDiv.childNodes).forEach(node => {
                processNode(node);
            });
            
            // Update the element with the highlighted HTML
            element.innerHTML = tempDiv.innerHTML;
        }

        // Reset matches array
        matches = [];

        // Process margin sections
        marginSections.forEach(section => {
            const title = section.querySelector('.margin-title');
            const content = section.querySelector('.margin-content');
            
            if (searchTerm && searchTerm.length > 0) {
                if (title) processText(title);
                if (content) processText(content);
                
                // Add any new matches to our matches array
                if (title) matches = matches.concat(Array.from(title.querySelectorAll('mark')));
                if (content) matches = matches.concat(Array.from(content.querySelectorAll('mark')));
            } else {
                // Just clean up any existing highlights
                if (title) processText(title);
                if (content) processText(content);
            }
        });

        // Process the active tab content if it exists
        if (activeTab) {
            const content = activeTab.querySelector('pre');
            if (content) {
                processText(content);
                matches = matches.concat(Array.from(content.querySelectorAll('mark')));
            }
        }

        currentMatchIndex = -1;
        updateMatchNavigation();
    }

    function updateMatchNavigation() {
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

            // Remove current-match class from all matches
            matches.forEach(match => match.classList.remove('current-match'));
            
            // Add current-match class to current match and scroll to it
            const match = matches[index];
            match.classList.add('current-match');
            
            // Ensure the parent margin-section is visible if match is inside one
            const parentSection = match.closest('.margin-section');
            if (parentSection) {
                parentSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                match.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            
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

    // Add some styling for the current match
    const style = document.createElement('style');
    style.textContent = `
        mark {
            background-color: #fff3cd;
            padding: 2px;
            border-radius: 2px;
            position: relative;
        }
        mark.current-match {
            background-color: #ffc107;
            font-weight: bold;
        }
        
        /* Ensure paragraph styling is maintained */
        .margin-content p {
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }
    `;
    document.head.appendChild(style);
});