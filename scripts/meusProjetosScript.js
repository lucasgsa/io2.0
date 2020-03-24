function switchArrow(textId){
    backAll();
    var texto = document.getElementById("texto_"+textId);
    var arrow = document.getElementById("arrow_"+textId);
    if (texto.style.display == ""){
        texto.style.display = "inherit";
        arrow.style.transform = "rotateZ(90deg)";
    } else {
        texto.style.display = "";
        arrow.style.transform = "rotateZ(0deg)";
    }
}

function backAll(){
    for (var id in allArrows){
        var textId = allArrows[id];
        var texto = document.getElementById("texto_"+textId);
        var arrow = document.getElementById("arrow_"+textId);
        texto.style.display = "";
        arrow.style.transform = "rotateZ(0deg)";
    }
}

var allArrows = ["musicPlayer", "geradorFrisos", "classicPotatoBoss", "pooPotatoBoss"];

AOS.init();
document.getElementById("button_musicPlayer").addEventListener("click", () => {switchArrow("musicPlayer")});
document.getElementById("button_geradorFrisos").addEventListener("click", () => {switchArrow("geradorFrisos")});
document.getElementById("button_classicPotatoBoss").addEventListener("click", () => {switchArrow("classicPotatoBoss")});
document.getElementById("button_pooPotatoBoss").addEventListener("click", () => {switchArrow("pooPotatoBoss")});