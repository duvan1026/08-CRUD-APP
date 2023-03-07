import modalHtml from "./render-modal.html?raw";
import "./render-modal.css";


let modal, form;


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
    form = modal.querySelector('form'); // Obtiene referencia al formulario


    modal.addEventListener( 'click', (event) => {
        
        if (event.target.className !== 'modal-container') return; // todo: pregunta si el usuario a dado click dentro del modal, si no lo es, no retorna y continua.

        hideModal();// Todo: esconde el modal
    });


    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el form se comporte normalmente( propagacion del mismo ) y envie los datos al backend

        const formData = new FormData( form ); //Todo: objeto extrae la data del formulario
        const userLike = {};

        for (const [key, value] of formData) {

            if( key === 'balance' ){
                userLike[key] = +value; // Convierte el string a value
                continue;
            }

            if( key === 'isActive' ){// conviernte el valor isActive en boolean
                userLike[key] =  (value === 'on') ? true : false;
                continue;
            }


            userLike[key] = value;
        }


        console.log(userLike);

    });




    element.append( modal );

}

