// バージョン18の実装方法
let dom = document.querySelector('#root');
let root = ReactDOM.createRoot(dom);

let message = 'React component page.';

// 関数コンポーネントの定義
function Welcome(props) {
  return (
    <div className="alert alert-primary">
      <p className={props.fontSize}>Hello React!!</p>
    </div>
  );
}

// 関数コンポーネントの定義
function Welcome2(props) {
  return (
    <div className={props.alert}>
      <p className={props.fontSize}>Hello {props.name}!!</p>
    </div>
  );
}


let element = (
  <>
    <div>
      <h5 className="mb-4">{message}</h5>
      {/* 関数コンポーネントの配置 */}
      <Welcome />
    </div>
    <div>
      <h5 className="mb-4">{message} </h5>
      {/* 関数コンポーネントの配置 */}
      <Welcome2 name="Taro" fontSize="h2" alert="alert alert-primary" />
      <Welcome2 name="Hanako" fontSize="h5" alert="alert alert-dark" />
    </div>
  </>
);
root.render(element);