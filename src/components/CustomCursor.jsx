import { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [trailPosition, setTrailPosition] = useState([]);
    const trailCount = 8; // Number of follow cursors (can be increased)
    const trailRadius = 40; // Radius of the circle that the follow cursors form
    const gap = 10; // Gap between each follow cursor

    const updateCursorPosition = (e) => {
        const { clientX, clientY } = e;

        // Set the main cursor position
        setCursorPosition({ x: clientX, y: clientY });

        // Generate the follow cursors' positions in a circle around the main cursor with slight random offsets
        let newTrailPosition = [];
        for (let i = 0; i < trailCount; i++) {
            let angle = (i / trailCount) * (2 * Math.PI); // Angle for each follow cursor
            let xOffset = Math.cos(angle) * trailRadius; // X offset
            let yOffset = Math.sin(angle) * trailRadius; // Y offset

            // Add random small variation to create floating motion
            let randomXOffset = Math.random() * gap - gap / 2;
            let randomYOffset = Math.random() * gap - gap / 2;

            newTrailPosition.push({
                x: clientX + xOffset + randomXOffset,
                y: clientY + yOffset + randomYOffset,
            });
        }

        // Keep track of the trail positions
        setTrailPosition((prev) => {
            // Add new trail to the front and remove old ones to maintain the size
            return [{ x: clientX, y: clientY }, ...prev].slice(0, trailCount);
        });
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            window.requestAnimationFrame(() => updateCursorPosition(e));
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            {/* Main Cursor */}
            <div
                className="custom-cursor"
                style={{
                    left: `${cursorPosition.x}px`,
                    top: `${cursorPosition.y}px`,
                    backgroundColor: 'lightpurple', // Light purple main cursor color
                }}
            ></div>

            {/* Cursor Trails */}
            {trailPosition.map((position, index) => (
                <div
                    key={index}
                    className="cursor-trail"
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        backgroundColor: getColor(index), // Different color for each follow cursor
                        animation: 'float 0.8s ease-in-out infinite', // Add float animation
                        opacity: 1 - index * 0.1, // Decrease opacity to create fade-out effect
                    }}
                ></div>
            ))}
        </>
    );
};

// Helper function to return different colors for the follow cursors
const getColor = (index) => {
    const colors = [
        '#ff6347', // Tomato Red
        '#00bfff', // Deep Sky Blue
        '#ff1493', // Deep Pink
        '#32cd32', // Lime Green
        '#ffff00', // Yellow
        '#8a2be2', // Blue Violet
        '#ff4500', // Orange Red
        '#adff2f', // Green Yellow
    ];
    return colors[index % colors.length]; // Cycle through colors
};

export default CustomCursor;
