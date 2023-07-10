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
        
        
        var coords = [ [-25.575614852069705, -49.31674699174379], [-26.208648018832783, -50.11266459621588]];
        filterCoordinates(result.center.lat, result.center.lng, coords)

         
        if (lastMarker) {  
            map.removeLayer(lastMarker);  
        }  

        
        lastMarker = L.marker(result.center).addTo(map).bindPopup(result.name || result.html || result.label).openPopup();  
        }  
    });  
});

function distance(lat1, lon1, lat2, lon2) {  
    const R = 6371;  
    const dLat = degToRad(lat2 - lat1);  
    const dLon = degToRad(lon2 - lon1);  
      
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +  
              Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) *  
              Math.sin(dLon / 2) * Math.sin(dLon / 2);  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));  
      
    const distance = R * c;
    return(distance)
}

function degToRad(deg) {  
    return deg * (Math.PI / 180);  
} 

function filterCoordinates(centerLat, centerLon, coords) {   
    var radius = parseFloat(document.getElementById("radius").value);    
    var filteredCoords = [];      
    for (var i = 0; i < coords.length; i++) {      
        var lat = coords[i][0];      
        var lon = coords[i][1];      
        var d = distance(centerLat, centerLon, lat, lon);
        if (d <= radius) {      
            filteredCoords.push(coords[i]);      
        }      
    }      
    displayFilteredCoords(filteredCoords);
}  

function displayFilteredCoords(coords) {
    document.getElementById("filtered-coords").innerHTML = "";  
    var ul = document.getElementById("filtered-coords");  
    ul.innerHTML = "";  
    for (var i = 0; i < coords.length; i++) {  
        var li = document.createElement("li");  
        li.appendChild(document.createTextNode(coords[i][0] + ", " + coords[i][1]));  
        ul.appendChild(li);  
    }  
} 