import { PokemonRefusedComponent } from './../../components/pokemon-refused/pokemon-refused.component';
import { PokemonAcceptedComponent } from './../../components/pokemon-accepted/pokemon-accepted.component';
import { PokemonComponent } from './pokemon.component';
import { PokemonCaptureComponent } from './../../components/pokemon-capture/pokemon-capture.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    PokemonComponent,
    PokemonCaptureComponent,
    PokemonAcceptedComponent,
    PokemonRefusedComponent
  ],
  imports: [
    PokemonRoutingModule,
    CommonModule,
    HttpClientModule
  ]
})
export class PokemonModule { }
