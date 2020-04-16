/*Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
Peso = 10
con input utente modifico il peso della palla.
*/
$(document).ready(function(){

  var palla = {
    "nome": "palla",
    "peso": 10
  };

  console.log(palla);

  $('h2').text('Il peso iniziale della palla è: ' + palla.peso);

  $('button').click(function(){
    var pesoUser = $('input').val();

    console.log(pesoUser);

    palla.peso = pesoUser;

    $('.peso-palla').text('Il nuovo peso della palla è: ' + pesoUser);

    $('input').val("");

  });


})
