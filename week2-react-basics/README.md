# Week 2: React の基本

## ゴール

- React 環境でコンポーネントを編集する
- useState で状態を管理する
- JSX を理解する

## 手順

1. このフォルダで `pnpm install` を実行
2. `pnpm dev` で開発サーバーを起動
3. ブラウザで http://localhost:5173 を開く

## 課題

- ボタンのラベル「カウントアップ」を「増やす！」に変更
- 背景色を `#f0f8ff` に変えてみよう（index.css を修正）
- カウントが 5 に達したら「5 回クリックしたよ！」というメッセージを表示するようにしてみよう

### 💡 ヒント

- `count === 5` という条件を if 文でチェックできます。
- JSX の中で、条件が true のときだけ表示したい場合は **`{ 条件 && 表示内容 }`** という書き方ができます。

```jsx
{
  count === 5 && <p>5回クリックしたよ！</p>;
}
```

## 提出方法

- 課題を修正したら、GitHub に push
- Pull Request を作成して提出

## 型の警告が出た場合は？

TypeScript 環境で、以下のような警告が出た場合：

- `モジュール 'react/jsx-runtime' の宣言ファイルが見つかりません`
- `JSX に型 'React' がありません`

以下のコマンドを実行して、型定義を追加してください。

```bash
pnpm add -D @types/react @types/react-dom
```

## チャレンジ課題（発展）

React では、パーツごとにコンポーネントを分けて作ることができます。  
次のような「メッセージを表示するだけの子コンポーネント」を作って使ってみましょう！

### 💡 ヒント

1. `src/Message.tsx` という新しいファイルを作成
2. こんなコードを書いてみましょう：

```tsx
function Message(props) {
  return <p>{props.text}</p>;
}

export default Message;
```

3. App.tsx で使ってみましょう：

```tsx
import Message from "./Message";

// App.tsx の中で
<Message text="これは子コンポーネントです！" />;
```

### 📘 ポイント

- props を使うと、コンポーネントにデータを渡せます。
- TypeScript の型は、慣れてから追加しても大丈夫！
