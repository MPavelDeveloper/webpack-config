import {createElem} from "./utils.js";

const elem = createElem('div');
elem.textContent = 'File JS';
document.querySelector('header').append(elem);
