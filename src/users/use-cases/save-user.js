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

    if( user.id ){
        throw 'No implementada la actualización';
        return;
    }

    const updateUser = await createUser(  userToSave );
    return updateUser;

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