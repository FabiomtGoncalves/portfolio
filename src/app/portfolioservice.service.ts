import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioserviceService {

  public cmdWindow: boolean = true;
  public folderWindow: boolean = true;
  public notepadWindow: boolean = true;

  constructor() { }
}
