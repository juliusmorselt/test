import { Icon } from '@iconify/react';

const Footer = () => {
    
    return (
        <div className='w-full flex justify-center p-10' id='socials'>
            <div className='w-[150px] grid grid-cols-2 gap-2 text-5xl text-white'>
                <a target="_blank" href="https://github.com/juliusmorselt"><Icon icon="akar-icons:github-fill" /></a>
                <a target="_blank"href="https://www.linkedin.com/in/juliusmorselt/"><Icon icon="akar-icons:linkedin-box-fill" /></a>
            </div>
        </div>
    )
}

export default Footer