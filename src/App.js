import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import tp from 'tp-js-sdk';

function App() {
  const [appInfo, setAppInfo] = useState('no info');
  useEffect(() => {
    getAppInfo();
  }, []);
  const getAppInfo = async () => {
    console.log('Getting app info');
    const appInfo = await tp.getAppInfo();
    setAppInfo(appInfo);
    console.log('AppInfo: ', appInfo);
  }
  tp.importWallet('eth');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {appInfo}
        </p>
      </header>
    </div>
  );
}

export default App;
