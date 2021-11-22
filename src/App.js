import React, { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import Form from './components/Form'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [newName, setNewName ] = useState('')
  const [newNum, setNewNum] = useState('')
  const [search, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService.getAll()
    .then(initialPeeps => {
      setPersons(initialPeeps)
    })
  }, [])




  const handleSubmit = (e) => {
    e.preventDefault()
    let personObj = {
      name: newName,
      number: newNum
    }
    const isUnique = persons.find(p => {
    return p.name===personObj.name
    })

    if (isUnique) {
      let replace = window.confirm(`${personObj.name} is already added to the phonebook, 
      replace the old number with the new one?`)
      if (replace) {
        let updatedNum = {...isUnique, number: newNum}
        personService.update(updatedNum)
        .then(person => {
          setPersons(persons.map(p => p.id !== person.id ? p : person))
        })
        setErrorMessage(`${isUnique.name}'s number has been updated`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
    } else {
      personService.createOne(personObj)
      .then(res => {
        setPersons(persons.concat(res))
      })
      setErrorMessage(`${personObj.name} has been added to the phonebook`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setNewName('')
      setNewNum('')
    }
  }

  const handleRemovePerson = (id, name) => {
    let confirmed = window.confirm(`Do you really want to delete ${name}`)
    if (confirmed) {
      personService.remove(id)
      .then(res => console.log(res))
      setPersons(persons.filter(p => {
        return p.id !== id
      }))
    }
  }

  const searchedNames = persons.filter(p => {
    return p.name.toLowerCase().includes(search.toLowerCase())
  })

 




 

  return (
    <div>
      <Notification message={errorMessage}/>
      <h2>Phonebook</h2>
      <SearchBar search={search} setSearch={setSearch} />
      <Form newName={newName} newNum={newNum} setNewName={setNewName} setNewNum={setNewNum} handleSubmit={handleSubmit}/>
      <Persons people={searchedNames} handleRemovePerson={handleRemovePerson}/>
    </div>
  )
}

export default App;