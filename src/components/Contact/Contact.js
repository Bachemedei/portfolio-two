import React from "react"
import TextArea from "../TextAreaInput/TextArea"
import TextInput from "../TextInput/TextInput"
import Button from "../Button/Button"
import "./contact.css"

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact-form">
        <TextInput type="text" label="Your Name" />
        <TextInput type="email" label="Your Email" />
        <TextArea label="Your Message" />
        <Button value="Send Away!" />
      </div>
    </div>
  )
}

export default Contact
