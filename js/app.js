'use strict';
// VARIABLES 
var form = document.querySelector("form");
var valoracion = form.querySelector("#valoracion");
var valorValor = form.querySelector(".form__resultado");
var mostrarValor = form.querySelector(".form__valoracion");
var parrafo = form.querySelectorAll('.form__p');
// VARIABLES DATOS PERSONALES
var nombre = form.querySelectorAll('.form__campos');
// VARIABLES DATOS BANCARIOS
var iban = form.querySelector("#IBAN");
var entidad = form.querySelector("#entidad");
var sucursal = form.querySelector("#entidad");
var DC = form.querySelector("#DC");
var cuenta = form.querySelector("#Cuenta");
// VARIABLE FECHA
var fecha = form.querySelector("#fecha");
// BOTONES
var botones = form.querySelectorAll('button');
var bRegistro = form.querySelector('#re');
// Marcar en rojo los campos sin rellenar
bRegistro.addEventListener('click', function () {
    nombre.forEach(function (campo, i) {
        if (nombre[i].value === '') {
            nombre[i].classList.add('error');
            nombre[i].placeholder = 'Rellenar campo';
        }
        else {
            nombre[i].classList.remove('error');
        }
    });
});
//  Burbuja valor
valoracion.addEventListener("input", function () {
    valorValor.innerText = valoracion.value;
    valorValor.style.left = (valoracion.value - 1) * 3.62 + "em";
});
var pasarCuenta = function () {
    parrafo[1].classList.toggle('pResultado');
    parrafo[1].innerText = "Le informamos que su cuenta bancaria es:\n    ES " + iban.value + "-" + entidad.value + "-" + sucursal.value + " - " + DC.value + "-" + cuenta.value;
};
var pasarValoracion = function () {
    parrafo[0].classList.toggle('pResultado');
    parrafo[0].innerText = "Has valorado con " + valoracion.value + " puntos";
};
var pasarFecha = function () {
    var dia_semana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    var dia = fecha.valueAsDate.getDay();
    parrafo[2].classList.toggle('pResultado');
    parrafo[2].innerText = "Encuesta rellenada un " + dia_semana[dia];
};
botones[0].addEventListener('click', pasarValoracion);
botones[1].addEventListener('click', pasarCuenta);
botones[2].addEventListener('click', pasarFecha);
