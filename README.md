# Sample React Rollup

## Motivation

RollupによってReactコンポーネントをバンドルし、GitHub PackagesにNPMを公開してみる。

## Features

- `yarn build` の実行によって...
  - `index.js` (CommonJS) がdistディレクトリに配置される。このファイルには...
    - TSXの `sample/index.tsx` が含まれる
    - `import` によって読み込むTypeScriptの `logger.ts` が含まれる
    - `require` によって読み込むCommonJSの `calculator.js` が含まれる
      - TSでrequireが使用できないため、 `vendorLoader.js` を間に差し込んでいる
    - 外部パッケージ `uuid` は含まれない (使用先でパッケージ管理できるようになる)
  - `index.css` となってdistディレクトリに配置される
    - CSS Moduleによって作成
- mainブランチのpushによって...
  - GitHub Actionsが実行され、自動的にNPMがpublishされる
  - (タグのpushによって実行される仕組みの方がいいかもしれない)
- その他
  - SourceMapやTypeScriptの型定義もdistディレクトリに配置している
  - GitHub Packagesをnpmの公開先としている

## Tips

### GitHub Actionsを使用しないNPM公開手順

```sh
$ npm login --scope=@ljourm --registry=https://npm.pkg.github.com
$ npm publish
```

### 公開されたNPMの使用方法

#### publicの場合

`package.json` に `publishConfig.access = public` とある場合、public (制限なし) として公開される。

```sh
yarn add -D @ljourm/sample-react-rollup
```

#### restrictの場合

`package.json` に `publishConfig.access = restrict` とある場合、restrict (制限あり) として公開される。

```sh
# .npmrc
# NODE_AUTH_TOKEN には package:read を持つトークンを設定
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
@ljourm:registry=https://npm.pkg.github.com/

# その後はpublicと同
```
