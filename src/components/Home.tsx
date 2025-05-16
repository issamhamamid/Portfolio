
import { FiArrowRight } from "react-icons/fi";
import { FaDownload } from "react-icons/fa6";
import {Python , PostgreSQL , React_Icon  , Docker , JavaScript} from "./../data/Icons";
import { LuBrainCircuit } from "react-icons/lu";
import { FaCodeBranch } from "react-icons/fa6";
import {useEffect, useState} from "react";
import {Skill} from "./Skill.tsx";
import {skills} from "./../data/Skills.ts";
import {ProjectCard} from "./ProjectCard.tsx";
import {recent_projects} from "../data/Projects.ts";
import { FaRegStar } from "react-icons/fa";

export const Home = () => {
    const [index, setIndex] = useState(0);
    const roles = ["Web Developer", "Data Analyst", "AI & ML Enthusiast"];
    useEffect(() => {
        const interval = setInterval(()=>{
            setIndex(prevIndex => (prevIndex + 1) % roles.length);
        }, 3000)

        return ()=>{
            clearInterval(interval);
        }
    }, []);

    return (
          <>
           <section className='bg-[#080e21] h-screen flex items-center py-25 px-4 relative overflow-hidden'>
                <div  className='w-full xl:w-340  mx-auto bg '>
                    <div className=' flex'>
                        <div data-aos="fade-up" data-aos-duration="1000"    className='w-1/2 flex flex-col'>
                                <div className=' mb-1 text-center w-45 text-[.8rem] font-bold text-[#27BAA9] bg-[#09202f] rounded-xl p-0.5 '>
                                    Welcome to my portfolio
                                </div>
                                <span className=' leading-none text-[2.5rem] xl:text-[3rem] mb-2 bg-clip-text text-transparent font-bold  bg-gradient-to-r from-teal-400 to-amber-400'>Issam Hammamid</span>
                                <h2 key={roles[index]} className='  slide-in text-[1.9rem] font-semibold text-[#94a3b8] mb-5'>{roles[index]}</h2>
                                <p className=' w-100 md:w-120 xl:w-130 text-lg/7 text-[#94a3b8] '>
                                    Passionate about programming and software engineering.
                                    I specialize in web development,
                                    combining analytical thinking with creative implementation. Always seeking new challenges
                                    to expand my technical expertise and create impactful applications that solve real-world problems.
                                </p>
                                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" className='flex gap-4 mt-8 w-100'>
                                    <button className='  gap-2 flex items-center  rounded-lg text-center text-white px-5 py-2.5 bg-[#27BAA9] cursor-pointer transform transition-transform duration-300 hover:scale-108'>
                                        Get in Touch
                                        <FiArrowRight/>
                                    </button>

                                    <button className='  flex items-center gap-2  rounded-lg text-center text-white  px-5 py-2.5 bg-[#171529] cursor-pointer transform transition-transform duration-300 hover:scale-108'>
                                        <FaDownload/>
                                        Download CV
                                    </button>

                                </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400"  className=' hidden lg:grid p-5 w-1/2  bg-gradient-to-br from-teal-500/20 to-transparent rounded-lg border-1 border-[#4E5260]  grid-cols-6 gap-4'>

                                <div className=' hover:scale-105 transform transition duration-300 ease-in-out border border-[#6b8d92] hover:shadow-xl hover:shadow-cyan-400/20 flex flex-col bg-[#456D73] rounded-lg py-1 lg:py-3 md:py-4  xl:py-6 px-5 text-white text-lg font-bold col-span-3 '>
                                    <div className='flex items-center gap-2 mb-1'>
                                        <JavaScript height={25} width={25}/>
                                        <h1>Javascript</h1>

                                    </div>
                                    <p className='text-sm text-[#94a3b8] font-semibold'>Frontend & backend
                                        development</p>
                                </div>

                            <div
                                className=' hover:scale-105 transform transition duration-300 ease-in-out border border-[#6b8d92] hover:shadow-xl hover:shadow-cyan-400/20  flex flex-col  bg-[#456D73] rounded-lg py-1 lg:py-3 md:py-4  xl:py-6 px-5 text-white text-lg font-bold col-span-3'>
                                <div className='mb-1 flex items-center gap-2'>
                                    <Python height={27} width={27}/>
                                    <h1 >Python</h1>
                                </div>
                                <p className='text-sm text-[#94a3b8] font-semibold'>Web scraping and Machine
                                    learning</p>
                            </div>

                            <div
                                className=' hover:scale-105 transform transition duration-300 ease-in-out border border-[#6b8d92] hover:shadow-xl hover:shadow-cyan-400/20 flex flex-col  bg-[#456D73] rounded-lg py-5 px-5 text-white text-lg font-bold col-span-2'>
                                <div className='mb-1 flex items-center gap-2'>
                                    <React_Icon width={30} height={30}/>
                                    <h1 >React.js</h1>
                                </div>
                                <p className='text-sm text-[#94a3b8] font-semibold'>UI Library</p>
                            </div>

                                <div className=' hover:scale-105 transform transition duration-300 ease-in-out border border-[#6b8d92] hover:shadow-xl hover:shadow-cyan-400/20 flex flex-col  bg-[#456D73] rounded-lg py-5 px-5 text-white text-lg font-bold col-span-2'>
                                    <div className='mb-1 flex items-center gap-2'>
                                            <PostgreSQL width={30} height={30}/>
                                            <h1 className='mb-1 flex items-center gap-2'>SQL</h1>
                                    </div>
                                         <p className='text-sm text-[#94a3b8] font-semibold'>Database</p>
                                </div>

                                 <div className=' hover:scale-105 transform transition duration-300 ease-in-out border border-[#6b8d92] hover:shadow-xl hover:shadow-cyan-400/20 flex flex-col  bg-[#456D73] rounded-lg py-3 px-5 text-white text-lg font-bold col-span-2'>
                                     <div className='mb-1 flex items-center gap-2'>
                                            <FaCodeBranch className='text-2xl text-[#2DD4BF]'/>
                                         <h1>API design</h1>
                                     </div>
                                     <p className='text-sm text-[#94a3b8] font-semibold'>Web Sockets and REST</p>
                                 </div>

                            <div
                                className=' hover:scale-105 transform transition duration-300 ease-in-out border border-[#6b8d92] hover:shadow-xl hover:shadow-cyan-400/20 flex flex-col  bg-[#456D73] rounded-lg py-1 lg:py-3 md:py-4  xl:py-6 px-5 text-white text-lg font-bold col-span-3'>
                                <div className='mb-1 flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                                         height="30" viewBox="0 0 48 48">
                                        <path fill="#21a366"
                                              d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path>
                                             <path fill="#21a366"
                                                   d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path>
                                         </svg>
                                         <h1>NodeJS</h1>
                                     </div>
                                     <p className='text-sm text-[#94a3b8] font-semibold'>Backend Framework</p>
                                 </div>

                            <div
                                className=' hover:scale-105 transform transition duration-300 ease-in-out border border-[#6b8d92] hover:shadow-xl hover:shadow-cyan-400/20 flex flex-col  bg-[#456D73] rounded-lg py-1 lg:py-3 md:py-4  xl:py-6 px-5 text-white text-lg font-bold col-span-3'>
                                <div className='mb-1 flex items-center gap-2'>
                                    <LuBrainCircuit  className='text-2xl text-[#2DD4BF]'/>
                                    <h1>AI & Machine Learning</h1>
                                </div>
                                <p className='text-sm text-[#94a3b8] font-semibold'>Model development & deployment</p>
                            </div>

                            <div
                                className=' hover:scale-105 transform transition duration-300 ease-in-out border border-[#6b8d92] hover:shadow-xl hover:shadow-cyan-400/20 flex flex-col  bg-[#456D73] rounded-lg py-6 px-5 text-white text-lg font-bold col-span-3'>
                                <div className='mb-1 flex items-center gap-2'>
                                    <Docker width={30} height={30}/>
                                    <h1>Devops</h1>
                                </div>
                                <p className='text-sm text-[#94a3b8] font-semibold'>Docker and CD/CI Knowledge</p>
                            </div>

                            <div
                                className=' hover:scale-105 transform transition duration-300 ease-in-out border border-[#6b8d92] hover:shadow-xl hover:shadow-cyan-400/20 flex flex-col  bg-[#456D73] rounded-lg py-6 px-5 text-white text-lg font-bold col-span-3'>
                                <div className='mb-1 flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                         viewBox="0 0 800 600" id="odoo">
                                        <path fill="#a24689" d="M0 0h800v600H0z"></path>
                                        <g fill="#fff">
                                            <path
                                                d="M166.205 250.931c10.126 0 19.689 2.016 28.684 6.046 8.991 4.03 16.897 9.458 23.721 16.278 6.821 6.822 12.248 14.782 16.279 23.876 4.03 9.101 6.046 18.813 6.046 29.147 0 10.34-1.967 20.001-5.892 28.993-3.93 8.992-9.254 16.899-15.97 23.721-6.72 6.821-14.627 12.199-23.721 16.124-9.1 3.931-18.915 5.893-29.458 5.893-10.339 0-20.053-1.86-29.147-5.581-9.099-3.722-17.054-8.939-23.876-15.659-6.82-6.716-12.199-14.622-16.124-23.722-3.929-9.095-5.892-19.018-5.892-29.769 0-10.334 1.909-20 5.736-28.992 3.822-8.992 9.146-16.846 15.97-23.564 6.821-6.717 14.83-12.095 24.031-16.124 9.196-4.032 19.07-6.251 29.613-6.667zm-.31 30.697c-5.998 0-11.734 1.14-17.209 3.411-5.479 2.277-10.232 5.427-14.265 9.458-4.03 4.03-7.237 8.735-9.611 14.108-2.379 5.378-3.566 11.27-3.566 17.674 0 5.998 1.188 11.735 3.566 17.21 2.374 5.479 5.581 10.286 9.611 14.419 4.031 4.138 8.784 7.394 14.265 9.768 5.475 2.379 11.211 3.565 17.209 3.565a42.803 42.803 0 0 0 17.21-3.565c5.475-2.374 10.231-5.63 14.264-9.768 4.031-4.133 7.233-8.938 9.612-14.419a42.814 42.814 0 0 0 3.564-17.21c-.619-12.193-4.961-22.479-13.021-30.853-8.063-8.372-18.504-12.971-31.318-13.8l-.311.002zM382.019 203.179c3.513-.204 6.821 1.19 9.923 4.186 3.101 2.999 4.65 6.255 4.65 9.768V325.97c0 10.131-2.068 19.743-6.201 28.837-4.139 9.1-9.719 17.055-16.744 23.876-7.03 6.822-15.039 12.249-24.031 16.279s-18.45 6.047-28.372 6.047c-10.131 0-19.743-1.962-28.838-5.893-9.099-3.925-17.054-9.303-23.876-16.124-6.821-6.82-12.248-14.776-16.279-23.876-4.03-9.094-6.046-18.809-6.046-29.146 0-11.163 1.808-20.979 5.427-29.458 3.613-8.475 9.04-16.435 16.278-23.876v.311c7.646-7.233 16.071-12.714 25.271-16.435 9.195-3.722 18.652-5.581 28.372-5.581 5.784 0 12.659.93 20.62 2.791 7.955 1.859 15.862 5.479 23.722 10.853v-45.892c0-2.064.411-4.031 1.24-5.893a20.215 20.215 0 0 1 3.256-5.115 13.561 13.561 0 0 1 4.806-3.566c1.86-.823 3.722-1.134 5.582-.93h1.24zM365.895 325.97c0-5.581-1.192-11.058-3.566-16.436a48.806 48.806 0 0 0-9.768-14.418 47.8 47.8 0 0 0-14.265-10.078c-5.378-2.479-11.061-3.721-17.054-3.721a42.838 42.838 0 0 0-17.21 3.564c-5.479 2.38-10.231 5.582-14.264 9.613-4.03 4.03-7.238 8.788-9.612 14.264-2.379 5.479-3.564 11.217-3.564 17.21 0 6.201 1.187 11.991 3.564 17.364 2.374 5.378 5.582 10.077 9.612 14.107 4.031 4.031 8.784 7.238 14.264 9.612 5.477 2.379 11.212 3.565 17.21 3.565 5.993 0 11.676-1.188 17.054-3.565 5.373-2.374 10.127-5.581 14.265-9.612 4.133-4.03 7.389-8.729 9.768-14.107 2.373-5.37 3.566-11.16 3.566-17.362zM480.623 250.931c10.127 0 19.689 2.016 28.684 6.046 8.992 4.03 16.898 9.458 23.721 16.278 6.821 6.822 12.248 14.782 16.279 23.876 4.031 9.101 6.046 18.813 6.046 29.147 0 10.34-1.967 20.001-5.892 28.993-3.93 8.992-9.254 16.899-15.97 23.721-6.72 6.821-14.627 12.199-23.721 16.124-9.099 3.931-18.915 5.893-29.458 5.893-10.339 0-20.053-1.86-29.146-5.581-9.1-3.722-17.055-8.939-23.877-15.659-6.82-6.716-12.198-14.622-16.124-23.722-3.929-9.095-5.892-19.018-5.892-29.769 0-10.334 1.909-20 5.736-28.992 3.822-8.992 9.146-16.846 15.97-23.564 6.821-6.717 14.83-12.095 24.031-16.124 9.197-4.032 19.07-6.251 29.613-6.667zm-.31 30.697c-5.998 0-11.733 1.14-17.209 3.411-5.479 2.277-10.231 5.427-14.264 9.458-4.031 4.03-7.238 8.735-9.612 14.108-2.379 5.378-3.566 11.27-3.566 17.674 0 5.998 1.188 11.735 3.566 17.21 2.374 5.479 5.581 10.286 9.612 14.419 4.03 4.138 8.784 7.394 14.264 9.768 5.476 2.379 11.211 3.565 17.209 3.565a42.803 42.803 0 0 0 17.21-3.565c5.475-2.374 10.232-5.63 14.264-9.768 4.031-4.133 7.233-8.938 9.612-14.419a42.815 42.815 0 0 0 3.565-17.21c-.62-12.193-4.961-22.479-13.022-30.853-8.063-8.372-18.504-12.971-31.317-13.8l-.312.002zM638.142 250.931c10.126 0 19.689 2.016 28.683 6.046 8.992 4.03 16.898 9.458 23.722 16.278 6.82 6.822 12.248 14.782 16.278 23.876 4.031 9.101 6.046 18.813 6.046 29.147 0 10.34-1.967 20.001-5.891 28.993-3.93 8.992-9.254 16.899-15.97 23.721-6.72 6.821-14.627 12.199-23.722 16.124-9.099 3.931-18.914 5.893-29.457 5.893-10.34 0-20.054-1.86-29.147-5.581-9.099-3.722-17.054-8.939-23.876-15.659-6.821-6.716-12.199-14.622-16.124-23.722-3.929-9.095-5.892-19.018-5.892-29.769 0-10.334 1.908-20 5.735-28.992 3.823-8.992 9.147-16.846 15.97-23.564 6.821-6.717 14.83-12.095 24.031-16.124 9.197-4.032 19.071-6.251 29.614-6.667zm-.31 30.697c-5.998 0-11.734 1.14-17.209 3.411-5.479 2.277-10.232 5.427-14.265 9.458-4.03 4.03-7.237 8.735-9.612 14.108-2.379 5.378-3.565 11.27-3.565 17.674 0 5.998 1.188 11.735 3.565 17.21 2.375 5.479 5.582 10.286 9.612 14.419 4.031 4.138 8.784 7.394 14.265 9.768 5.475 2.379 11.211 3.565 17.209 3.565a42.798 42.798 0 0 0 17.209-3.565c5.476-2.374 10.232-5.63 14.265-9.768 4.03-4.133 7.233-8.938 9.612-14.419a42.831 42.831 0 0 0 3.564-17.21c-.62-12.193-4.961-22.479-13.023-30.853-8.062-8.372-18.502-12.971-31.316-13.8l-.311.002z"></path>
                                        </g>
                                    </svg>
                                    <h1>Odoo</h1>
                                </div>
                                <p className='text-sm text-[#94a3b8] font-semibold'>ERP Knowledge</p>
                            </div>


                        </div>
                    </div>
                </div>
            <div className='absolute  top-1/3 -left-20 w-72 h-72 bg-amber-500/20 rounded-full filter blur-3xl opacity-30 blob '></div>
            <div className='absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-60 h-60 bg-rose-500/20 rounded-full filter blur-3xl opacity-30 blob'></div>
           </section>
           <section className='flex flex-col items-center gap-4 bg-[#080e21] py-20 px-4'>
                  <div
                      className=' text-center  text-[.8rem] font-bold text-[#27BAA9] bg-[#09202f] rounded-xl py-1 px-3  '>
                      Skills
                  </div>
                  <h1 className=' text-white text-4xl font-bold'>Tech Stack</h1>
                  <p className='text-md/7 text-[#94a3b8] mb-9 '>
                      A collection of technologies I work with to build web applications and solve complex problems.
                  </p>
               <div   data-aos-duration="1500"  className=' grid lg:grid-cols-2 grid-cols-1 gap-7  w-full lg:w-3xl'>
                   {skills.map((skill)=>{
                       return <Skill key={skill.name} {...skill}/>
                   })}
               </div>
           </section>
              <section className='flex flex-col items-center gap-4 bg-[#0f1124] py-20 px-4'>
                  <div
                      className=' text-center  text-[.8rem] font-bold text-[#27BAA9] bg-[#09202f] rounded-xl py-1 px-3  '>
                      Projects
                  </div>
                  <h1 className=' text-white text-4xl font-bold'>Featured Projects</h1>
                  <p className='text-md/7 text-[#94a3b8] mb-9 '>
                      A selection of my recent personal projects.
                  </p>
                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 w-full 2xl:w-340 mb-6'>
                      {recent_projects.map((recent_project , index)=>{
                          return <ProjectCard delay={(index*50).toString()}  key={ recent_project.name} {...recent_project}/>
                      })}
                  </div>
                  <button data-aos="zoom-in" data-aos-delay = "200" data-aos-duration="1000"
                      className='  gap-2 flex items-center  rounded-lg text-center text-white px-5 py-2.5 bg-[#27BAA9] cursor-pointer '>
                      View All Projects
                      <FiArrowRight/>
                  </button>
              </section>
              <section className='bg-[#080E21] px-4 py-20 flex flex-col items-center'>
                  <div data-aos = "zoom-in" data-aos-duration="1000"
                      className=' max-w-4xl bg-[#212738] border border-[#6b8d92] flex flex-col gap-5 items-center py-7 px-10 rounded-lg'>
                      <div className='flex flex-col items-center p-3 rounded-full bg-[#1F3543]'>
                          <FaRegStar className='text-[#2DD4BF] text-[2rem]'/>
                      </div>
                      <h1 className='text-3xl font-bold text-white'>Let's Work Together</h1>
                      <p className='text-center max-w-4/5 text-md font-semibold text-[#94a3b8]'>I'm currently available to work and open to new opportunities. If you have a project in mind or want to
                          collaborate, let's connect!</p>
                      <button className=' gap-2 flex items-center  rounded-lg text-center text-white px-7 py-4 bg-[#27BAA9] cursor-pointer '>
                          Get In Touch
                          <FiArrowRight/>
                      </button>
                  </div>
              </section>
          </>
    );
};