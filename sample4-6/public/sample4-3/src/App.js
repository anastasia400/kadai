import { useState, useEffect } from 'react';

function AlertMessage(props) {
  return (
    <div className="alert alert-primary h5 text-primary">
      <h5>{props.msg}</h5>
    </div>
  );
}

function App() {
  const [val, setVal] = useState(0);
  const [tax1, setTax1] = useState(0);
  const [tax2, setTax2] = useState(0);
  const [msg, setMsg] = useState(<p>Set a price...</p>);

  const doChange = (event) => {
    setVal(event.target.value);
  };

  useEffect(() => {
    console.log('useEffect');
    let res = (
      <div>
        <p>軽減税率(8%) : {tax1} 円</p>
        <p>通常減税率(10%) : {tax2} 円</p>
      </div>
    );
    setMsg(res);
  }, [tax1, tax2]);

  useEffect(() => {
    console.log('useEffect 2');
    setTax1(Math.floor(val * 1.08));
  }, [val]);

  useEffect(() => {
    console.log('useEffect 3');
    setTax2(Math.floor(val * 1.1));
  }, [val]);

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage msg={msg} />
        <div className="form-group">
          <label>Input:</label>
          <input type="number" className="form-control" onChange={doChange} />
        </div>
      </div>
    </div>
  );
}

export default App;