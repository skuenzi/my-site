import React, {useState} from 'react'
import {FaRegWindowClose} from 'react-icons/fa'

export default function PreviewCard (props) {
    const [showProjectPage, setShowProjectPage] = useState(false)

    return (
            <div className={`${props.className} ${showProjectPage && 'large'}`}
            
            >
                <img src={props.img} alt={props.title} className='preview-card-img'/>
                <h4 className='preview-card-title'>{props.title}</h4>
                <p className={`preview-card-description`} onClick={() => setShowProjectPage(prevState => !prevState)}>{props.description}</p>
                <div className={`project-page ${showProjectPage ? 'show' : 'hidden'}`}>
                        <button className='close-icon-button' onClick={() => setShowProjectPage(prevState => !prevState)}><FaRegWindowClose className='close-icon'/></button>
                        <img src={props.img} alt='portfolio' className="project-page-img"/>
                        <h3 className='project-page-title'>{props.title}</h3>
                        <h4 className='project-page-tech'><span className='project-page-tech-span'>built with:</span> {props.techList}</h4>
                        {props.deployedSite && <button className='project-page-button deployedsite-button' onClick={() => window.open(props.deployedSite)}>try it out</button>    }
                                            
                        <p className='project-page-info'>{props.moreInfo}</p>
                        <button className='project-page-button' onClick={() => window.open(props.sourceCode)}>source code</button>
                </div>
            </div> 
        
    )
}