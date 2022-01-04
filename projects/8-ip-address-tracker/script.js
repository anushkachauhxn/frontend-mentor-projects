const searchInputElement = document.querySelector('.search-bar input'),
      searchBtnElement = document.querySelector('.search-bar button'),
      ipAddressElement = document.querySelector('.result-banner .ip-address p'),
      locationElement = document.querySelector('.result-banner .location p'),
      timezoneElement = document.querySelector('.result-banner .timezone p'),
      ispElement = document.querySelector('.result-banner .isp p');

/* ------------ IP Geolocation API ------------ */
const ip_api_url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_pLP3GxTGvvdNg0710b5WZLfFjPzPF&ipAddress=";
var ipAddress = "";

function searchIpDetails(ipAddress) {
    fetch(ip_api_url + ipAddress)
    .then(res => res.json())
    .then(data => {
        ipAddressElement.innerHTML = data.ip;
        locationElement.innerHTML = data.location.city + ", " + data.location.region + " " + data.location.postalCode;
        timezoneElement.innerHTML = "UTC " + data.location.timezone;
        ispElement.innerHTML = data.isp;
        loadMapView(data.location.lat, data.location.lng);
    })
    .catch(err => {
        // alert("Error: Please enter a valid IP Address.");
        clearResults();
        console.log(err);
    });
}

function clearResults() {
    ipAddressElement.innerHTML = "";
    locationElement.innerHTML = "";
    timezoneElement.innerHTML = "";
    ispElement.innerHTML = "";
    searchInputElement.value = "";
    searchInputElement.focus();
}

// 1) See their own IP address on the map on the initial page load
window.onload = function () {
    ipAddress = "";
    searchIpDetails(ipAddress);     // When we give empty ipAddress, the API fetches details about IP Address of the user
    searchInputElement.focus();
}

// 2) Search for any IP addresses or domains and see the key information and location
searchBtnElement.onclick = function () {
    ipAddress = searchInputElement.value;
    searchIpDetails(ipAddress);
}

/* ------------ MAP DISPLAY ------------ */
const map_url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const map = L.map('map').setView([0, 0], 16);
const tiles = L.tileLayer(map_url, { 
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
});
tiles.addTo(map);

const icon = L.icon({
    iconUrl:      './assets/icon-location.svg',
    iconSize:     [46, 56], // size of the icon
    iconAnchor:   [23, 56]  // point of the icon which will correspond to marker's location
});
const marker = L.marker([0, 0], {icon: icon});
marker.addTo(map);

function loadMapView(lat, lng) {
    map.setView([lat, lng], 16);
    marker.setLatLng([lat, lng]);
}
