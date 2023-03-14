import { User } from "../models/user";
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
const onUserChanged = async(updateUser) => {

    let wasFound = false;

    state.users = state.users.map( user => {

        if( user.id === updateUser.id){
            wasFound = true;
            return updateUser;
        }
        return user;    
    });


    if( state.users.length < 10 && !wasFound){
        state.users.push( updateUser );
    }


}

/**
 * 
 * @param {User} updateUser 
 */
const reloadPage = async() => {

    const users =  await loadUsersByPage( state.currentPage ); //Todo: me regresa los usuarios

    if( users.length == 0 ) {
        await loadPreviosPage();
        return;
    }; // Verifica si tiene una pagina siguiente
    state.users = users;

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