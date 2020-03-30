# HttpClient

* AngularのHTTPクライアント
* `/assets/items.json` をHTTPでとってきて表示するサンプル

## app.module.ts

```ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
  ],
})
```

## eg.service.ts

```ts
import { HttpClientModule } from '@angular/common/http';

export class EgService {
  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get('/assets/items.json');
  }
}
```

## eg.component.ts

```ts
import { EgService } from '../eg.service';

export class EgComponent implements OnInit {
  items;
  constructor(private egService: EgService) {};
  ngOnInit() {
    this.items = this.egService.getItems();
  }
}
```

## eg.component.html

```html
<div *ngFor="let item of items | async">
  <p>{{ item.name }}</p>
</div>
```
