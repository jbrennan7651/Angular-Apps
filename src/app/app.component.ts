import { Component } from '@angular/core';
import { HomeComponent } from './page/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  rootPage: any = HomeComponent;
}
