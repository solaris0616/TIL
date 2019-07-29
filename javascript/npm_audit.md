# 脆弱性の警告を受けたnpmパッケージのアップデート

こういうことを言われたときに、どうしたら良いのかという話。

![image](https://user-images.githubusercontent.com/38127634/62028148-8ca49180-b21a-11e9-9b62-5f59d4ff07a4.png)

## `npm audit` で確認

何はともあれ、どれが悪いのかを確認する

```bash
cd $work_dir
npm audit
```

すると、かなりしっかりした内容が帰ってくる

```
                       === npm audit security report ===

┌──────────────────────────────────────────────────────────────────────────────┐
│                                Manual Review                                 │
│            Some vulnerabilities require your attention to resolve            │
│                                                                              │
│         Visit https://go.npm.me/audit-guide for additional guidance          │
└──────────────────────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ Low           │ Regular Expression Denial of Service                         │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ braces                                                       │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in    │ >=2.3.1                                                      │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ babel-cli [dev]                                              │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ babel-cli > chokidar > anymatch > micromatch > braces        │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/786                             │
└───────────────┴──────────────────────────────────────────────────────────────┘
found 1 low severity vulnerability in 6882 scanned packages
  1 vulnerability requires manual review. See the full report for details.
```

## `npm audit fix` で修正する

これで治ることもあるらしい。今回は治らなかった。

```
npm WARN babel-test@1.0.0 No description
npm WARN babel-test@1.0.0 No repository field.

up to date in 1.694s
fixed 0 of 1 vulnerability in 6882 scanned packages
  1 vulnerability required manual review and could not be updated
```

## 手作業で治す

まず最新をインストールする

```
npm install --save-dev braces
```

`npm ls パッケージ名` で依存関係を明らかにする

```
# npm ls braces
babel-test@1.0.0 /Users/tongari/work/babel-test
├─┬ @babel/cli@7.5.5
│ └─┬ chokidar@2.1.6
│   ├─┬ anymatch@2.0.0
│   │ └─┬ micromatch@3.1.10
│   │   └── braces@2.3.2  deduped
│   ├── braces@2.3.2
│   └─┬ readdirp@2.2.1
│     └─┬ micromatch@3.1.10
│       └── braces@2.3.2
├─┬ babel-cli@6.26.0
│ └─┬ chokidar@1.7.0
│   └─┬ anymatch@1.3.2
│     └─┬ micromatch@2.3.11
│       └── braces@1.8.5
└── braces@3.0.2
```

今回、`chkidar`の最新版をインストールして、babel-cliから見ているものを消すと、とりあえず動いた（ように見える）。

## 参考

https://qiita.com/hibikikudo/items/0af352acac85fce28ec2
