// naviation setting
function navbar(){
     let nav = document.querySelector('.nav-links');
     if(nav.style.maxHeight == '0px'){
         nav.style.maxHeight="100%";
     }else{
         nav.style.maxHeight="0px";
     }
}