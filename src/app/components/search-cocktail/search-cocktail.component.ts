import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-cocktail',
  templateUrl: './search-cocktail.component.html',
  styleUrls: ['./search-cocktail.component.css']
})
export class SearchCocktailComponent implements OnInit {

  myControl: FormControl = new FormControl();
  
    options = [
      'Ingredient 1',
      'Ingredient 2',
      'Ingredient 3'
     ];

  constructor() { }

  ngOnInit() {
  }

}
