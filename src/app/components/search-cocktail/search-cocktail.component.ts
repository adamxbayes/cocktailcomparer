import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { CocktailGlasswareRepository } from '../../repositories/cocktail-glassware.repository';
import { CocktailSourRepository } from '../../repositories/cocktail-sours.repository';
import { CocktailGlassware } from '../../models/cocktail-glassware.model';
import { CocktailSours } from '../../models/cocktail-sours.model';


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

  //Referencing the models which store instances of objects (drop down lists)
  cocktailGlasses: CocktailGlassware[] = [];
  juices: CocktailSours[] = [];

  //observable...something to do with making continuous requests and not reloading full page?

  myControl: FormControl = new FormControl();
  //the export part above, allows this class to be imported.

  toggleGlassware(): void {
    this.showGlassware = !this.showGlassware; //function for hiding the glassware button
    //this.showGlassware = false;
  }

  filtercocktailGlasses(name: string) {
    return this.cocktailGlasses.filter(glass =>
      glass.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  constructor(private cocktailGlasswareRepository: CocktailGlasswareRepository, private cocktailSourRepository: CocktailSourRepository) {
    this.stateCtrl = new FormControl();

    this.filteredCocktailGlasses = this.stateCtrl.valueChanges
      .startWith(null)
      .map(glass => glass ? this.filtercocktailGlasses(glass) : this.cocktailGlasses.slice());
  }

  ngOnInit() {
    this.cocktailGlasses = this.cocktailGlasswareRepository.getAll();
    this.juices = this.cocktailSourRepository.getAll();

  }

}