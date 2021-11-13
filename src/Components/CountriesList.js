import React from "react";
import CountryItem from "./CountryItem";

const CountriesList = ({countries, setCountries}) => {
    
    let country = countries[0]

    // let countryElements = countries.map((c, i) => {
    //         return  <CountryItem key ={i} name={c.name.common} capital={c.capital}     
    //         pop={c.population} langs={c.languages}
    //         flag={c.flags.png} />
    // })
    
    let len = countries.length  

    if (len > 10) {
        return <li>Too many Results, filter accordingly</li>
    }
    else if (len > 2 && len < 10 || len === 0) {
        return (
            <div>
                <h3>Countries</h3>
                <ul>
                    {countries.map((c, i) => {
                       return (<li key={i}>{c.name.common} <button onClick={() =>setCountries([c])}>Details</button></li>
                       
                       )}) 
                    }
                </ul>
            </div>
        )
    } else {
        return (
            <div>
                <CountryItem name={country.name.common} capital={country.capital}     
            pop={country.population} langs={country.languages}
            flag={country.flags.png} />
            </div>
        )
    }
    
}

export default CountriesList;