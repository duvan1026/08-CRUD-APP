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
    throw new Error ('No implementado');

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
    
    getUsers: () => [...state.users], // extrae los usuarios}
    getCurrentPage: () => state.currentPage,

}