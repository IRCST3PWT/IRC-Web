import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headline = 'Irc';
  tagline = 'Do something, try to change, be better';
  menus = ['Research', 'Staf', 'About']
}
