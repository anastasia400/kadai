import { Component } from 'react';

// Messageコンポーネントの定義
class Message extends Component {
  // liタグのスタイル
  li = {
    fontSize: '14pt',
    fontWeight: 'bold',
    color: '#090',
  };

  constructor(props) {
    super(props);
  }

  render() {
    // 子エレメントを取得する
    let content = this.props.children;
    console.log(content);
    // 句点(。)で分割する
    let arr = content.split('。');
    console.log(arr);
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].trim() != '') {
        arr2.push(arr[i]);
      }
    }
    let list = arr2.map((value, key) => (
      <li className="list-group-item" style={this.li} key={key}>
        {key + 1}.{value}
      </li>
    ));
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ol className="list-group">{list}</ol>
      </div>
    );
  }
}

export default Message;