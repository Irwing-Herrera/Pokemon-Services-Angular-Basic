import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetail } from '../models/pokemonDetail.model';
import { Pokemons } from '../models/pokemons.model';
import { RegisterUserRequest, RegisterUserResponse } from '../models/registerUser.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private pathInitial: string = "https://pokeapi.co/api/v2/pokemon"
  private pathGetAllPokemons: string = this.pathInitial + "?limit=10&offset=0"

  private dominio: string = "https://platzi-tweets-backend.herokuapp.com/api/v1"
  private postRegister: string = this.dominio + "/register"

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

  // TODO: getPokemonByName
  public getPokemonByName(name: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(this.pathInitial + "/" + name)
  }

  // TODO: getPokemonByName
  public postRegisterUser(user: RegisterUserRequest): Observable<RegisterUserResponse> {
    return this.http.post<RegisterUserResponse>(
      this.postRegister,
      {
        email: user.email,
        password: user.password,
        names: user.name
      }
    )
  }

  // TODO: post
  // TODO: put
  // TODO: delete
}
