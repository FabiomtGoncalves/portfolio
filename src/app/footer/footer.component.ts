import { formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  windows: string = "assets/imgs/w11-logo.png";
  cmd: string = "assets/imgs/cmd-icon.png";
  folder: string = "assets/imgs/w-folder.png";
  notepad: string = "assets/imgs/notepad-icon.png";

  date = formatDate(new Date(), 'dd/MM/yyyy', 'en');
  date2 = new Date();

  minutes = this.date2.getMinutes();
  formatMinutes = this.minutes > 9 ? this.minutes : '0' + this.minutes;
  time = new Date().getHours() + ':' + this.formatMinutes;


}
