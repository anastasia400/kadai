import { Component } from 'react';
import { ThemeContext } from './Theme';

// Messageコンポーネントの定義
class Message extends Component {
  // 静的プロパティとしてcontextTypeを設定する
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={this.context.style}>
        <p className={this.context.text}>{this.props.value}</p>
      </div>
    );
  }
}

export default Message;