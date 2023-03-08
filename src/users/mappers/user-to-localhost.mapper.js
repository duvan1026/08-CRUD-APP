import { User } from "../models/user";



/**
 * Recibe nuestro objeto User en el cual se esta trabajando
 * luego se convierte la variable del dao a su nombre correspondiente en el back-end
 * así solucionando posibles conflictos entre el back-end y el fornt-end
 * @param {User} user 
 */
export const userModelToLocalHost = ( user ) => {

    const {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName
    } = user;


    return {
        avatar,
        balance,
        first_name : firstName,
        gender,
        id,
        isActive,
        last_name : lastName
    } 

}