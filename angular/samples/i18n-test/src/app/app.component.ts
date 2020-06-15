import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'i18n-test';
  public username = 'piyo piyo';

  public onClick(): void {
    console.log('Clicked.');
  }
}
