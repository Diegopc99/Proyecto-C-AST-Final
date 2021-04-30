import { Component, OnInit } from '@angular/core';
import {ConsultarService} from '../../services/consultar.service';
import  Swal  from 'sweetalert2';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  constructor(private consultarService: ConsultarService) { }

  productos: any = [];
  filtro: string;
  searchText: string;
  noResults: string;


  ngOnInit(): void {
    this.getListaProductos();
  }

  getListaProductos(){
    this.consultarService.getLista()
      .subscribe(
        (productos) => {(this.productos=productos.msg);},
        (err=>console.log('Error', err)));
  }

  deleteProducto(id: string){
    this.consultarService.borrarProducto(id).subscribe( (data) => {
      if(data.success){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto eliminado',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          this.getListaProductos();
        });
      }else{
        Swal.fire({
          icon: 'error',
          //title: 'Oops...',
          text: 'Ha ocurrido un error',
          //footer: '<a href>Why do I have this issue?</a>'
        })
    }
  } );
}

  buscarProducto(searchText: string){
    console.log(this.filtro);
  }

}
