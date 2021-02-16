
 
 // Code to grab search button and input
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
const input = searchInput.value; // grabs what is searched
html = '<li class="tm-list-group-item"> ' + input + ' </li>'
document.querySelector("#search").innerHTML = html;
});


