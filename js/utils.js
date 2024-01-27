export function createElement(type, classe, parent){

    let element = document.createElement(type)
    
    if(classe.type == 'id'){
        element.id = classe.value
    } else {
        element.classList.add(classe.value)
    }

    if(parent != undefined){
        parent.appendChild(element)
    }

    return element

}