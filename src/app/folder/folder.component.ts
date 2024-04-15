import { Component } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.css'
})

export class FolderComponent {

  folder: string = "assets/imgs/folder.png";
  folderWork: string = "assets/imgs/folder-work.png";
  folderEducation: string = "assets/imgs/folder-education.png";
  pdf: string = "assets/imgs/pdf.png";

}
