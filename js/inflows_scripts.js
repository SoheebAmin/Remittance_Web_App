
// Grab Selected Year
function getYear() {
    return selectedYear = document.getElementById('year').value;
}

 // Grab search button and input
var searchButton = document.getElementById('search-button');
var searchInput = document.getElementById('search-input');


// Generate results
function searchCountry () {
    searchButton.addEventListener('click', () => {
    const input = searchInput.value; // grabs what is searched
    html = "";
    for (i = 0; i < 5; i++) {
    html += '<li class="tm-list-group-item"> ' + input + ' - ' +  getYear() + ' </li>';
    } 
    document.querySelector("#search").innerHTML = html
    });
}

// // JSON Testing
// for (let i = 0; i != inflows_data.length; i++) {
//     current_country = Object.values(inflows_data[i])
//     for (let j = 0; j != current_country.length; j++) {
//         if(current_country[j] == "China") {
//             console.log(current_country)
//         }
//     }
// }