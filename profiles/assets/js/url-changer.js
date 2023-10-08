// Define an array of names and corresponding links
const namesWithLinks = [{
        name: "adore.lol",
        link: "https://adore.lol"
    },
    {
        name: "obsess.lol",
        link: "https://obsess.lol"
    },
    {
        name: "reach.lol",
        link: "https://reach.lol"
    },
    {
        name: "detain.lol",
        link: "https://detain.lol"
    },
    {
        name: "vow.lol",
        link: "https://vow.lol"
    },
    {
        name: "slain.lol",
        link: "https://slain.lol"
    },
];

// Function to shuffle the array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to update the list with random names and links
function updateNameList() {
    shuffleArray(namesWithLinks);
    const listItems = document.querySelectorAll(".url-listing li");
    listItems.forEach((item, index) => {
        const nameLink = document.createElement("a");
        nameLink.href = namesWithLinks[index].link;
        nameLink.textContent = namesWithLinks[index].name;
        item.textContent = ''; // Clear the previous content
        item.appendChild(nameLink);
    });
}

// Call the updateNameList function on page load
window.addEventListener("load", updateNameList);