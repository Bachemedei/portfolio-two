import React from "react"
import GitLogo from "../../images/github.png"
import LinkedInLogo from "../../images/linkedin-logo.jpg"
import EmailLogo from "../../images/envelope.png"
import "./contact.css"

function Contact() {
  return (
    <div id="contact">
      <h1>Contact</h1>
      {/* <div className="contact-form">
        <TextInput type="text" label="Your Name" />
        <TextInput type="email" label="Your Email" />
        <TextArea label="Your Message" />
        <Button value="Send Away!" />
      </div> */}
      <div className="contact-details">
        <a href="https://www.linkedin.com/in/bronwyn-achemedei/">
          <img className="linkedin-logo contact-logo" src={LinkedInLogo} />
        </a>
        <a href="https://github.com/Bachemedei">
          <img className="git-logo contact-logo" src={GitLogo} />
        </a>
        <a href="mailto:bronwyn.1992@gmail.com">
          <img className="email-logo contact-logo" src={EmailLogo} />
        </a>
      </div>
    </div>
  )
}

export default Contact
