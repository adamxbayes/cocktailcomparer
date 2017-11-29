import { Injectable } from '@angular/core';
import { CocktailSours } from '../models/cocktail-sours.model';



@Injectable()

export class CocktailSourRepository {
    private juices: CocktailSours[] = [//Drop down list for lemon and lime juice
        new CocktailSours ('lemon-0','Lemon Juice', 'http://svgshare.com/i/44z.svg'),
        new CocktailSours ('lime-1','Lime Juice', 'http://svgshare.com/i/45k.svg'),
        
    

    ];
public getAll(): CocktailSours[] {

        return this.juices;
    }










