window.onload = function () {
    document.getElementById("copyright").innerHTML = new Date().getFullYear();
}

// carousel
let intIndex = 0;
function showImage() {
    intIndex++;

    let images = document.getElementsByClassName("image");
    let dots = document.getElementsByClassName("dot");

    for(n=0; n < images.length; n++) {
        images[n].style.display = "none"
        dots[n].className = dots[n].className.replace(" active", "");
    }
    if(intIndex>images.length-1){
        intIndex=0;
    }
    if(intIndex<0){
        intIndex=images.length-1;
    }

    images[intIndex].style.display = "block";
    dots[intIndex].className+= " active";
}
setInterval(() => {
    showImage();
}, 5000);



//menu
// Toggle Mobile Menu

const navigationMenu = document.getElementById("navmenu");
const navigationButton = document.getElementById("toggle-menu");

function toggleMenu() {
    let isVisible = navigationMenu.getAttribute("data-visible");

    if(isVisible==="false"){
        if(navigationMenu.classList.contains("active")){
            navigationMenu.setAttribute("data-visible", "true");
            navigationButton.setAttribute("data-visible", "true");
        }
        else{
            dataDisplay();
            setTimeout(toggleMenu, 300);
        }


    }
    else{
        navigationMenu.setAttribute("data-visible", "false");
        navigationButton.setAttribute("data-visible", "false");
        setTimeout(dataDisplay, 300);
    }

    function   dataDisplay() {
        navigationMenu.classList.toggle("active");
    }


}

navigationButton.addEventListener("click", toggleMenu);
