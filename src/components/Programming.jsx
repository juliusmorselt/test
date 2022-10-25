import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from "react"
import Textblock from './Textblock';
import { Icon } from '@iconify/react';

const Programming = () => {
    
    useEffect(() => {
        AOS.init();
      }, [])
    
    return (
        <div className='w-full h-screen flex justify-center relative'>
            <div className='w-5/6 place-self-center'>
                <div data-aos='fade-right'>
                    <Textblock>
                        <h4>Programming Experience</h4>
                        <p className='mt-5'>I met HTML and CSS back in 2018 when I had to make a website for a school assignment. I quickly learned how to do it and got a bit excited to this kind of stuff. For the first few weeks I felt like a wizzard being the only one in my class knowing HTML and CSS since its a media design study. After that I got inspired by other programming languages such as JavaScript and PHP. A couple of months have past and I started looking at making games which means that I got experience with C-Sharp for a bit. When it got to 2019 I started trying out NodeJS and Flutter. I throw most of the things out so I don't have examples for these but I just made a weather application with Flutter to see wether I like the language or not. After that I tried python, same story, trew most of it away and the other bit is lost in the universe forever. Fast forward to 2022, I am in my last year of my study and I am also working as a trainee frontend developer. Also, the icons you see below are the ones that I am most familiar with.</p>
                    </Textblock>
                    <div 
                    data-aos='fade-right'
                    className='h-[50px] w-[600px] grid grid-cols-10 gap-2d m-5 text-5xl'>
                        <Icon icon="vscode-icons:file-type-html"/>
                        <Icon icon="vscode-icons:file-type-css" />
                        <Icon icon="vscode-icons:file-type-js" />
                        <Icon icon="vscode-icons:file-type-tailwind" />
                        <Icon icon="vscode-icons:file-type-reactjs" />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Programming