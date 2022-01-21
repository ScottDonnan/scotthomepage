import '../App.css'
import {useRef} from 'react'

function Links() {
    const links = useRef(null)
    
    return(
        <div ref={links} className="main-section">
            <div id="links">
                <h1>Lets get in touch!</h1>
                <div>
                    <div id="prof-links">
                        <a href="https://github.com/ScottDonnan">Github</a>
                        <a href="https://www.linkedin.com/in/scott-donnan">LinkedIn</a>
                    </div>
                    <div id="contact">
                        <p>Scott.Donnan@me.com</p>
                        <p>(512) 567-7434</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Links