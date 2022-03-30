import { modeloFotoProducto } from "./modelo-fotoProducto";

function llenarTablaProducto (){

    div="<div class='container mt-1 pt-1 contenidoProd text-center img-fluid'>
    <div class='row col-12 align-items-stretch text-center img-fluid ns'>
      <div class='col-md-4 mb-4 mb-lg-4 col-lg-6 img-thumbnail img-fluid cajasProd'>
        <div id='t' class='cuadriculaProd'>
          <div class='svgProd'>
            <img id='servi' src='modeloFotoProducto.imagenProducto' alt='Image' class='img-fluid text-center productoProd' >
          </div>
          <div class='service-2 text-center'>
            <h3><span>
                productos[i].descripcionProduco</span></h3>
            <pr> ##
            </pr>
          </div>
        </div>
      </div>
    </div>
  </div>";
    productos = new Array();
    

    productos[0] = new modeloFotoProducto ('vaso de fecula de caña','vasos de 5 a 9 oz','images/productos/p1.jpeg'),
    productos[1] = new modeloFotoProducto ('Cubiertos','Cuchara y tenedores','images/productos/p2.jpeg'),
    productos[2] = new modeloFotoProducto ('Platos hamburgeseros','Compostables','images/productos/p3.jpeg'),
    productos[3] = new modeloFotoProducto('Tapas para basos','tapas para vasos de 5 a 9 oz','images/productos/p3.jpeg'),
    productos[4] = new modeloFotoProducto ('Bolsa de papel kraf','vasos de 5 a 9 oz','images/productos/p4.jpeg');

    for(i=0;i<productos.length;i++){

        let creaDiv= document.createElement('div');
        let creaimg = document.createElement('img');

        creaDiv.setAttribute('class','foto');
        creaimg.setAttribute('src',productos[i][0]);
        principal.appendChild(creaDiv);
        principal.appendChild(creaimg);

    }
}

