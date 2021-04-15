import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Producto } from '../../../../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ConsultarService {

  private URL = "http://localhost:9000/admin/consultar";

  constructor(private http:HttpClient) { }

  //headers: HttpHeaders = new HttpHeaders({
  //  'Content-Type': 'application/json'
  //});

  getLista(): Observable<any>{
    return this.http.get(this.URL);
  }

  borrarProducto(id: string): Observable<any>{
    return this.http.delete(this.URL+"/"+id).pipe(map(id => id));

  }

}