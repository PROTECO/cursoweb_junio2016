//Obtenemos el contexto y canvas
var canvas = $('canvas');
var context = canvas[0].getContext("2d");
var color = $('.selected').css('background-color');
var lastEvent;
var mouseDown = false;

//Controls
$('.controls').on("click", "li",  function(){
  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");
  color =$(this).css("background-color");

  //Console log me imprimie en la consola lo que le pase en el parentesis
  //console.log(color);
});

//Cuando el boton de "Color nuevo" se presiona
$('#revealColorSelect').click(function(){

  //Ocultar o mostrar menu con id=colorSelect
  $('#colorSelect').toggle();
  
  //Cambiar color
  //Aqui se va a llamar la funcion que va a cambiar de color
  changeColor();
});


function changeColor(){

  var r = $('#red').val();
  var g = $('#green').val();
  var b = $('#blue').val();

  $('#newColor').css('background-color', 'rgb('+r+','+g+','+b+')' );

}

$('input[type=range]').change(changeColor);

//Cuando presionemos "Agregar Color"
$("#addNewColor").click(function(){
  //Creando un elemento li
  var colorNuevo = $('<li></li>');
  colorNuevo.css('background-color', $('#newColor').css('background-color'));

  $('.controls ul').append(colorNuevo);
});

// Dibujar cuando....
// mousedown / mousemove / mouseup / mouseleave

canvas.mousedown(function(event){
  //Obtengo el ultimo evento
  lastEvent = event;

  mouseDown = true;

}).mousemove(function(e){
  if(mouseDown){
    //Empiezo un nuevo trazo
    context.beginPath();
    //Muevo las coordenadas de ese trazo
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    //escojo la geometria (linea) y muevo las coordenadas
    context.lineTo(e.offsetX, e.offsetY);
    //Selecciono el color
    context.strokeStyle = color;
    //Ejecuto el dibujo
    context.stroke();
    //el ultimo evento es el del mousemove, no el del mousedown
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
  
}).mouseleave(function(){
  mouseDown = false;
});


























