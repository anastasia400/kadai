// バージョン18の実装方法
let dom = document.querySelector('#root');
let root = ReactDOM.createRoot(dom);
let element = React.createElement('p', {}, 'Hello React!');
root.render(element);

// バージョン17の実装方法
// let dom = document.querySelector('#root');
// let element = React.createElement('p', {}, 'Hello React!');
// ReactDOM.render(element, dom);