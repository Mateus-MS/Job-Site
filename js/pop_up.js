import {createElement} from "./utils.js";

function create_top(){

    let pop_up__holder__top = createElement('div', {type: 'id', value: 'pop_up__holder__top'}, pop_up__holder)
    let pop_up__holder__top__left = createElement('div', {type: 'id', value: 'pop_up__holder__top__left'}, pop_up__holder__top)
    let pop_up__holder__top__left__logo = createElement('div', {type: 'id', value: 'pop_up__holder__top__left__logo'}, pop_up__holder__top__left)
    let pop_up__holder__top__left__brand_holder = createElement('div', {type: 'id', value: 'pop_up__holder__top__left__brand_holder'}, pop_up__holder__top__left)
    let pop_up__holder__top__left__brand_holder__name = createElement('div', {type: 'id', value: 'pop_up__holder__top__left__brand_holder__name'}, pop_up__holder__top__left__brand_holder)
    let pop_up__holder__top__left__brand_holder__star_holder = createElement('div', {type: 'id', value: 'pop_up__holder__top__left__brand_holder__star_holder'}, pop_up__holder__top__left__brand_holder)
    let pop_up__holder__top__save = createElement('div', {type: 'id', value: 'pop_up__holder__top__save'}, pop_up__holder__top)

}

function createTag(){
    
    let tag = createElement('div', {type: 'class', value: 'pop_up__holder__info__tag_holder__tag'}, pop_up__holder__info__tag_holder)
    let tag__name = createElement('div', {type: 'class', value: 'pop_up__holder__info__tag_holder__tag__name'}, tag)
    let tag__icon = createElement('div', {type: 'class', value: 'pop_up__holder__info__tag_holder__tag__icon'}, tag)

    return tag


}

function create_info(){

    let pop_up__holder__info = createElement('div', {type: 'id', value: 'pop_up__holder__info'}, pop_up__holder)
    let pop_up__holder__info__title = createElement('div', {type: 'id', value: 'pop_up__holder__info__title'}, pop_up__holder__info)
    let pop_up__holder__info__tag_holder = createElement('div', {type: 'id', value: 'pop_up__holder__info__tag_holder'}, pop_up__holder__info)
    let tag1 = createTag()
    let tag2 = createTag()

}

function create_description(){

    let pop_up__holder__description = createElement('div', {type: 'id', value: 'pop_up__holder__description'}, pop_up__holder)
    let pop_up__holder__description__option1 = createElement('div', {type: 'class', value: 'pop_up__holder__description__option'}, pop_up__holder__description)
    let pop_up__holder__description__option2 = createElement('div', {type: 'class', value: 'pop_up__holder__description__option'}, pop_up__holder__description)
    let pop_up__holder__description__option3 = createElement('div', {type: 'class', value: 'pop_up__holder__description__option'}, pop_up__holder__description)

}

function create_text(){

    let pop_up__holder__text_holder = createElement('div', {type: 'id', value: 'pop_up__holder__text_holder'}, pop_up__holder)
    let pop_up__holder__text_holder__text = createElement('div', {type: 'id', value: 'pop_up__holder__text_holder__text'}, pop_up__holder__text_holder)

}

function create_player(){

    let pop_up__holder__player = createElement('div', {type: 'id', value: 'pop_up__holder__player'}, pop_up__holder)
    let pop_up__holder__player__bar = createElement('div', {type: 'id', value: 'pop_up__holder__player__bar'}, pop_up__holder__player)
    let pop_up__holder__player__controller = createElement('div', {type: 'id', value: 'pop_up__holder__player__controller'}, pop_up__holder__player)
    let pop_up__holder__player__controller__holder = createElement('div', {type: 'id', value: 'pop_up__holder__player__controller__holder'}, pop_up__holder__player__controller)
    let pop_up__holder__player__controller__holder__button1 = createElement('div', {type: 'class', value: 'pop_up__holder__player__controller__holder__button'}, pop_up__holder__player__controller__holder)
    let pop_up__holder__player__controller__holder__button2 = createElement('div', {type: 'class', value: 'pop_up__holder__player__controller__holder__button'}, pop_up__holder__player__controller__holder)
    let pop_up__holder__player__controller__holder__button3 = createElement('div', {type: 'class', value: 'pop_up__holder__player__controller__holder__button'}, pop_up__holder__player__controller__holder)
    let pop_up__holder__player__controller__holder__button4 = createElement('div', {type: 'class', value: 'pop_up__holder__player__controller__holder__button'}, pop_up__holder__player__controller__holder)
    let pop_up__holder__player__controller__holder__button5 = createElement('div', {type: 'class', value: 'pop_up__holder__player__controller__holder__button'}, pop_up__holder__player__controller__holder)

}

function create_options(){

    let pop_up__holder__options = createElement('div', {type: 'id', value: 'pop_up__holder__options'}, pop_up__holder)
    let pop_up__holder__options__opt1 = createElement('div', {type: 'class', value: 'pop_up__holder__options__opt'}, pop_up__holder__options)
    let pop_up__holder__options__opt2 = createElement('div', {type: 'class', value: 'pop_up__holder__options__opt'}, pop_up__holder__options)

}

function create_pop_up(){

    let pop_up = createElement('div', {type: 'id', value: 'pop_up'}, document.body)
    let pop_up__holder = createElement('div', {type: 'id', value: 'pop_up__holder'}, pop_up)

    
    pop_up.addEventListener('click', ()=>{

        document.body.removeChild(pop_up)

    })

    create_top()
    create_info()
    create_description()
    create_text()
    create_player()
    create_options()

}

var banners = document.getElementsByClassName('banner')

for(let i = 0; i < banners.length; i++){

    banners[i].addEventListener('click', ()=>{
        
        create_pop_up()

    })

}