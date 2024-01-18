import {FaFacebookSquare, FaInstagramSquare, FaGithubSquare} from 'react-icons/fa'

function Footer () {
    return (
        <footer className='footer'>
            <div className='socials-container'>
                <button className='socials-btn' onClick={() => window.open('https://www.facebook.com/thekwenz24')}><FaFacebookSquare className='socials-icon'/></button>
                <button className='socials-btn' onClick={() => window.open('https://www.instagram.com/thekwenz24/')}><FaInstagramSquare className='socials-icon'/></button>
                <button className='socials-btn'onClick={() => window.open('https://github.com/skuenzi')}><FaGithubSquare className='socials-icon'/></button>
            </div>
            <p>sara kuenzi 2024</p>
        </footer>
    )
}

export default Footer