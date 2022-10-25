import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from "react"
import Textblock from './Textblock';
import Card from './Card';

const Projects = () => {
    
    useEffect(() => {
        AOS.init();
      }, [])
    
    return (
        <div className='w-full h-screen flex justify-center relative' id='projects'>
            <div className='w-5/6 text-center place-self-center'>
                <div data-aos='fade-right'>
                    <h1 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-500 pb-3'>Projects</h1>
                    <h1 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-500 italic'>
                        Working on a lot of projects locally so all of these are coming soon...
                    </h1>
                </div>
            </div>
        </div>
        
    )
}

export default Projects