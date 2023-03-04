

/**
 * @returns {Promese<Object>} quote information
 */
const fetchQuote = async() => {

    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json(); // todo promesa que retorna la data del body

    console.log(data[0]);
    return data[0];
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async( element ) => { //Todo se colocala la primera en mayuscula porque es el componente principal de mi aplicación.

    document.querySelector('#app-title').innerHTML = 'Breaking App';
    element.innerHTML = 'Loading...';
    
    // await fetchQuote();

    const quoteLabel = document.createElement('blockquote'); // Todo: crea un elemento HTML 
    const authoLabel = document.createElement('h3');
    const nextQuoteButtton = document.createElement('button');
    nextQuoteButtton.innerText = 'Next Quote';// Todo: agregamos texto al boton


    const renderQuote = ( data ) => {
        
        quoteLabel.innerHTML = data.quote;
        authoLabel.innerHTML = data.author;

        element.replaceChildren(   quoteLabel, authoLabel, nextQuoteButtton );// Todo: rendereiza todo en la pagina

    }

    // Añadir listener
    nextQuoteButtton.addEventListener( 'click', async() => {

        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote( quote );

    });

    fetchQuote()
        .then( renderQuote );







}