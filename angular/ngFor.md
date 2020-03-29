# 繰り返し

## 前提

```typescript
export const products = [
  {
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
];
```

## 実装

`*ngFor` によって `p` を含む `div` 要素が繰り返される

```html
<div *ngFor="let product of products">
  <p>{{ product.name }}</p>
</div>
```

## 参照

* https://angular.jp/start
