import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/_model/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent  {

  @Input('pokemon')
  public pokemon: Pokemon | undefined;
}
