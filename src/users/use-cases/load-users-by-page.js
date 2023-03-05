import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {NUmber} page 
 * @returns { Promise<User[]> }
 */
export const loadUsersByPage = async( page = 1 ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users?_page=${ page }`;
    const res = await fetch(url);
    const data = await res.json();

    // const users = data.map( userLike => localhostUserToModel( userLike ) );// Todo: recorre el arreglo y realiza la funcion mappers para cada users
    const users = data.map( localhostUserToModel );// Todo: recorre el arreglo y realiza la funcion mappers para cada users

    return users; 

}