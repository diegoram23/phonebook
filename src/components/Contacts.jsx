import React from "react";

const Contacts = ({ searchMatch }) => {
    return (
        <div>
            <h2>Contacts</h2>
            {searchMatch.map(person =>
                <p key={person.id}>
                    {person.name}
                    {person.number}
                </p>
            )}
        </div>
    )
}

export default Contacts