import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import CountriesList from './components/CountriesList'


const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const searchedCountries = countries.filter(c => {
    return c.name.common.toLowerCase().includes(search)
  })



  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(res => {
      setCountries(res.data)})
  }, [])

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch}/>
      <CountriesList countries={searchedCountries} />
    </div>
  )
}

export default App;