# storybook を作ろう

## 課題内容

[airtable](https://airtable.com/tblTnXBXFOYJ0J7lZ/viwyi8muFtWUlhNKG/recWdySlizw8BgKzi?blocks=hide)

## 課題 1(実装)

### Install package

```bash
yarn install
```

### Run the app

```bash
yarn start
```

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

- Decorators
  - Story に対して、スタイル(レンダリング)をラップする方法

</div></details>
