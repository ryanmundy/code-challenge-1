console.log('js is loaded');

$(document).ready(readyNow);

function readyNow(){
    console.log('jQuery is loaded');
    $('#generateButton').on('click', buttonClicked);
}//end readyNow

let counter = 0;

function buttonClicked() {
    console.log('generate button clicked');
    $('.newDiv').empty();
    $('.newDiv').css('background-color', 'red');//makes background red on generate button click
    counter++;//increments each time button is clicked
    $('.newDiv').append(`<div class="newClass"></div>`);//creates new div element on DOM
    $('.newClass').append(`<p class="newP">${counter}</p>`);//creates new p tag
    $('.newClass').append(`<button type="button" id="swapButton">Swap</button>`);//creates swap button
    $('.newClass').append(`<button type="button" id="deleteButton">Delete</button>`);//creates delete button
    
}// end button clicked