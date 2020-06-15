import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// use the require method provided by webpack
declare const require;

// https://qiita.com/sekitaka_1214/items/712ec34feb26511e922f
const translationProviders = (() => {
  // get language setting of browser
  const browserLanguage: string = (() => {
    console.log(navigator.languages);
    if (navigator.languages.length > 0) {
      return navigator.languages[0];
    }
    if (navigator.language) {
      return navigator.language
    }
    return "en";
  })();
  console.log(browserLanguage);

  // japanese
  if (browserLanguage.match(/^ja$|^ja-/)) {
    const translations = require('raw-loader!./locale/messages.ja.xlf').default;
    return [
      {provide: TRANSLATIONS, useValue: translations},
      {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
    ]
  }
})();

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [].concat(translationProviders)
});
