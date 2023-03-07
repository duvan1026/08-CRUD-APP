import { User } from '../models/user'


/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async( userLike ) => {

    const user = new User( userLike );

    //Todo: aqui falta un mapperrs

    if( user.id ){
        throw 'No implementada la actualización';
        return;
    }

    const updateUser = await createUser(  user );

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