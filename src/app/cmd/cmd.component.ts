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

  //items: string[] = [];

  constructor(public _home: HomeComponent) { }

  cmdInput(){
    
    switch(this.command){
      case "show projects":
        document.getElementById("cmdMessage").style.color = "red";
        this.cmdMessage = "command: " +  "'" + this.command + "'" + " already executed.";
      break;

      case "help":
        document.getElementById("cmdMessage").style.color = "white";
        this.cmdMessage = "commands: 'job' | 'country' | 'linkedin' | 'cv -pt' | 'cv -en'";
      break;

      case "job":
        document.getElementById("cmdMessage").style.color = "green";
        this.cmdMessage = "Software Developer";
      break;

      case "country":
        document.getElementById("cmdMessage").style.color = "green";
        this.cmdMessage = "Portugal";
      break;

      case "linkedin":
        window.open("https://www.linkedin.com/in/fabiomtgoncalves/", '_blank'); 
      break;

      case "cv pt":
      case "cv-pt":
      case "cv -pt":
        window.open("assets/files/FabioGoncalves_CV_pt.pdf", '_blank'); 
      break;

      case "cv en":
      case "cv-en":
      case "cv -en":
        window.open("assets/files/FabioGoncalves_CV_en.pdf", '_blank'); 
      break;

      case "cv":
        document.getElementById("cmdMessage").style.color = "red";
        this.cmdMessage = "try 'cv -pt' or 'cv -en'.";
      break;

      default:
        //this.items.push(this.command);
        document.getElementById("cmdMessage").style.color = "red";
        this.cmdMessage = "command: " +  "'" + this.command + "'" + " not recognized. Type 'help' for more information.";
      break;
    }

    //console.log(this.items);

    this.command = "";

    /*var messageBody = document.querySelector('#commands');
    messageBody.scrollTop = messageBody.scrollHeight;*/

  }

  openProject(){
    window.open("assets/files/IPB_Recicla_17646_21932.pdf", '_blank');  
  }



}
