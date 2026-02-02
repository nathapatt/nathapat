import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
}

export const RevealOnScroll = ({ children, className }: RevealOnScrollProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            {
                threshold: 0.1, // Trigger when 10% visible
                rootMargin: "0px 0px -50px 0px" // Offset slightly triggers earlier/later
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={cn(
                "transition-all duration-1000",
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20",
                className
            )}
            style={{
                willChange: isVisible ? 'auto' : 'opacity, transform'
            }}
        >
            {children}
        </div>
    );
};
