


// se cargan los productos
var productos;
//var Url = 'https://jsonplaceholder.typicode.com';

window.onload = function(){
  leerDatos();

}

function numerarPaginas(){

  var num_paginas;
  var division = productos.length/12;
  var redondeo = Math.round(division);

if((redondeo-division)< 0.5){
  num_paginas = redondeo+1;
}
else {
  num_paginas= redondeo;
}
  //console.log(num_paginas);
  //console.log(productos.length);

}


function leerDatos(){
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/photos/?albumId=1',
    dataType:'json',
    type:'GET',
    success: function(data){
      console.log("Exito!");

//dividir los productos
        productos= data;


        for (var i = 0; i <12; i++) {
          mostrarProductos(data[i]);
        }
        numerarPaginas();

/*
        for (var i in data) {

          mostrarProductos(data[i]);

         }
*/
    },
    error: function(data){
      Console.log("Error!");
      //console.dir(data);
    }
  });

}




function mostrarProductos(data){

  $("#product-cards").prepend("<div class='col-md-3'><div class='card mb-3 box-shadow'><img src='"+data.url+"'><div class='card-body'><h6 class='card-text'>"+data.title+"</h6></div></div></div>");


}
