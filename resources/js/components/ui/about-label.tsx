export default function AboutLabel({ label }: { label: string }) {
    return (
        <span className="font-display text-[17px] font-medium pb-1 border-b border-press-accent inline-block">
            {label}
        </span>
    );
}
