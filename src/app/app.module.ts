import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CheeseComponent } from './cheese/cheese.component';
import { SearchComponent } from './cheese/search/search.component';
import { DisplayComponent } from './cheese/display/display.component';
import { SearchBarComponent } from './cheese/search-bar/search-bar.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DisplayFavoritesComponent } from './favorites/display-favorites/display-favorites.component';
import { NoteTextAreaComponent } from './favorites/note-text-area/note-text-area.component';
import { DropdownComponent } from './dropdown/dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CheeseComponent,
    SearchComponent,
    DisplayComponent,
    SearchBarComponent,
    FavoritesComponent,
    DisplayFavoritesComponent,
    NoteTextAreaComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
