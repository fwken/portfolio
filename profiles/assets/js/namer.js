// Get references to the text and list
const textList = document.querySelector('.text-list-2');
const threeColumnList = document.querySelector('.three-column-list');
const hiddenLinks = document.querySelectorAll('.hidden-link');

// Add a click event listener to the text
textList.addEventListener("click", function() {
    // Hide the text
    textList.style.display = "none";

    // Show the list
    threeColumnList.style.opacity = "1";

    // Show the hidden links
    hiddenLinks.forEach(link => {
        link.style.display = "inline";
    });
});