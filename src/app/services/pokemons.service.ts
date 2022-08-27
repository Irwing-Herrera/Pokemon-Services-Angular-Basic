import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetail } from '../models/pokemonDetail.model';
import { Pokemons } from '../models/pokemons.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private pathInitial: string = "https://pokeapi.co/api/v2/pokemon"
  private pathGetAllPokemons: string = this.pathInitial + "?limit=10&offset=0"

  constructor(
    private http: HttpClient
  ) {}

  // TODO: getAllPokemons
  public getPokemonList(): Observable<Pokemons> {
    return this.http.get<Pokemons>(this.pathGetAllPokemons)
  }

  // TODO: getPokemonByUrl
  public getPokemonByUrl(url: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(url)
  }
  // TODO: post
  // TODO: put
  // TODO: delete
}
