import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, RoutableComponents } from './app-routing.module';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDatepickerModule, MatSelectModule, MatSlideToggleModule } from '@angular/material'; /* Added Radio module */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { CocktailGlasswareRepository } from './repositories/cocktail-glassware.repository';
import { CocktailSourRepository } from './repositories/cocktail-sours.repository';

@NgModule
  //Declare component classes here 
  ({
    declarations: [
      AppComponent,
      RoutableComponents,

    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatCardModule,
      MatSlideToggleModule,
      MatSelectModule,
      FormsModule,
      ReactiveFormsModule

    ],
    providers:
      [
        CocktailGlasswareRepository,
        CocktailSourRepository
      ],
      
    bootstrap: [AppComponent]
  })
export class AppModule { }






