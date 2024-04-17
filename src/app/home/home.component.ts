import { Component } from '@angular/core';
import { PortfolioserviceService } from '../portfolioservice.service';
import { CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';

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

  recycleSound: string = "assets/sound/recycle.mp3";

  cmdShow: boolean = true;
  folderShow: boolean = true;
  notepadShow: boolean = true;

  recycleBinCoordinates = {x: 0, y: 0};
  extimatedCoordinates = {x: 0, y: 0};

  constructor(public _portfolioService: PortfolioserviceService) { }
  
  dragIndex(cmd: string, notepad: string, folder: string){
    document.getElementById("grid-cmd").style.zIndex = cmd;
    document.getElementById("grid-notepad").style.zIndex = notepad;
    document.getElementById("grid-folder").style.zIndex = folder;
  }


  closeAll(id: string){
    switch(id){
      case "cmd":
        this._portfolioService.cmdWindow = false;
        this.cmdShow = false;
        break;
      case "notepad":
        this._portfolioService.notepadWindow = false;
        this.notepadShow = false;
        break;
      case "folder":
        this._portfolioService.folderWindow = false;
        this.folderShow = false;
        break;
    }
    this.playAudio(this.recycleSound);
    this.recycle = "assets/imgs/bin-full.webp";
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


  onDrag(id: string){
    var binId = document.getElementById("bin");
    var recycleBin = binId.getBoundingClientRect();
    console.log("Coordinates BIN: " + recycleBin.x + recycleBin.y);
    var obgId = document.getElementById(id);
    var obj = obgId.getBoundingClientRect();
    console.log("Coordinates CMD: " + obj.x + "px, " + obj.y + "px");
    //this.extimatedCoordinates.x = $event.source.getFreeDragPosition().x - this.recycleBinCoordinates.x;
    //this.extimatedCoordinates.y = $event.source.getFreeDragPosition().y - this.recycleBinCoordinates.y;
    /*console.log("EXTIMATED: " + this.extimatedCoordinates.x + " " + this.extimatedCoordinates.y);
    console.log("RECYCLE BIN: " + this.recycleBinCoordinates.x + " " + this.recycleBinCoordinates.y);*/
    //console.log("DRAG OBJ: " + $event.source.getFreeDragPosition().x + " " + $event.source.getFreeDragPosition().y);
    //if($event.source.getFreeDragPosition() == this.recycleBinCoordinates || this.extimatedCoordinates.x < 20 && this.extimatedCoordinates.y < 20 || this.extimatedCoordinates.x > -20 && this.extimatedCoordinates.y > -20){
    //if($event.source.getFreeDragPosition().x >= rect.left && $event.source.getFreeDragPosition().x <= rect.left && $event.source.getFreeDragPosition().y <= rect.top  && $event.source.getFreeDragPosition().y >= rect.top){
    if(obj.x >= recycleBin.x - 80 && obj.x <= recycleBin.x + 75 && obj.y <= recycleBin.y + 85  && obj.y >= recycleBin.y - 80){
      this.closeAll(id);
    }
  }

  getCord($event: CdkDragStart){
    var div = document.getElementById("bin");
    var rect = div.getBoundingClientRect();
    console.log("Coordinates: " + rect.left + "px, " + rect.top + "px");
    this.recycleBinCoordinates = $event.source.getFreeDragPosition();
    console.log("RECYCLE CORD: " + this.recycleBinCoordinates.x + " " + this.recycleBinCoordinates.y);
    //console.log($event.source.getFreeDragPosition());
  }

  playAudio(sound: string){
    let audio = new Audio();
    audio.src = sound;
    audio.load();
    audio.play();
  }


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
  
}