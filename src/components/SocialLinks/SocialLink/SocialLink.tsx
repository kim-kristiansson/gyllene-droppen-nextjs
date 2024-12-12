import React from "react";

interface SocialLinkProps {
    href: string,
    DefaultIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    HoverIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function InputField({href, DefaultIcon, HoverIcon}: SocialLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 group"
        >
            {/* Default Icon */}
            <DefaultIcon className="text-4xl text-darkBrown group-hover:hidden transition-colors duration-200" />

            {/* Hover Icon */}
            <HoverIcon className="text-4xl text-darkBrown hidden group-hover:block transition-colors duration-200" />
        </a>
    );
}
