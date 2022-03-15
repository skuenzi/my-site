import {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import Contact from './Contact'

export default function Header () {
    const [hidden, setHidden] = useState(true)
    const [hiddenContact, setHiddenContact] = useState(true)

    function goTo (e) {
        const windowHeight = window.innerHeight
        const scrollHeight = document.body.scrollHeight
        console.log(windowHeight, scrollHeight)


        if(e.target.id === 'name') {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        }
        if (window.innerWidth > windowHeight) {
            if (e.target.id === 'portfolio') {
                window.scrollTo({top: windowHeight, left: 0, behavior: 'smooth'})
                setHidden(true)
            } else if (e.target.id === 'about') {
                window.scrollTo({top: windowHeight *1.9, left: 0, behavior: 'smooth'})
                setHidden(true)
            }
        }

        if (windowHeight < 600 && window.innerWidth < windowHeight) {
            
             if (e.target.id === 'portfolio') {
                window.scrollTo({top: scrollHeight * .37, left: 0, behavior: 'smooth'})
                setHidden(true)
            } else if (e.target.id === 'about') {
                window.scrollTo({top: scrollHeight * .6, left: 0, behavior: 'smooth'})
                setHidden(true)
            }
        } 
        if (windowHeight > 600 && window.innerWidth < windowHeight) {
            if(e.target.id === 'name') {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
            } else if (e.target.id === 'portfolio') {
                window.scrollTo({top:scrollHeight * .34, left: 0, behavior: 'smooth'})
                setHidden(true)
            } else if (e.target.id === 'about') {
                window.scrollTo({top: scrollHeight * .7, left: 0, behavior: 'smooth'})
                setHidden(true)
            }
        }
        if (windowHeight > 1000 && window.innerWidth < windowHeight) {
            if(e.target.id === 'name') {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
            } else if (e.target.id === 'portfolio') {
                window.scrollTo({top:scrollHeight * .32, left: 0, behavior: 'smooth'})
                setHidden(true)
            } else if (e.target.id === 'about') {
                window.scrollTo({top: scrollHeight * .9, left: 0, behavior: 'smooth'})
                setHidden(true)
            }
        }
    }
  

    return (
    <header className='header'>
        <div className="title">
            <div>
                <h3 className="name" id='name' onClick={goTo}>Sara Kuenzi</h3>
                <small className="job-title">frontend developer</small>
            </div>
            <GiHamburgerMenu 
                className='menu-icon' 
                onClick={() => setHidden(prevState => !prevState)}
            />
        </div>

        
        
        <ul className={`nav ${hidden ? 'hidden' : 'show'}`}>
            <li className="page-link">
                <button className= 'portfolio' id='portfolio' onClick={goTo}>portfolio</button>
            </li>
            <li className="page-link">
                <button className= 'about' id ='about' onClick={goTo}>about me</button>
            </li>
            <li className="page-link">
                <button 
                    className= 'contact' 
                    onClick={() => setHiddenContact(prevState => !prevState)}
                >
                    contact
                </button>

                {!hiddenContact && <Contact />}
                
            </li>
        </ul>
    </header>
    )
}