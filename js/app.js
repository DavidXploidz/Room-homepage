//Selectores Globales
const iconHam = document.querySelector('#iconHam')
const iconClose = document.querySelector('#iconClose')
const menuOculto = document.querySelector('.menuOculto')
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')
const header = document.querySelector('#header')
const txtTitulo = document.querySelector('#txtTitulo')
const txtParrafo = document.querySelector('#txtParrafo')

let contador = 0;

/**** Listeners ****/

//Muestra y oculta el contenido en version mobile
iconHam.addEventListener('click', () => {
    menuOculto.classList.add('activo')
    document.body.style.overflow = 'hidden'
})
iconClose.addEventListener('click', () => {
    menuOculto.classList.remove('activo')
    document.body.style.overflow = 'scroll'
})

//Listeners para llamar funciones de cambio de contenido
prevBtn.addEventListener('click', () => {
    prevContenido()
})
nextBtn.addEventListener('click', () => {
    nextContenido()
})

//Data
const datos = [
    {
        id: 1,
        imagen: "images/desktop-image-hero-1.jpg",
        titulo: "Discover innovative ways to decorate",
        texto: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        id: 2,
        imagen: "images/desktop-image-hero-2.jpg",
        titulo: "We are available all across the globe",
        texto: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`
    },
    {
        id: 3,
        imagen: "images/desktop-image-hero-3.jpg",
        titulo: "Manufactured with the best materials",
        texto: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`
    }
]

//Carga en cuanto el documento este listo
document.addEventListener('DOMContentLoaded', () => {
    contenidoInicial()
})

//Funciones para cambiar entre contenido dinamicamente
const contenidoInicial = () => {
   const {id, imagen, titulo, texto} = datos[contador]
   header.style.backgroundImage = `url(${imagen})`
   txtTitulo.textContent = `${titulo}`
   txtParrafo.textContent = `${texto}`
   
}

function prevContenido(){
    contador--;
    txtTitulo.classList.add('animacionTitulo')
    txtParrafo.classList.add('animacionParrafo')
    if(contador < 0){
        contador = datos.length - 1;
        contenidoInicial()
        txtTitulo.classList.add('animacionTitulo')
        txtParrafo.classList.add('animacionParrafo')
        setTimeout(() => {
            txtTitulo.classList.remove('animacionTitulo')
            txtParrafo.classList.remove('animacionParrafo')
        },500)
        return;
    }
    contenidoInicial()
    setTimeout(() => {
        txtTitulo.classList.remove('animacionTitulo')
        txtParrafo.classList.remove('animacionParrafo')
    },500)
}

function nextContenido(){
    contador++;
    txtTitulo.classList.add('animacionTitulo')
    txtParrafo.classList.add('animacionParrafo')
    if(contador >= datos.length){
        contador = 0;
        contenidoInicial()
        txtTitulo.classList.add('animacionTitulo')
        txtParrafo.classList.add('animacionParrafo')
        setTimeout(() => {
            txtTitulo.classList.remove('animacionTitulo')
            txtParrafo.classList.remove('animacionParrafo')
        },500)
        return;
    }
    contenidoInicial()
    setTimeout(() => {
        txtTitulo.classList.remove('animacionTitulo')
        txtParrafo.classList.remove('animacionParrafo')
    },500)

}
