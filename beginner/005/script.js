/**
 * TOPへ戻るボタンの表示/非表示制御
 *
 * 仕組み:
 * 1. スクロール位置を監視
 * 2. 一定量（300px）スクロールしたら表示
 * 3. それ以下なら非表示
 */

// DOM要素を取得
const backToTopButton = document.getElementById('backToTop');

// スクロールイベントを監視
window.addEventListener('scroll', () => {
  // 現在のスクロール位置を取得
  const scrollY = window.scrollY;

  // 300px以上スクロールしたら表示
  if (scrollY > 300) {
    backToTopButton.classList.add('is-visible');
  } else {
    backToTopButton.classList.remove('is-visible');
  }
});


/**
 * 補足: CSSだけでも動作する仕組み
 *
 * HTMLに href="#top" を設定しているので、
 * クリックすると id="top" の位置（ヘッダー）に移動します。
 *
 * CSSに scroll-behavior: smooth; を設定しているので、
 * スムーズにスクロールします。
 *
 * このJSは「ボタンの表示/非表示」を制御するだけです。
 */
