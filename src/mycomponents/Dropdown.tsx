"use client";

import Link from "next/link";
import { useState } from "react";

interface DropdownProps {
    title: string; // 菜单标题，如 "真题测试"
    items: { name: string; link: string }[]; // 菜单项
}

export default function Dropdown({ title, items }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    let timeoutId: NodeJS.Timeout;

    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setIsOpen(false);
        }, 200); // 200ms 延迟关闭
    };
    return (
        <div
            className="relative flex flex-col items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
      <span className="cursor-pointer text-sm md:text-xl lg:text-3xl text-primary-color  transition hover:text-gray-500/75">
        {title}
      </span>

            {isOpen && (
                <div className="absolute top-full left-0 -mt-1 py-2 w-full bg-white rounded-lg shadow-lg">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="text-sm lg:text-xl block px-4 py-2 text-primary-color hover:text-gray-500/75"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
