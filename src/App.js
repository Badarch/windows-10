import './App.css';
import { useEffect, useRef, useState } from 'react';
import logo from './assets/images/windows_logo.png'
import Boot from './screens/boot/Boot';
import Lockscreen from './screens/lockscreen/Lockscreen';

function App() {

  const [Screen, setScreen] = useState('boot');
  const [DisplayId, setDisplayId] = useState('display-container display-on')

  useEffect(() => {
    if(Screen === 'boot') {
      setTimeout(() => {
        setDisplayId('display-container display-off');
      }, 6000);
      setTimeout(() => {
        setDisplayId('display-container display-on');
        setScreen('Lockscreen');
      }, 7000);
    }
  }, [])
  
  return (
    <div>
      <div className={DisplayId}>
      {Screen === 'boot' ? <Boot/> : <Lockscreen/>}
      </div>
    </div>
  );
}

export default App;
