import {FaLinkedin, FaGithubSquare} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'


export default function Contact() {
    return (
        <section className='contact-section'>
            <div className='contact-links'>
                    <button className='email' onClick={() => window.location = 'mailto:sara.elizabeth.kuenzi@gmail.com'}>
                        <MdEmail className='button-icon'/>
                        Email
                    </button>
                    <button className='github' onClick={() => window.open('https://github.com/skuenzi') }>
                        <FaGithubSquare className='button-icon'/>
                        GitHub
                    </button>
                    <button className='linkedin' onClick={() => window.open('https://www.linkedin.com/in/sara-kuenzi-859a0a43/') }>
                        <FaLinkedin className='button-icon'/>
                        LinkedIn
                    </button>
                    
            </div>
        </section>
    )
    
}