interface CircularTextProps {
    text?: string;
    radius?: number;
    speed?: number;
    repeat?: number;
    fill?: boolean;
    fillColor?: string;
}

export default function CircularText({
    text = "PHP • Laravel • Livewire • Inertia • TypeScript • React • Node.js • Express • Tailwind CSS • • • ",
    radius = 180,
    speed = 30,
    repeat = 2,
    fill = false,
    fillColor = "accent",
}: CircularTextProps) {
    const repeatedText = text.repeat(repeat);

    return (
        <>
            <div className="absolute left-20 bottom-0 pointer-events-none">
                <div className="relative" style={{ width: radius * 2, height: radius * 2 }}>
                    <svg
                        width={radius * 1.3}
                        height={radius * 1.3}
                        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
                        style={{ animation: `spin ${speed}s linear infinite` }}
                        className={`overflow-visible ${fill ? `rounded-full bg-${fillColor}` : ''}`}
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d={`M ${radius}, ${radius} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
                            />
                        </defs>
                        <text className="text-lg font-mono tracking-wider fill-current uppercase">
                            <textPath href="#circlePath" startOffset="0">
                                {repeatedText}
                            </textPath>
                        </text>
                    </svg>
                </div>
                <style>{`
                    @keyframes spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        </>
    );
}
