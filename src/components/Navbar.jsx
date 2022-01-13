import {Link} from 'react-router-dom'
import {useState} from 'react'

function Navbar({goToSection, aboutEl, projectsEl, linkEl, educationEl}) {
    // const [displayNav, setDisplayNav] = useState(false)
    
    // const minimizedNav = <div className="navMin">
    //                         <img onMouseEnter={() => setDisplayNav(true)} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02f95934-e91a-4065-933a-0964e25e13a1/d4r9jru-842f076c-b9f9-44b5-b58f-f717d4dd41de.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyZjk1OTM0LWU5MWEtNDA2NS05MzNhLTA5NjRlMjVlMTNhMVwvZDRyOWpydS04NDJmMDc2Yy1iOWY5LTQ0YjUtYjU4Zi1mNzE3ZDRkZDQxZGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ni1-J1bWdKiY7YIXX5PHUP51X60r0n5UeRvGC3OAWNg" />
    //                      </div>

    // const expandedNav = <ul className="navFull" onMouseOut={() => setDisplayNav(false)}>
    //                         <Link to="/">Homepage</Link>
    //                         <Link to="/about">About</Link>
    //                         <Link to="/projects">Projects</Link>
    //                         <Link to="/links">Links</Link>
    //                     </ul>
    
    return(
        <nav>
            <ul>
                <a href="#" onClick={(e) => goToSection(aboutEl, e)}>About</a>
                <a href="#" onClick={(e) => goToSection(projectsEl, e)}>Projects</a>
                <a href='#' onClick={(e) => goToSection(educationEl, e)}>Education</a>
                <a href="#" onClick={(e) => goToSection(linkEl, e)}>Links</a>
            </ul>
        </nav>
    )
}

export default Navbar