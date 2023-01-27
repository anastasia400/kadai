// バージョン18の実装方法
let dom = document.querySelector('#root');
let root = ReactDOM.createRoot(dom);

let title = 'React page.';
let message = 'メッセージを表示します。';

let printMsg = function (msg, size, color) {
  const style = {
    fontSize: size + 'pt',
    fontWeight: '700',
    color: color,
    border: '1px solid ' + color,
  };
  return <p style={style}>{msg}</p>;
};

let element = (
  <div>
    <h4>{title}</h4>
    <h6>{message}</h6>
    <div className="alert alert-secondary mt-3">
      {printMsg('最初のメッセージ', 36, '#fff')}
      {printMsg('次のメッセージです。', 24, '#aaa')}
      {printMsg('最後のメッセージでした。', 12, '#666')}
    </div>
  </div>
);
root.render(element);