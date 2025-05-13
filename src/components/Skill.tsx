import type {FC} from "react";

export const Skill : FC<{progress : number  , name : string}> = ({progress , name }) => {
    return (
        <div
            className=' border-1 border-[#4E5260] bg-[#212738] rounded-lg p-6 flex flex-col items-center'>
            <div className='flex justify-between items-center w-full mb-2'>
                <h1 className='text-white font-bold text-[1.1rem]'>{name}</h1>
                <p className='text-sm text-[#94a3b8]'>{`${progress}%`}</p>
            </div>
            <div className="w-full h-2.5 bg-[#171529] rounded-lg">
                <div
                    className="h-2.5 bg-[#14b8a6] rounded-l-lg"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};