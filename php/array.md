# 配列

## 定義

```php
$names = array("Bob", "Alice", "Tom");
```

## 要素へのアクセス

```php
echo $name[0];
// Bob

$name[2] = "Jimmy";
echo $name[2];
// Jimmy
```

## 値の追加

```php
// 末尾に追加される
$names[] = "Caroline";
```

# 連想配列

## 定義

```php
$user = array(
  'name' => 'Tommy',
  'age' => 25,
  'gender' => 'male',
);
```

## 要素へのアクセス

```php
echo $user['name'];
// Tommy
```
