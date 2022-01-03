var toggleBtn = document.querySelector('.toggle .switch input'),
    monthly = document.querySelectorAll('.monthly'),
    annually = document.querySelectorAll('.annually');

toggleBtn.onclick = function togglePlan() {
    if (toggleBtn.checked) {
        for (let i = 0; i < monthly.length; i++) {
            annually[i].style.display = "none";
            monthly[i].style.display = "block";
        }
    }
    else {
        for (let i = 0; i < monthly.length; i++) {
            monthly[i].style.display = "none";
            annually[i].style.display = "block";
        }
    }
}

toggleBtn.onKeyPress = function togglePlan() {
    if (toggleBtn.checked) {
        for (let i = 0; i < monthly.length; i++) {
            annually[i].style.display = "none";
            monthly[i].style.display = "block";
        }
    }
    else {
        for (let i = 0; i < monthly.length; i++) {
            monthly[i].style.display = "none";
            annually[i].style.display = "block";
        }
    }
}
