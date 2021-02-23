# スナップショットテストを書こう

## 課題内容

[airtable](https://airtable.com/tblTnXBXFOYJ0J7lZ/viwyi8muFtWUlhNKG/rectcDfNScG68h7Ys?blocks=hide)

## 課題 1(質問)

### 1. スナップショットテストとは

コード変更後に生成された DOM が、コード変更前に生成された DOM と一致するかをテストするもの。

- 語源

  - 〈連射〉を意味する射撃用語から派生。ある瞬間をそのまま切り取ったものの意味で利用される。

    [スナップ写真の語源](https://kotobank.jp/word/%E3%82%B9%E3%83%8A%E3%83%83%E3%83%97%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-4975#:~:text=%E3%80%90%E3%82%B9%E3%83%8A%E3%83%83%E3%83%97%E5%86%99%E7%9C%9F%E3%80%91%E3%82%88%E3%82%8A,%E7%94%A8%E8%AA%9E%E3%81%AE%E5%A7%8B%E3%81%BE%E3%82%8A%E3%81%A8%E3%81%84%E3%82%8F%E3%82%8C%E3%82%8B%E3%80%82)

### 2. 防げる不具合

- あるコンポーネントの修正後に、UI に予期せぬ影響がないことが分かる。
- もしスナップショットテストを採用しない場合は、DOM 要素のテストするために、開発者自らが予想される DOM 要素を準備しなくてはならない。一方スナップショットテストでは、開発者自らが予測される DOM 要素を用意しなくて良い。そのためスナップショットテストは、時間的コストが低いことに加えてヒューマンエラーを防ぐことができる。
  - [スナップショットテスト（HTML）](https://meetup-jp.toast.com/1550) 引用部分の節を一読して頂けると、理解が深まると思います！
    > 上記のように、HTML 文字列を比較するときに予想される HTML 文字列を、開発者が事前に作成することは、実際のところ簡単ではありません。... <br>
    > そこで最近は、Jest などのテストツールでサポートされるスナップショットテストを使って、このような問題を解決しています。
- a

### 3. 防げない不具合

- レンダリングされた出力と前回のスナップショットが一致しない場合は、違いが意図したものか予期せぬものかをスナップショットテストでは解釈できない
- ビジュアルリグレッションテストのような、ピクセル単位での差分チェック。例えば、フォントや文字サイズなどはスナップショットテストでは防止できない不具合。
  - [スナップショットテストとビジュアルの回帰テストの違いは何ですか？](https://jestjs.io/docs/ja/snapshot-testing#%E3%82%B9%E3%83%8A%E3%83%83%E3%83%97%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%E3%83%86%E3%82%B9%E3%83%88%E3%81%A8%E3%83%93%E3%82%B8%E3%83%A5%E3%82%A2%E3%83%AB%E3%81%AE%E5%9B%9E%E5%B8%B0%E3%83%86%E3%82%B9%E3%83%88%E3%81%AE%E9%81%95%E3%81%84%E3%81%AF%E4%BD%95%E3%81%A7%E3%81%99%E3%81%8B%EF%BC%9F)
- a

---

## 課題 2(実装)

### Run the storybook

```bash
yarn storybook
```

### 成果物

- パス
  - src/stories/
- ファイル名
  - Square.stories.js
  - Board.stories.js
  - Game.stories.js (盤面を △ で埋め尽くした状態の story を作ることができませんでした；；)

## 課題 3(質問)

### メリット

- Storybook が Document の役割も果たすため、プロジェクトに新たにアサインされた人が Storybook を見ることでコンポーネントの理解を補助する役割がある。
- コンポーネントに対して任意の入力値を渡せるため、様々なケースを確認できること
- コンポーネントの結合度を下げたり、単一責任原則に則ったコンポーネントとなる

### デメリット

- Story を書くためのコスト(時間)がかかる
  - (Story を書くためのコストは、コンポーネントを書きおわった時が 1 番小さい！)
- コンポーネントとストーリが一致していないと、Storybook の意義が失われる

## 課題 4(クイズ)

- 出題意図
  - Story を書く際に設定可能な Args, Parameters, Decorators, Loaders の役割をそれぞれ理解して欲しい。（一言で説明できるくらいで OK）

### クイズ 1

Args と Parameters をそれぞれ説明してください。

- [args](https://storybook.js.org/docs/react/writing-stories/args)
- [parameters](https://storybook.js.org/docs/react/writing-stories/parameters)

- 出題意図
  - そもそも何が異なるのか？を明確にしてほしい。

<details><summary>回答</summary><div>

- Args
  - Component に渡す props を設定するための記法
- Parameters
  - Storybook の機能やアドオンを制御するための静的なデータセット
- 違い
  - そもそも、設定対象が異なる

</div></details>

### クイズ 2

Decorators を説明してください

<details><summary>回答</summary><div>

- Decorators
  - Story に対して、スタイル(レンダリング)をラップする方法

</div></details>

### クイズ 3

Loaders を説明してください

<details><summary>回答</summary><div>

- Loaders

  - Story に対して、データをロードする非同期関数
  - Loaders はストーリーのレンダリング前に実行される

- 参考文献
  - [Loaders (experimental)](https://storybook.js.org/docs/react/writing-stories/loaders)

</div></details>