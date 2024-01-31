import {useState, useEffect} from 'react'
import PreviewCard from "./PreviewCard"
import data from '../projects'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

export default function Portfolio () {
    const [projects, setProjects] = useState(data)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = projects.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex ) {
            setIndex(0)
        }
    }, [index, projects])


   const gallery = projects.map((project, projectIndex) => {
        let position= 'nextSlide'

        if (projectIndex === index) {
            position = 'activeSlide'
        }
        if (
            projectIndex === index - 1
        ) {
            position= 'lastSlide'
        }

       return( 
        <PreviewCard  
            key={project.id} 
            className={`preview-card ${position}`}
            {...project}
       />)
   })

    return (
        <section className='gallery'>

            <h2 className='section-title'>projects</h2>

            <div className='container'>

                {gallery}
                
                <button 
                    className='prev' 
                    onClick={() => setIndex(prevIndex => prevIndex - 1)}
                >
                    <FiChevronLeft />   
                </button>
                <button 
                    className='next' 
                    onClick={() => setIndex(prevIndex => prevIndex + 1)}
                >
                    <FiChevronRight />
                </button>

            </div>
            
            
        </section>
    )
}