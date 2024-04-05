console.log('%c HI', 'color: firebrick')
// index.js
document.addEventListener('DOMContentLoaded', () => {
    // Challenge 1: Fetch and display dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedList = document.getElementById('breed-list');

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                breedList.appendChild(imgElement);
            });
        })
        .catch(error => console.error("Error fetching dog images:", error));

    // Challenge 2: Fetch and display dog breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const liElement = document.createElement('li');
                liElement.textContent = breed;
                breedList.appendChild(liElement);
            });
        })
        .catch(error => console.error("Error fetching dog breeds:", error));

    // Challenge 3: Change font color on li click
    breedList.addEventListener('click', event => {
        if (event.target.tagName === 'LI') {
            event.target.style.color = getRandomColor();
        }
    });

    // Challenge 4: Filter breeds by starting letter
    const dropdown = document.getElementById('breed-filter');
    dropdown.addEventListener('change', () => {
        const selectedLetter = dropdown.value;
        const breedItems = breedList.querySelectorAll('li');
        breedItems.forEach(item => {
            const breedName = item.textContent.toLowerCase();
            item.style.display = breedName.startsWith(selectedLetter) ? 'block' : 'none';
        });
    });
});

// Helper function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
