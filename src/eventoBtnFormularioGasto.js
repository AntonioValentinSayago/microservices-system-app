const boton = document.getElementById('toggle-form-gasto');
const formularioGasto = document.getElementById('formulario-gasto');

const abrirFormularioGasto = () => {

    boton.classList.add('agregar-gasto__btn--active')
    formularioGasto.classList.add('formulario-gasto--active')
}

const cerrarFormularioGasto = () => {
    boton.classList.remove('agregar-gasto__btn--active')
    formularioGasto.classList.remove('formulario-gasto--active')
}

boton.addEventListener('click', (e) => {
    if([...formularioGasto.classList].includes('formulario-gasto--active')){
        cerrarFormularioGasto()
    }else {
        abrirFormularioGasto();
    }

})

export {cerrarFormularioGasto, abrirFormularioGasto}