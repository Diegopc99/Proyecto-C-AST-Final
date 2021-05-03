import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {RegisterService} from '../../services/register.service';
import  Swal  from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  ID: String = "";
  nombre: String ="";
  marca: String ="";
  descripcion: String ="";
  seccion: String = "";
  precio: number;
  cantidad: number;
  fecha_caducidad: string="";
  procedencia: String="";

  constructor(private validateService: ValidateService,private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  onSubmit(MyForm: NgForm){
    const producto= {

      ID: this.ID,
      nombre: this.nombre,
      marca: this.marca,
      descripcion: this.descripcion,
      seccion: this.seccion,
      precio: this.precio,
      cantidad: this.cantidad,
      fecha_caducidad: this.fecha_caducidad,
      procedencia: this.procedencia
      
    }
    let mensaje = "";

    
      
    if(isNaN(producto.precio) && producto.precio != undefined){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Precio no tiene un valor valido',
        showConfirmButton: false,
        timer: 1500
      });
      return false;
    }
      
      
    if(isNaN(producto.cantidad) && producto.precio != undefined){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Cantidad no tiene un valor valido',
        showConfirmButton: false,
        timer: 1500
      });
      return false;
    }
      
      
    const regexfecha = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if(!regexfecha.test(producto.fecha_caducidad) && producto.fecha_caducidad !=undefined){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Formato de fecha no valido',
        showConfirmButton: false,
        timer: 1500
      });
      return false;
    }
    
    

    //console.log(this.registerService.registerBook(book));    

    this.registerService.register(producto, "http://localhost:9000/admin/modificar").subscribe(data => {
      if(data.success){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Envio realizado',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          MyForm.reset();
        })
      }else{
        Swal.fire({
          icon: 'error',
          //title: 'Oops...',
          text: data.msg,
          //footer: '<a href>Why do I have this issue?</a>'
        })
      }
    })
     
    

  }

}
