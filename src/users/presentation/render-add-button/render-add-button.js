

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderAddButton = ( element ) => {

    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    // fabButton.className = 'fab-button';// otra forma de crear la clase del button
    fabButton.classList.add('fab-button');

    element.append( fabButton );

    //Todo:
    fabButton.addEventListener('click', () => {
        throw Error('No implementado');
    });

}