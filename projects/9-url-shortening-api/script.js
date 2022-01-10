const submitBtnElement = document.querySelector('.hero-component form button'),
      inputElement = document.querySelector('.hero-component form input'),
      formElement = document.querySelector('.hero-component form'),
      resultsContainerElement = document.querySelector('.hero-component-results');

/* -------- #1 SUBMIT BUTTON FUNCTION -------- */
submitBtnElement.onclick = function(e) {
    e.preventDefault();
    shortenUrl(inputElement.value);
}

/* Main Function */
function shortenUrl(inputUrl) {
    if (inputUrl === "") {
        addError();
    } else {
        removeError();
        showLoader();
        fetchData(inputUrl);
    }
}

/* API Function */
function fetchData(inputUrl) {
    fetch(`https://api.shrtco.de/v2/shorten?url=${inputUrl}`)
        .then(res => res.json())
        .then(data => {
            console.log('Success:', data);
            showResults(data.result.original_link, data.result.full_short_link2);
        })
        .catch((error) => {
            console.log('Error:', error);
            handleError();
        });
}

/* Show Function */
function showResults(inputUrl, outputUrl) {
    inputElement.value = "";
    resultsContainerElement.innerHTML = `
        <div class="result">
            <p class="long-link">${inputUrl}</p>
            <div>
                <p class="short-link">${outputUrl}</p>
                <button class="copy-btn">Copy</button>
            </div>
        </div>` 
        + resultsContainerElement.innerHTML;
    
    hideLoader();

    // Call these functions each time to include the newly added html
    setTimeout(function() {
        copyBtns();
        populateStorage();
    }, 0);
}

/* Error Functions for empty input */
function addError() {
    if (!formElement.classList.contains('form-error')) {
        formElement.classList.add('form-error');
        inputElement.focus();
    }
}
function removeError() {
    if (formElement.classList.contains('form-error')) {
        formElement.classList.remove('form-error');
    }
}

/* Error Function for API errors */
function handleError() {
    alert('Error: Something went wrong.');
    hideLoader();
    inputElement.value = "";
    inputElement.focus();
}

/* Loader Functions */
function showLoader() {
    submitBtnElement.classList.add('loading');
}
function hideLoader() {
    submitBtnElement.classList.remove('loading');
}

/* -------- #2 COPY BUTTON FUNCTION -------- */
function copyBtns() {
    const resultElements = document.querySelectorAll('.hero-component-results .result');

    resultElements.forEach((result) => {
        const copyBtn = result.querySelector('.copy-btn'),
              copyText = result.querySelector('.short-link');
        
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(copyText.innerText)
                .then(() => {
                    copyBtn.innerText = "Copied!";
                    copyBtn.classList.add('active');
                    
                    setTimeout(() => {
                        /* Set the copy button back to normal after 2 seconds */
                        copyBtn.innerText = "Copy";
                        copyBtn.classList.remove('active');
                    }, 5000);
                });
        }
    });
}

/* -------- #3 RELOAD FUNCTIONALITY -------- */
function populateStorage() {
    sessionStorage.setItem('results', resultsContainerElement.innerHTML);
}
window.onload = () => {
    // Previous results stay on the page on refresh/reload
    resultsContainerElement.innerHTML = sessionStorage.getItem('results');
    copyBtns();
}
window.onunload = () => {
    // The page is clean when browser/tab is closed and then opened
    resultsContainerElement.innerHTML = "";
}

/* -------- #4 OTHER FUNCTIONS -------- */
/* Submit the URL when user clicks 'Enter' key */
inputElement.onkeyup = (e) => {
    if (e.code === 'Enter') {
        e.preventDefault();
        submitBtnElement.click();
    }
}

/* MOBILE VIEW - Nav Menu Functionality */
const menuElement = document.querySelector('header .menu'),
      navItems = document.querySelector('header nav');

menuElement.onclick = () => {
    navItems.classList.toggle('active');
}
