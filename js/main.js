'use strict';

const bigContainer= document.querySelector('.container');


for(let i = 1; i <= 100; i++){
    const createdElement= newElements('div', 'box', i, 'azure');
    bigContainer.append(createdElement);
}
