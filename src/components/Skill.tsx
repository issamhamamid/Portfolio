import { type FC, useState, useEffect, useRef } from "react";
import * as React from "react";

export const Skill: FC<{
    progress: number;
    name: string;
    Icon: React.ComponentType<{ width: number; height: number }>;
}> = ({ progress: initialProgress, name, Icon }) => {
    const [progress, setProgress] = useState(0); // Start at 0 for animation
    const skillRef = useRef<HTMLDivElement>(null); // Ref for the Skill div

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Trigger animation when div is in view
                    setProgress(initialProgress);
                    // Optional: Stop observing after animation to avoid re-triggering
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the div is visible
            }
        );

        if (skillRef.current) {
            observer.observe(skillRef.current);
        }

        // Cleanup observer on unmount
        return () => {
            if (skillRef.current) {
                observer.unobserve(skillRef.current);
            }
        };
    }, [initialProgress]);

    return (
        <div data-aos="fade-right" data-aos-delay="20" data-aos-duration = "1700"
            ref={skillRef}
            className="border border-[#4E5260] bg-[#212738] rounded-lg p-6 flex flex-col items-center"
        >
            <div className="flex justify-between items-center w-full mb-2">
                <div className="flex gap-2 items-center">
                    <Icon width={25} height={25} />
                    <h1 className="text-white font-bold text-[1.1rem]">{name}</h1>
                </div>
                <p className="text-sm text-[#94a3b8]">{`${progress}%`}</p>
            </div>
            <div className="w-full h-2.5 bg-[#171529] rounded-lg">
                <div
                    className="h-2.5 bg-[#14b8a6] rounded-l-lg transition-all duration-900 ease-in-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};