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