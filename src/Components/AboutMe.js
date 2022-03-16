import {useState} from 'react'

export default function AboutMe () {
    const [readMore, setReadMore] = useState(false)


    const aboutMeInfo = `
    I've dabbled in many career fields, but programming has kept my attention more than anything else! I started my journey in 2019 with a course called Watch and Code, then continued on to finish a Frontend Developer Career Path with Scrimba (see my certificate ). These programs took me through courses on Vanilla Javascript, HTML, and CSS for the basics, then onto React. Learning React is where I really started feeling comfortable in programming and I love using it to build reusable components that can be tailored to any web app. Although CSS has taken a bit more effort for me to feel comfortable with, I've learned to appreciate the possibilities of Flexbox and Grid.
    
    Outside of programming, I'm an avid adventurer - I love rock climbing, hiking, running, and  traveling. You can also find me making connections with new people, grabbing beer or coffee with friends, and exchanging funny memes and videos with my long-distance pals. I'm currently in Albuquerque, NM and thoroughly enjoying exploring the deserts and mountains of the Southwest.
    `

    return (
        <section className='about-me-section'>
            <img src={'../../Images/climbing.jpg'} className='photo' alt='author in climbing gear celebrating with arms up on a ledge' />
            <div className='about-me-content'>
                <h2 className='section-title'>hi</h2>
                <h4 className='subtitle'>Here's a bit more about me</h4>
                <div className='blurb'> 
                    {readMore ? aboutMeInfo : `${aboutMeInfo.substring(0, 402)}...`}
                    <button 
                        className='read-more' 
                        onClick={()=> setReadMore(prevReadMore => !prevReadMore)}
                    >
                        {readMore ? 'show less' : 'read more'}
                    </button> 
                </div>
            </div>
        </section>
    )
}