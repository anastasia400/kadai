// バージョン18の実装方法
let dom = document.querySelector('#root');
let root = ReactDOM.createRoot(dom);
let element = React.createElement('div', {}, [
  React.createElement('h2', {}, 'Hello!'),
  React.createElement(
    'h3',
    { className: 'alert alert-primary' },
    'React sample page.'
  ),
  React.createElement('ul', { className: 'list-group' }, [
    React.createElement('li', { className: 'list-group-item' }, 'First item.'),
    React.createElement('li', { className: 'list-group-item' }, 'Second item.'),
    React.createElement('li', { className: 'list-group-item' }, 'Third item.'),
  ]),
]);
root.render(element);