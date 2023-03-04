import React from "react"

const Notification = ({ successMessage }) => {

    if (successMessage === null) {
        return null
    }
    return (
        <div>
            <h3 className="contact-added">{successMessage}</h3>
        </div>
    )
}

export default Notification