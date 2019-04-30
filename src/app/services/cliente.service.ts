import { Injectable } from '@angular/core';
import { CLIENTES } from "../components/clientes/clientes.json";
import { Cliente} from "../components/clientes/cliente";
import { Observable,of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint:string='http://localhost:8080/api/clientes'
  private httpHeaders = new HttpHeaders({'content-type':'application/json'})
  constructor(private http:HttpClient) { }
  getClientes():Observable<Cliente[]>{
    //return of(CLIENTES);
    //return this.http.get<Cliente[]>(this.urlEndPoint);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );
  }
  create(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint, cliente,{ headers: this.httpHeaders })
  }
}
