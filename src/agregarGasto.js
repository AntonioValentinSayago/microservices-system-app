import {v4 as uuidv4} from 'uuid';
import {cerrarFormularioGasto } from './eventoBtnFormularioGasto'
import cargarGastos from './cargarGastos';
import cargarTotalGastado from './cargarTotalGastado';

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

//Formulario y Boton para agregar
formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    //Obtenemos el modo del formulario
    const modo = formulario.closest('#formulario-gasto')?.dataset?.modo;
        
    // Comprobamos que la descreiprion y el precio sean correctos
    if(comprobarDescripcion() && comprobarPrecio()){
        
        const nuevoGasto = {
            id: uuidv4(),
            fecha: new Date(),
            descripcion: descripcion.value,
            precio: precio.value
        }

        const gastosGuardadosLocalStorage = JSON.parse(window.localStorage.getItem('gastos'));

        if (modo === 'agregarGasto') {
            //Comprovamos si hay Datso 
            if(gastosGuardadosLocalStorage){
                //Creamos nueva lista de gastos incluyendo el Nuevo
                const nuevosGastos = [...gastosGuardadosLocalStorage, nuevoGasto]
                window.localStorage.setItem('gastos', JSON.stringify(nuevosGastos))   
            } else {
                //Agregamos el primer Gasto
                window.localStorage.setItem('gastos', JSON.stringify([{...nuevoGasto}]))
            }
        }else if(modo === 'editarGasto'){
            //Obtener el ID del gasto a editar
            const id = document.getElementById('formulario-gasto').dataset?.id;
            let indexGastoAEditar;
            if (id && gastosGuardadosLocalStorage) {
                gastosGuardadosLocalStorage.forEach(( gasto, index ) => {
                    if (gasto.id === id) {
                        indexGastoAEditar = index;
                    }
                })
            }

            //Hacemos una copia de los gastos guardados para poder editarla
            const nuevoGasto = [...gastosGuardadosLocalStorage];
            nuevoGasto[indexGastoAEditar] = {
                ...gastosGuardadosLocalStorage[indexGastoAEditar],
                descripcion: descripcion.value,
                precio: precio.value
            }
            //Remplazamos el Localstorage con los nuevos gastos
            window.localStorage.setItem('gastos', JSON.stringify(nuevoGasto));
        
        }

        //Reiniciamos los campos del input
        descripcion.value = ''
        precio.value = ''

        cargarGastos();
        cerrarFormularioGasto();
        cargarTotalGastado();
    }

})