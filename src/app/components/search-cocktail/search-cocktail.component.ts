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

  showGlassware: boolean = true; //Bool to control whether glassware shows or not
  showHideToggle: boolean = true; //Bool for button text controller

 
  

//observable...something to do with making continuous requests and not reloading full page?

  myControl: FormControl = new FormControl();

//the export part above, allows this class to be imported.

  cocktailGlasses: any[] = [
    {
      name: 'Old Fashioned/Rocks glass',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'http://svgshare.com/i/463.svg'
    },
    {
      name: 'Champagne glass',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'http://svgshare.com/i/45_.svg'
    },
    {
      name: 'Martini glass',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'http://svgshare.com/i/44f.svg'
    },
    {
      name: 'Highball glass',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'http://svgshare.com/i/45Z.svg'
    },
    {
      name: 'Wine glass',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'http://svgshare.com/i/45C.svg'
    },
    {
      name: 'Shot glass',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'http://svgshare.com/i/44s.svg'
    },
    
  
  ];

  toggleGlassware(): void {
    this.showGlassware = !this.showGlassware; //function for hiding the glassware button
    this.showGlassware = false;
    if (this.showGlassware = false)
    {}
  
  }

  filtercocktailGlasses(name: string) {
    return this.cocktailGlasses.filter(glass =>
      glass.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }


  juices = [ //Drop down list
    {
       value: 'lemon-0',
        viewValue: 'Lemon Juice',
        juiceIcon: 'http://svgshare.com/i/44z.svg'
       },
    {
       value: 'lime-1', 
       viewValue: 'Lime Juice' ,
       juiceIcon: 'http://svgshare.com/i/45k.svg'
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