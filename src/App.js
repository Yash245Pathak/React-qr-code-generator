import './App.css';
import QRCode from 'react-qr-code';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('Hey')
  return (
    <div className="App">
      <div className="input">
        <h1>Enter your text who's QR you want to genrate...</h1>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="qr">
        <h1>Generated QR Code!</h1>
        <QRCode value={text} />
      </div>
    </div>
  );
}

export default App;
