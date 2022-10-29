/////////////////////////////// VARIABLES /////////////////////////////////////////////
let navbar = document.getElementById("navbar");
///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// NAVBAR SCROLLLIN //////////////////////////////
window.onscroll = function(){
    if(window.scrollY >= 100 && window.scrollY < 200){

        navbar.style.opacity = 0.9 ;
        navbar.style.top = "0";
        navbar.style.transition = "top 0.3s"; 

    }else if(window.scrollY >= 200 && window.scrollY < 300){
        navbar.style.opacity = 0.7 ;
        navbar.style.top = "-10px";
        navbar.style.transition = "top 0.3s"; 
    }else if(window.scrollY >= 300){

      navbar.style.top = "-105px";
      navbar.style.transition = "1s";
    }else{

        navbar.style.opacity = 1;
        navbar.style.top = "0";
        navbar.style.transition = 0;
    }
}
//////////////////////////////////////////////////////////////////////////////////////
