import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  cmd: string = "assets/imgs/cmd-en.png";
  folder: string = "assets/imgs/folder.png";
  folderWork: string = "assets/imgs/folder-work.png";
  folderEducation: string = "assets/imgs/folder-education.png";
  notepad: string = "assets/imgs/notepad.png";

  projectsEnter(event: any){
    //console.log("CODE: " + event.keyCode);
    if(event.keyCode===13){
      window.alert("Enter key pressed <open_projects>");
      console.log("Enter key pressed <open_projects>");
    }
   }

  public pressEnter($event: any) {
    
    window.alert("Enter key pressed <open_projects>");
    console.log("Enter key pressed <open_projects>");
  }
  

}
