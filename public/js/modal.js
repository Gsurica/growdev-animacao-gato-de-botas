/**
 * 
 * Variaveis que iremos utilizar
 * 
 */

const modal = document.getElementById('dv-modal')
const openMovieButton = document.getElementById('movie-button')
const closeMovieButton = document.getElementById('close-button')

// Variavel que mantém a função em funcionamento
let modalDefaultBehavior = false

/**
 * 
 * Funções que serão chamadas para o abrir e fechar da modal
 * 
 */

/**
 * 
 * Utilização de duas funções
 * 
 */

function openModal() {
    modalDefaultBehavior = true

    if (modalDefaultBehavior) {
        modal.style.display = 'flex'
    }
}

function closeModal() {
    modalDefaultBehavior = false

    if (!modalDefaultBehavior) {
        modal.style.display = 'none'
    }
}

/**
 * 
 * Event listeners ou observadores para conseguirmos localizar os nossos pontos de ativação (triggers)
 * 
 */

openMovieButton.addEventListener('click', openModal)
closeMovieButton.addEventListener('click', closeModal)


/**
 * 
 * Utilização de apenas uma função.
 * 
 * Fiz duas metodologias que podem ser escolhidas pelo programador.
 * Nenhuma das duas estão erradas, inclusive a que vocês fizeram também não está, 
 * Tanto que deixei ela logo abaixo deste documento para observação!
 * 
 */

// function toggleModal(isOpened) {
//     if (isOpened) {
//         modal.style.display = 'flex'
//     }

//     if (!isOpened) {
//         modal.style.display = 'none'
//     }
// }

// openMovieButton.addEventListener('click', e => {
//     modalDefaultBehavior = true
//     openModal(modalDefaultBehavior)
// })
// closeMovieButton.addEventListener('click', e => {
//     modalDefaultBehavior = false
//     closeModal(modalDefaultBehavior)
// })

/**
 * 
 * function openModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

function closeModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
 * 
 */

