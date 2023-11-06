function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
function rand(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function aleatorio(){
var num = rand(1,8);
const img = document.getElementById("divaleatorio");
    if(num == 1 ){
        img.innerHTML="<img src=\"pikachusombra.png\">";
    }else if(num == 2){
        img.innerHTML="<img src=\"rosasombra.png\">";
    }else if(num == 3){
        img.innerHTML="<img src=\"marronsombra.png\">";
    }else if(num == 4){
        img.innerHTML="<img src=\"laranjasombra.png\">";
    }else if(num == 5){
        img.innerHTML="<img src=\"bulbasaurosombra.png\">";
    }else if(num == 6){
        img.innerHTML="<img src=\"charmandersombra.png\">";
    }else if(num == 7){
        img.innerHTML="<img src=\"azulsombra.png\">";
    }else if(num == 8){
        img.innerHTML="<img src=\"pinguimsombra.png\">";
    }
}