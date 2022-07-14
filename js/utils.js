export function createElem(tag, className, id) {
    const elem = document.createElement(tag);
    if(className) elem.className = className;
    if(id) elem.id = id;

    return elem
}