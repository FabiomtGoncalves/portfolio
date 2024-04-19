import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-word-experience',
  templateUrl: './word-experience.component.html',
  styleUrl: './word-experience.component.css'
})
export class WordExperienceComponent {

  word: string = "assets/imgs/word.png";

  eviden: string = "assets/imgs/eviden.png";
  repsol: string = "assets/imgs/repsol.png";
  emas: string = "assets/imgs/emas.png";
  insidewash: string = "assets/imgs/insidewash.jpg";
  tml: string = "assets/imgs/tml.jpg";

  constructor(public _home : HomeComponent) { }

}
