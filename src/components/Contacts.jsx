import React from "react";

const Contacts = ({ searchMatch, handleDeleteContact }) => {
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