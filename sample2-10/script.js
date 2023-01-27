// バージョン18の実装方法
let dom = document.querySelector('#root');
let root = ReactDOM.createRoot(dom);

let title = 'React page.';
let message = 'メッセージを表示します。';
let counter = 0;

let element = (
  <div>
    <h4>{title}</h4>
    <h6>{message}</h6>
    <h5 className="alert alert-primary">count: {counter}.</h5>
  </div>
);

setInterval(() => {
  counter++;
  root.render(element);
}, 1000);