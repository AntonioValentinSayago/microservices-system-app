const formulario = document.querySelector('#formulario-gasto form');
const descripcion = formulario.descripcion;
const precio = formulario.precio;

const expRegularDescripcion = /^[a-zA-Z0-9\_\- ]{4,30}$/;
const expRegularPrecio = /^\d+(\.\d+)?$/

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
}

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
}

//Event Listener cuando los Inputs de la descripción pierde el focus
descripcion.addEventListener('blur', (e) => comprobarDescripcion());
descripcion.addEventListener('keyup', (e) => {
    
    if([...e.target.classList].includes('formulario-gasto__input--error')){
        comprobarDescripcion()
    }
    
});

//Event Listener cuando los Inputs del precio pierde el focus
precio.addEventListener('blur', (e) => comprobarPrecio());
precio.addEventListener('keyup', (e) => {

    if([...e.target.classList].includes('formulario-gasto__input--error')){
        comprobarPrecio()
    }

});


