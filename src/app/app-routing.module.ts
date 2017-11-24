
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchCocktailComponent } from './components/search-cocktail/search-cocktail.component';


const routes: Routes = [
    { path: '', component: SearchCocktailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const RoutableComponents = [
    SearchCocktailComponent
];