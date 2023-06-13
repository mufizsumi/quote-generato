const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authortext = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show New Quote
function newQuote() {
// Pick a random quote from apiQuotes array
 let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
 quoteText.textContent = quote.text;
 authortext.textContent = quote.author;

}
//Get Quotes From API
async function getQuote()  {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authortext.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

//On Load
getQuote();
