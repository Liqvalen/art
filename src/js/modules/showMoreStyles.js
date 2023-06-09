import {getResource} from '../services/requests'

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger)
    btn.addEventListener('click', function() {
        getResource('assets/db-2.json')
        .then(res => createCards(res.styles))
        .catch(error => console.log(error))

        this.remove()
    })
    function createCards(responce) {
        responce.forEach(({src, title, link}) => {
            let card = document.createElement('div')

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')
            
            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `

            document.querySelector(wrapper).appendChild(card)
        })
    }
}

export default showMoreStyles

//<div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
//    <div class=styles-block>
//        <img src=assets/img/styles-7.png alt>
//        <h4>Фотомозаика</h4>
//        <a href="#">Подробнее</a>
//    </div>
//</div>
//Простая подгрузка элементов
// cards.forEach(card => {
//     card.classList.add('animated', 'fadeInUp')
// })
// btn.addEventListener('click', () => {
//     cards.forEach(card => {
//         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs')
//         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')
//     })
//     btn.remove()
// })