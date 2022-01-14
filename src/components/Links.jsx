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
                <span>Scott.Donnan@me.com</span>
                <span>(512) 567-7434</span>
            </div>
        </div>
    )
}

export default Links