import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { GearsCharacter, GearsGun } from './interfaces/gears.interface';

@Injectable({
  providedIn: 'root'
})
export class GearsService {

  private apiURL: string = 'https://localhost:44310/api/'
  arma: string = 'Guns'
  personaje:string = 'Characters'
  constructor(private http: HttpClient) { }

  darArmas(termino:string):Observable<GearsGun[]>{

    const url = `${this.apiURL}Guns`
    return this.http.get<GearsGun[]>(url);
  }
  darPersonajes(termino:string):Observable<GearsCharacter[]>{

    const url = `${this.apiURL}Characters`
    return this.http.get<GearsCharacter[]>(url);
  }

  crearArma(arma:GearsGun){
    const url = `${this.apiURL}Guns`
    return this.http.post<GearsGun[]>(url,arma);
  }
  borrarArma(id:number){
    const url = `${this.apiURL}Guns/${id}`
    return this.http.delete<GearsGun[]>(url);
  }

  obtenerArma(id:number): Observable<GearsGun>{
    const url = `${this.apiURL}Guns/${id}`
    return this.http.get<GearsGun>(url);
  }

  actualizarArma(id:number,arma:GearsGun): Observable<GearsGun>{
    const url = `${this.apiURL}Guns/${id}`
    return this.http.put<GearsGun>(url,arma);
  }

  borrarPersonaje(id:number){
    const url = `${this.apiURL}Characters/${id}`
    return this.http.delete<GearsGun[]>(url);
  }
  crearPersonaje(personaje:GearsCharacter){
    const url = `${this.apiURL}Characters`
    return this.http.post<GearsGun[]>(url,personaje);
  }

  obtenerPersonaje(id:number): Observable<GearsCharacter>{
    const url = `${this.apiURL}Characters/${id}`
    return this.http.get<GearsCharacter>(url);
  }

  actualizarPersonaje(id:number,personaje:GearsCharacter): Observable<GearsCharacter>{
    const url = `${this.apiURL}Characters/${id}`
    return this.http.put<GearsCharacter>(url,personaje);
  }

}
