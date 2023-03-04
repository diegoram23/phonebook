import React from "react";

const Contacts = ({  handleDeleteContact, contacts, searchContact }) => {
    const searchMatch = contacts.filter(person =>
        person.name.toLowerCase().includes(searchContact.toLowerCase()))
      searchMatch ? searchMatch : contacts
    return (
        <div>
            <h2>Contacts</h2>
            {searchMatch.map(contact =>
                <p key={contact.id}>
                    {contact.name}
                    {contact.number}
                    <button onClick={() => handleDeleteContact(contact.id, contact.name)}>Delete</button>
                </p>
            )}
        </div>
    )
}

export default Contacts