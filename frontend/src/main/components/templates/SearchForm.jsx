import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import './SearchForm.css'

const SearchForm = () => {
    const inputPlayer = useRef(null)
    const navigate = useNavigate()

    return (
            <form className="search-bar">
                <select name="region" className="region">
                    <option value="br1">BR</option>
                    {/* <option value="na1">NA</option> */}
                </select>
                <input ref={inputPlayer}
                    placeholder='Search player by name' />
                <button className="search-button" type="button"
                    onClick={() => {navigate(`/summoner/${inputPlayer.current.value}`, { state: { id: `${inputPlayer.current.value}` } })}
                    }>
                    <img src="search_icon.png" alt="search icon" />
                </button>
            </form>
    )
}


export default SearchForm
