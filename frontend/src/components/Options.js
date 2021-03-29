import React, {useState, useEffect} from 'react'

function Options({listFilter}) {

    const [houseSelectValue, setHouseSelectValue] = useState("all")
    const [roleSelectValue, setRoleSelectValue] = useState("all")
    const [genderSelectValue, setGenderSelectValue] = useState("all")
    const [searchInputValue, setSearchInputValue] = useState("")
    
    useEffect(() => {
        listFilter(houseSelectValue, roleSelectValue, genderSelectValue, searchInputValue)
    }, [houseSelectValue, roleSelectValue, genderSelectValue, searchInputValue])

    return (
        <div className="filter">
            <div>
                <label htmlFor="house">House: </label>
                <select name="house" id="house" onChange={(e) => setHouseSelectValue(e.target.value)}>
                    <option value="all">All</option>
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Slytherin">Slytherin</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                </select>
            </div>
            <div>
                <label htmlFor="role">Role: </label>
                <select name="role" id="role" onChange={(e) => setRoleSelectValue(e.target.value)}>
                    <option value="all">All</option>
                    <option value="student">Student</option>
                    <option value="staff">Staff</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="gender">Gender: </label>
                <select name="gender" id="gender" onChange={(e) => setGenderSelectValue(e.target.value)}>
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Type for searching.."
                onInput={(e) => setSearchInputValue(e.target.value)} />
                <i class="fas fa-search"></i>
            </div>
        </div>
    )
}

export default Options
