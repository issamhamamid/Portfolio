
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";



export const Footer = () => {
    return (
        <footer className='py-8 border-t border-[#171529] bg-[#080E21] w-full'>
            <div className='container mx-auto px-4 md:px-6'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className=' flex flex-col mb-4'>
                        <h1 className='text-[#9b87f5] text-2xl font-extrabold tracking-wide mb-2'>ISM.</h1>
                        <p className=' max-w-md text-[.8rem] text-[#94a3b8]'>Building innovative digital solutions with a focus on clean, efficient code and exceptional user experiences.</p>
                    </div>
                    <div className=' flex flex-col '>
                        <h1 className='text-white text-md font-bold mb-3 ml-auto'>Connect with me</h1>
                        <div className='flex gap-4'>
                            <a className='rounded-full bg-[#171529] p-3 items-center cursor-pointer transform transition-transform duration-300 hover:scale-110 text-[#94a3b8] hover:text-[#9b87f5]'>
                                <FiGithub className=' text-[1.1rem]'/>
                            </a>

                            <a className='rounded-full bg-[#171529] p-3 items-center cursor-pointer transform transition-transform duration-300 hover:scale-110 text-[#94a3b8]  hover:text-[#9b87f5]'>
                                <FiLinkedin className=' text-[1.1rem]'/>
                            </a>

                            <a className='rounded-full bg-[#171529] p-3 items-center cursor-pointer transform transition-transform duration-300 hover:scale-110 text-[#94a3b8] hover:text-[#9b87f5]'>
                                <FaRegEnvelope className=' text-[1.1rem]'/>
                            </a>


                        </div>
                    </div>
                </div>
                <p className=' tracking-wide text-[.8rem] text-[#94a3b8] text-center mt-4'>© 2025 Issam Hammamid. All
                    rights reserved.</p>
            </div>
        </footer>
    );
};