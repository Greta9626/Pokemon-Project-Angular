import { IPokeList } from './../../models/pokelist';
import { Subscription } from 'rxjs';
import { PokemonService } from './../../services/pokemon.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-accepted',
  templateUrl: './pokemon-accepted.component.html',
  styleUrls: ['./pokemon-accepted.component.scss']
})
export class PokemonAcceptedComponent implements OnInit {

  @Input() pokemonAccepted: any;



  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
}

}
