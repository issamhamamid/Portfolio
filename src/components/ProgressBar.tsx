import type {FC} from "react";

export const ProgressBar : FC<{progress : number}> = ({progress}) => {
    return (
        <>{progress}</>
    );
};