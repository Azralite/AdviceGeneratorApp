import { useEffect, useState } from 'react';
import './App.css';
import Divider1 from './assets/divider1.svg';
import Dice from './assets/iconDice.svg';

function App() {
  const [advice, setAdvice] = useState([]);

  const maxId = 224;

  const fetchAdvice = async () => {
    let tmp = Math.ceil(Math.random() * maxId);

    // We force the randomness in order to have a new advice (the button doesn't print a new advice)
    const res = await fetch(`https://api.adviceslip.com/advice/${tmp}`);
    const data = await res.json();

    // console.log(data);

    setAdvice(data.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="App">
      <div className="card">
        <h1 className="title">ADVICE # {advice.id}</h1>
        <p className="advice">"{advice.advice}"</p>

        <img src={Divider1} alt="divider" className="divider" />

        <button className="newAdvice" onClick={fetchAdvice}>
          <img src={Dice} alt="New advice button" />
        </button>
      </div>
    </div>
  );
}

export default App;
