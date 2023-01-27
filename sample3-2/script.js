// バージョン18の実装方法
let dom = document.querySelector('#root');
let root = ReactDOM.createRoot(dom);

let message = 'React component page.';

function Welcome(props) {
  return (
    <div className="alert alert-primary">
      <Calc className={props.classes} number={props.number} />
    </div>
  );
}

function Calc(props) {
  let total = 0;
  for (let i = 1; i <= props.number; i++) {
    total += i;
  }
  return (
    <p className={props.classes}>
      1から{props.number}までの合計は、「{total}」です。
    </p>
  );
}

let element = (
  <div>
    <h5 className="mb-4">{message}</h5>
    <Welcome number="10" classes="h3" />
    <Welcome number="100" classes="h5" />
    <Calc number="50" classes="h4" />
    <Calc number="500" classes="h6" />
  </div>
);
root.render(element);