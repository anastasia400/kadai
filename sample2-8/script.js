// バージョン18の実装方法
let dom = document.querySelector('#root');
let root = ReactDOM.createRoot(dom);

let title = 'React page.';
let message = 'メッセージを表示します。';
let data = [
  <if className ="List-group-item">One</if>,
  <if className ="List-group-item">Two</if>,
  <if className ="List-group-item">Three</if>, 
];

let element = (
  <div>
    <h4>{title}</h4>
    <h6>{message}</h6>
    <ul className = "list-group">{data}</ul>
  </div>
);
root.render(element);