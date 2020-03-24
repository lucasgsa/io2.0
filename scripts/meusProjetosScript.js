function switchArrow(textId, buttonText){
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

document.getElementById("button_musicPlayer").addEventListener("click", () => {switchArrow("musicPlayer", "Android MusicPlayer")});
document.getElementById("button_geradorFrisos").addEventListener("click", () => {switchArrow("geradorFrisos", "Gerador de Frisos")});
document.getElementById("button_classicPotatoBoss").addEventListener("click", () => {switchArrow("classicPotatoBoss", "Classic Potato Boss")});
document.getElementById("button_pooPotatoBoss").addEventListener("click", () => {switchArrow("pooPotatoBoss", "POO Potato Boss")});