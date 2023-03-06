import usersStore from "../../store/users-store";
import "./render-table.css";

let table;

const createTable = () => {

    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');

    tableHeaders.innerHTML = `
    <tr>
        <th>#ID</th>
        <th>Balanace</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>Actions</th>   
    </tr>    
    `;

    const tableBody = document.createElement('tbody');
    table.append( tableHeaders, tableBody );
    return table;
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = ( element ) => {

    const users = usersStore.getUsers();


    if( !table ){
        table = createTable();
        element.append( table );


        //TODO: Listeners a la table
    }

}
