import './App.css';
import React from 'react';

function Card(props){

  const cardBackground = {    
    background: `linear-gradient(135deg, ${props.firstHex} 0%, ${props.secondHex} 100%)`
  }
    return (
      <div style={cardBackground} className="Card">
        <div className='Card-Hex'>
          <p style={{color: props.firstHex}}>{props.firstHex}</p>
          <p style={{color: props.secondHex}}>{props.secondHex}</p>
        </div>
      </div>
    );
  }


function App() {
  return (
    <div className="App">
      <Card firstHex="#FF72CE" secondHex="#FF3434"/>
      <Card firstHex="#FF348A" secondHex="#7277FF"/>
      <Card firstHex="#6E7BFF" secondHex="#34C8FF"/>
    </div>
  );
}

export default App;
