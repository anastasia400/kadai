import usePersist from '../hooks/Persist';
import { useState } from 'react';

function AlertMessage(props) {
  // ステートフック
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [age, setAge] = useState(0);
  const [mydata, setMydata] = usePersist('mydata', null);

  // changeイベントで実行する関数
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeMail = (event) => {
    setMail(event.target.value);
  };
  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  // clickイベントで実行する関数
  const onAction = (event) => {
    const data = {
      name: name,
      mail: mail,
      age: age,
    };
    setMydata(data);
  };

  return (
    <div className="alert alert-primary h5 text-primary">
      {/* 保存するデータを表示する */}
      <h5 className="mb-4">{JSON.stringify(mydata)}</h5>
      {/* 保存するデータの入力フォーム */}
      <div className="form-group">
        <label className="h6">Name</label>
        <input type="text" className="form-control" onChange={onChangeName} />
      </div>
      <div className="form-group">
        <label className="h6">Mail</label>
        <input type="email" className="form-control" onChange={onChangeMail} />
      </div>
      <div className="form-group">
        <label className="h6">Age</label>
        <input type="text" className="form-control" onChange={onChangeAge} />
      </div>
      <button className="btn btn-primary" onClick={onAction}>
        Save it!
      </button>
    </div>
  );
}

export default AlertMessage;