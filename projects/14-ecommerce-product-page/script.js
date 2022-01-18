/* --- MAIN PAGE IMAGES: Displaying Thumbnail Images --- */
const displayImg = document.querySelector('.product-images .display-img img'),
      thumbnails = document.querySelectorAll('.product-images .thumbnail-img div');

var currentImg = 1;
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
        removeActives(thumbnails);
        addActive(thumbnail);

        currentImg = index + 1;
        displayImg.src = `./assets/image-product-${currentImg}.jpg`;
    });
});

/* For Mobile Version (Prev/Next Buttons) */
const mobilePrevBtn = document.querySelector('.product-images .display-img .mobile-btns.prev-btn'),
      mobileNextBtn = document.querySelector('.product-images .display-img .mobile-btns.next-btn');

mobilePrevBtn.onclick = () => {
    if (currentImg === 1) {
        currentImg = 4;
    } else {
        currentImg--;
    }
    updateMobileImages(currentImg);
}
mobileNextBtn.onclick = () => {
    if (currentImg === 4) {
        currentImg = 1;
    } else {
        currentImg++;
    }
    updateMobileImages(currentImg);
}
function updateMobileImages(currentImg) {
    displayImg.src = `./assets/image-product-${currentImg}.jpg`;
}

/* --- ITEMS + CART FUNCTIONALITY --- */
const minusBtn = document.querySelector('.product-details .numeric-box .minus'),
      plusBtn = document.querySelector('.product-details .numeric-box .plus'),
      deleteBtn = document.querySelector('.cart-details .purchase-details .delete-btn'),
      itemsBox = document.querySelector('.product-details .numeric-box input'),
      cart = document.querySelector('.cart-details'), 
      checkoutPrice = document.querySelector('.cart-details .purchase-details .purchase-price'),
      cartBtn = document.querySelector('header .cart-icon'),
      itemsPopup = document.querySelector('header .cart-icon span');

/* Number of Items Counter */
var numOfItems = 0;

plusBtn.onclick = () => {
    numOfItems++;
    updateItems(numOfItems);
}
minusBtn.onclick = () => {
    if (numOfItems > 0) {
        numOfItems--;
        updateItems(numOfItems);
    }
}
deleteBtn.onclick = () => {
    numOfItems = 0;
    updateItems(numOfItems);
}

/* Update Items on the Input Box */
function updateItems(numOfItems) {
    itemsBox.value = numOfItems;
    updatePopup(numOfItems)
    updatePrice(numOfItems);

    if (numOfItems === 0) {
        addEmpty(cart);
        addEmpty(itemsPopup);
    } else {
        removeEmpty(cart);
        removeEmpty(itemsPopup);
    }
}
/* Update Price in the Cart Checkout */
function updatePrice(numOfItems) {
    const newPrice = (numOfItems * 125).toFixed(2);
    checkoutPrice.innerHTML = `$125.00 x ${numOfItems} <span>$${newPrice}</span>`;
}
/* Update orange popup on cart icon */
function updatePopup(numOfItems) {
    itemsPopup.innerHTML = numOfItems;
}

/* --- Showing/Hiding Cart --- */
cartBtn.onclick = (e) => {
    e.preventDefault();
    toggleActive(cart);
}

/* --- LIGHTBOX FUNCTIONALITY --- */
const lightbox = document.querySelector('.lightbox'),
      lightboxDisplayImg = document.querySelector('.lightbox .display-img img'),
      lightboxThumbnails = document.querySelectorAll('.lightbox .thumbnail-img div'),
      lightboxCloseBtn = document.querySelector('.lightbox .display-img .close-btn'),
      lightboxPrevBtn = document.querySelector('.lightbox .display-img .prev-btn'),
      lightboxNextBtn = document.querySelector('.lightbox .display-img .next-btn');

var currentLightboxImg = 1;

/* Using Thumbnail Icons */
lightboxThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
        removeActives(lightboxThumbnails);
        addActive(thumbnail);

        currentLightboxImg = index + 1;
        lightboxDisplayImg.src = `./assets/image-product-${currentLightboxImg}.jpg`;
    });
});

/* Modal Open/Close */
displayImg.onclick = () => {
    addActive(lightbox);
}
lightboxCloseBtn.onclick = () => {
    removeActive(lightbox);
}

/* Prev/Next Buttons */
lightboxPrevBtn.onclick = () => {
    if (currentLightboxImg === 1) {
        currentLightboxImg = 4;
    } else {
        currentLightboxImg--;
    }
    updateLightboxImages(currentLightboxImg);
}
lightboxNextBtn.onclick = () => {
    if (currentLightboxImg === 4) {
        currentLightboxImg = 1;
    } else {
        currentLightboxImg++;
    }
    updateLightboxImages(currentLightboxImg);
}
function updateLightboxImages(currentLightboxImg) {
    lightboxDisplayImg.src = `./assets/image-product-${currentLightboxImg}.jpg`;
    removeActives(lightboxThumbnails);
    addActive(lightboxThumbnails[currentLightboxImg - 1]);
}

/* --- MOBILE MENU Open/Close --- */
const menuBtn = document.querySelector('header .mobile-menu.menu-btn'),
      menuCloseBtn = document.querySelector('header .mobile-menu.close-btn'),
      mobileMenu = document.querySelector('header ul');

menuBtn.onclick = () => {
    addActive(mobileMenu);
}
menuCloseBtn.onclick = () => {
    removeActive(mobileMenu);
}

/* --- Support Functions --- */
/* Empty/Non-Empty Functions */
function addEmpty(element) {
    element.classList.add('empty');
}
function removeEmpty(element) {
    if (element.classList.contains('empty')) {
        element.classList.remove('empty');
    }
}

/* Active Class Functions */
function addActive(element) {
    element.classList.add('active');
}
function removeActive(element) {
    element.classList.remove('active');
}
function removeActives(elements) {
    elements.forEach((element) => {
        element.classList.remove('active');
    });
}
function toggleActive(element) {
    element.classList.toggle('active');
}
