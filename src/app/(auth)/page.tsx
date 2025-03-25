"use client"
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Smartphone, ScrollText, Calculator } from "lucide-react";
import { Autoplay } from "swiper/modules";

const priceFeatures = [
    "20 users included",
    "5GB of storage",
    "Email support",
    "Help center access",
    "Phone support",
    "Community access"
];

const faqs = [
    {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
        answer:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
        open: true, // 仅第一个默认展开
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
        answer:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
        open: false,
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
        answer:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
        open: false,
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
        answer:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
        open: false,
    },
]

const testimonials = [
    {
        name: "Paul Starr",
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt...",
        rating: 5,
    },
    {
        name: "Alice Johnson",
        image: "https://images.unsplash.com/photo-1522071901873-411886a10004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBlcnNvbnxlbnwwfHx8fDE2NjczODAzMTE&ixlib=rb-1.2.1&q=80&w=400",
        review: "The service was amazing, I highly recommend it!",
        rating: 4,
    },
    {
        name: "Paul Starr",
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt...",
        rating: 5,
    },
    {
        name: "Alice Johnson",
        image: "https://images.unsplash.com/photo-1522071901873-411886a10004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBlcnNvbnxlbnwwfHx8fDE2NjczODAzMTE&ixlib=rb-1.2.1&q=80&w=400",
        review: "The service was amazing, I highly recommend it!",
        rating: 4,
    }, {
        name: "Paul Starr",
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt...",
        rating: 5,
    },
    {
        name: "Alice Johnson",
        image: "https://images.unsplash.com/photo-1522071901873-411886a10004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBlcnNvbnxlbnwwfHx8fDE2NjczODAzMTE&ixlib=rb-1.2.1&q=80&w=400",
        review: "The service was amazing, I highly recommend it!",
        rating: 4,
    }, {
        name: "Paul Starr",
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt...",
        rating: 5,
    },
    {
        name: "Alice Johnson",
        image: "https://images.unsplash.com/photo-1522071901873-411886a10004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBlcnNvbnxlbnwwfHx8fDE2NjczODAzMTE&ixlib=rb-1.2.1&q=80&w=400",
        review: "The service was amazing, I highly recommend it!",
        rating: 4,
    },

]

const features = [
    {
        icon: Smartphone,
        title: 'Access Anywhere',
        description:
            'Whether on desktop, phone, or tablet, pick up right where you left off. Our platform is responsively designed for all devices.',
    },
    {
        icon: ScrollText,
        title: 'Created by Engineers',
        description:
            'PrepFE™ is a team of academic and professional engineers with diverse backgrounds and subject matter expertise.',
    },
    {
        icon: Calculator,
        title: 'Hundreds of Practice Problems',
        description:
            'FE exam prep practice problems designed just like the NCEES FE exam and guaranteed to ensure you pass.',
    },
];

export default function Home() {
    return (
        <div className="container max-w-[80%] mx-auto">
            <section className="overflow-hidden my-20 sm:grid sm:grid-cols-2 sm:items-center">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            1000+题目，涵盖近100个知识点
                        </h2>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            中英文对照题目帮助你快速获取建筑执照B，还等什么？来报名吧，朋友们！
                        </p>

                        <div className="mt-4 md:mt-8">
                            <Link
                                href="/registration"
                                className="inline-block rounded-sm bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                            >
                                开始！
                            </Link>
                        </div>
                    </div>
                </div>

                <img
                    alt=""
                    src="/images/hero.png"
                    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                />
            </section>

            {/*功能介绍*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-12">
                {features.map(({ icon: Icon, title, description }) => (
                    <div key={title} className="text-center">
                        <Icon className="mx-auto mb-4 w-12 h-12 text-blue-600" />
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="mt-2 text-gray-600">{description}</p>
                    </div>
                ))}
            </div>

            {/*成功案例*/}
            <section className="my-15">
                <div className="text-center text-3xl font-bold">
                    成功案例
                </div>
                <br />
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    className="w-full"
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 5 }
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="p-1 bg-gray-50 rounded-lg shadow">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <img src={testimonial.image} alt={testimonial.name} className="w-60 h-60" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/*价格*/}
            <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="text-center text-3xl font-bold mb-10">
                    Affordable pricing.
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
                    <div className="rounded-2xl border border-indigo-600 p-6 hover:shadow-2xl ring-1 shadow-xs ring-indigo-600 sm:order-last sm:px-8 lg:p-12">
                        <div className="text-center">
                            <h2 className="text-lg font-medium text-gray-900">
                                价格
                                <span className="sr-only">Plan</span>
                            </h2>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 629$ </strong>
                                <span className="text-sm font-medium text-gray-700">/5-month</span>
                            </p>
                        </div>
                        <ul className="mt-6 space-y-2">
                            {priceFeatures.map((feature, index) => (
                                <li key={index} className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/registration"
                            className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:ring-3 focus:outline-hidden"
                        >
                            立即购买
                        </Link>
                    </div>

                    <div className="rounded-2xl border border-gray-200 p-6 shadow-xs hover:shadow-2xl sm:px-8 lg:p-12">
                        <div className="text-center">
                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 立减20$ </strong>
                            </p>
                        </div>

                        <p className="mt-2 sm:mt-4">
                            <span className="text-lg font-bold text-gray-900 sm:text-4xl"> 成功分享即可获取20$ </span>
                        </p>
                    </div>
                </div>
            </div>

            {/*   常见问题 */}
            <div className="space-y-8">
                <div className="mt-8">
                    <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
                        常见问题
                    </h2>
                </div>
                {faqs.map((faq, index) => (
                    <details key={index} className="group [&_summary::-webkit-details-marker]:hidden" open={faq.open}>
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-100 p-4 text-gray-900">
                            <h2 className="font-medium">{faq.question}</h2>
                            <svg
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <p className="mt-4 px-4 leading-relaxed text-gray-700">{faq.answer}</p>
                    </details>
                ))}
            </div>

            {/*  footer  */}
            <footer className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">联系我们</h2>

                        <p className="mx-auto mt-4 max-w-sm text-gray-500">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus
                            ea nihil.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}


