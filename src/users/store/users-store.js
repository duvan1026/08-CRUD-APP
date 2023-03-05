import { loadUsersByPage } from "../use-cases/load-users-by-page";


const state = {
    currentPage: 0,
    users: [],
}


const loadNextPage = async() => {

    await loadUsersByPage( state.currentPage + 1 );
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
    
    getUser: () => [...state.users], // extrae los usuarios}
    getCurrentPage: () => state.currentPage,

}