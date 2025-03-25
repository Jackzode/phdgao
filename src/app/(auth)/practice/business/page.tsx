"use client"

import { Button } from "@/components/ui/button";
import { Categories } from "@/mycomponents/Categories";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";



const items = [
    {
        id: "123",
        title: "合同法",
        keypoints: [
            {
                en_name: "ddd",
                zn_name: "ddd多发点d",
                acount: 122
            },
            {
                en_name: "sfrgsdfg",
                zn_name: "da dd大发大发dd",
                acount: 122
            },
            {
                en_name: "aaaa",
                zn_name: "ddd规划局规划法d",
                acount: 122
            },
        ]
    }, {
        id: "1231",
        title: "合同法",
        keypoints: [
            {
                en_name: "ddd",
                zn_name: "ddd多发点d",
                acount: 122
            },
            {
                en_name: "sfrgsdfg",
                zn_name: "da dd大发大发dd",
                acount: 122
            },
            {
                en_name: "aaaa",
                zn_name: "ddd规划局规划法d",
                acount: 122
            },
        ]
    }, {
        id: "1232",
        title: "合同法",
        keypoints: [
            {
                en_name: "ddd",
                zn_name: "ddd多发点d",
                acount: 122
            },
            {
                en_name: "sfrgsdfg",
                zn_name: "da dd大发大发dd",
                acount: 122
            },
            {
                en_name: "aaaa",
                zn_name: "ddd规划局规划法d",
                acount: 122
            },
        ]
    }, {
        id: "1233",
        title: "合同法",
        keypoints: [
            {
                en_name: "ddd",
                zn_name: "ddd多发点d",
                acount: 122
            },
            {
                en_name: "sfrgsdfg",
                zn_name: "da dd大发大发dd",
                acount: 122
            },
            {
                en_name: "aaaa",
                zn_name: "ddd规划局规划法d",
                acount: 122
            },
        ]
    }, {
        id: "1235",
        title: "合同法",
        keypoints: [
            {
                en_name: "ddd",
                zn_name: "ddd多发点d",
                acount: 122
            },
            {
                en_name: "sfrgsdfg",
                zn_name: "da dd大发大发dd",
                acount: 122
            },
            {
                en_name: "aaaa",
                zn_name: "ddd规划局规划法d",
                acount: 122
            },
        ]
    }, {
        id: "12311",
        title: "合同法",
        keypoints: [
            {
                en_name: "ddd",
                zn_name: "ddd多发点d",
                acount: 122
            },
            {
                en_name: "sfrgsdfg",
                zn_name: "da dd大发大发dd",
                acount: 122
            },
            {
                en_name: "aaaa",
                zn_name: "ddd规划局规划法d",
                acount: 122
            },
        ]
    },
    {
        id: "12322",
        title: "合同法",
        keypoints: [
            {
                en_name: "ddd",
                zn_name: "ddd多发点d",
                acount: 122
            },
            {
                en_name: "sfrgsdfg",
                zn_name: "da dd大发大发dd",
                acount: 122
            },
            {
                en_name: "aaaa",
                zn_name: "ddd规划局规划法d",
                acount: 122
            },
        ]
    },
]



export default function PracticeBusiness() {


    const [isLoggedIn, setIsLoggedIn] = useState(false); // 登录状态
    const [isPaid, setIsPaid] = useState(false);         // 是否付费
    const router = useRouter();

    useEffect(() => {
        // 从服务端获取用户状态，包括做题进度
        const fetchUserStatus = async () => {

            setIsLoggedIn(true);
            setIsPaid(true);
        };

        fetchUserStatus();
    }, []);



    return (

        <div>
            <div
                className="h-[60vh] relative bg-cover bg-center flex flex-col justify-center items-center text-white -z-10"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.3)), 
                            url('/images/network.jpg')`
                }}
            >
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl font-bold">商业法律练习题库</h1>
                    <p className="mt-4 text-lg text-gray-300">
                        这里是商业法律练习题库的页面，内容待完善...
                    </p>
                </div>
            </div>
            {/* 按钮区 */}
            <div className="max-w-auto flex justify-center align-middle gap-4 mt-10">

                {isLoggedIn && !isPaid && (
                    <Button onClick={() => router.push("/payment")} size="lg">
                        付费购买
                    </Button>
                )}
                {isLoggedIn && isPaid && (
                    <>
                        <Button
                            size="lg"
                            onClick={() => router.push("/practice/business/contract-law?i=0")}
                        >
                            开始做题
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => router.push("/practice/business/contract-law?i=12")}
                        >
                            继续做题
                        </Button>
                    </>
                )}
            </div>

            <div className="w-3/4 max-w-3xl mx-auto mt-10">

                <Categories items={items} isLoggedIn={isLoggedIn} />
            </div>
        </div>

    );
}

