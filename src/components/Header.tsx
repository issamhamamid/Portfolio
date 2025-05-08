
import Links from "./../data/Links";


export const Header = () => {
    return (
        <header className='bg-[#080e21] w-full py-5 px-2'>
            <div className='w-320 flex items-center justify-between mx-auto'>
               <h1 className='text-[#9b87f5] text-2xl font-bold'>ISM.</h1>
                <nav className='flex gap-8'>
                    {
                        Links.map((link) => (
                           <a key={link.name}
                              href={link.url}
                              className = "text-white text-sm font-medium"
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