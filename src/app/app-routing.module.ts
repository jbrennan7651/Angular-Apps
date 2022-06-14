import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MixerComponent } from './page/mixer/mixer.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'mixer', component: MixerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
