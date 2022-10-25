import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from "react"
import Textblock from './Textblock';
import Card from './Card';

const Contact = () => {
    
    useEffect(() => {
        AOS.init();
      }, [])
    
    return (
        <div className='w-full h-screen flex justify-center' id='contact'>
            <div className='w-5/6 text-center flex flex-col justify-center' data-aos='fade-right'>
                <h1 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-500 pb-10'>Contact</h1>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-500 pb-10'>Hi! You can send me an email if you like!</h1>
                <form 
                    action="https://formsubmit.co/juliusmorselt@gmail.com" 
                    className='text-blue-600 grid grid-rows-5 grid-cols-2 gap-5 h-[300px] w-[500px] place-self-center'
                    method="POST">
                    
                    <input 
                        type="text" 
                        name='name' 
                        placeholder='Your Name'
                        className='col-span-2 row-span-1 rounded-lg p-3 border-purple-600'
                        required 
                    />
                    
                    <input 
                        type="email" 
                        name='email' 
                        placeholder='Your Email Address'
                        className='col-span-1 row-span-1 rounded-lg p-3 border-purple-600'
                        required 
                    />
                    <input 
                        type="text" 
                        name="_subject"
                        placeholder='Subject (Not required)'
                        className='col-span-1 row-span-1 rounded-lg p-3 border-purple-600'
                    ></input>
                    <input 
                        type="text" 
                        name='message' 
                        placeholder='Your Message'
                        className='col-span-2 row-span-2 rounded-lg p-3 border-purple-600'
                        required 
                    />
                    <input 
                        type="hidden"
                        name="_next"
                        value="https://juliusmorselt.netlify.app/"
                    />
                    <button 
                        type='submit'
                        className='col-span-1 bg-purple-600 rounded-lg'
                    >Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact