import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicTableComponent } from './page/dynamic-table/dynamic-table.component';
import { HomeComponent } from './page/home/home.component';
import { MixerComponent } from './page/mixer/mixer.component';
import { MoviesComponent } from './page/movies/movies.component';
import { SwitcherComponent } from './page/switcher/switcher.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'mixer', component: MixerComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'table', component: DynamicTableComponent},
  {path: 'switcher', component: SwitcherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
