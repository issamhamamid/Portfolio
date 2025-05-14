import { IoMdArrowForward } from "react-icons/io";
import { FiGithub } from "react-icons/fi";



export const ProjectCard = () => {
    return (
        <div className='bg-[#27293b] flex flex-col rounded-lg p-0 border border-[#4E5260]'>
            <div className='h-50 overflow-hidden'>
                <img className='w-full h-full object-cover rounded-t-lg '
                     src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
                     alt='project image'/>
            </div>
            <div className='flex flex-col gap-2 p-5'>
                <p className='text-white font-bold text-[1.1rem] '>Income Tax Fraud Detection</p>
                <p className='text-md font-semibold text-[#94a3b8]'>A system to detect fraudulent activities in income
                    tax filings using AI and machine learning.</p>
                <div className='flex gap-2'>
                    <div
                        className=' text-center  text-[.75rem] font-bold text-white bg-[#171529] rounded-xl py-1 px-3  '>
                        Projects
                    </div>
                    <div
                        className=' text-center  text-[.75rem] font-bold text-white bg-[#171529] rounded-xl py-1 px-3  '>
                        Projects
                    </div>
                    <div
                        className=' text-center  text-[.75rem] font-bold text-white bg-[#171529] rounded-xl py-1 px-3  '>
                        Projects
                    </div>
                </div>
                <div className='w-full flex justify-between items-center'>
                    <a className='flex gap-2 items-center text-[#2dd4bf]'>
                        <span>View Details</span>
                        < IoMdArrowForward />
                    </a>
                    <a className='flex gap-2 font-bold hover:text-white cursor-pointer transition transition-hover duration-300 ease-out items-center text-[#94a3b8]'>
                        <FiGithub/>
                        <span>Source Code</span>
                    </a>
                </div>
            </div>

        </div>
    );
};