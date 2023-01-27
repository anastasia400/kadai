// バージョン18の実装方法
let dom = document.querySelector('#root');
let root = ReactDOM.createRoot(dom);

let title = 'React page.';
let message = 'メッセージを表示します。';
let content = 'これが、trueのときに表示されるメッセージです。ちゃんと表示されていますか';
let content_true = '※これがtrueのときに表示されるメッセージです';
let content_false = 'これがfalseの表示です'
let flg = false;
let element = (
  <div>
    <h4>{title}</h4>
    <h6>{message}</h6>
    {flg ? (
      <div className = "alert alert-primary mt-3">
        <p>{content_true}</p>
      </div>
    ) : (
      <div className = "alert alert-secondary mt-3">
        <p>{content_false}</p>
      </div>
    )}

  </div>


);
root.render(element);