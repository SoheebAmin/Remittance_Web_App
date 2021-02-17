
// Grab Selected Year
function getYear() {
    return selectedYear = document.getElementById('year').value;
}

 // Grab search button and input
var searchButton = document.getElementById('search-button');
var searchInput = document.getElementById('search-input');


// Generate results
function searchCountry () {
    // grabs what is searched
    searchButton.addEventListener('click', () => {
    const input = searchInput.value; 
    
    // Checks to see if the searched country is actually a country in our database 
    var country_exists = false;
    for (let i = 0; i != inflows_data.length; i++) {
        current_country = Object.values(inflows_data[i])
        for (let j = 0; j != current_country.length; j++) {
            if(current_country[j] == input) {
                country_exists = true;
            }
        }
    }

    if (!country_exists) {
        alert(input + " is not a valid country in the database");
        return false;
    }


    // If so, we inject the remittance data for the given year via HTML
    html = "";
    for (i = 0; i < 5; i++) {
    html += '<li class="tm-list-group-item"> ' + input + ' - ' +  getYear() + ' </li>';
    } 
    document.querySelector("#search").innerHTML = html;    

    // If so, we inject the remittance data for the given year via HTML
    html = "";
    for (i = 0; i < 5; i++) {
    html += '<li class="tm-list-group-item"> ' + input + ' - ' +  getYear() + ' </li>';
    } 
    document.querySelector("#search").innerHTML = html
    });
}

// // JSON Testing


