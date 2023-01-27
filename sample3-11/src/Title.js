import { Component } from 'react';
import { ThemeContext } from './Theme';

// Titleコンポーネントの定義
class Title extends Component {
  // 静的プロパティとしてcontextTypeを設定する
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.context.alert}>
        <h2 style={this.context.style}>{this.props.value}</h2>
      </div>
    );
  }
}

export default Title;