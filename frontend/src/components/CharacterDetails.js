import React from 'react'

function CharacterDetails({ character, setShowDetails }) {
    return (
        <div className="details-background" onClick={() => setShowDetails(false)}>
            <div className="details-container">
                <div className="details-img">
                    <p className="name">{character.name}</p>
                    <img src={character.image} alt="character"/>
                </div>
                <div className="details">
                    <p className="detail-text">species: {character.species}</p>
                    <p className="detail-text">gender: {character.gender}</p>
                    <p className="detail-text">role: {character.hogwartsStudent ? "student"
                        : character.hogwartsStaff ? "staff" : "other"}</p>
                    {character.house && <p className="detail-text">house: {character.house}</p>}
                    {character.yearOfBirth && <p className="detail-text">birth year: {character.yearOfBirth}</p>}
                    {character.ancestry && <p className="detail-text">ancestry: {character.ancestry}</p>}
                    {character.wand.wood && <p className="detail-text">wand:
                    <ul>
                            <li>wood: {character.wand.wood}</li>
                            <li>core: {character.wand.core}</li>
                            <li>length: {character.wand.length}</li>
                        </ul>
                    </p>}
                    {character.patronus && <p className="detail-text">patronus: {character.patronus}</p>}
                    <p className="detail-text">actor: {character.actor}</p>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetails
