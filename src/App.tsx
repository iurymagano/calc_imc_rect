import { useState } from 'react';
import styles from './App.module.css';
import { levels, calculateImc, Level } from './helpers/imc';
import headerImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';
import { GridItem } from './components/GridItem';

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculaterButton = () => {
    if(heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    }else {
      alert('Digite em todos os campos')
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
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
        {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key)=>(
                <GridItem key={key} item={item} />
                ))}
            </div>
        }
        {toShow &&
          <div className={styles.rightBig}>
            <div className={styles.rightArrow}>
              <img src={leftArrowImage} alt="" width={25} onClick={handleBackButton} />
            </div>
              <GridItem item={toShow} />
          </div>
        }
        </div>
      </div>
    </div>
  )
}

export default App;