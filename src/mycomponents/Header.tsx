import Link from "next/link";
import Dropdown from "@/mycomponents/Dropdown";
import { Languages } from "lucide-react";
import React from "react";


export const Header: React.FC = () => {

    return (
        <div
            className="mx-auto flex flex-1 h-16 max-w-screen-xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 md:text-sm">
            {/* Logo */}
            <Link className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41Z"
                        fill="currentColor"
                    />
                </svg>
            </Link>

            {/* 导航菜单 */}
            <nav aria-label="Global" className="hidden md:block">
                <div className="flex items-center md:gap-4 lg:gap-8 ">
                    <Dropdown
                        title="真题测试"
                        items={[
                            { name: "建筑技术", link: "/real/trade" },
                            { name: "商业法律", link: "/real/business" }
                        ]}
                    />
                    <Dropdown
                        title="题库练习"
                        items={[
                            { name: "建筑技术", link: "/practice/trade" },
                            { name: "商业法律", link: "/practice/business" }
                        ]}
                    />
                    <Link className="text-sm md:text-xl lg:text-3xl text-primary-color transition hover:text-gray-500/75"
                        href="/tutorial">
                        报名教程
                    </Link>
                    <Link className="text-sm md:text-xl lg:text-3xl text-primary-color transition hover:text-gray-500/75"
                        href="/contact">
                        联系我们
                    </Link>
                </div>
            </nav>

            {/* 右侧功能按钮 */}
            <div className="flex items-center gap-6 ">
                <div className="hidden sm:flex sm:gap-4">
                    <Link
                        className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                        href="/login">
                        登录/注册
                    </Link>

                    <button className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition">
                        <Languages className="w-6 h-6" />
                    </button>
                </div>

                <button
                    className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                    <span className="sr-only">Toggle menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>

    )

}



