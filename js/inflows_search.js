// Grab Selected Year
function getYear() {
    return selectedYear = document.getElementById('year').value;
}

 // Grab search button and input
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');


// Generate results
searchButton.addEventListener('click', () => {
const input = searchInput.value; // grabs what is searched
html = "";
for (i = 0; i < 5; i++) {
html += '<li class="tm-list-group-item"> ' + getYear() + ' </li>';
} 
document.querySelector("#search").innerHTML = html
});


