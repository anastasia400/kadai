// バージョン18の実装方法
let dom = document.querySelector('#root');
let root = ReactDOM.createRoot(dom);
let element = React.createElement('div', {}, [
  React.createElement('h2', {}, 'Hello!'),
  React.createElement('h3', {}, 'React sample page.'),
  React.createElement('ul', {}, [
    React.createElement('li', {}, 'First item.'),
    React.createElement('li', {}, 'Second item.'),
    React.createElement('li', {}, 'Third item.'),
  ]),
]);
root.render(element);

// バージョン17の実装方法
// let dom = document.querySelector('#root');
// let element = React.createElement('div', {}, [
//   React.createElement('h2', {}, 'Hello!'),
//   React.createElement('h3', {}, 'React sample page.'),
//   React.createElement('ul', {}, [
//     React.createElement('li', {}, 'First item.'),
//     React.createElement('li', {}, 'Second item.'),
//     React.createElement('li', {}, 'Third item.'),
//   ]),
// ]);
// ReactDOM.render(element, dom);