import { renderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderButttons } from "./presentation/render-buttons/render-buttons";
import { renderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { saveUser } from "./use-cases/save-user";

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
    renderModal( element, async( userLike ) => {
        const user = await saveUser( userLike );
        console.log(user);
        usersStore.onUserChanged( user ); // No esta implementado 
        renderTable();    
    });


}