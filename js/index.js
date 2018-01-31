





//var Url = 'https://jsonplaceholder.typicode.com';

window.onload = function(){
  leerDatos();


}

var productos;

function numerarPaginas(){

  var total_productos = productos.length;
  var division = total_productos/12;
  var redondeo = Math.round(division);

  if((redondeo-division)< 0.5){
    num_paginas = redondeo+1;
  }
  else {
    num_paginas= redondeo;
  }
  //console.log(num_paginas);
  //console.log(productos.length);
  return num_paginas;
}


function leerDatos(){
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/photos/?albumId=1',
    dataType:'json',
    type:'GET',
    success: function(data){
      console.log("Exito!");

      productos = data.slice();

      var num_paginas = numerarPaginas();

      paginarProductos(num_paginas,data);


    },
    error: function(data){
      Console.log("Error!");

    }
  });

}

function paginarProductos(paginas){


          for (var i = 0; i < paginas; i++) {

            var numero = i+1;
            $('.pagination').append("<li class='page-item' id='"+i+"' onclick='cargarPagina(this)'><a class='page-link' href='#'>"+numero+"</a></li>");

          }

          for (var i = 0; i <12; i++) {
            pintarProductos(productos[i]);
          }

}

function cargarPagina(e){

  var id = e.id;


  var i = id*12;
  var tope = (parseInt(id)+1)*12;

  $("#product-cards").empty();


  for (i ; i < tope; i++) {
    pintarProductos(productos[i]);
  }

}

function buscarProducto(e){

 var encontrados;

 var texto = document.getElementById("busqueda").value

 $("#product-cards").empty();


 for (var i in productos ) {

   if((productos[i].title.indexOf(texto))>0){
     pintarProductos(productos[i]);

     //encontrados.push(productos[i]);
     console.log(productos[i].id);
   }
 }


}


function pintarProductos(data){

  $("#product-cards").prepend("<div class='col-md-3'><div class='card mb-3 box-shadow'><img src='"+data.url+"'><div class='card-body'><h6 class='card-text'>"+data.title+"</h6></div></div></div>");
}
