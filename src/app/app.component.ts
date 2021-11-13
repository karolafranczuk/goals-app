import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'goals-app';
  opened = true;

  toggleMenu(): void {
    this.opened =!this.opened;
  }
  
}
