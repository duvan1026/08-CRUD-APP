import usersStore from "../../store/users-store";
import  "../render-buttons/render-buttons.css";
import { renderTable } from "../render-table/render-table";
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButttons = ( element ) => {

    const nextButton = document.createElement( 'button' );
    nextButton.innerText = 'Next >';

    
    const prevButton = document.createElement( 'button' );
    prevButton.innerText = '< Prev';

    //Pagina actual
    const currentPageLabel = document.createElement( 'span' );
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = usersStore.getCurrentPage(); // TODO: traemos el numero de la pagina en la cual nos encontramos


    element.append( prevButton, currentPageLabel, nextButton );


    nextButton.addEventListener('click', async() => {

        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable( element );
    
    });


    prevButton.addEventListener('click', async() => {
    
        await usersStore.loadPreviosPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable( element );
    });


}