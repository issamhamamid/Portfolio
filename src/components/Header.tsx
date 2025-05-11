
import Links from "./../data/Links";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import {useEffect, useState} from "react";
import clsx from "clsx";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('resize' , ()=>{
            if(window.innerWidth > 1024){
                setIsOpen(false);
            }

            return ()=>{
                window.removeEventListener('resize' , () => {});
            }
        })
    }, []);
    return (
        <header className={clsx('bg-[#080e21] w-full py-5 px-4 fixed top-0 ' , {'h-screen' : isOpen})}>
            <div className='w-full xl:w-340 px-6 flex items-center justify-between mx-auto'>
               <h1 className='text-[#9b87f5] text-2xl font-extrabold tracking-wide'>ISM.</h1>
                <nav className={clsx(' hidden lg:flex gap-1', {'flex-col': isOpen})}>
                    {
                        Links.map((link) => (
                            <a key={link.name}
                               href={link.url}
                               className="px-4 py-1.5 relative
                                         after:content-[''] after:absolute after:left-0 after:bottom-0
                                         after:h-[.125rem] after:bg-[#9b87f5] after:w-0
                                         after:transition-all after:duration-500 after:ease-out
                                         hover:after:w-full
                                         text-white text-sm font-medium tracking-wide
                                         hover:text-[#9b87f5] transition-all duration-500 ease-out"
                            >
                                {link.name}
                            </a>

                        ))
                    }
                </nav>
                {
                    !isOpen ? <RxHamburgerMenu onClick={()=>{setIsOpen(true)}} className='lg:hidden text-white text-2xl cursor-pointer'/>
                        : <IoMdClose onClick={()=>{setIsOpen(false)}} className='lg:hidden text-white text-2xl cursor-pointer'/>
                }
            </div>
            {isOpen && (
                <nav className='lg:hidden flex flex-col gap-1.5 mt-7'>
                    {
                        Links.map((link) => (
                            <a key={link.name}
                               href={link.url}
                               className="py-1.5 relative
                                         after:content-[''] after:absolute after:left-0 after:bottom-0
                                         after:h-[.125rem] after:bg-[#9b87f5] after:w-0
                                         after:transition-all after:duration-300 after:ease-out
                                         hover:after:w-full
                                         text-white text-xl font-medium tracking-wide
                                         hover:text-[#9b87f5] transition-all duration-500 ease-out"
                            >
                                {link.name}
                            </a>

                        ))
                    }
                </nav>
            )}
        </header>
    );
};