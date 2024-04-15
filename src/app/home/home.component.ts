import { CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  /*projectsEnter(event: any){
    //console.log("CODE: " + event.keyCode);
    if(event.keyCode===13){
      window.alert("Enter key pressed <open_projects>");
      console.log("Enter key pressed <open_projects>");
    }
   }*/
  

  cmdDrag() {
    document.getElementById("grid-cmd").style.zIndex = "2";
    document.getElementById("grid-notepad").style.zIndex = "1";
    document.getElementById("grid-folder").style.zIndex = "1";
  }

  notepadDrag() {
    document.getElementById("grid-notepad").style.zIndex = "2";
    document.getElementById("grid-cmd").style.zIndex = "1";
    document.getElementById("grid-folder").style.zIndex = "1";
  }

  folderDrag() {
    document.getElementById("grid-folder").style.zIndex = "2";
    document.getElementById("grid-notepad").style.zIndex = "1";
    document.getElementById("grid-cmd").style.zIndex = "1";
  }

}
