const titulo = document.getElementById("titulo");
const menuItem = document.getElementById("togle-menu-item")
const menuPhone = document.getElementById("menu-phone")

document.onscroll=scrollHeader
menuItem.onclick=toggleMenu

function scrollHeader(e){
    if (window.pageYOffset < 40) {
        titulo.style.padding = "20px 20px";
    }
    if (window.pageYOffset > 40) {
        titulo.style.padding = "12px 20px";
    }
}

function toggleMenu(){
    menuPhone.classList.toggle('ocultomenu')
}

function activeLink(e) {
//   e.target.classList.toggle("active");
}
