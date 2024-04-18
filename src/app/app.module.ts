import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CmdComponent } from './cmd/cmd.component';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { FolderComponent } from './folder/folder.component';
import { NotepadComponent } from './notepad/notepad.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { WordComponent } from './word/word.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CmdComponent,
    FolderComponent,
    NotepadComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkDrag,
    FormsModule,
    BrowserAnimationsModule,
    ScrollingModule,
  ],
  providers: [
    provideClientHydration(),
    HomeComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
