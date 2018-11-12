console.log('js is loaded');

$(document).ready(readyNow);

let counter = 0;

function readyNow(){
    console.log('jQuery is loaded');
    $('#generateButton').on('click', buttonClicked);
}//end readyNow

function buttonClicked() {
    console.log('generate button clicked');
    counter++;//increments each time button is clicked
    $('.bodyClass').append(`<div class="newClass"></div>`);//creates new div element on DOM
    $('.newClass').append(`<p class="newP">new p tag</p>`);//creates new p tag

}