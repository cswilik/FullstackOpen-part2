import React from "react";
import CountryItem from "./CountryItem";

const CountriesList = ({countries}) => {

    

    let countryElements = countries.map(c => {
        return <CountryItem name={c.name.common}/>
    })

    


    return (
        <div>
            <h3>Countries</h3>
            <ul>
                {(countryElements.length > 10) ?
                <li>Too many Results, filter accordingly</li> :
                countryElements}
                
            </ul>
        </div>
    )
}

export default CountriesList;