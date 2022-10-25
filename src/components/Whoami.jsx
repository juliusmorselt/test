import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from "react"
import Textblock from './Textblock';
import julius from '../assets/images/julius.jpg'

const Whoami = () => {
    
    useEffect(() => {
        AOS.init();
      }, [])
    
    return (
        <div className='w-full h-screen flex justify-center relative' id='about'>
            <div className='w-5/6 place-self-center'>
                <div data-aos='fade-right'>
                    <Textblock>
                        <h4>Who am I</h4>
                        <p className='mt-5'>Hi there, my name is Julius Morselt and I am a regular dude from the Netherlands. I have passions such as programming and making beautifull things in blender.</p>
                    </Textblock>
                </div>
                <div data-aos='fade-left' className="w-[350px] h-[350px] float-right rounded-md overflow-hidden">
                    <img src={julius} />
                </div>
            </div>
        </div>
        
    )
}

export default Whoami