# E2E テストを書こう

## 課題内容

[airtable](https://airtable.com/tblTnXBXFOYJ0J7lZ/viwyi8muFtWUlhNKG/rec0AYtjGREPetZL4?blocks=hide)

## 課題 1(実装)

```bash
yarn cypress:open
```

### 1. 片方のユーザが勝利

![PlayerXの勝利](./image/e2e_task1_1.png)

### 2. 引き分け時の Draw 表示

引き分け状態の Story
![引き分け](./image/e2e_task1_2_storyshots.png)

### 3. 引き分け状態の e2e

![引き分け](./image/e2e_draw_pattern.gif)

---

## 課題 2(質問)

### メリデメ

- メリット
  - 手動テストと比較して自動テストのため、実行コストが低い
  - ボタンクリックなどのアクションイベントも検証可能
  - ユーザーストーリを検証できる
- デメリット

  - 実行速度が遅い
    - Unit Test と異なり、実際に外部通信が発生するため
  - 実行結果が不安定
    - 外部通信の結果に依存しているため

- 参考文献
  - [E2E テスト(インテグレーションテスト)の利点と不利点](https://qiita.com/NAKKA-K/items/58d6b8476a3717179bda)
  - [E2E テストの導入から学んだこと](https://qiita.com/mt0m/items/7e18d8802843d9f60d28)

### テスト手法の比較

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

- hoge

</div></details>

### クイズ 2

hoge

- 出題意図
  - hoge

<details><summary>回答</summary><div>

- hoge

</div></details>

### クイズ 3

hoge

<details><summary>回答</summary><div>

- hoge

</div></details>

### 読んだ記事

- [id や class を使ってテストを書くのは、もはやアンチパターンである](https://qiita.com/akameco/items/519f7e4d5442b2a9d2da)

### メモ

- hoge
