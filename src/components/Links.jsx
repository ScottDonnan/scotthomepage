import '../App.css'
import {useRef} from 'react'

function Links() {
    const links = useRef(null)
    
    return(
        <div ref={links} className="main-section">
            <div id="links">
                <h1>Lets get in touch!</h1>
                <p>Scott.Donnan@me.com</p>
                <div id="link-forms">
                    <form>
                        <label for="name">Name</label><br/>
                        <input type="text" name="name"/><br/>
                        <label for="email">Email</label><br/>
                        <input type="text" name="email" /><br/>
                        <lable for="content">Content</lable><br/>
                        <textarea rows="3" cols="20" id="content" name="content"/><br/>
                        <input type="submit"/> 
                    </form>
                    <div id="prof-links">
                        <a href="https://github.com/ScottDonnan">Github</a>
                        <a href="https://www.linkedin.com/in/scott-donnan">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Links