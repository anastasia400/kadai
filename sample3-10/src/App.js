import './App.css';
import { Component } from 'react';

class App extends Component {
  input = '';

  constructor(props) {
    super(props);
    // ステートを設定する
    this.state = {
      title: 'input from',
      message: 'type your name.',
    };
    // プロパティにイベントの関数を設定する
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  // changeイベントに登録する関数
  doChange(event) {
    this.input = event.target.value;
  }

  // submitイベントに登録する関数
  doSubmit(event) {
    // ステートを更新する
    this.setState({
      title: 'send form',
      message: `Hello, ${this.input}!!`,
    });
    // フォームの送信をキャンセルする
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <h4>{this.state.title}</h4>
          <p className="card h5 p-3">{this.state.message}</p>
          <div className="alert alert-primary mt-3">
            <form onSubmit={this.doSubmit}>
              <div className="form-group">
                <label>Message:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.doChange}
                />
              </div>
              <input type="submit" value="Click" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;