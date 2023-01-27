import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // クラスのプロパティを設定する
    this.state = {
      count: 0,
      msg: 'Hello Component',
    };
    let timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        msg: `[ count: ${this.state.count} ]`,
      });
    }, 1000);
  }

  render() {
    // コンソールに実行時間を出力する
    console.log(new Date().toLocaleTimeString());
    return (
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <p className="subtitle">Show message.</p>
          {/* クラスのプロパティの値を組み込んだ場合 */}
          <p className="alert alert-warning">{this.state.msg}</p>
          {/* propsの値を組み込んだ場合 */}
          <p className="alert alert-dark">{this.props.msg}</p>
        </div>
      </div>
    );
  }
}

export default App;