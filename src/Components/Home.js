
import CV from '../SaraKuenziCV.pdf'
import scrimbaCert from '../CERTIFICATE OF COMPLETION - The Frontend Developer Career Path.pdf'
import promineoCert from '../PromineoCertificate.pdf'

export default function Home () {


    return (
        <main className='home'>
                <img src={'../../Images/headshot1.jpg' } alt='author' className='photo'/>
            
            <div className='home-content'>
                <h1 className='section-title'>Kuenzi</h1>

                <h3 className='pronunciation'>(ken - zee) <br/> <span className='italic'>noun, proper</span></h3>
                    
                <p className='home-blurb'>
                    <span className='italic'>
                        definition
                    </span>
                    <span
                        className='bold'>1.
                    </span>
                    The last name of a developer who creates websites and apps with JS, TS, React, CSS, and HTML. Also,
                    <span className='bold'>2.
                    </span> a person who excels at problem-solving and learns at near lightspeed
                </p>

                <div className='buttons'>
                    <div className='row1'>
                        <a 
                            className='button download-resume' 
                            href={CV} 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            download my resume
                        </a>
                        <button 
                            className='button see-my-work' 
                            onClick={() => window.scrollTo({top: window.innerHeight > window.innerWidth ? window.innerHeight * 1.1 : window.innerHeight, left: 0, behavior: 'smooth'})}
                        >
                            see my work
                        </button>
                    </div>
                    <div className='row2'>
                        <a 
                            className='button download-certificate' 
                            href={scrimbaCert}  
                            target="_blank" 
                            rel="noreferrer">
                            Scrimba Frontend Developer Certificate
                        </a>
                    </div>
                    <div className='row2'>
                        <a 
                            className='button download-certificate' 
                            href={promineoCert}  
                            target="_blank" 
                            rel="noreferrer">
                            UNM Front-End Software Developement Bootcamp
                        </a>
                    </div>

                </div>
            </div>
        </main>
    )
}