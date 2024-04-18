import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrl: './notepad.component.css'
})
export class NotepadComponent {

  notepad: string = "assets/imgs/notepad.png";

  text = "- Fábio Gonçalves\n\n- 11/04/1998\n\n- Computer Science\n\n- Software Developer\n\n- ";

  constructor(public _home: HomeComponent) { }

}
