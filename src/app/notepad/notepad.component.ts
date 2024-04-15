import { Component } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrl: './notepad.component.css'
})
export class NotepadComponent {

  notepad: string = "assets/imgs/notepad.png";

  text = "- Fábio Gonçalves\n\n- 11/04/1998\n\n- Computer Science";

}
