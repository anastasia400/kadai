import { useState } from 'react';

function ContactForm (props){
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [inq, setInq] = useState('');
  const [form, setForm] = useState({
    name: 'no name',
    mail: 'no mail',
    inq: 'no inq',
  });
  const doChangeName = (event) => {
    setName(event.target.value);
  };
  const doChangeMail = (event) => {
    setMail(event.target.value);
  };
  const doChangeInq = (event) => {
    setInq(event.target.value);
  };
  const doSubmit = (event) => {
    setForm({ name: name, mail: mail, inq: inq });
    event.preventDefault();
  };
    return (
      <div>
      <div className="container">
        <h4 className="my-3">お問い合わせフォーム</h4>
        <form onSubmit={doSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              onChange={doChangeName}
            />
          </div>
          <div className="form-group">
            <label>Mail:</label>
            <input
              type="text"
              className="form-control"
              onChange={doChangeMail}
            />
          </div>
          <div className="form-group">
            <label>問い合わせ内容:</label>
            <textarea
              rows="10" cols="60"
              className="form-control"
              onChange={doChangeInq}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="確定" />
        </form>
      </div>
    </div>
    );
  }
  export default ContactForm;

