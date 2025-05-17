
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

export const Education = () => {
    return (
        <div className='px-4 py-30 flex flex-col gap-5 items-center'>
            <div
                className=' text-center  text-[.8rem] font-bold text-[#27BAA9] bg-[#09202f] rounded-xl py-1 px-3  '>
                Education
            </div>
            <h1 className=' text-center text-white text-5xl font-bold'>Academic Background</h1>
            <p className='text-lg/7 max-w-190 text-center text-[#94a3b8] mb-9 '>
                My academic journey, courses, and educational achievements that have shaped my technical expertise.
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-9'>
                <div data-aos='fade-up' data-aos-duration="1000">
                    <div
                        className=' h-100 bg-[#212738] p-7 border-1 border-[#4E5260] flex flex-col gap-4 rounded-lg transition-transform tranform duration-500 ease-in-out hover:scale-108 hover:shadow-xl hover:shadow-cyan-400/20'>
                        <div className='flex gap-4 items-center'>
                            <div className='rounded-xl p-3 bg-[#1F3543] text-[1.5rem] text-[#2DD4BF]'>
                                <LuGraduationCap/>
                            </div>
                            <p className='text-white text-xl font-semibold'>Bachelor's in Computer Science</p>
                        </div>
                        <p className='text-white text-lg'>University of Algiers 1 Benyoucef Benkheda</p>
                        <div className='flex gap-5 items-center '>
                            <div className='flex gap-1  text-[0.95rem] text-[#94a3b8] self-center '>
                                <MdOutlineCalendarToday className='text-[1rem] mb-0.5 self-center '/>
                                2019 - 2023
                            </div>
                            <div className='flex gap-1  text-[0.95rem] text-[#94a3b8] self-center '>
                                <HiOutlineLocationMarker className='text-[1rem] mb-0.5 self-center '/>
                                Algiers, Algeria
                            </div>
                        </div>
                        <ul className="list-disc ms-5 text-[0.95rem] text-[#94a3b8] max-w-120">
                            <li className='mb-3'>Strong foundation in multiple programming languages such as Python,
                                JS, and Java
                            </li>
                            <li className='mb-3'>Core coursework includes Data Structures, Algorithms, Operating
                                Systems, Computer Networks, and Databases
                            </li>
                            <li className='mb-3'>Strong problem-solving skills with experience in algorithmic thinking
                                and computational logic
                            </li>
                        </ul>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-duration="1000" data-aos-delay="200">
                    <div
                         className=' h-100 bg-[#212738] p-7 flex flex-col gap-4 rounded-lg transition-transform tranform duration-500  hover:scale-108 ease-in-out hover:shadow-xl hover:shadow-cyan-400/20 '>
                        <div className='flex gap-4 items-center'>
                            <div className='rounded-xl p-3 bg-[#1F3543] text-[1.5rem] text-[#2DD4BF]'>
                                <LuGraduationCap/>
                            </div>
                            <p className='text-white text-xl font-semibold'>Master's in Data Science and Analytics</p>
                        </div>
                        <p className='text-white text-lg'>University of Algiers 1 Benyoucef Benkheda</p>
                        <div className='flex gap-5 items-center '>
                            <div className='flex gap-1  text-[0.95rem] text-[#94a3b8] self-center '>
                                <MdOutlineCalendarToday className='text-[1rem] mb-0.5 self-center '/>
                                2023 - 2025
                            </div>
                            <div className='flex gap-1  text-[0.95rem] text-[#94a3b8] self-center '>
                                <HiOutlineLocationMarker className='text-[1rem] mb-0.5 self-center '/>
                                Algiers, Algeria
                            </div>
                        </div>
                        <ul className="list-disc ms-5 text-[0.95rem] text-[#94a3b8] max-w-120">
                            <li className='mb-3'>Artificial Intelligence and Machine Learning</li>
                            <li className='mb-3'>Key courses include Data Visualisation, Big data, Machine Learning</li>
                            <li className='mb-3'>participating in projects related to AI/ML</li>
                        </ul>
                    </div>
                </div>


            </div>

        </div>
    );
};