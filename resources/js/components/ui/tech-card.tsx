import React from 'react'
import { IconType } from 'react-icons'

interface TechCardProps {
    name: string;
    icon:
        | IconType
        | string
        | React.ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string;
}

export default function TechCard({ name, icon, color }: TechCardProps) {
    const isStringIcon = typeof icon === 'string';

    return (
        <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-3 transition-all duration-300 hover:scale-105 hover:border-foreground/20 hover:shadow-lg dark:hover:shadow-foreground/5">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-muted/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex flex-col items-center gap-2">
                <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-300 group-hover:rotate-6"
                    style={{ backgroundColor: `${color}15` }}
                >
                    {isStringIcon ? (
                        <img
                            src={icon}
                            alt={name}
                            className="h-7 w-7"
                            style={{ color }}
                            loading="lazy"
                        />
                    ) : (
                        React.createElement(icon as IconType, {
                            className: 'h-7 w-7',
                            style: { color },
                        })
                    )}
                </div>
                <span className="text-center text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground">
                    {name}
                </span>
            </div>
        </div>
    );
}