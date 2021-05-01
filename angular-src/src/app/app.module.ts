import { BrowserModule } from '@angular/platform-browser';
import { CompilerFactory, NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';

import { ValidateService} from './services/validate.service';
import { RegisterService } from './services/register.service';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { ClienteComprarComponent } from './components/cliente-comprar/cliente-comprar.component';
import { ClienteElimCompraComponent } from './components/cliente-elim-compra/cliente-elim-compra.component';
import { ClienteConsultarCompraComponent } from './components/cliente-consultar-compra/cliente-consultar-compra.component';
import { ModificarComponent } from './components/modificar/modificar.component';


const appRoutes : Routes = [
  {path:'',component:HomeComponent},
  {path:'admin',component: HomeComponent},
  {path:'admin/registro',component: RegistroComponent},
  {path:'admin/consultar',component: ConsultarComponent},
  {path:'admin/modificar',component: ModificarComponent},
  {path:'admin/eliminar',component: EliminarComponent},
  {path:'cliente/comprar',component: ClienteComprarComponent},
  {path:'cliente/listarcompra',component: ClienteConsultarCompraComponent},
  {path:'cliente/cancelarcompra',component: ClienteElimCompraComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroComponent,
    HomeComponent,
    EliminarComponent,
    ConsultarComponent,
    ClienteComprarComponent,
    ClienteElimCompraComponent,
    ClienteConsultarCompraComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ValidateService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }