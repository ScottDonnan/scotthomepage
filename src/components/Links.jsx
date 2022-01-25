import '../App.css'
import {useRef, useState} from 'react'
import inPic from '../images/LI-In-Bug.png'
import githubPic from '../images/GitHub-Mark-32px.png'
import {init, sendForm} from '@emailjs/browser'


function Links({screenWidth}) {
    const links = useRef(null)
    const [name, setName] = useState('your name here')
    const [email, setEmail] = useState('your email here')
    const [content, setContent] = useState('your message')

    let linksClass;
    if (screenWidth > 800) {
        linksClass = 'links-large'
    } else {
        linksClass = 'links-small'
    }

    init("user_YOpSDpVcfitIbtMulJ8PD")

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceID = "service_l8lc8pj"
        const templateID = 'template_dv0r0h5'
        sendForm(serviceID, templateID, e.target)
            .then(function() {
                alert("Thanks for reaching out! I'll be in touch soon");
                setName('your name here')
                setEmail('your email here')
                setContent('your message')
            }, function(error) {
                console.log('FAILED...', error);
            });
    }
    
    return(
        <div ref={links} className="main-section">
            <div id={linksClass}>
                <h1>Lets get in touch!</h1>
                <p id="email" >Scott.Donnan@me.com</p>
                <div id="link-forms">
                    <form onSubmit={handleSubmit}>
                        <label for="name">Name</label><br/>
                        <input className="form-input" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/><br/>
                        <label for="email">Email</label><br/>
                        <input className="form-input" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
                        <lable for="content">Content</lable><br/>
                        <textarea rows="3" cols="30" id="content" name="content" value={content} onChange={(e) => setContent(e.target.value)}/><br/>
                        <input id="submit-button" type="submit"/> 
                    </form>
                    <div id="prof-links">
                        <a href="https://github.com/ScottDonnan">
                            <img src={githubPic} alt="github logo" />
                        </a>
                        <a href="https://www.linkedin.com/in/scott-donnan">
                            <img id="linked-in-logo" src={inPic} alt="In logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Links