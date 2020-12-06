import React, { useState }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';



function Converter() {
  const [km,setkm] = useState(0)
  const [mile,setmile] = useState(0)

  function handleChangekm(e) {
    setkm(e.target.value)
  }
  function convertMile(km) {
    return (km/1.609).toFixed(2)
  }
  function handleChangeMile(e) {
    setmile(e.target.value)
  }
  function convertKM(mile) {
    return (mile*1.609).toFixed(2)
  }

  return <div>
    <h2>KM to MILE Conveter</h2>
    <input type="text" value={km} onChange={handleChangekm} /> = {convertMile(km)} <br />
    <h2>MILE to KM Conveter</h2>
    <input type="text" value={mile} onChange={handleChangeMile} /> = {convertKM(mile)}
  </div>
}
const el = <Converter />
ReactDOM.render(
  el,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
