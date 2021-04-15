var navOpen = false;

function openNav () {
    var nav = document.getElementById("nav");
    var navButton = document.getElementById("navButton");

    if (navOpen == false) {
        nav.style.display = "block";
        navButton.src = 'Assets/Icons/cancel.svg';
        navOpen = true;
        return;
    } else if (navOpen == true) {
        nav.style.display = "none";
        navButton.src = 'Assets/Icons/menu.svg';
        navOpen = false;
        return;
    }
    

    
};