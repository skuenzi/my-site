
// import headshot1 from '../../Images/headshot1.jpg' 
import CV from '../SaraKuenziCV.pdf'

export default function Home () {


    return (
        <main className='home'>
                <img src={'../../Images/headshot1.jpg' } alt='photo of the author' className='photo'/>
            
            <div className='home-content'>
                <h1 className='section-title'>Kuenzi</h1>

                <h3 className='pronunciation'>(ken - zee) <br/> <span className='italic'>noun, proper</span></h3>
                    
                <p className='home-blurb'><span className='italic'>definition</span> <span className='bold'>1.</span> The last name of a developer who creates websites and apps with JS, React, CSS, and HTML. Also,  <span className='bold'>2.</span> a person who excels at problem-solving and learns at near lightspeed</p>

                <div className='buttons'>
                    <a className='button download-resume'href={CV}  download='SaraKuenziCV.pdf'>download my resume</a>
                    <button className='button see-my-work' onClick={() => window.scrollTo({top: window.innerHeight > window.innerWidth ? window.innerHeight * 1.1 : window.innerHeight, left: 0, behavior: 'smooth'})}>see my work</button>

                </div>
            </div>
        </main>
    )
}