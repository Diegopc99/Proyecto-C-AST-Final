import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ValidateService} from './services/validate.service';
import { RegisterService } from './services/register.service';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { ClienteComprarComponent } from './components/cliente-comprar/cliente-comprar.component';
import { ClienteElimCompraComponent } from './components/cliente-elim-compra/cliente-elim-compra.component';
import { ClienteConsultarCompraComponent } from './components/cliente-consultar-compra/cliente-consultar-compra.component';


const appRoutes : Routes = [
  {path:'admin',component: HomeComponent},
  {path:'admin/registro',component: RegistroComponent},
  {path:'admin/dashboard',component: DashboardComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroComponent,
    HomeComponent,
    DashboardComponent,
    EliminarComponent,
    ConsultarComponent,
    ClienteComprarComponent,
    ClienteElimCompraComponent,
    ClienteConsultarCompraComponent
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
