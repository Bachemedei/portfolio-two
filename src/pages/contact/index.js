import React from "react"
import { css } from "@emotion/core"
import TextArea from "../../components/TextAreaInput/TextArea"
import TextInput from "../../components/TextInput/TextInput"
import Button from "../../components/Button/Button"
import "./contact.css"

function contact() {
  return (
    <div>
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
        `}
      >
        Contact
      </h1>
      <div className="contact-form">
        <TextInput type="text" label="Your Name" />
        <TextInput type="email" label="Your Email" />
        <TextArea label="Your Message" />
        <Button value="Send Away!" />
      </div>
      
    </div>
  )
}

export default contact
