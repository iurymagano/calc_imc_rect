import { useState } from 'react';
import styles from './App.module.css';
import headerImage from './assets/powered.png';
import { levels, calculateImc } from './helpers/imc' 

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculaterButton = () => {
    if(heightField && weightField) {

    }else {
      alert('Digite em todos os campos')
    }
  }

  return (
    <div className={styles.main}>
      <header className={styles.headerContainer}>
        <img src={headerImage} alt="" width={150} />
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para indice de massa corórea, parâmetro adotado pela organizaçãp Mundial de Saúde para calcular o seu peso ideal de cada pessoa.</p>

          <input 
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />
          <input 
            type="number"
            placeholder="Digite a sua peso. Ex: 75.3 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={e => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculaterButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          ...
        </div>
      </div>
    </div>
  )
}

export default App;