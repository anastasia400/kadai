// バージョン18の実装方法
let dom = document.querySelector('#root');
let root = ReactDOM.createRoot(dom);

let message = 'React component page.';

//クラスコンポーネント
class Hello extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className ="alert alert-primary">
        <p className = "h4">Hello!!</p>
      </div>
    );
  }
}

let element = (
  <div>
    <h5 className="mb-4">{message}</h5>
    <Hello />
  </div>
);
root.render(element);