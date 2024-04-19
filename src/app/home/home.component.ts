import { Component, OnInit } from '@angular/core';
import { PortfolioserviceService } from '../portfolioservice.service';
import { CdkDragStart } from '@angular/cdk/drag-drop';
import { pulseAnimation } from 'angular-animations';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    pulseAnimation({ anchor: 'pulse' }),
  ]
})
export class HomeComponent implements OnInit{
  
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
  itemFromBin = {x: 0, y: 0};

  windows: string = "assets/imgs/w11-logo.png";
  cmdIcon: string = "assets/imgs/cmd-icon.png";
  folderIcon: string = "assets/imgs/w-folder.png";
  notepadIcon: string = "assets/imgs/notepad-icon.png";
  wordIcon: string = "assets/imgs/wordIcon.png";

  date = formatDate(new Date(), 'dd/MM/yyyy', 'en');
  date2 = new Date();

  minutes = this.date2.getMinutes();
  formatMinutes = this.minutes > 9 ? this.minutes : '0' + this.minutes;
  time = new Date().getHours() + ':' + this.formatMinutes;

  cmdAnimation: boolean;
  folderAnimation: boolean;
  notepadAnimation: boolean;
  wordEducationAnimation: boolean;
  wordExperienceAnimation: boolean;
  binAnimation: boolean;

  constructor(public _portfolioService: PortfolioserviceService) { }

  
  ngOnInit(): void {
    this.loadCord();
  }

  cmdAnimate() {
    this.cmdAnimation = false;
    setTimeout(() => {
      this.cmdAnimation = true;
    }, 1);
  }

  folderAnimate() {
    this.folderAnimation = false;
    setTimeout(() => {
      this.folderAnimation = true;
    }, 1);
  }

  notepadAnimate() {
    this.notepadAnimation = false;
    setTimeout(() => {
      this.notepadAnimation = true;
    }, 1);
  }

  wordEducationAnimate() {
    this.wordEducationAnimation = false;
    setTimeout(() => {
      this.wordEducationAnimation = true;
    }, 1);
  }

  wordExperienceAnimate() {
    this.wordExperienceAnimation = false;
    setTimeout(() => {
      this.wordExperienceAnimation = true;
    }, 1);
  }

  binAnimate() {
    this.binAnimation = false;
    setTimeout(() => {
      this.binAnimation = true;
    }, 1);
  }
  
  dragIndex(cmd: string, notepad: string, folder: string, wordEdu: string, wordExp: string, bin: string){
    document.getElementById("grid-cmd").style.zIndex = cmd;
    document.getElementById("grid-notepad").style.zIndex = notepad;
    document.getElementById("grid-folder").style.zIndex = folder;
    document.getElementById("wordEducation").style.zIndex = wordEdu;
    document.getElementById("wordExperience").style.zIndex = wordExp;
    document.getElementById("recycle-bin").style.zIndex = bin;
  }


  closeAll(id: string){
    switch(id){
      case "cmd":
        this._portfolioService.cmdWindow = false;
        this.cmdShow = false;
        this._portfolioService.trashCmd = true;
        this._portfolioService.emptyBin = false;
        this._portfolioService.recycleBinCount++;
        break;
      case "notepad":
        this._portfolioService.notepadWindow = false;
        this.notepadShow = false;
        this._portfolioService.trashNotepad = true;
        this._portfolioService.emptyBin = false;
        this._portfolioService.recycleBinCount++;
        break;
      case "folder":
        this._portfolioService.folderWindow = false;
        this._portfolioService.wordEducation = false;
        this._portfolioService.wordExperience = false;
        this.folderShow = false;
        this._portfolioService.trashFolder = true;
        this._portfolioService.emptyBin = false;
        this._portfolioService.recycleBinCount++;
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
      case "wordEducation":
        this._portfolioService.wordEducation = false;
      break;
      case "wordExperience":
        this._portfolioService.wordExperience = false;
      break;
      case "recycle":
        this._portfolioService.recycleBin = false;
      break;
    }
  }

  open(btn: string){
    switch(btn){
      case "cmd":
        this._portfolioService.cmdWindow = true;
        this.dragIndex('2', '1', '1', '1', '1', '1');
        this.cmdAnimate();
      break;
      case "notepad":
        this._portfolioService.notepadWindow = true;
        this.dragIndex('1', '2', '1', '1', '1', '1');
        this.notepadAnimate();
      break;
      case "folder":
        this._portfolioService.folderWindow = true;
        this.dragIndex('1', '1', '2', '1', '1', '1');
        this.folderAnimate();
      break;
      case "wordEducation":
        this._portfolioService.wordEducation = true;
        this.dragIndex('1', '1', '1', '2', '1', '1');
        this.wordEducationAnimate();
      break;
      case "wordExperience":
        this._portfolioService.wordExperience = true;
        this.dragIndex('1', '1', '1', '1', '2', '1');
        this.wordExperienceAnimate();
      break;
      case "recycleBin":
        this._portfolioService.recycleBin = true;
        this.dragIndex('1', '1', '1', '1', '1', '2');
        this.binAnimate();
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

  loadCord(){
    if (typeof document !== 'undefined') {
      var div = document.getElementById("bin");
      var bin = div.getBoundingClientRect();
      console.log("X: " + bin.x + " Y: " + bin.y);
      this.itemFromBin.x = bin.x;
      this.itemFromBin.y = bin.y;
    }
  }

  getCord($event: CdkDragStart){
    var div = document.getElementById("bin");
    var bin = div.getBoundingClientRect();
    //console.log("X: " + bin.x + " Y: " + bin.y);
    this.itemFromBin.x = bin.x;
    this.itemFromBin.y = bin.y;
    //console.log("ITEM FROM BIN: " + this.itemFromBin.x + " " + this.itemFromBin.y);
    //this.recycleBinCoordinates = $event.source.getFreeDragPosition();
    //console.log("RECYCLE CORD: " + this.recycleBinCoordinates.x + " " + this.recycleBinCoordinates.y);
    //console.log($event.source.getFreeDragPosition());
  }

  removeFromBin(id: string){

    switch(id){
      case "cmd":
        this.cmdShow = true;
        this._portfolioService.trashCmd = false;
        this._portfolioService.recycleBinCount--;
      break;

      case "notepad":
        this.notepadShow = true;
        this._portfolioService.trashNotepad = false;
        this._portfolioService.recycleBinCount--;
      break;

      case "folder":
        this.folderShow = true;
        this._portfolioService.trashFolder = false;
        this._portfolioService.recycleBinCount--;
      break;
    }

    if(this._portfolioService.recycleBinCount === 0){
      this.recycle = "assets/imgs/bin-empty.webp";
    }

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
  

  refresh(): void {
    window.location.reload();
  }


}