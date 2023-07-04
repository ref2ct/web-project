let latLngString = '';  
const map = L.map('map').setView([-25.53752208344801, -49.31857604852474], 15);  
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {  
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'  
}).addTo(map);  

const geocoder = L.Control.Geocoder.nominatim();  
const searchButton = document.getElementById('searchButton');  
const searchInput = document.getElementById('searchInput');  
let lastMarker = null;  

searchButton.addEventListener('click', () => {  
geocoder.geocode(searchInput.value, (results) => {  
    if (results.length === 0) {  
    alert('Address not found');  
    } else {  
    const result = results[0];  
    map.setView(result.center, 16);  
    
    // Save latitude and longitude as a string  
    latLngString = result.center.lat + ',' + result.center.lng;  

    // Remove the last marker if it exists  
    if (lastMarker) {  
        map.removeLayer(lastMarker);  
    }  

    // Add a new marker and store it as the last marker  
    lastMarker = L.marker(result.center).addTo(map).bindPopup(result.name || result.html || result.label).openPopup();  
    }  
});  
});