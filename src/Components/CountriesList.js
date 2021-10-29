import React, {useState} from "react";
import CountryItem from "./CountryItem";

const CountriesList = ({countries}) => {
    // const [details, setDetails] = useState(false)



    let countryElements = countries.map(c => {
            return  <CountryItem name={c.name.common} capital={c.capital}     
            pop={c.population} langs={c.languages}
            flag={c.flags.png} />
    })
    
    let len = countryElements.length  
    if (len > 10) {
        return <li>Too many Results, filter accordingly</li>
    }
    if (len === 1) {
        return (
            <div>
                <h3>Countries</h3>
                <ul>
                    {countryElements}
                </ul>
            </div>
        )
    } else return (
        <div>
                <h3>Countries</h3>
                <ul>
                    {countryElements}
                </ul>
            </div>
    )
}

export default CountriesList;