async function getQuote() {
    try {
        // Show loading message
        document.getElementById('quote').textContent = 'Loading...';
        document.getElementById('author').textContent = '';
        
        // Fetch quote from API
        const response = await fetch('https://dummyjson.com/quotes/random');
        const data = await response.json();
        
        // Display quote and author
        document.getElementById('quote').textContent = data.quote;
        document.getElementById('author').textContent = '— ' + data.author;
        
    } catch (error) {
        document.getElementById('quote').textContent = 'Failed to load quote. Please try again.';
        document.getElementById('author').textContent = '';
    }
}

function copyQuote() {
    // Get the current quote text
    const quoteText = document.getElementById('quote').textContent;
    const authorText = document.getElementById('author').textContent;
    
    // Combine them
    const fullQuote = quoteText + ' ' + authorText;
    
    // Copy to clipboard
    navigator.clipboard.writeText(fullQuote);
    
    // Show confirmation (optional but nice)
    alert('Quote copied to clipboard!');
}