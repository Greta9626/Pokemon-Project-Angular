import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  test = 2;

  constructor(private http: HttpClient) { }

  getPokemon() {
    const pokemonId = Math.ceil(Math.random() * 898);
    return this.http.get(`${environment.apiUrl}${pokemonId}`)
    }
}




