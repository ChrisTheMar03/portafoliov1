const titulo = document.getElementById("titulo");
const menuItem = document.getElementById("togle-menu-item");
const menuPhone = document.getElementById("menu-phone");
const body = document.querySelector('body')

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

let mostrar = false
//*Formulario
function enviarDatos(e){
    e.preventDefault()
    const nombre = e.target.nombre 
    const correo = e.target.correo
    const movil = e.target.movil
    const comentario = e.target.comentario

    if(validar(nombre) &&
        validar(correo) &&
          (validar(movil) && validarMovil(movil))){
           
        if(mostrar==false){
            mostrarAlerta()
            mostrar=!mostrar
        }

    }
}

function mostrarAlerta(){
    crearAlerta()
}

function crearAlerta(){

    const alertContainer=document.createElement('div')
    const alertSpan=document.createElement('span')

    alertSpan.innerText="Satisfactoriamente Enviado !!"
    alertSpan.setAttribute("class","alert-span")
    alertContainer.setAttribute("class","alert-container")
    alertContainer.appendChild(alertSpan)
    body.appendChild(alertContainer)

    alertContainer.style.top="0px"

    setTimeout(()=>{
        alertContainer.remove()
        mostrar=false
    },1500)

}


function validar(etiqueta){
    if(etiqueta.value.trim()==""){
        mostrarError(etiqueta,`${etiqueta.name} esta vacio.`)
        return false
    }

    limpiarError(etiqueta)
    return true
}

function validarMovil(etiqueta){
    if(etiqueta.value.length!=9){
        mostrarError(etiqueta,"Ingrese Numero correcto")
        return false
    }
    limpiarError(etiqueta)
    return true
}

function mostrarError(etiqueta,msg){
    etiqueta.focus()
    etiqueta.nextElementSibling.innerHTML=msg
}

function limpiarError(etiqueta){
    etiqueta.nextElementSibling.innerHTML=""
}