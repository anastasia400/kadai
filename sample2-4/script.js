// 画面を出力するタグを取得する
let dom = document.querySelector("#root");
// 仮想DOMのエレメントを作成する
let element = (
  <div>
    <h2>JSX sample</h2>
    <p>This is sample message.</p>
  </div>
);
// 画面をレンダリングする
ReactDOM.render(element, dom);