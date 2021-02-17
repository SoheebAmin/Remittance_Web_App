// Populate Remittance Totals per country
var country_name = ""
for (let i = 0; i != inflows_data.length; i++) {
    current_country = Object.values(inflows_data[i])
    for (let j = 0; j != current_country.length; j++) {
        if(typeof current_country[j] === 'string') {

        }
    }
}


// Grab Selected Year
function getYear() {
    return selectedYear = document.getElementById('year').value;
}

 // Grab search button and input
var searchButton = document.getElementById('search-button');
var searchInput = document.getElementById('search-input');


// Get Remittance Results for Country, per given year
function searchCountry() {
    // for time measurement
    var start = window.performance.now();

    const input = searchInput.value; 
    var country = "";
    // Checks to see if the searched country is actually a country in our database 
    var country_exists = false;
    country_with_data = null;
    for (let i = 0; i != inflows_data.length; i++) {
        current_country = Object.values(inflows_data[i])
        for (let j = 0; j != current_country.length; j++) {
            if(typeof current_country[j] === 'string') {
                if(current_country[j].toLowerCase() == input.toLowerCase()) {
                    country_with_data = inflows_data[i]
                    country = current_country[j]
                    country_exists = true;
                    break;
                }
            }
        }
    }
    if (!country_exists) {
        alert(input + " is not a valid country in the database");
        return false;
    }

    // Check if year selected
    const year_to_check = getYear();
    if (!year_to_check) {
        alert("Please select a year");
        return false;
    }

    // If country exists and year selected, then we can grab the remittance data for that year.
    remittance_data = country_with_data[year_to_check]

    // Create an error message if null
    if(remittance_data == null) {
        remittance_data = "No data on record for this year";
    }
    else {
        remittance_data = remittance_data * 1000000; // multiply by 1000 because data is in millions
        remittance_data = remittance_data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // add thousands separators
        remittance_data = "$" + remittance_data + " USD"}; 

    var end = window.performance.now();
    var time = end - start;   

    html = '<li class="tm-list-group-item"> ' + remittance_data + ' </li>';
    html += '<li class="tm-list-group-item">  Query Time: ' + time + ' ms </li>';
    document.querySelector("#search").innerHTML = html
    
 
};


