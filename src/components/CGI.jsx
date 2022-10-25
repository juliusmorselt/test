import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from "react"
import Textblock from './Textblock';


const CGI = () => {
    
    useEffect(() => {
        AOS.init();
      }, [])
    
    return (
        <div className='w-full h-screen flex justify-center relative'>
            <div className='w-5/6 place-self-center'>
                <div data-aos='fade-right'>
                    <Textblock>
                        <h4>CGI Experience</h4>
                        <p className='mt-5'>My 3d experience started in 2019 when I had my first class in 3d animation. I've been working alot in Blender to make cool looking renders. I saved almost everything throughout the years. I had one internship where I worked with Unreal Engine 4. That was my first experience with Unreal Engine in general. Since july 2022 I've been working with Unreal Engine 5.</p>
                    </Textblock>
                </div>
            </div>
        </div>
        
    )
}

export default CGI