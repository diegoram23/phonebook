import { useState, useEffect } from 'react'
import axios from 'axios'
import Contacts from './components/Contacts'
import ContactForm from './components/ContactForm'
import SearchContacts from './components/SearchContacts'

function App() {

  const [contacts, setContacts] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchContact, setSearchContact] = useState('')

  useEffect(() => {
    console.log('effect ran');
    axios
    .get('http://localhost:3001/persons')
    .then(res => {
      setContacts(res.data)
    })
  }, [])

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearchContact = (e) => {
    setSearchContact(e.target.value)

  }

  const addPerson = () => {
    const personObj = {
      name: newName,
      number: newNumber,
      id: contacts.length + 1
    }
    setContacts(contacts.concat(personObj))
    setNewName('')
    setNewNumber('')
  }

  const handleSubmitPerson = (e) => {
    e.preventDefault()
    const duplicate = contacts.find(person => person.name === newName)
    duplicate ? alert(`${newName} is already in your contacts`)
      : addPerson()
  }

  const searchMatch = contacts.filter(person =>
    person.name.toLocaleLowerCase().includes(searchContact.toLowerCase()))
  searchMatch ? searchMatch : contacts

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchContacts 
        searchValue={searchContact}
        handleSearchChange={handleSearchContact}
      />
  
      <ContactForm
        handleSubmit={handleSubmitPerson}
        nameValue={newName}
        handleNameChange={handleNameChange}
        numberValue={newNumber}
        handleNumberChange={handleNumberChange}
        type='submit'
      />
      <Contacts
        searchMatch={searchMatch}
      />
    </div>
  )
}

export default App
