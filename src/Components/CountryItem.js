import React from "react";

const CountryItem= ({name, capital, pop, langs, flag, details}) => {
    
    if (details) {
        let languages = Object.entries(langs).map(l => {
            return <li>{l[1]}</li>
        })
     
        return (
            <div>
                <h1>{name}</h1>
                <p><b>Capital:</b> {capital}</p>
                <p><b>Population:</b> {pop}</p>
                <p><b>Languages Spoken:</b></p>
                <ul>
                    {languages}
                </ul>
                <img src={flag} alt="flag"></img>
            </div>
        )
    } else {
        return (
            <div>
                <li>{name} <button>Details</button></li>
            </div>
        )
    }
}

export default CountryItem;