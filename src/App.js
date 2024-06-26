import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [classification, setClassification] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      setBmi(bmi.toFixed(2));
      classifyBMI(bmi);
    }
  };

  const classifyBMI = (bmi) => {
    if (bmi < 18.5) {
      setClassification('Abaixo do peso');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setClassification('Peso normal');
    } else if (bmi >= 25 && bmi < 29.9) {
      setClassification('Sobrepeso');
    } else {
      setClassification('Obesidade');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calculateBMI}>
        <div>
          <label>
            Altura (cm):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Peso (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      {bmi && (
        <div>
          <h2>Seu IMC é: {bmi}</h2>
          <h3>Classificação: {classification}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
