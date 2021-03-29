import './App.scss';
import React, { useState, useEffect } from 'react';
import Character from './components/Character'
import LoadingMask from './components/LoadingMask'
import Options from './components/Options'
import logo from './image/logo.png'

function App() {

  const [characters, setCharacters] = useState([])
  const [displayList, setDisplayList] = useState(characters)
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

  const listFilter = (houseSelectValue, roleSelectValue, genderSelectValue, searchInputValue) => {
    let filteredList = characters;
    houseSelectValue !== "all"
      && (filteredList = filteredList.filter(char => char.house === houseSelectValue))
    roleSelectValue !== "all"
      && (filteredList = filteredList.filter(char => {
        if (roleSelectValue === "student") return char.hogwartsStudent
        if (roleSelectValue === "staff") return char.hogwartsStaff
        if (roleSelectValue === "other") return !char.hogwartsStudent && !char.hogwartsStaff
        return false
      }))
    genderSelectValue !== "all"
      && (filteredList = filteredList.filter(char => char.gender === genderSelectValue))
    searchInputValue !== ""
      && (filteredList = filteredList.filter(char => char.name.toLowerCase().includes(searchInputValue.toLowerCase())))
    setDisplayList(filteredList);
  }

  return (
    <div className="content">
      <div className="background"></div>
      <nav>
        <img src={logo} alt="logo" />
        <h1>Harry Potter Characters</h1>
      </nav>
      {
        isLoading ? <LoadingMask />
          : <>
            <Options listFilter={listFilter} />
            <div className="cards">
              {displayList.map((char, index) => <Character key={index} character={char} />)}
            </div>
          </>
      }
    </div>
  );
}

export default App;
