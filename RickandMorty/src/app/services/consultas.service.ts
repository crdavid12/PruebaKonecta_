import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  resultadoPeticion:any;

  constructor( private _http : HttpClient) { }


  getAllPersonajes(paginacion:number, parametro = ""){

    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this._http.get(`https://rickandmortyapi.com/api/character/?page=${paginacion}&name=${parametro}`, {headers});

  }

  getAllCapitulos(paginacion:number, parametro = ""){

    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this._http.get(`https://rickandmortyapi.com/api/episode/?page=${paginacion}&name=${parametro}`, {headers});

  }

  public getCapitulo(url){
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this._http.get(url, {headers});
  }

  getPersonaje(url){
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this._http.get(url, {headers});
  }

}
