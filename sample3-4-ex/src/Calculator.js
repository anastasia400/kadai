import { Component } from 'react';

class Calculator extends Component {
  displayStyle = {
    width: '260px',
    height: '50px',
    textAlign: 'right',
  };
  buttonStyle = {
    width: '50px',
    height: '50px',
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" disable value="0" style={this.displayStyle} />
        <table>
          <tbody>
            <tr>
              <td>
                <button style={this.buttonStyle}></button>
              </td>
              <td>
                <button style={this.buttonStyle}>7</button>
              </td>
              <td>
                <button style={this.buttonStyle}>8</button>
              </td>
              <td>
                <button style={this.buttonStyle}>9</button>
              </td>
              <td>
                <button style={this.buttonStyle}>/</button>
              </td>
            </tr>
            <tr>
              <td>
                <button style={this.buttonStyle}></button>
              </td>
              <td>
                <button style={this.buttonStyle}>4</button>
              </td>
              <td>
                <button style={this.buttonStyle}>5</button>
              </td>
              <td>
                <button style={this.buttonStyle}>6</button>
              </td>
              <td>
                <button style={this.buttonStyle}>*</button>
              </td>
            </tr>
            <tr>
              <td>
                <button style={this.buttonStyle}>C</button>
              </td>
              <td>
                <button style={this.buttonStyle}>1</button>
              </td>
              <td>
                <button style={this.buttonStyle}>2</button>
              </td>
              <td>
                <button style={this.buttonStyle}>3</button>
              </td>
              <td>
                <button style={this.buttonStyle}>-</button>
              </td>
            </tr>
            <tr>
              <td>
                <button style={this.buttonStyle}>AC</button>
              </td>
              <td>
                <button style={this.buttonStyle}>0</button>
              </td>
              <td>
                <button style={this.buttonStyle}>.</button>
              </td>
              <td>
                <button style={this.buttonStyle}>=</button>
              </td>
              <td>
                <button style={this.buttonStyle}>+</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;