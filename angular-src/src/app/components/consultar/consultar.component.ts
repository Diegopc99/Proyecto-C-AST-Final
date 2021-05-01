import { Component, OnInit } from '@angular/core';
import { ConsultarService } from '../../services/consultar.service';
import { HttpClient } from '@angular/common/http';
import  Swal  from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  constructor(private consultarService: ConsultarService,private router:Router) { }
  
  productos: any = [];
  filtro: String;
  searchText: string;
  noResults: string;

  ngOnInit(): void {

    this.getListaProductos();

  }

  getListaProductos() {
    this.consultarService.getLista().subscribe((productos) => { 
      (this.productos=productos.msg);
    },
      (err=>console.log('Error al listar', err)));
  }

  buscarProducto(searchText: String){
    this.consultarService.filtrarProductos(searchText).subscribe();
  }



}
