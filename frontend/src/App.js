import './App.scss';
import React, {useState, useEffect} from 'react';
import Character from './components/Character'

function App() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/characters").then(resp => resp.json()).then(data => setCharacters(data))

  }, [])

  return (
    <div className="content">
      <div className="background"></div>
      <h1>Harry Potter Characters</h1>
      <div className="cards">
        {characters.map((char, index) => <Character key={index} character={char}/>)}
      </div>
    </div>
  );
}

export default App;
