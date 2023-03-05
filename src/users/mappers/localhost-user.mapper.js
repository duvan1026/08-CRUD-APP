import { User } from "../models/user";

/**
 * Es una funcion que recibe nuestro objeto del back  y genera una instancia
 * solucionando el problema en que las variables del back sean diferentes a la del front_end
 * evitando problemas futuros.
 * @param {Like<User>} localHostUser 
 * @returns {User}
 */
export const localhostUserToModel = ( localHostUser ) => {

    //Extraemos cada uno d elas propiedades del objeto (LocalHosterUser)
    const {
        id,
        isActive,
        balance,
        avatar,
        first_name,
        last_name,
        gender,
    } = localHostUser;
    
    
    return new User({
        id,
        isActive,
        balance,
        avatar,
        firstName: first_name,
        lastName: last_name,
        gender,   
    });

}