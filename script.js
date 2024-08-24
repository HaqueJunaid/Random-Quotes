const quotesPlace = document.querySelector(".quotes");
const authorName = document.querySelector(".author .text");
const btn = document.querySelector(".btn");

document.addEventListener("DOMContentLoaded", () => {
    fetchQuotes();
})

async function fetchQuotes() {
    var category = 'success';
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=' + category, {
            method: 'GET',
            headers: { 'X-Api-Key': 'Ix1M+JlLkTNmJXsMWewyJg==uuuFhvVVX8EXbDn1' },
            contentType: 'application/json'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        console.log(data);

        showData(data);

    } catch (error) {
        console.error('Error: ', error);
    }
}

function showData(data) {
    quotesPlace.innerHTML = `"${data[0].quote}"`;
    authorName.innerText = data[0].author;
}

btn.addEventListener("click", () => {
    fetchQuotes();
})