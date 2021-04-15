import { Component, OnInit } from '@angular/core';
import { ConsultarService } from '../../services/consultar.service';
import { HttpClient } from '@angular/common/http';
import  Swal  from 'sweetalert2';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  constructor(private consultarService: ConsultarService) { }
  productos: any = [];
  filtro: String;


  ngOnInit(): void {

    this.getListaProductos();

  }

  getListaProductos() {
    this.consultarService.getLista().subscribe((productos) => { 
      (this.productos=productos.msg);
    },
      (err=>console.log('Error al listar', err)));
    

  }


  deleteProducto(id: String){
    
    this.consultarService.borrarProducto(id).subscribe((data) => {
      console.log("data: "+data);
      if(data.success){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto eliminado',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          location.reload();
        });
      }else{
        Swal.fire({
          icon: 'error',
          text: 'Ha ocurrido un error',

        })
      }
    });


  }


  buscarProducto(cadena: String){
    this.consultarService.filtrarProductos(cadena).subscribe();
  }



}
