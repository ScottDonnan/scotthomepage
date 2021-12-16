function Contact() {
    return(
        <div>
            <h1>Contact</h1>
            <form>
                <input type="text" id="name" name="name" value="Name" />
                <input type="text" id="email" name="email" value="Email" />
                <input type="text" id="message" name="message" value="Message" />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Contact