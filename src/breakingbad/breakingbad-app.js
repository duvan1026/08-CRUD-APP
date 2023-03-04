

/**
 * @returns {Promese<Object>} quote information
 */
const fetchQuote = async() => {

    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json(); // todo promesa que retorna la data del body

    console.log(data);
    return data;
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async( element ) => { //Todo se colocala la primera en mayuscula porque es el componente principal de mi aplicación.

    document.querySelector('#app-title').innerHTML = 'Breaking App';
    element.innerHTML = 'Loading...'

    const quote = await fetchQuote();
    element.innerHTML = 'Tenemos data!!!';


}