import React from 'react'

 function Character({character}) {

    return (
        <div className="card">
            <h2>{character.name}</h2>
            <div className="img">
            <img src={character.image} alt="character"/>

            </div>
            <p>role: {character.hogwartsStudent ? "student" 
            : character.hogwartsStaff ? "staff" : "other"}</p>
            <p>house : {character.house ? character.house : "-"}</p>
            <p>actor: {character.actor}</p>
            <button>More info..</button>
        </div>
    )
}

export default Character
