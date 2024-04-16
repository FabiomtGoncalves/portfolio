import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

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

  constructor(public _home: HomeComponent) { }

}
