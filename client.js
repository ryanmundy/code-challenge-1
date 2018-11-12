console.log('js is loaded');

$(document).ready(readyNow);

let counter = 0;

function readyNow(){
    console.log('jQuery is loaded');
    $('#generateButton').on('click', buttonClicked);
}//end readyNow

function buttonClicked() {
    console.log('generate button clicked');
    $('.newDiv').empty();
    counter++;//increments each time button is clicked
    $('.newDiv').append(`<div class="newClass"></div>`);//creates new div element on DOM
    $('.newClass').append(`<p class="newP">${counter}</p>`);//creates new p tag

}