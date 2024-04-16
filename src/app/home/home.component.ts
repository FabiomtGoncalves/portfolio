import { Component } from '@angular/core';
import { PortfolioserviceService } from '../portfolioservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  folder: string = "assets/imgs/w-folder.png";
  recycle: string = "assets/imgs/bin-empty.webp";
  cmd: string = "assets/imgs/cmd-icon.png";
  notepad: string = "assets/imgs/notepad-icon.png";

  constructor(public _portfolioService: PortfolioserviceService) { }

  /*@HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    let audio = new Audio();
    this.audio.src = "assets/sound/mouse_click.mp3";
    this.audio.load();
    this.audio.play();
  }*/

  /*projectsEnter(event: any){
    //console.log("CODE: " + event.keyCode);
    if(event.keyCode===13){
      window.alert("Enter key pressed <open_projects>");
      console.log("Enter key pressed <open_projects>");
    }
   }*/
  

  dragIndex(cmd: string, notepad: string, folder: string){
    document.getElementById("grid-cmd").style.zIndex = cmd;
    document.getElementById("grid-notepad").style.zIndex = notepad;
    document.getElementById("grid-folder").style.zIndex = folder;
  }


  close(btn: string){
    switch(btn){
      case "cmd":
        this._portfolioService.cmdWindow = false;
        break;
      case "notepad":
        this._portfolioService.notepadWindow = false;
        break;
      case "folder":
        this._portfolioService.folderWindow = false;
        break;
    }
  }

  open(btn: string){
    switch(btn){
      case "cmd":
        this._portfolioService.cmdWindow = true;
        break;
      case "notepad":
        this._portfolioService.notepadWindow = true;
        break;
      case "folder":
        this._portfolioService.folderWindow = true;
        break;
    }
  }

}