
/**
 * Es el objeto dle usuario que se va a manejar en la aplicacion
 * Es la data que se necesata para trabajar
 */
export class User {

    /**
     * El contructor reciba la data que estamos esperando
     * @param {Like<User>} userDataLIke 
     */
    constructor({ id, isActive, balance, avatar, firstName, lastName, gender }){

        this.id        = id; 
        this.isActive  = isActive; 
        this.balance   = balance; 
        this.avatar    = avatar; 
        this.firstName = firstName; 
        this.lastName  = lastName; 
        this.gender    = gender; 
    }

}