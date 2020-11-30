import React from "react"
import "./LanguageTags.css"

function LanguageTags({ languageString }) {
  const languages = languageString.split(", ")
  return (
    <div className="language-tags">
      {languages.map(language => {
        return <p className="language-tag">{language}</p>
      })}
    </div>
  )
}

export default LanguageTags
