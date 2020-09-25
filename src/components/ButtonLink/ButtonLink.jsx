import { Link } from 'gatsby'
import React from 'react'
import "./Button.css"

function Button({ value, url }) {
    return (
        <form className="btn-container">
            <Link to={`${url}`}>
                <input className="btn" type="submit" value={value}/>
            </Link>
        </form>
    )
}

export default Button
