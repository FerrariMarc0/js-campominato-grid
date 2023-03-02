'use strict';

const bigContainer= document.querySelector('.container');
const button = document.getElementById('gen');
const gameLevel= document.getElementById('difficulty');


button.addEventListener('click',
 function(){
    
    for(let i = 1; i <= 100; i++){
    const createdElement= newElements('div', 'box', i, 'azure');
    bigContainer.append(createdElement);
}
})


