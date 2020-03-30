# サービス

* サービスは、アプリケーションの各部分の間でデータを共有する場所
* 扱う側のコンポーネントにDIする

## 例：ToDoを管理するサービス

```typescript
import { Injectable } from "@angular/core";

@Injectable()
export class TodoService {
  items = [];
  constructor() {}

  addToDo(item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }
}
```

ToDoを追加するコンポーネント

```typescript
import { TodoService } from '../todo.service';

export class AddTodoComponent {
  constructor(private todoService: TodoService) {}

  addToDo(item) {
    this.todoService.addToDo(item);
  }
}
```

```html
<button (click)="addToDo(item)">Add item</button>
```

ToDoを確認するコンポーネント

```typescript
import { TodoService } from '../todo.service';

export class TodoListComponent {
  items;
  constructor(private todoService: TodoService) {}
  ngOnInit() {
    this.items = this.todoService.getItems();
  }
}
```

```html
<div *ngFor="let item of items">
  <p>{{ item.name }}</p>
</div>
```
