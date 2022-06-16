import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSwitch } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './page/nav-bar/nav-bar.component';
import { HomeComponent } from './page/home/home.component';
import { FooterComponent } from './page/footer/footer.component';
import { MixerComponent } from './page/mixer/mixer.component';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './page/movies/movies.component';
import { DynamicTableComponent } from './page/dynamic-table/dynamic-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SwitcherComponent } from './page/switcher/switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    MixerComponent,
    MoviesComponent,
    DynamicTableComponent,
    SwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SmartTableModule
  ],
  providers: [NgSwitch],
  bootstrap: [AppComponent]
})
export class AppModule { }
