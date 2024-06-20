import { useState } from "react";

export default function useDebounce(func: Function, delay: number) {
    const [timer, setTimer] = useState<number>();
    
    return function (): void {
        clearTimeout(timer);
        const timerTimeout = setTimeout(func, delay);
        setTimer(timerTimeout);
    }
}