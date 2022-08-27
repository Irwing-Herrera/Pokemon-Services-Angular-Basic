import { Component, Input } from '@angular/core';
import { Sprites } from 'src/app/models/sprites.model';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent {

  constructor() { }

  @Input()
  public height: number = 0

  @Input()
  public sprites: Sprites = {
    back_default: '',
      back_female: null,
      back_shiny: '',
      back_shiny_female: null,
      front_default: '',
      front_female: null,
      front_shiny: '',
      front_shiny_female: null
  };
}
