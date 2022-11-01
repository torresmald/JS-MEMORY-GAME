'use strict'
let cardArray = [
    {
        id: 1,
        name: 'earth',
        img: 'public/exercise-1/earth.svg'
    },
    {
        id: 2,
        name: 'jupiter',
        img: 'public/exercise-1/jupiter.svg'
    },
    {
        id: 3,
        name: 'mars',
        img: 'public/exercise-1/mars.svg'
    },
    {
        id: 4,
        name: 'mercury',
        img: 'public/exercise-1/mercury.svg'
    },
    {
        id: 5,
        name: 'saturn',
        img: 'public/exercise-1/saturn.svg'
    },
    {
        id: 6,
        name: 'uranus',
        img: 'public/exercise-1/uranus.svg'
    },
    {
        id: 7,
        name: 'earth',
        img: 'public/exercise-1/earth.svg'
    },
    {
        id: 8,
        name: 'jupiter',
        img: 'public/exercise-1/jupiter.svg'
    },
    {
        id: 9,
        name: 'mars',
        img: 'public/exercise-1/mars.svg'
    },
    {
        id: 10,
        name: 'mercury',
        img: 'public/exercise-1/mercury.svg'
    },
    {
        id: 11,
        name: 'saturn',
        img: 'public/exercise-1/saturn.svg'
    },
    {
        id: 12,
        name: 'uranus',
        img: 'public/exercise-1/uranus.svg'
    }
]
cardArray.sort(() => 0.5 - Math.random());

let score = document.querySelectorAll('[data-function="score"]')[0];
let countTries = document.querySelectorAll('[data-function="attempts"]')[0];
let numberTries = 0;
let tickItems = [];
let flipCard = undefined;
const newDiv = document.querySelector('div');
const paintImages = function () {
    for (let i = 0; i < cardArray.length; i++) {
        const newImg = document.createElement('img');
        newImg.setAttribute('data-id', cardArray[i].id);
        newImg.setAttribute('name', cardArray[i].name);
        newImg.setAttribute('src', './public/exercise-1/universe.svg');
        cardArray[i].element = newImg;
        newDiv.appendChild(newImg);
        const eventListener = newImg.addEventListener('click', () => {
            //?AQUI DAMOS CLICK A LA CARTA Y PONEMOS SU IMAGEN CORRESPONDIENTE
            if (flipCard === undefined) {
                newImg.src = cardArray[i].img;
                flipCard = newDiv.children[i];
            }
            //? AQUI COMPROBAMOS QUE DAMOS 2 VECES A LA MISMA CARTA
            else if (flipCard === newImg) {
                flipCard.src = './public/exercise-1/universe.svg';
                alert('HAS DADO 2 VECES LA MISMA CARTA')
                flipCard = undefined;
            //? AQUI COMPROBAMOS QUE LAS CARTAS SEAN LAS MISMAS
            } else if (flipCard.getAttribute('name') === newImg.getAttribute('name')) {
                newImg.src = './public/exercise-1/tick.svg';
                flipCard.src = './public/exercise-1/tick.svg';
                tickItems.push(flipCard.getAttribute('name'));
                flipCard = undefined;
                calcularPuntuacion();
                numberTries++;
                calcularIntentos();
            }
            //? AQUI COMPROBAMOS QUE SON CARTAS DIFERENTES
            else if (flipCard !== newImg) {
                newImg.src = cardArray[i].img;
                setTimeout(() => {
                    newImg.src = './public/exercise-1/universe.svg';
                    flipCard.src = './public/exercise-1/universe.svg';
                    flipCard = undefined;
                }, 800);
                
                numberTries++;
                calcularIntentos();
            }//? AQUI COMPROBAMOS QUE DA A UNA CARTA YA ACERTADA CON EL TICK
            // else if (tickItems.includes('earth')) {    VA ARRIBA
            //     debugger;
            //     alert('ESE ELEMENTO YA ESTA ACERTADO');
            // }
            // ?AQUI COMPROBAMOS QUE ELEMENTOS ACERTADOS ESTÉ COMPLETO Y SE ACABA LA PARTIDA
            if (tickItems.length === cardArray.length / 2) { 
                const ganado = setTimeout(() => {
                    alert('HAS GANADO!')
                }, 1000);
            }
        });
    }
}

const calcularPuntuacion = () => {
    score.textContent = tickItems.length;
}
paintImages()
const calcularIntentos = () => {
    countTries.textContent = numberTries;
}







