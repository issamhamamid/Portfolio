import { IoMdArrowForward } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import type {FC} from "react";



export const ProjectCard : FC<{name : string , description : string , tags : string[] , gh_link : string , image : string , delay : string}> = ({name , gh_link , tags , image , description , delay}) => {
    return (
        <div data-aos="fade-right" data-aos-duration = "1300" data-aos-delay = {delay} className='bg-[#27293b] flex flex-col rounded-lg p-0 border border-[#4E5260] overflow-hidden'>
            <div className='h-50 overflow-hidden'>
                <img className='w-full h-full object-cover rounded-t-lg transition-transform duration-400 ease-in-out hover:scale-108'
                     src={image}
                     alt='project image'/>
            </div>
            <div className='flex flex-col gap-4 p-5'>
                <p className='text-white font-bold text-[1.1rem] '>{name}</p>
                <p className='text-md font-semibold text-[#94a3b8] lg:h-45 xl:h-34'>{description}</p>
                <div className='flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <div key={tag}
                            className='text-center text-[.75rem] font-bold text-white bg-[#171529] rounded-xl py-1 px-3'>
                            {tag}
                        </div>
                    ))}

                </div>
                <div className='w-full flex justify-between items-center'>
                    <a className='flex gap-2 items-center text-[#2dd4bf] cursor-pointer'>
                        <span>View Pictures</span>
                        < IoMdArrowForward />
                    </a>
                    <a href={gh_link} className='flex  gap-2 font-bold hover:text-white cursor-pointer transition transition-hover duration-300 ease-out items-center text-[#94a3b8]'>
                        <FiGithub/>
                        <span>Source Code</span>
                    </a>
                </div>
            </div>

        </div>
    );
};