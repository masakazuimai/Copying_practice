# Copying Practice - Advanced LPs

模写練習用のランディングページ集（上級編）

## 概要

アニメーションやインタラクションを重視した上級者向けの模写練習用LPです。

## LP一覧

| No. | タイトル | 技術・特徴 |
|-----|---------|-----------|
| 001 | STUDIO NEXUS | GSAP, カスタムカーソル, 水平スクロール |
| 002 | Lumiere Studio | jQuery, フェードアニメーション, ランダム表示 |
| 003 | VERTEX DIGITAL | pagePiling.js, シャッターアニメーション |
| 004 | AKIRA TANAKA | GSAP ScrollTrigger, ページフリップ効果 |
| 005 | NOIR STYLE | GSAP ScrollTrigger, パララックス |
| 006 | CTA Pro | Next.js, Tailwind CSS, Framer Motion |

## 使用技術

- HTML5 / CSS3
- JavaScript (ES6+)
- jQuery
- GSAP (GreenSock Animation Platform)
- pagePiling.js
- Next.js (006のみ)
- Tailwind CSS (006のみ)

## ローカル環境での確認

### 001〜005

HTMLファイルを直接ブラウザで開くか、ローカルサーバーで確認できます。

```bash
# 例: VS Code Live Serverを使用
# または
npx serve .
```

### 006 (Next.js)

```bash
cd 006
npm install
npm run dev
# http://localhost:3000 でアクセス
```

## ディレクトリ構成

```
advanced/
├── 001/          # STUDIO NEXUS
├── 002/          # Lumiere Studio
├── 003/          # VERTEX DIGITAL
├── 004/          # AKIRA TANAKA
├── 005/          # NOIR STYLE
├── 006/          # CTA Pro (Next.js)
└── README.md
```

## ライセンス

学習目的での使用に限ります。
