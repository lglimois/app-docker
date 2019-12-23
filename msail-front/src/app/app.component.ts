import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
//  title = 'msail-front';
  title: string;

  constructor(){
    this.title =  'Manager Sailing Application';
  }
}
