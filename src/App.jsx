import { useState } from 'react'

function App() {

  const [persons, setPersons] = useState([
    {
      "name": "Arto Hellas",
      "number": "040-3424324",
      "id": 1
    }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmitPerson = (e) => {
    e.preventDefault()
    const match = persons.find(person => person.name === newName)
    if (match) {
      alert(`${newName} is already in your contacts`);
    } else {
      addPerson()
    }
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const addPerson = () => {
    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObj))
    setNewName('')
    setNewNumber('')
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmitPerson}>
        <div>
          Name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
         <div>
          Number: <input
            value={newNumber}
            onChange={handleNewNumber}
          />
        </div> 
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <p key={person.id}>{person.name} {person.number}</p>
      )}
    </div>
  )
}

export default App
