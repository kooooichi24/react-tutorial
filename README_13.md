# ビジュアル・リグレッションテストを書こう

## 課題内容

[airtable](https://airtable.com/tblTnXBXFOYJ0J7lZ/viwyi8muFtWUlhNKG/recNEI7X11fUubgyJ?blocks=hide)

## 課題 1(実装)

```bash
yarn storybook
yarn test imageSnapshot.test.js
```

### 1. Square のスタイルの変更

![文字色の変更](./image/image-snapshot-test-js-image-storyshots-board-all-cross-1-diff.png)

### 2. 4x3 の Board

![Boardの縦横の数の変更](./image/image-snapshot-test-js-image-storyshots-board-all-circle-1-diff.png)

---

## 課題 2(質問)

|                        | スナップショットテスト | ビジュアルリグレッションテスト |
| ---------------------- | ---------------------- | ------------------------------ |
| 実行速度               | 早い(現状 6s)          | 遅い(現状 30s)                 |
| スタイルの比較ができる | ×                      | ○                              |
| DOM 要素の比較ができる | ○                      | ×                              |
| 差分が提示される       | ○                      | ○                              |

## 課題 3(クイズ)

### クイズ 1

目視による確認と比較して、ビジュアルリグレッションテストの利点は何でしょうか？

- 出題意図
  - ビジュアルリグレッションテストのモチベーションを明らかにしてほしい

<details><summary>回答</summary><div>

自動で差分チェックを実施するため、**予想外の変更がされないこと**を確認できる

</div></details>

### クイズ 2

ユニットテストと比較した際のビジュアルレグレッションテストのメリットとデメリットをそれぞれ 1 つずつ教えてください

- 出題意図
  - 他人に説明できるように、他のテスト手法と比較した際のメリデメを抑えてほしい

<details><summary>回答</summary><div>

- メリット
  - ページ**全体** の 「**見た目**」をテストできる。
    - ユニットテストは部分的
- デメリット
  - メンテナンスコストが高い
    - 少しのスタイル調整や仕様変更などで簡単にテストが失敗してしまう。
    - テストが失敗すると再度正解となるスナップショットを撮影し、それを正解のスナップショットとして登録するなどの作業が発生する。
    - そのため、通常は成熟したプロダクトの保守運用フェーズで導入されることが多い。

</div></details>

### クイズ 3

ヘッドレスブラウザとは何でしょうか？

<details><summary>回答</summary><div>

- ヘッドレスブラウザとは
  - GUI を持たないブラウザのこと
  - レンダリング結果を画面に表示する代わりにファイル等で記録できる
  - レンダリングを実行しないため、UI のテスト時間が短縮される

</div></details>

### 読んだ記事

- [制作現場におけるビジュアルリグレッションテストの導入 – 「LINE のお年玉」4 年目の挑戦](https://engineering.linecorp.com/ja/blog/visual-regression-otoshidama/)

### メモ

- 4x3 の board となるように実装を変更しても、Story を変更しないとテストは失敗しない（石原さんが前回言っていた内容と同じ）
  - Story の Props に width と height を新たに設定しなければならず、コード変更時も実装コードではなく Story を変更する必要がある。
  - リファクタリングせずに以下コードを追加すればいけた？
    ```html
    <div className="board-row">
      {renderSquare(9)} {renderSquare(10)} {renderSquare(11)}
    </div>
    ```
