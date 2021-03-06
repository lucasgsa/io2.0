function showMenu(){
    var leftMenu = document.getElementById("section_left");
    var iconMenu = document.getElementById("menuIcon");
    if (leftMenu.style.marginLeft === "0px"){
        leftMenu.style.marginLeft = "-300px";
        iconMenu.src = "images/menu_icon.png";
    }
    else{
        leftMenu.style.marginLeft = "0px";
        iconMenu.src = "images/menu_opened_icon.png";

    }
}

AOS.init();
document.getElementById("rightMenuDiv").onclick = showMenu;

function scrollTo(to){
    document.getElementById(to).scrollIntoView();
}

document.getElementById("btn_aboutMe").addEventListener("click", () => scrollTo("div_sobreMim"));
document.getElementById("btn_expMe").addEventListener("click", () => scrollTo("div_experiencias"));
document.getElementById("btn_meusProjetos").addEventListener("click", () => scrollTo("div_meusProjetos"));