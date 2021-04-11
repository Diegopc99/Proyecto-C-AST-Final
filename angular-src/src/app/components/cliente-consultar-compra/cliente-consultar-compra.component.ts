import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-cliente-consultar-compra',
  templateUrl: './cliente-consultar-compra.component.html',
  styleUrls: ['./cliente-consultar-compra.component.css']
})
export class ClienteConsultarCompraComponent implements OnInit {

  IDsearch: String;
  ID:String[] = new Array();
  cantidad:number[] = new Array();
  precio_total:number[] = new Array();
  ID_producto:String[] = new Array();
  nombre_producto:String[] = new Array();

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {

    let body;
    let objetos;
    this.registerService.registerProducto(body, "http://localhost:9000/cliente/listartodascompras").subscribe(data => {

      objetos = data.msg;

      // Recorremos cada elemento compra devuelto y guardamos sus campos en las variables globales
      for (let i = 0; i < objetos.length; i++) {
        this.ID[i] = objetos[i].ID;
        this.cantidad[i] = objetos[i].cantidad;
        this.precio_total[i] = objetos[i].precio_total;
        this.nombre_producto[i] = objetos[i].nombre_producto;
        this.ID_producto[i] = objetos[i].ID_producto;

      }
      
    })

  }

  onSubmit(){

    const producto= {

      ID: this.IDsearch
      
    }

    //this.deleteRow(this.IDsearch);

    this.registerService.registerProducto(producto, "http://localhost:9000/cliente/listarcompra").subscribe(data => {

      if(data.success){
        console.log(data.msg);
      }else{
        
      }

    })
     
    

  }

  deleteRow(id){
    for(let i = 0; i < this.ID.length; i++){
      if(this.ID[i] != id){
        this.ID.splice(i,1);
      }
    }
  }






}
