const gridCanvas = $('#gridCanvas');
const grid = $('#pixelCanvas');
const userHeight = $('#inputHeight');
const userWidth = $('#inputWidth');
$(document).ready(function () {

    $('#sizePicker').submit(function (event) {
        clearGrid();
        //        clearGridOnWhile()                       // clearing a grid with while loop
        makeGrid();
        registerMouseHandlers();
        event.preventDefault();
    });
});
// When size is submitted by the user, call makeGrid()
$('#createGrid').click(function(){
    //prevents the page from reloading when the button is pressed
    event.preventDefault();
    //clears grid
    cleanGrid();
    //calls the makegrid function
    makeGrid();
    
});

//add color on click
$('#pixelCanvas').click(function(event){
    var color= $('#colorPicker').val();
    $(event.target).css('background-color', color );
});
//double click to erase color
$('#pixelCanvas').dblclick(function(event){
    $(event.target).css('background-color', 'transparent' );
});
//
$("#resetGrid").on("click", function () {
    cleanGrid();
    makeGrid();
});


function makeGrid() {
    //store the values of the color, height, and width selected
    
    let height = userHeight.val();
    let width = userWidth.val();
    let grid= $('#pixelCanvas');
    //empty method deletes any previous grid
    grid.empty();
    /*the for loop adds a table row or 
    column based on the value of height and width submitted*/
    for(var i=0; i< width; i++){
        grid.append('<tr></tr>');
    }
    for(var i=0; i < height; i++){
        grid.find('tr').append('<td></td>');
    }
}
//Function that clear all the tr and td element
function cleanGrid() {
    grid.empty();
}

