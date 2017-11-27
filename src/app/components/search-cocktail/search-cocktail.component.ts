import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-cocktail',
  templateUrl: './search-cocktail.component.html',
  styleUrls: ['./search-cocktail.component.css'],


})
export class SearchCocktailComponent implements OnInit {
  filteredCocktailGlasses: Observable<any[]>;
  stateCtrl: FormControl;

//observable...something to do with making continuous requests and not reloading full page?

  myControl: FormControl = new FormControl();

//the export part above, allows this class to be imported.

  cocktailGlasses: any[] = [
    {
      name: 'Old Fashioned/Rocks glass',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'http://svgshare.com/i/43Z.svg'
    },
    {
      name: 'Hurricane glass',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: ''
    },
    {
      name: 'Coupette',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: ''
    },
    {
      name: 'Collins',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: ''
    },
    {
      name: 'Wine Glass',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: ''
    },
    {
      name: 'Pint glass',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: ''
    },
    {
      name: 'Martini glass',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: ''
    }
  
  ];

 

  filtercocktailGlasses(name: string) {
    return this.cocktailGlasses.filter(glass =>
      glass.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }


  juices = [ //Drop down list
    {
       value: 'lemon-0',
        viewValue: 'Lemon Juice'
       },
    {
       value: 'lime-1', 
       viewValue: 'Lime Juice' 
      },
    
  ];

  ingredients = [
    'Ingredient 1',
    'Ingredient 2',
    'Ingredient 3'
  ];

  constructor() {
    this.stateCtrl = new FormControl();

    this.filteredCocktailGlasses = this.stateCtrl.valueChanges
        .startWith(null)
        .map(glass => glass ? this.filtercocktailGlasses(glass) : this.cocktailGlasses.slice());
  }

  ngOnInit() {
  }

}