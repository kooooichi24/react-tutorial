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

hoge

- 出題意図
  - hoge

<details><summary>回答</summary><div>

hoge

</div></details>

### クイズ 2

hoge

- 参考文献

  - hoge

- 出題意図
  - hoge

<details><summary>回答</summary><div>

hoge

</div></details>

### クイズ 3

hoge

- 参考文献

  - hoge

- 出題意図
  - hoge

<details><summary>回答</summary><div>

hoge

</div></details>

### メモ

- 4x3 の board となるように実装を変更しても、Story を変更しないとテストは失敗しない（石原さんが前回言っていた内容と同じ）
  - Story の Props に width と height を新たに設定しなければならず、コード変更時も実装コードではなく Story を変更する必要がある。
  - リファクタリングせずに以下コードを追加すればいけた？
    ```html
    <div className="board-row">
      {renderSquare(9)} {renderSquare(10)} {renderSquare(11)}
    </div>
    ```
