import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { PortfolioserviceService } from '../portfolioservice.service';

@Component({
  selector: 'app-recycle-bin',
  templateUrl: './recycle-bin.component.html',
  styleUrl: './recycle-bin.component.css'
})
export class RecycleBinComponent {

  binFolder: string = "assets/imgs/bin_empty.png";
  cmd: string = "assets/imgs/cmd-icon.png";
  folder: string = "assets/imgs/w-folder.png";
  notepad: string = "assets/imgs/notepad-icon.png";

  constructor(public _home: HomeComponent, public _portfolioService : PortfolioserviceService) { }

}
