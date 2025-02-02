/**
 * @returns {Promise<Object>} character data
 */
const fetchCharacter = async () => {
    //GENERA NUMERO ALEATORIO ENTRE 1 A 100 PARA CONSULTA
    const numrandom = Math.round((Math.random() * 100) + 1);
    //HACE GET A API PARA MOSTRAR DATOS
    const res = await fetch(`https://rickandmortyapi.com/api/character/${numrandom}`)
    const data = await res.json();
    console.log(data);
    return data;
}


/**
 *  
 * @param {HTMLDivElement} element 
 */

export const BreakingbadApp = async (element) => {
    document.querySelector('#app-title').innerHTML = "Rick and Morty App"
    element.innerHTML = 'Loading...';

    //const quote = await fetchCharacter();
    //element.innerHTML = quote.name;

    const characterStatus = document.createElement('blockquote');
    const characterLabel = document.createElement('h3');
    const nextCharacterButton = document.createElement('button');
    nextCharacterButton.innerHTML = 'next character '
    
    const renderCharacter = (data) => {
        characterLabel.innerHTML = data.name;
        characterStatus.innerHTML = data.status;
        element.replaceChildren(characterLabel, characterStatus, nextCharacterButton);
    }
    
    fetchCharacter()
    .then(renderCharacter)
    
    const buscaPersonaje = () => {        
        element.innerHTML = 'Loading...';
        fetchCharacter()
        .then(renderCharacter)
        
    }
    nextCharacterButton.addEventListener('click', buscaPersonaje)
    
}