import { Injectable } from '@angular/core';

@Injectable()

export class CocktailSourRepository {
    private juices: any[] = [//Drop down list for lemon and lime juice
        {
            value: 'lemon-0',
            viewValue: 'Lemon Juice',
            juiceIcon: 'http://svgshare.com/i/44z.svg'
        },
        {
            value: 'lime-1',
            viewValue: 'Lime Juice',
            juiceIcon: 'http://svgshare.com/i/45k.svg'
        },

    ];

    public getAll(): any {

        return this.juices;
    }

}








