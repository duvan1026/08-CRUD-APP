
/**
 * @param {String|Number} id
 */
export const deleteUserById = async( id ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users/${ id }`;
    const res = await fetch(url,{ // realiza la solicitud para grabar 
        method: 'DELETE',
    });

    const deleteResult = await res.json(); // el back me envia el usuario creado
    console.log( { deleteResult } );

    return true;
}