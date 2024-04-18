import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrl: './word.component.css'
})
export class WordComponent {

  word: string = "assets/imgs/word.png";
  estig: string = "assets/imgs/IPBejaESTIG.png";
  etla: string = "assets/imgs/etla.png";

  constructor(public _home: HomeComponent) { }

}
