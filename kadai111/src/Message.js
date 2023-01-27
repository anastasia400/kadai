import { Component } from 'react';

class Message extends Component {
  // liタグのデザイン
  li = {
    fontSize: '14pt',
    fontWeight: 'bold',
    color: '#090',
  };

  constructor(props) {
    super(props);
    // プロパティにイベントの関数を設定する
    this.doChange = this.doChange.bind(this);
  }

  // changeイベントに登録する関数
  doChange(event) {
    // 入力フォームの文字数をチェックする
    if (event.target.value.length > this.props.maxlength) {
      // アラートを表示する
      this.props.onCheck(event);
      // 11文字以降を切り捨てる
      event.target.value = event.target.value.substr(0, this.props.maxlength);
    }
  }

  render() {
    return (
      <div className="form-group">
        <label>input:</label>
        <input type="text" className="form-control" onChange={this.doChange} />
      </div>
    );
  }
}

export default Message;