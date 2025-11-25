const form = document.querySelector(".formulario-pedir-orçamento")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm(){
    form.style.left = "-340px"
    mascara.style.visibility = "hidden"
}