'use client';

import { useEffect, useState } from "react";

export function useCountUp(target, start, duration = 1200) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!start) return;

        let current = 0;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            current += increment;

            if (current >= target) {
                setValue(target);
                clearInterval(timer);
            } else {
                setValue(Math.floor(current));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [start, target, duration]);

    return value;
}