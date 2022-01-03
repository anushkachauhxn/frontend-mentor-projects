var pagesElement = document.getElementById('pages'),
    priceElement = document.getElementById('price'),
    toggleSwitchElement = document.getElementById('toggleSwitch'),
    rangeSliderElement = document.getElementById('rangeSlider'),
    rangeSliderProgressElement = document.getElementById('rangeSliderProgress');

// Display values
var pages = ["10K", "50K", "100K", "500K", "1M"];
var prices = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];
var discountedPrices = ["$6.00", "$9.00", "$12.00", "$18.00", "$27.00"];

toggleSwitchElement.oninput = function() {
    priceElement.innerHTML = (toggleSwitchElement.checked) ? discountedPrices[rangeSliderElement.value] : prices[rangeSliderElement.value];
}

// Slider bar value
var ratio = 0.5;
var width = (window.innerWidth <= 375) ? "(100% - (2 * 24px))" : "(100% - (2 * 48px) - 20px)";   // padding differs depending on the device width

rangeSliderElement.oninput = function() {
    pagesElement.innerHTML = pages[this.value];
    priceElement.innerHTML = (toggleSwitchElement.checked) ? discountedPrices[this.value] : prices[this.value];

    ratio = parseInt(this.value) / 4;
    rangeSliderProgressElement.style.width = `calc(${width} * ${ratio})`;
}
rangeSliderElement.oninput(); // for default values

// Reload on resize is necessary because width is not recalculated until you refresh
window.onresize = function() {
    location.reload();
}
