import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UserApp = async( element ) => {

    Element.innerHTML = 'Loanding....';
    await usersStore.loadNextPage();

}