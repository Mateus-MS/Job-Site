import {createElement} from './utils.js'

function create_filter(){

    let pop_up_filter = createElement('div', {type: 'id', value: 'pop_up_filter'}, document.body)
    let pop_up_filter__holder = createElement('div', {type: 'id', value: 'pop_up_filter__holder'}, pop_up_filter)
    let pop_up_filter__holder__container = createElement('div', {type: 'id', value: 'pop_up_filter__holder__container'}, pop_up_filter__holder)
    let opt1 = createElement('div', {type: 'class', value: 'pop_up_filter__holder__container__opt'}, pop_up_filter__holder__container)
    opt1.innerText = 'aaaaaaaaaaaaaa'
    let opt2 = createElement('div', {type: 'class', value: 'pop_up_filter__holder__container__opt'}, pop_up_filter__holder__container)
    opt2.innerText = 'aaaaaaaaaa'
    let opt3 = createElement('div', {type: 'class', value: 'pop_up_filter__holder__container__opt'}, pop_up_filter__holder__container)
    opt3.innerText = 'aaaaaaaa'
    let opt4 = createElement('div', {type: 'class', value: 'pop_up_filter__holder__container__opt'}, pop_up_filter__holder__container)
    opt4.innerText = 'aaaaaaaaaaaa'
    let opt5 = createElement('div', {type: 'class', value: 'pop_up_filter__holder__container__opt'}, pop_up_filter__holder__container)
    opt5.innerText = 'aaaaaaaaaa'
    let opt6 = createElement('div', {type: 'class', value: 'pop_up_filter__holder__container__opt'}, pop_up_filter__holder__container)
    opt6.innerText = 'aaaaaaa'
    let opt7 = createElement('div', {type: 'class', value: 'pop_up_filter__holder__container__opt'}, pop_up_filter__holder__container)
    opt7.innerText = 'aaaa'
    let pop_up_filter__holder__options = createElement('div', {type: 'id', value: 'pop_up_filter__holder__options'}, pop_up_filter)
    let pop_up_filter__holder__options__holder = createElement('div', {type: 'id', value: 'pop_up_filter__holder__options__holder'}, pop_up_filter__holder__options)
    let pop_up_filter__holder__options__holder__opt1 = createElement('div', {type: 'class', value: 'pop_up_filter__holder__options__holder__opt'}, pop_up_filter__holder__options__holder)
    let pop_up_filter__holder__options__holder__opt2 = createElement('div', {type: 'class', value: 'pop_up_filter__holder__options__holder__opt'}, pop_up_filter__holder__options__holder)

    pop_up_filter.addEventListener('click', (e)=>{

        if(e.target.id === 'pop_up_filter'){
    
            document.body.removeChild(document.getElementById('pop_up_filter'))
    
        }
    
    })

}

let element = document.getElementById('header__holder__left__search__icon');

element.addEventListener('click', ()=>{

    create_filter()

})