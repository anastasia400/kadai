import './App.css';
import { Component, createContext } from 'react';

// コンポーネントで共有する値
let theme = {
  light: {
    styles: {
      backgroundColor: '#f0f9ff',
      color: '#00f',
    },
    head: 'bg-primary text-white display-4 mb-4',
    alert: 'alert alert-primary my-3',
    text: 'text-primary m-3',
    foot: 'py-4',
  },
  dark: {
    styles: {
      backgroundColor: '#336',
      color: '#eef',
    },
    head: 'bg-secondary text-white display-4 mb-4',
    alert: 'alert alert-dark my-3',
    text: 'text-light m-3',
    foot: 'py-4',
  },
};

// コンテキストの作成
const ThemeContext = createContext(theme.dark);

// Appコンポーネントの定義
class App extends Component {
  // 静的プロパティとしてcontextTypeを設定する
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={this.context.styles}>
        <h1 className={this.context.head}>React</h1>
        <div className="container">
          <Title value="Content page" />
          <Message value="This is Content sample." />
          <Message value="※これはテーマのサンプルです。" />
          <div className={this.context.foot}></div>
        </div>
      </div>
    );
  }
}

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

export default App;