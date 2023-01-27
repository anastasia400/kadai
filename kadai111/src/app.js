import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
    };
  }
  handleSubmit(){
    this.setState({isSubmitted:true})
  }
  render() {
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          送信完了
        </div>
      );
    } else {
      contactForm = (
        <div className="containar p-3 border-dark">
          <form  onSubmit={()=>{this.handleSubmit()}} >
            <p>お名前 <p style={{color: "red"}}>*必須</p></p>
            <input />
            <p>お名前(ふりがな) <p style={{color: "red"}}>*必須</p></p>
            <input />
            <p>メールアドレス　<p style={{color: "red"}}>*必須</p></p>
            <input />
            <p>お問い合わせ内容 <p style={{color: "red"}}>*必須</p></p>
            <textarea />
            <input type='submit' value='送信'/>
          </form>
        </div>
      );
    }
    return (
      <div className='contact-form'>
        {contactForm}
      </div>
    );
  }
}
export default App;