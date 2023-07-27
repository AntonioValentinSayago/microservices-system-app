'use strict';

const boton = document.getElementById('toggle-form-gasto');
const formularioGasto = document.getElementById('formulario-gasto');

const abrirFormularioGasto = () => {

    boton.classList.add('agregar-gasto__btn--active');
    formularioGasto.classList.add('formulario-gasto--active');
};

const cerrarFormularioGasto = () => {
    boton.classList.remove('agregar-gasto__btn--active');
    formularioGasto.classList.remove('formulario-gasto--active');
};

boton.addEventListener('click', (e) => {
    if([...formularioGasto.classList].includes('formulario-gasto--active')){
        cerrarFormularioGasto();
    }else {
        abrirFormularioGasto();
    }

});

const formulario = document.querySelector('#formulario-gasto form');
const descripcion = formulario.descripcion;
const precio = formulario.precio;

const expRegularDescripcion = /^[a-zA-Z0-9\_\- ]{4,30}$/;
const expRegularPrecio = /^\d+(\.\d+)?$/;

const comprobarDescripcion = () => {
    if (!expRegularDescripcion.test(descripcion.value)) {
        descripcion.classList.add('formulario-gasto__input--error');

        formulario.descripcion.parentElement.querySelector('.formulario-gasto__leyenda')
        .classList.add('formulario-gasto__leyenda--active');

        return false;
    }else {
        descripcion.classList.remove('formulario-gasto__input--error');

        formulario.descripcion.parentElement.querySelector('.formulario-gasto__leyenda')
        .classList.remove('formulario-gasto__leyenda--active');

        return true;
    
    }
};

const comprobarPrecio = () => {
    if (!expRegularPrecio.test(precio.value)) {
        precio.classList.add('formulario-gasto__input--error');

        formulario.precio.parentElement
            .querySelector('.formulario-gasto__leyenda')
            .classList.add('formulario-gasto__leyenda--active');

        return false;
    }else {
        precio.classList.remove('formulario-gasto__input--error');

        formulario.precio.parentElement
            .querySelector('.formulario-gasto__leyenda')
            .classList.remove('formulario-gasto__leyenda--active');

        return true;
    
    }
};

//Event Listener cuando los Inputs de la descripción pierde el focus
descripcion.addEventListener('blur', (e) => comprobarDescripcion());
descripcion.addEventListener('keyup', (e) => {
    
    if([...e.target.classList].includes('formulario-gasto__input--error')){
        comprobarDescripcion();
    }
    
});

//Event Listener cuando los Inputs del precio pierde el focus
precio.addEventListener('blur', (e) => comprobarPrecio());
precio.addEventListener('keyup', (e) => {

    if([...e.target.classList].includes('formulario-gasto__input--error')){
        comprobarPrecio();
    }

});
//# sourceMappingURL=bundle.js.map
