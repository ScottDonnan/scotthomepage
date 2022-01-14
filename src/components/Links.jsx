import '../App.css'
import {useRef} from 'react'

function Links() {
    const links = useRef(null)
    
    return(
        <div ref={links} className="main-section">
            <div id="links">
                <h1>Links</h1>
                <a href="https://github.com/ScottDonnan">Github</a>
                <a href="https://www.linkedin.com/in/scott-donnan">LinkedIn</a>
                <p>Scott.Donnan@me.com</p>
            </div>
        </div>
    )
}

export default Links