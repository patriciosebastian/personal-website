import { LucideMail } from 'lucide-react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

interface SocialIconsProps {
    containerWidth?: string;
    justifyPosition?: string;
    alignPosition?: string;
    gap?: string;
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
    gap = "24",
    className,
    gitHubSize = 24,
    linkedInSize = 24,
    mailSize = 24,
    showMailIcon = true,
}: SocialIconsProps) {
    return (
        <div className={`w-${containerWidth} flex justify-${justifyPosition} items-${alignPosition} gap-${gap} ${className}`}>
            <a
                href='https://github.com/patriciosebastian'
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
            >
                <SiGithub size={gitHubSize} />
            </a>
            <a
                href='https://www.linkedin.com/in/patriciosalazardev'
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
            >
                <SiLinkedin size={linkedInSize} />
            </a>
            {showMailIcon &&
                <a
                    href="mailto:psebastiansalazar@gmail.com"
                    aria-label="Send me an email"
                >
                    <LucideMail size={mailSize} />
                </a>
            }
        </div>
    );
}