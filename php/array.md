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

foraech($names as $name) {
  echo $name;
  // BobAliceJimmy
}
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

foreach($user as $key => $value) {
  echo $key.':'.$value.' ';
  // name:Tommy age:25 gender:male 
}
```
