import React, { Component } from 'react';
import './App.css';
import Rect from './Rect';

// クラスコンポーネントの実装
class App extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.message = props.message;
  }
  render() {
    return (
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <p className="subtitle">draw rectangle.</p>
          <Rect x="200" y="200" w="200" h="200" c="#6ff9" r="25" />
          <Rect x="300" y="300" w="200" h="200" c="#f6f9" r="75" />
          <Rect x="400" y="400" w="200" h="200" c="#6669" r="100" />
        </div>
      </div>
    );
  }
}

// // 関数コンポーネントの実装例
// function App(props) {
//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <p className="subtitle">draw rectangle.</p>
//         <Rect x="200" y="200" w="200" h="200" c="#6ff9" r="25" />
//         <Rect x="300" y="300" w="200" h="200" c="#f6f9" r="75" />
//         <Rect x="400" y="400" w="200" h="200" c="#6669" r="100" />
//       </div>
//     </div>
//   );
// }

export default App;