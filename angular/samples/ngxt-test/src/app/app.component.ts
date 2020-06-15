import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ngxt-test';
  public username = 'piyo piyo';
  private current: string;

  constructor(
    private translate: TranslateService
  ) {
    translate.setDefaultLang(this.translate.getBrowserLang());
    translate.use(this.translate.getBrowserLang());
    this.current = this.translate.getBrowserLang();
  }

  public onClick(): void {
    console.log(this.translate.instant('clicked'));
    this.current = this.current === 'en' ? 'ja' : 'en';
    this.translate.use(this.current);
  }
}
