# Week 0: 開発環境の基礎と pnpm 体験

## ゴール

- 開発環境って何？を理解する
- pnpm を使ってゼロからプロジェクトを作れるようになる
- 自分で「道具（パッケージ）」を追加し、簡単なコードを書く体験

---

## 1. 開発環境とは？

- Web 開発には「道具」が必要です。
- その道具を自動でそろえてくれる仕組みが **npm / pnpm** です。

---

## 2. npm / pnpm とは？

- **npm** は「ネット上の道具屋さん」
- **pnpm** は、その道具屋さんを**速く、効率よく**使えるサービスです。

---

## 3. ゼロから開発環境を作ってみよう

### Step 1: フォルダを作成して移動

```bash
mkdir my-first-project
cd my-first-project
```

### Step 2: package.json を作成

```bash
pnpm init
```

### Step 3: dayjs という便利な道具を追加！

```bash
pnpm add dayjs
```

---

## 4. dayjs を使ってみよう！

### Step 4: index.js を作って以下を書いてみよう

```js
import dayjs from "dayjs";

console.log("今日の日付は:", dayjs().format("YYYY年MM月DD日"));

const lastWeek = dayjs().subtract(7, "day");
console.log("1週間前は:", lastWeek.format("YYYY/MM/DD"));

const date = dayjs("2024-05-01");
console.log("2024年5月1日は何曜日？ →", date.format("dddd"));
```

---

### Step 5: 実行してみよう！

```bash
node index.js
```

---

## 5. まとめ

- **pnpm init** → 自分だけの「開発プロジェクト」を作る
- **pnpm add** → 道具（パッケージ）を追加
- **package.json** → その記録。怖くない！
- **dayjs** → 便利な道具を使う体験！

これで、あなたはゼロから環境を作って、便利なコードを書けるようになりました！

---

## Step 6: 便利なコマンドで起動しよう

実際の Web 開発では、アプリを起動する時に `node index.js` のように長いコマンドを書くことは少なく、  
代わりに **`pnpm dev`** のような、短くてわかりやすい **便利なコマンド名** を使うことが多くなります。

ここで、`pnpm dev` を使ってアプリを起動できるようにしてみましょう。

### 1. `pnpm dev` を使う準備

- **`pnpm dev` を動かすには、** `package.json` に **"scripts" の項目**を追加する必要があります。

### 2. `package.json` に以下を追加しよう：

```json
{
  "name": "my-first-project",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "node index.js"
  },
  "dependencies": {
    "dayjs": "^1.11.0"
  }
}
```

### 3. これで、次のコマンドが使えるようになります：

```bash
pnpm dev
```

`pnpm dev` を実行すると、`node index.js` を自動的に動かしてくれます。

### ポイント

- scripts は「よく使うコマンドに名前を付けたもの」です。
- これがあるから、長いコマンドを書かずに `pnpm dev` だけで開発を始められます！
