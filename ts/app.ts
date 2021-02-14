'use strict'
// VARIABLES 
const form=(document.querySelector("form") as HTMLFormElement)
const valoracion = (form.querySelector("#valoracion") as HTMLFormElement)
const valorValor=(form.querySelector(".form__resultado")as HTMLFormElement)
const mostrarValor=(form.querySelector(".form__valoracion")as HTMLFormElement)
const parrafo= form.querySelectorAll<HTMLFormElement>('.form__p')
// VARIABLES DATOS PERSONALES
let nombre= form.querySelectorAll<HTMLFormElement>('.form__campos')

// VARIABLES DATOS BANCARIOS
let iban  = (form.querySelector("#IBAN")as HTMLFormElement)
let entidad  = (form.querySelector("#entidad")as HTMLFormElement)
let sucursal  = (form.querySelector("#entidad")as HTMLFormElement)
let DC  = (form.querySelector("#DC")as HTMLFormElement)
let cuenta  = (form.querySelector("#Cuenta")as HTMLFormElement)

// VARIABLE FECHA
let fecha  =(form.querySelector("#fecha")as HTMLFormElement)

// BOTONES
const botones = form.querySelectorAll<HTMLFormElement>('button')

const bRegistro = ( form.querySelector('#re') as HTMLFormElement)

// Marcar en rojo los campos sin rellenar
bRegistro.addEventListener('click',() : void =>{
    nombre.forEach((campo :any,i:number):void=>{
        if(nombre[i].value === ''){
            nombre[i].classList.add('error')
            nombre[i].placeholder='Rellenar campo'
        }
        else{
            nombre[i].classList.remove('error')
        }
    })
})
//  Burbuja valor
valoracion.addEventListener("input",():void=>{
    valorValor.innerText=valoracion.value
    valorValor.style.left=`${ ( valoracion.value - 1 ) * 3.62}em`
})

let pasarCuenta=(): void=>{
    parrafo[1].classList.toggle('pResultado')
    parrafo[1].innerText= `Le informamos que su cuenta bancaria es:
    ES ${iban.value}-${entidad.value}-${sucursal.value} - ${DC.value}-${cuenta.value}`    
}
let pasarValoracion=():void=>{
    parrafo[0].classList.toggle('pResultado')
    parrafo[0].innerText=`Has valorado con ${valoracion.value} puntos`
}
let pasarFecha=():void=>{
    let dia_semana : Array<String> = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado']
    let dia :number = fecha.valueAsDate.getDay()
    parrafo[2].classList.toggle('pResultado')
    parrafo[2].innerText=`Encuesta rellenada un ${dia_semana[dia]}`
}

botones[0].addEventListener ('click', pasarValoracion)
botones[1].addEventListener ( 'click', pasarCuenta)
botones[2].addEventListener ( 'click', pasarFecha)