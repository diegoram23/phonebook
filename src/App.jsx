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

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()
    const personObj = {
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObj))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input
            value={newName}
            onChange={handleNewName}
          />
        </div>
        <div>
          Number: <input
            value={newName}
            onChange={handleNewName}
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
