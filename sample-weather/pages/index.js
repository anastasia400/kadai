import { useState, useEffect } from 'react';

export default function Weather() {
  const url = 'https://weather.tsukumijima.net/api/forecast/city/';
  const [number, setNumber] = useState(400040);
  const [data, setData] = useState(null);
  const [areaData, setAreaData] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    fetch(`${url}${number}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
      });
  };

  const onChange = (event) => {
    setNumber(event.target.value);
  };

  const onChangeArea = (event) => {
    setNumber(event.currentTarget.value);
  };

  useEffect(() => {
    fetch('/arealist.json')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setAreaData(response.areas);
      });
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <select onChange={onChangeArea}>
          {areaData.map((area) => (
            <option value={area.id} key={area.id}>
              {area.name}
            </option>
          ))}
        </select>
        <input type="number" onChange={onChange} value={number} />
        <input type="submit" value="検索" />
      </form>
      <table border="1">
        <thead>
          <tr>
            <th>日付</th>
            <th>天気</th>
            <th>最高気温</th>
            <th>最低気温</th>
          </tr>
        </thead>
        <tbody>
          {data != null ? (
            data.forecasts.map((weather) => (
              <tr key={weather.date}>
                <th>{weather.date}</th>
                <td>{weather.telop}</td>
                <td>{weather.temperature.max.celsius}</td>
                <td>{weather.temperature.min.celsius}</td>
              </tr>
            ))
          ) : (
            <tr>
              <th></th>
              <td colSpan="3">nodata</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}