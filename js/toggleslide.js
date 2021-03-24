
function changeSlide1(){
    const slide1 = document.getElementById("slide1");
    const slide2 = document.getElementById("slide2");
    const slider = document.getElementById("slider");

    
    if(slide2.style.display = "none"){
    slide1.style.display = "none";
    slide2.style.display = "block";
    slider.style.transform = "translateX(4rem)";
    } 
}

function changeSlide2(){
    const slide1 = document.getElementById("slide1");
    const slide2 = document.getElementById("slide2");
    const slider = document.getElementById("slider");

    if(slide1.style.display = "none"){
    slide1.style.display = "block";
    slide2.style.display = "none";
    slider.style.transform = "translateX(-4rem)";
    } 
}





