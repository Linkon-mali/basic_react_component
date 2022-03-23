import React, {useState} from 'react';
import './App.css';
import TaskList from './components/TaskList';
import Test from './components/Test';

function App() {

  const name = "linkon mali"
  
  const [address, setAddress] = useState({
    village: 'Gaokhali',
    city: 'Barishal',
    country: 'Bangladesh',
  });

  const [programmingLanguage, setProgrammingLanguage] = useState([
    'Java',
    'PHP',
    'C++'
  ]);

  const cityChange = (value) => {
    setAddress({
      village: 'Gaokhali',
      // city: address.city === 'Barishal' ? 'Bangladesh' : 'Barishal',
      city: address.city === 'Barishal' ? value : 'Barishal',
      country: 'Bangladesh',
    })
  }

  return (
    <div className="App">
      <h2>Component communication tutorial</h2>
      {/* <Test Name={name} address={address} pl={programmingLanguage} cityChangeFromParent={cityChange} cityChangeFromParentDaynamic={cityChange(valu)} /> */}
      <Test Name={name} address={address} setProgrammingLanguage={setProgrammingLanguage} pl={programmingLanguage} cityChangeFromParentDaynamic={cityChange} />
        {/* <button onClick={cityChange}>Change city</button> */}
      <TaskList />
    </div>
  );
}

export default App;
