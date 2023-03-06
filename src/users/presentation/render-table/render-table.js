import usersStore from "../../store/users-store";
import "./render-table.css";

let table;

/**
 * crea una tabla con su estrucutra 
 * @returns {tableHTML}
 */
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
    table.append( tableHeaders, tableBody );//TODO:  Agrega tanto el headers y el body a la tabla
    return table;
}


/**
 * renderiza la tabla HTML 
 * @param {HTMLDivElement} element 
 */
export const renderTable = ( element ) => {

    const users = usersStore.getUsers();


    if( !table ){
        table = createTable();
        element.append( table );


        //TODO: Listeners a la table
    }

    let tableHTML = '';

    users.forEach( user => {
        tableHTML += `
            <tr>
                <td>${ user.id }</td>
                <td>${ user.balance }</td>
                <td>${ user.firstName }</td>
                <td>${ user.lastName }</td>
                <td>${ user.isActive }</td>
                <td>
                    <a href="#" data-id="${ user.id }">Select</a>
                    |
                    <a href="#" data-id="${ user.id }">Select</a>

                </td>  
            </tr>

        `;
    });

    table.querySelector('tbody').innerHTML = tableHTML;


}






