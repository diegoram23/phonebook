import React from "react"

const Notification = ({ successMessage, errorMessage }) => {

    if (successMessage !== null) {
        return (<h3 className="contact-added message">{successMessage}</h3>)
    }
    
    if(errorMessage !== null) {
        return (<h3 className="error-message message">{errorMessage}</h3>)
    }
}

export default Notification