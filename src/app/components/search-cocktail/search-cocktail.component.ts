import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-cocktail',
  templateUrl: './search-cocktail.component.html',
  styleUrls: ['./search-cocktail.component.css'],


})
export class SearchCocktailComponent implements OnInit {
  filteredStates: Observable<any[]>;
  stateCtrl: FormControl;

  myControl: FormControl = new FormControl();


  states: any[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  
  ];

 

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }


  foods = [ //Drop down list
    { value: 'steak-0', viewValue: 'Lemon Juice' },
    { value: 'pizza-1', viewValue: 'Lime Juice' },
    { value: 'tacos-2', viewValue: 'Grapefruit' }
  ];

  options = [
    'Ingredient 1',
    'Ingredient 2',
    'Ingredient 3'
  ];

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(state => state ? this.filterStates(state) : this.states.slice());
  }

  ngOnInit() {
  }

}