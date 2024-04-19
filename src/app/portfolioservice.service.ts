import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioserviceService {

  public cmdWindow: boolean = true;
  public folderWindow: boolean = true;
  public notepadWindow: boolean = true;
  public wordEducation: boolean = false;
  public wordExperience: boolean = false;

  public recycleBin: boolean = false;
  public emptyBin: boolean = true;
  public recycleBinCount: number = 0;

  public trashCmd: boolean = false;
  public trashFolder: boolean = false;
  public trashNotepad: boolean = false;

  constructor() { }
}
