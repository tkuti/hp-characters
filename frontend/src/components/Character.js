import React, { useState } from 'react'
import CharacterDetails from './CharacterDetails'

function Character({ character }) {

    const [showDetails, setShowDetails] = useState(false)



    return (
        <>
            <div className="card">
                <h2>{character.name}</h2>
                <div className="img">
                    <img src={character.image} alt="character" />

                </div>
                <p>role: {character.hogwartsStudent ? "student"
                    : character.hogwartsStaff ? "staff" : "other"}</p>
                <p>house : {character.house ? character.house : "-"}</p>
                <p>actor: {character.actor}</p>
                <button onClick={() => setShowDetails(true)}>More info..</button>
            </div>
            {showDetails && <CharacterDetails character={character} setShowDetails={setShowDetails} />}
        </>
    )
}

export default Character
