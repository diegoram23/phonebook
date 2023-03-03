import { useState, useEffect } from 'react'
import axios from 'axios'
import contactsService from './contacts'
import Contacts from './components/Contacts'
import ContactForm from './components/ContactForm'
import SearchContacts from './components/SearchContacts'

function App() {

  const [contacts, setContacts] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchContact, setSearchContact] = useState('')

  useEffect(() => {
    contactsService
      .getAll()
      .then(initialContacts => {
        setContacts(initialContacts)
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

  const handleSubmitPerson = (e) => {
    e.preventDefault()
    const duplicate = contacts.find(person => person.name === newName)
    duplicate ? alert(`${newName} is already in your contacts`)
      : addPerson()
  }

  const addPerson = () => {
    const personObj = {
      name: newName,
      number: newNumber,
    }
    contactsService
      .createContact(personObj)
      .then(returnedContact => {
        setContacts(contacts.concat(returnedContact))
        setNewName('')
        setNewNumber('')
      })
  }

  const searchMatch = contacts.filter(person =>
    person.name.toLocaleLowerCase().includes(searchContact.toLowerCase()))
  searchMatch ? searchMatch : contacts

    const deleteContact = (id, name) => {
    contactsService
    .deleteContact(id)
    .then(() => {
      window.confirm(`Are you sure you want to delete ${name}`)
      contactsService
      .getAll()
      .then(initialContacts => {
        setContacts(initialContacts)
      })
    })
    }


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
        handleDeleteContact={deleteContact}
      />
    </div>
  )
}

export default App
