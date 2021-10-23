import React, { useState } from 'react'
import SearchBar from './Components/SearchBar'
import Form from './Components/Form'
import Persons from './Components/Persons'


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: 8675309 }
  ]) 
  const [newName, setNewName ] = useState('')
  const [newNum, setNewNum] = useState('')
  const [search, setSearch] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    let personObj = {
      name: newName,
      number: newNum
    }
    const isUnique =persons.find(p => {
    return p.name===personObj.name
    })
    if (isUnique) {
      window.alert(`${personObj.name} is already added to the phonebook`)
    } else {
      setPersons(persons.concat(personObj))
      setNewName('')
      setNewNum('')
    }
  }
  const searchedNames = persons.filter(p => {
    return p.name.toLowerCase().includes(search.toLowerCase())
  })

 




 

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBar search={search} setSearch={setSearch} />
      <Form newName={newName} newNum={newNum} setNewName={setNewName} setNewNum={setNewNum} handleSubmit={handleSubmit}/>
      <Persons people={searchedNames}/>
    </div>
  )
}

export default App;