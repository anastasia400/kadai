// バージョン18の実装方法
let dom = document.querySelector('#root');
let root = ReactDOM.createRoot(dom);

let title = '新タイトル';
let message = '新しいメッセージです。';
let link = 'https://www.google.com/?hl=ja';
const msg_s = {
  fontSize: '20pt',
  color: 'red',
  border: '1px solid blue',
};

let element = (
  <>
    <div className="alert alert-primary">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
    <div className="alert alert-primary">
      <h4>{message}</h4>
      <h5>
        <a href={link}>this is link!</a>
      </h5>
    </div>
    <div className="alert alert-primary">
      <h4>{title}</h4>
      <p style={msg_s}>{message}</p>
    </div>
  </>
);
root.render(element);