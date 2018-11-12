console.log('js is loaded');

$(document).ready(readyNow);

function readyNow(){
    console.log('jQuery is loaded');
    $('#generateButton').on('click', buttonClicked);
}//end readyNow

function buttonClicked() {
    console.log('generate button clicked');
    
}