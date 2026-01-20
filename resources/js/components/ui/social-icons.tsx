import { LucideMail } from 'lucide-react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

interface SocialIconsProps {
    containerWidth?: string;
    justifyPosition?: string;
    alignPosition?: string;
    gap?: string;
    mdGap?: string;
    className?: string;
    gitHubSize?: number;
    linkedInSize?: number;
    mailSize?: number;
    showMailIcon?: boolean;
}

export default function SocialIcons({
    containerWidth = "full",
    justifyPosition = "start",
    alignPosition = "center",
    gap = "12",
    mdGap = "24",
    className,
    gitHubSize = 24,
    linkedInSize = 24,
    mailSize = 24,
    showMailIcon = true,
}: SocialIconsProps) {
    return (
        <div className={`w-${containerWidth} flex justify-${justifyPosition} items-${alignPosition} gap-${gap} ${className} md:gap-${mdGap}`}>
            <a
                href='https://github.com/patriciosebastian'
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
            >
                <SiGithub
                    size={gitHubSize}
                    className="size-5 md:size-6"
                />
            </a>
            <a
                href='https://www.linkedin.com/in/patriciosalazardev'
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
            >
                <SiLinkedin
                    size={linkedInSize}
                    className="size-5 md:size-6"
                />
            </a>
            {showMailIcon &&
                <a
                    href="mailto:psebastiansalazar@gmail.com"
                    aria-label="Send me an email"
                >
                    <LucideMail
                        size={mailSize}
                        className="size-5 md:size-6"
                    />
                </a>
            }

            {/* Local Tailwind Safelist (for default prop values) */}
            <div className="sr-only justify-start items-center gap-12 md:gap-24"></div>
        </div>
    );
}