let side=document.getElementById('sidebar')
let bot=document.getElementById('menu')
function botao(){
 if(side.style.width =="250px"){
    side.style.width="0";
    content.style.marginLeft="0";
      
 }else{
    side.style.width="250px";
    content.style.marginLeft="250px";
 }

}
