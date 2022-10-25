import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from "react"
import Textblock from './Textblock';

const Hero = () => {
    
    useEffect(() => {
        AOS.init();
      }, [])
    
    return (
        <div className='w-full h-screen flex justify-center relative'>
            <div className='w-5/6 text-center h-[40px] place-self-center'>
                <div data-aos='fade-right'>
                    <h1 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-500 pb-3'>Julius Morselt</h1>
                    <h1 className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-500'>
                        Responsiveness for tablets and phones is coming soon. <br/>
                        When this site is completely ready I will post it on LinkedIn.
                    </h1>
                </div>
            </div>
        </div>
        
    )
}

export default Hero