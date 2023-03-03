import { useState } from 'react'

function App() {

  const [persons, setPersons] = useState([
    {
      "name": "Arto Hellas",
      "number": "040-3424324",
      "id": 1
    },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchContact, setSearchContact] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearchContact = (e) => {
    setSearchContact(e.target.value)

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

  const handleSubmitPerson = (e) => {
    e.preventDefault()
    const duplicate = persons.find(person => person.name === newName)
    duplicate ? alert(`${newName} is already in your contacts`)
      : addPerson()
  }

  const searchMatch = persons.filter(person =>
    person.name.toLocaleLowerCase().includes(searchContact.toLowerCase()))
  searchMatch ? searchMatch : persons

  return (
    <div>
      <h2>Phonebook</h2>
      Search: <input
        value={searchContact}
        onChange={handleSearchContact} />
      <form onSubmit={handleSubmitPerson}>
        <h3>Add Contact</h3>
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
      {searchMatch.map(person =>
        <p key={person.id}>{person.name} {person.number}</p>
      )}
    </div>
  )
}

export default App
