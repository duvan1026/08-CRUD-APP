import { localhostUserToModel } from '../mappers/localhost-user.mapper';
import { userModelToLocalHost } from '../mappers/user-to-localhost.mapper';
import { User } from '../models/user'


/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async( userLike ) => {

    const user = new User( userLike );

    if ( !user.firstName || !user.lastName ) // Validamos que contenga algun dato el modal para asi proceder a guardar
        throw 'First & last name are required';


    const userToSave = userModelToLocalHost( user );
    let userUpdated;


    if( user.id ){
        userUpdated =  await updateUser( userToSave );
    }else {      
        userUpdated = await createUser(  userToSave );  
    }

    return localhostUserToModel( userUpdated );// se realiza el mapper para guardar bien los datos en el back-end


}


/**
 * @param {Like<User>}
 */
const createUser = async( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users`;
    const res = await fetch(url,{ // realiza la solicitud para grabar 
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await res.json(); // el back me envia el usuario creado
    console.log( { newUser } );

    return newUser;
}


/**
 * @param {Like<User>}
 */
const updateUser = async( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users/${ user.id }`;
    const res = await fetch(url,{ // realiza la solicitud para grabar 
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const updateUser = await res.json(); // el back me envia el usuario creado
    console.log( { updateUser } );

    return updateUser;
}