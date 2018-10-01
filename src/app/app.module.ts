import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuggestionsService } from './suggestions.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { SearchListComponent } from './search-list/search-list.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    AutocompleteComponent,
    SearchListComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SuggestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
