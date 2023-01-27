import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      msg: 'count start!',
    };
    // プロパティに関数を設定する
    this.doAction = this.doAction.bind(this);
  }

// clickイベントに登録する関数
  doAction(event) {
    // ステートを更新する
    this.setState({
      counter: this.state.counter + 1,
      msg: `${this.state.counter}`,
    });
  }

  render() {
    return (
      <div>
        <h1 className="bg-rpmary text-white display-4">React</h1>
        <div className="container">
          <p className="subtitle">Count number.</p>
          <div className="alert alert-primary text-center">
            <p className="h5 mb-4">{this.state.msg}</p>
            {/* クリックイベントにプロパティの値(関数)を組み込む */}
            <button className="btn btn-primary" onClick={this.doAction}>
              Click
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;