import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectivaComponent } from './components/directiva/directiva.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { RouterModule,Routes } from "@angular/router";
import { ClienteService } from "../app/services/cliente.service";

const routes:Routes = [
  {path:'',redirectTo:'/clientes',pathMatch:'full'},
  {path:'directivas',component:DirectivaComponent},
  {path:'clientes',component:ClientesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
