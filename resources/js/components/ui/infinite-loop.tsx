export default function InfiniteLoop() {
  return (
    <>
        <svg viewBox="0 0 200 200" className="w-16 h-16 sm:w-20 sm:h-20" style={{ animation: 'spin 10s linear infinite' }}>
            <defs>
                <path
                    id="circlePath"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                />
            </defs>
            <text className="text-2xl fill-zinc-600 dark:fill-zinc-400 font-medium uppercase tracking-wide">
                <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                    Hello World ===== Infinite Loop-
                </textPath>
            </text>
        </svg>
    </>
  );
}
