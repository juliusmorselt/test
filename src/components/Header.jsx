import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from "react"

const Header = () => {
    
    useEffect(() => {
        AOS.init();
      }, [])
    
    return (
        <header className="Header w-full flex justify-center">
            <div data-aos="fade-left" className='w-[300px] text-white h-10 m-5 font-semibold flex absolute z-20 justify-center'>
                <div 
                className='w-[450px] flex justify-between'
                data-aos="fade-right"
                data-aos-delay="200">
                    <a 
                    className='hover:text-blue-500 hover:mb-5 transition duration-300 ease-in-out'
                    href="#about">About Me</a>
                    
                    <a 
                    className='hover:text-blue-500 hover:mb-5 transition duration-300 ease-in-out'
                    href="#projects">Projects</a>
                    
                    <a 
                    className='hover:text-blue-500 hover:mb-5 transition duration-300 ease-in-out'
                    href="#contact">Contact</a>
                </div>
            </div>
        </header>
    )
}

export default Header