import { renderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderButttons } from "./presentation/render-buttons/render-buttons";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UserApp = async( element ) => {

    element.innerHTML = 'Loanding....';
    await usersStore.loadNextPage();
    element.innerHTML = '';


    renderTable( element );
    renderButttons( element );
    renderAddButton( element );

}