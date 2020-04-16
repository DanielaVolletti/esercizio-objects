// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.


$(document).ready(function(){

  var bici = [
    {
      "nome": "BiciUno",
      "peso": 20,
    },
    {
      "nome": "BiciDue",
      "peso": 30,
    },
    {
      "nome": "BiciTre",
      "peso": 10,
    }
  ];

  var biciLeggera = bici[0];

  for (var i = 0; i < bici.length; i++) {
    var biciN = bici[i];
    console.log(biciN);
    var nomeBici = biciN.nome;
    var pesoBici = biciN.peso;
    console.log(pesoBici);
    if (pesoBici < biciLeggera.peso){
      biciLeggera = pesoBici;
    }


  }
  console.log('la bici più leggera è ' + nomeBici + ' con un peso di kg ' + pesoBici);


})
