
import Links from "./../data/Links";


export const Header = () => {
    return (
        <header className='bg-[#080e21] w-full py-5 px-4'>
            <div className='w-full xl:w-320 flex items-center justify-between mx-auto'>
               <h1 className='text-[#9b87f5] text-2xl font-extrabold tracking-wide'>ISM.</h1>
                <nav className=' hidden lg:flex gap-1 '>
                    {
                        Links.map((link) => (
                           <a key={link.name}
                              href={link.url}
                              className="px-4 py-1.5 relative
                                         after:content-[''] after:absolute after:left-0 after:bottom-0
                                         after:h-[.125rem] after:bg-[#9b87f5] after:w-0
                                         after:transition-all after:duration-300 after:ease-out
                                         hover:after:w-full
                                         text-white text-sm font-medium tracking-wide
                                         hover:text-[#9b87f5] transition-all duration-500 ease-out"
                           >
                               {link.name}
                           </a>
                        ))
                    }
                </nav>
            </div>
        </header>
    );
};