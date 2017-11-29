import { Injectable } from '@angular/core';
import { CocktailGlassware } from './../models/cocktail-glassware.model';


@Injectable()
export class CocktailGlasswareRepository {

    private cocktailGlasses: CocktailGlassware[] = [
        new CocktailGlassware('Old Fashioned/Rocks glass', 'http://svgshare.com/i/463.svg'),
        new CocktailGlassware ('Champagne glass','http://svgshare.com/i/44f.svg'),
        new CocktailGlassware ('Martini glass','http://svgshare.com/i/44f.svg' ),
        new CocktailGlassware ('Highball glass', 'http://svgshare.com/i/45Z.svg'),
        new CocktailGlassware ('Wine glass', 'http://svgshare.com/i/45Z.svg'),
        new CocktailGlassware ('Shot glass', 'http://svgshare.com/i/44s.svg' )

     ];



    public getAll(): CocktailGlassware[] {
        return this.cocktailGlasses;
    }

    

}