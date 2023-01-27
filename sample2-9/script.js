// バージョン18の実装方法
let dom = document.querySelector('#root');
let root = ReactDOM.createRoot(dom);

let title = 'React page.';
let message = 'メッセージを表示します。';
let data = {
  url: 'https://www.google.com/?hl=ja',
  title: 'Google',
  caption: '※これは、Googleの検索サイトです。',
};

let element = (
  <div>
    <h4>{title}</h4>
    <h6>{message}</h6>
    {(() => (
      <div className="card mt-4">
        <div className="card-header">{data.title}</div>
        <div className="card-body">{data.caption}</div>
        <div className="card-footer">
          <a href={data.url}>※{data.title}に移動</a>
        </div>
      </div>
    ))()}
  </div>
);
root.render(element);