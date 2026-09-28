# シンプルToDo管理アプリ

Next.js (App Router) + TypeScript + Tailwind CSS で作った、追加・完了チェック・削除だけのシンプルなToDoアプリです。日本語UI、データはブラウザの localStorage に保存されます。

## セットアップ

このマシンには Node.js が入っていなかったため、ファイルのみ用意しています。以下の手順でセットアップしてください（Node.js 18以上を推奨）。

```bash
npm install
npm run dev
```

<http://localhost:3000> を開くと動作します。

## Vercelへのデプロイ

1. このディレクトリをGitリポジトリにして GitHub 等に push
2. [Vercel](https://vercel.com) でリポジトリをインポート
3. フレームワークは「Next.js」が自動検出されるので、そのままデプロイでOK（追加の環境変数やビルド設定は不要）

または Vercel CLI を使う場合:

```bash
npm i -g vercel
vercel
```

## 機能

- タスクの追加
- 完了チェック（チェックすると取り消し線）
- タスクの削除
