import { IPokeList } from './../../models/pokelist';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-capture',
  templateUrl: './pokemon-capture.component.html',
  styleUrls: ['./pokemon-capture.component.scss'],
})
export class PokemonCaptureComponent implements OnInit {
  subs: Subscription[] = [];
  pokeData: any;
  pokemonAccepted: IPokeList[] = [];
  pokemonRefused: IPokeList[] = [];
  pokeDataResponse: boolean = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    this.subs.push(
      this.pokemonService.getPokemon().subscribe((data) => {
        this.pokeData = data;
        this.pokeDataResponse = true;
      })
    );
  }

  addPokemon(choice: boolean): void {
    const pokemon = { pokemon: this.pokeData, accepted: choice };
    choice
      ? this.pokemonAccepted.push(pokemon)
      : this.pokemonRefused.push(pokemon);

/*     const allPokemon = [...this.pokemonAccepted, ...this.pokemonRefused];
    console.log(allPokemon); */
    console.log(pokemon)

    this.getPokemon();
  }
}
