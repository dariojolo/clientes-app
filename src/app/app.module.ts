import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectivaComponent } from './components/directiva/directiva.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { RouterModule,Routes } from "@angular/router";
import { ClienteService } from "../app/services/cliente.service";
import { FormComponent } from './components/clientes/form.component';
import {  FormsModule } from "@angular/forms";

const routes:Routes = [
  {path:'',redirectTo:'/clientes',pathMatch:'full'},
  {path:'directivas',component:DirectivaComponent},
  {path:'clientes',component:ClientesComponent},
  {path: 'clientes/form', component: FormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
