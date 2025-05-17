import {FaDownload} from "react-icons/fa6";
import { LuBriefcase } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";

export const Experience = () => {
    return (
        <div className='px-4 py-30 flex flex-col gap-5 items-center'>
            <div
                className=' text-center  text-[.8rem] font-bold text-[#9B87F5] bg-[#171B37] rounded-xl py-1 px-3  '>
                Resume
            </div>
            <h1 className=' text-center text-white text-5xl font-bold'>Professional Experience</h1>
            <p className='text-lg/7 max-w-190 text-center text-[#94a3b8] mb-6 '>
                I'm an aspiring developer specializing in web development. My goal is to leverage my knowledge to
                create innovative solutions for real-world problems.
            </p>
            <a href='/Resume.pdf' download>
                <button
                    className='flex items-center gap-2 mb-8 rounded-lg text-center text-white  px-7 py-3 bg-[#9B87F5] cursor-pointer transform transition-transform duration-300 hover:scale-108'>
                    <FaDownload/>
                    Download Resume
                </button>
            </a>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col w-full items-center'>
                <div className="p-6 rounded-lg bg-[#212738] border-1 border-[#4E5260] w-full xl:w-[1270px] mb-7">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4 ">
                        <div className="flex-1">
                            <div className="flex items-start">
                                <div className="p-2 rounded-full mr-4 hidden md:block bg-[#2D304B] "
                                >
                                    <LuBriefcase className='text-2xl text-[#9B87F5]'/>
                                </div>
                                <div className='text-white'><h3 className="text-xl  font-semibold">Data Science
                                    Intern</h3>
                                    <div className="text-lg mt-1">Djezzy</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-sm text-[#94a3b8] md:text-right">Nov 2024 -
                            May 2025
                        </div>
                    </div>
                    <p className=" text-[#94a3b8] mb-4 pl-0 md:pl-12"> Integrated Djezzy's Innov Tech Project where i contributed to the development of an internal HR
                        chatbot, aimed at assisting employees with HR-related queries.</p>
                    <div className="pl-0 md:pl-12"><h4 className=" text-white font-medium mb-2">Key
                        Responsibilities:</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <FaRegCircleCheck className='text-xl text-[#9B87F5]'/>
                                <span className="text-[#94a3b8]">Generated Q&A datasets from Djezzy’s HR documents to boost chatbot accuracy and relevance</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaRegCircleCheck className='text-xl text-[#9B87F5]'/>
                                <span className="text-[#94a3b8]">Engineered Large Language Models (LLMs), including Qwen and LLaMA3.2, using
                                                                techniques like RAG and fine-tuning with QLoRA </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaRegCircleCheck className='text-xl text-[#9B87F5]'/>
                                <span className="text-[#94a3b8]">Developed a full-stack platform with React and Flask for employee HR queries</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaRegCircleCheck className='text-xl text-[#9B87F5]'/>
                                <span className="text-[#94a3b8]">Dockerized the app for easy deployment and cross-environment scalability</span>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="p-6 rounded-lg bg-[#212738] border-1 border-[#4E5260] w-full xl:w-[1270px]">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4 ">
                        <div className="flex-1">
                            <div className="flex items-start">
                                <div className="p-2 rounded-full mr-4 hidden md:block bg-[#2D304B] "
                                >
                                    <LuBriefcase className='text-2xl text-[#9B87F5]'/>
                                </div>
                                <div className='text-white'><h3 className="text-xl  font-semibold">Web Develpment
                                    Intern</h3>
                                    <div className="text-lg mt-1">Djezzy</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-sm text-[#94a3b8] md:text-right">Mar 2023 – Jul 2023

                        </div>
                    </div>
                    <p className=" text-[#94a3b8] mb-4 pl-0 md:pl-12">Contributed with Djezzy's data team to the development of a full-stack dashboard web application</p>
                    <div className="pl-0 md:pl-12"><h4 className=" text-white font-medium mb-2">Key
                        Responsibilities:</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <FaRegCircleCheck className='text-xl text-[#9B87F5]'/>
                                <span className="text-[#94a3b8]">Processed and analyzed large datasets to improve data quality and insight reliability</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaRegCircleCheck className='text-xl text-[#9B87F5]'/>
                                <span className="text-[#94a3b8]">Contributed in building a full-stack dashboard using Spring Boot , React and Postgres  </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaRegCircleCheck className='text-xl text-[#9B87F5]'/>
                                <span className="text-[#94a3b8]">Created interactive visualizations to support data-driven decisions across departments
                                </span>
                            </li>

                        </ul>
                    </div>
                </div>




            </div>
        </div>
    );
};