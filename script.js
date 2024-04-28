
let dropdown = document.querySelector('.dropdown-content');
let dropbutton = document.querySelector('.dropbtn');
let bars = document.querySelector('#bars');
let xmark = document.querySelector('#mark');

dropdown.style.display = "none";
xmark.style.display = "none";


dropbutton.addEventListener('click', (e) => {

    if(dropdown.style.display == "none") {
        
        xmark.style.display = "block";
        bars.style.display = "none";
        dropdown.style.display = "block";
        dropbutton.style.background = "#1d1d24";
    
    } else {
        
        xmark.style.display = "none";
        bars.style.display = "block";
        dropdown.style.display = "none";
        dropbutton.style.background = "none";
    }
})




     
