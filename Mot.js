async function gm(event) {
    if (event) {
        event.preventDefault(); // Prevent default form submission behavior if event is present
    }
    
    try {
        const apiKey = "5NhtLzzDQm0fBN8o0zBr6A==NrArR34M586c6Poq"; // API key for authentication
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
            headers: {
                'X-API-KEY': apiKey // Include API key in request headers
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch quote'); // Throw error if response is not successful
        }

        const data = await response.json(); // Parse JSON response
        const randomQuote = data[0]; // Assuming the API returns an array with a single quote object

        // Update HTML elements with quote and author information
        document.getElementById('msg').innerHTML = `<h2>"${randomQuote.quote}"</h2>`;
        document.getElementById('aut').innerHTML = `<h2>${randomQuote.author ? `- ${randomQuote.author}` : '- Unknown'}</h2>`;
    } catch (error) {
        console.error('Error fetching the quote', error); // Log error to console if fetch fails
    }
}
