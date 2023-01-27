import './App.css';
import { Component } from 'react';
import Message from './Message';

// Appコンポーネントの定義
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          {/* 開始タグと終了タグの中の値は子エレメントです */}
          <Message title="Children!">
            これはコンポーネント内のコンテンツです。
            マルでテキストを分割し、リストにして表示します。
            改行は必要ありません。
          </Message>
        </div>
      </div>
    );
  }
}

export default App;