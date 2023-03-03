import React from "react";

const ContactForm = ({ handleSubmit, nameValue, numberValue, handleNameChange, handleNumberChange }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Contact</h3>
            <div>
                Name: <input
                    value={nameValue}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                Number: <input
                    value={numberValue}
                    onChange={handleNumberChange}
                />
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    )
}

export default ContactForm