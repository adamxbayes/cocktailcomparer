import { Injectable } from '@angular/core';
import { CocktailGlassware } from './../models/cocktail-glassware.model';

@Injectable()
export class CocktailGlasswareRepository {

    private cocktailGlasses: CocktailGlassware[] = [
        { name: 'Old Fashioned/Rocks glass', glassImage: 'http://svgshare.com/i/463.svg' },
        { name: 'Champagne glass', glassImage: 'http://svgshare.com/i/45_.svg' },
        { name: 'Martini glass', glassImage: 'http://svgshare.com/i/44f.svg' },
        { name: 'Highball glass', glassImage: 'http://svgshare.com/i/45Z.svg' },
        { name: 'Wine glass', glassImage: 'http://svgshare.com/i/45C.svg' },
        { name: 'Shot glass', glassImage: 'http://svgshare.com/i/44s.svg' },
     ];



    public getAll(): CocktailGlassware[] {
        return this.cocktailGlasses;
    }

}