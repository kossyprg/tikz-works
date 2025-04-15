# TikZ Works

TikZ で作成した図を公開しています。

[https://kossyprg.github.io/tikz-works/](https://kossyprg.github.io/tikz-works/)

## ローカル環境での実行方法

下記のコマンドを実行し、[http://127.0.0.1:4000](http://127.0.0.1:4000) にアクセスしてください。

```sh
bundle exec jekyll build
bundle exec jekyll serve
```

## 画像の追加方法

1. TikZ で画像を作成する。環境は [Tikz-env](https://github.com/kossyprg/tikz-env) を使用する。
2. [tikz-works/images](tikz-works/images/) フォルダに画像、[tikz-works/tex](tikz-works/tex/) フォルダに TeX ファイルを追加する。
3. [_tikz-works](_tikz-works/) フォルダに、ソースファイルの場所と図の説明を記載した md ファイルを追加する。
