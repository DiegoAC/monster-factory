import { useEffect, useState } from 'react';

export default function ProgressBar() {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            setScrollPercentage(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-primary to-accent z-[100] transition-all duration-150 ease-out"
            style={{ width: `${scrollPercentage}%` }}
        />
    );
}
