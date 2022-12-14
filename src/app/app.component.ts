import { Component, OnInit } from '@angular/core';
import { PokemonDetail } from './models/pokemonDetail.model';
import { PokemonList } from './models/pokemonList.model';
import { Pokemons } from './models/pokemons.model';
import { RegisterUserRequest, RegisterUserResponse } from './models/registerUser.model';
import { PokemonsService } from './services/pokemons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private _pokemonService: PokemonsService
  ) { }

  public findPokemon: string = ""

  public name: string = ""
  public email: string = ""
  public password: string = ""

  public pokemons: PokemonList[] = []
  public currentPokemon: PokemonDetail = {
    height: 0,
    sprites: {
      back_default: '',
      back_female: null,
      back_shiny: '',
      back_shiny_female: null,
      front_default: '',
      front_female: null,
      front_shiny: '',
      front_shiny_female: null
    }
  }

  private getPokemons(): void {
    this._pokemonService.getPokemonList()
      .subscribe((response: Pokemons) => {
        this.pokemons = response.results
      })
  }

  public getDetailPokemon(url: string): void {
    this._pokemonService.getPokemonByUrl(url)
      .subscribe((response: PokemonDetail) => {
        this.currentPokemon = response
      })
  }

  public findoPokemon(): void {
    this._pokemonService.getPokemonByName(this.findPokemon)
    .subscribe((reponse: PokemonDetail) => {
      this.currentPokemon = reponse
    })
  }

  public registerUser(): void {

    let user: RegisterUserRequest = {
      email: this.email,
      password: this.password,
      name: this.name
    }

    this._pokemonService.postRegisterUser(user).subscribe((response: RegisterUserResponse) => {
      console.log("Respuesta: ",response);
      console.log("tu token es: ",response.token);
    })
  }

  ngOnInit(): void {
    this.getPokemons()
  }
}
