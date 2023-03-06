import { loadUsersByPage } from "../use-cases/load-users-by-page";


const state = {
    currentPage: 0,
    users: [],
}


const loadNextPage = async() => {

   const users =  await loadUsersByPage( state.currentPage + 1 ); //Todo: me regresa los usuarios

   if( users.length == 0 ) return; // Verifica si tiene una pagina siguiente

   state.currentPage += 1;
   state.users = users;
}


const loadPreviosPage = async() => {

    if( state.currentPage === 1 ) return;

    const users = await loadUsersByPage( state.currentPage - 1 ); //Todo: me regresa los usuarios

    state.currentPage -= 1;
    state.users = users;
}

// Todo: implementar
/**
 * se implementa cuando un usuario cambie
 */
const onUserChanged = () => {
    throw new Error ('No implementado');

}


const reloadPage = async() => {
    throw new Error ('No implementado');

}

export default{
    reloadPage,
    onUserChanged,
    loadPreviosPage,
    loadNextPage,
    
    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users], // extrae los usuarios}

    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,

}