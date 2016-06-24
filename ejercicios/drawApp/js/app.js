//Obtenemos el contexto y canvas
var canvas = $('canvas');
var context = canvas[0].getContext("2d");
var color = $('.selected').css('background-color');

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

  $('#newColor').css('background-color', 'rgba(255,255,255)' );

}













