import './App.scss';
import React, {useState, useEffect} from 'react';
import Character from './components/Character'
import LoadingMask from './components/LoadingMask'

function App() {

  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch("http://localhost:5000/characters")
    .then(resp => resp.json())
    .then(data => {
      setCharacters(data)
      setIsLoading(false)
    })

  }, [])

  return (
    <div className="content">
      <div className="background"></div>
      <h1>Harry Potter Characters</h1>
      <div className="cards">
        {
        isLoading ? <LoadingMask /> 
        : characters.map((char, index) => <Character key={index} character={char}/>)
        }
      </div>
    </div>
  );
}

export default App;
