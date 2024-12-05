import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
    try{
        async function fetchAnimais(url) {
            const animaisResponse = await fetch(url);
            const animaisJson = await animaisResponse.json();
            const numeroGrid = document.querySelector('.numeros-grid');
    
            animaisJson.forEach(animal => {
                const divAnimal = createAnimal(animal);
                numeroGrid.appendChild(divAnimal);
            });
            initAnimaNumeros(); // Ocorre depois do fetch
        }

    }catch(erro){
        console.log(Error(erro));
    }


    function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');

        div.innerHTML = `<h3>${animal.species}</h3> 
                        <span data-numero> ${animal.total} </span>`;

        return div;
    }

    fetchAnimais('../../animaisapi.json');

}
