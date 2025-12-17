import { useEffect, useRef, useState } from "react";

interface Star {
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
}

export const StarBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    const stars = useRef<Star[]>([]);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            setContext(ctx);
        }
    }, []);

    useEffect(() => {
        if (!canvasRef.current || !context) return;

        const canvas = canvasRef.current;

        const initStars = () => {
            const starCount = 80; // Reduced count for cleaner look with lines
            const newStars: Star[] = [];
            for (let i = 0; i < starCount; i++) {
                newStars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2 + 1,
                    vx: (Math.random() - 0.5) * 0.5, // Slightly faster for movement
                    vy: (Math.random() - 0.5) * 0.5
                });
            }
            stars.current = newStars;
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove);
        resizeCanvas();

        let animationFrameId: number;

        const render = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Update and Draw Stars
            stars.current.forEach(star => {
                star.x += star.vx;
                star.y += star.vy;

                // Wrap around screen
                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;

                // Draw Star
                context.beginPath();
                context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                context.fillStyle = `rgba(255, 255, 255, 0.8)`;
                context.fill();
            });

            // Draw Lines (Constellation Effect)
            stars.current.forEach((star, i) => {
                // Connect to nearby stars
                for (let j = i + 1; j < stars.current.length; j++) {
                    const otherStar = stars.current[j];
                    const dist = Math.hypot(star.x - otherStar.x, star.y - otherStar.y);

                    if (dist < 100) {
                        context.beginPath();
                        context.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 100})`;
                        context.lineWidth = 0.5;
                        context.moveTo(star.x, star.y);
                        context.lineTo(otherStar.x, otherStar.y);
                        context.stroke();
                    }
                }

                // Connect to mouse
                const distMouse = Math.hypot(star.x - mouse.current.x, star.y - mouse.current.y);
                if (distMouse < 150) {
                    context.beginPath();
                    context.strokeStyle = `rgba(100, 200, 255, ${1 - distMouse / 150})`; // Blue-ish hint for mouse interaction
                    context.lineWidth = 0.8;
                    context.moveTo(star.x, star.y);
                    context.lineTo(mouse.current.x, mouse.current.y);
                    context.stroke();
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [context]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
        />
    );
};
