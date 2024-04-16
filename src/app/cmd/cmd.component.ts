import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-cmd',
  templateUrl: './cmd.component.html',
  styleUrl: './cmd.component.css'
})
export class CmdComponent {

  cmd: string = "assets/imgs/cmd_blank.png";
  github: string = "assets/imgs/github.png";

  command: string = "";

  cmdMessage: string = "";

  constructor(public _home: HomeComponent) { }

  cmdInput(){

    if(this.command == "show projects"){
      this.cmdMessage = "command: " +  "'" + this.command + "'" + " already executed.";
    } else{
      this.cmdMessage = "command: " +  "'" + this.command + "'" + " not recodnized.";
    }

    this.command = "";

  }

}
