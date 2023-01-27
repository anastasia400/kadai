import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const clickFunc = (event) => {
    setCount(count + 1);
  };
  const changeFlag = (event) => {
    setFlag(event.target.checked);
  };

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        {flag ? (
          <div className="alert alert-primary text-center">
            <p className="h5 mb-3">Click: {count} times!</p>
            <div>
              <button className="btn btn-primary" onClick={clickFunc}>
                Click me
              </button>
            </div>
          </div>
        ) : (
          <div className="card p-3 border-primary text-center">
            <p className="h5 mb-3 text-start text-primary">
              Click: {count} times!
            </p>
            <div>
              <button className="btn btn-primary" onClick={clickFunc}>
                Click me
              </button>
            </div>
          </div>
        )}
        <div className="form-group h6 text-center pt-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="check1"
            id="check1"
            onChange={changeFlag}
          />
          <label className="form-check-label" htmlFor="check1">
            Change form style.
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;