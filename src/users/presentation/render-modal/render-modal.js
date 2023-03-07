import modalHtml from "./render-modal.html?raw";
import "./render-modal.css";


let modal;


//Todo: cargar usuario por id
export const showModal = ( ) => {

    modal?.classList.remove('hide-modal'); //Todo: pregunta si existe el modal, si existe elimina la clase 

}


export const hideModal = () => {

    modal?.classList.add('hide-modal');
    // Todo: Reset del formulario
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = ( element ) => {

    if ( modal ) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container  hide-modal'; // Todo: clases para ocultar el modal

    modal.addEventListener( 'click', (event) => {
        
        if (event.target.className !== 'modal-container') return; // todo: pregunta si el usuario a dado click dentro del modal, si no lo es, no retorna y continua.

        hideModal();// Todo: esconde el modal
    });




    element.append( modal );

}

