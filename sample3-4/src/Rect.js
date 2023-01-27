import React, { Component } from 'react';

// クラスコンポーネントの定義
class Rect extends Component {
  constructor(props) {
    this.x = props.x;
    this.y = props.y;
    this.width = props.w;
    this.height = props.h;
    this.color = props.c;
    this.radius = props.r;
    this.style = {
      backgroundColor: this.color,
      position: 'absolute',
      left: this.x + 'px',
      top: this.y + 'px',
      width: this.width + 'px',
      height: this.height + 'px',
      borderRadius: this.radius + 'px',
    };
  }

  render() {
    return <div style={this.style}></div>;
  }
}

// // 関数コンポーネントの定義
// function Rect(props) {
//   props.style = {
//     backgroundColor: props.color,
//     position: 'absolute',
//     left: props.x + 'px',
//     top: props.y + 'px',
//     width: props.width + 'px',
//     height: props.height + 'px',
//     borderRadius: props.radius + 'px',
//   };
//   return <div style={this.style}></div>;
// }

// 他のファイルでimportできるようにする
export default Rect;