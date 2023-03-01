import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [result, setResult] = useState('');

  const [data, setData] = useState({
    date1: '',
    date2: '',
  });

  const { date1, date2 } = data;

  const changehandeler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submithandler = (e) => {
     e.preventDefault();

    const dt1 = new Date(date1);
    const dt2 = new Date(date2);

    console.log(data, 'data');
   


    const numberOfDays = Math.abs(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    );

    console.log(numberOfDays,"days")
    const years = Math.floor(numberOfDays / 365);
    const months = Math.floor((numberOfDays % 365) / 30);
    const days = Math.floor((numberOfDays % 365) % 30);
    setResult(
      'your age is :' +
        years +
        ' years ' +
        months +
        ' months ' +
        days +
        '  days'
    );

    console.log(years, months, days, ' year , month , days ');
    
    setData({
      date1: '',
      date2: '',
    });
  };
  return (
    <div>
      <h3> Age calculation </h3>
      <form onSubmit={submithandler}>
        <div>
          <label> Date 1 : </label>
          <input
            type="date"
            value={date1}
            name="date1"
            onChange={changehandeler}
          />
        </div>
        <div>
          <label>Date 2 : </label>
          <input
            type="date"
            value={date2}
            name="date2"
            onChange={changehandeler}
          />
        </div>
        <div>
          <input type="submit" name="submit" />
        </div>
      </form>

      <div>
        <h4>{result} </h4>{' '}
      </div>
    </div>
  );
}
