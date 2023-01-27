// バージョン18の実装方法
let dom = document.querySelector('#root');
let root = ReactDOM.createRoot(dom);

let title = 'React page.';
let message = 'メッセージを表示します。';
let counter = -1;

let doAction = (event) => {
  counter++;
  let element = (
    <div>
      <h4>{title}</h4>
      <h6>{message}</h6>
      <h5 className="alert alert-primary" onClick={doAction}>
        count: {counter}.
      </h5>
    </div>
  );
  root.render(element);
};
doAction();