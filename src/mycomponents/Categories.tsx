'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { LockKeyhole } from "lucide-react";
import Link from "next/link";

type Category = {
    id: string;
    title: string;
    description?: string;
    keypoints: KeyPoint[];
};

type KeyPoint = {
    en_name: string;
    zn_name: string;
    acount: number;
}


interface CategoriesProps {
    items: Category[];
    isLoggedIn: boolean;
}


export const Categories: React.FC<CategoriesProps> = ({ items, isLoggedIn }) => {




    return (
        <div>
            <div className="text-center text-3xl my-4">考点列表</div>
            <Accordion
                type="single"
                collapsible
                className="rounded-md border  px-4"
            >
                {items?.length > 0 && items.map((item, index) => {

                    return (
                        <AccordionItem key={item.id} value={`item-${index}`} className={"text-lg"}>
                            <AccordionTrigger className="text-xl">{item.title}</AccordionTrigger>
                            <AccordionContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[100px] text-lg">考点</TableHead>
                                            <TableHead className="text-right">题目数量</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {item.keypoints.map((kp, index) => (
                                            <TableRow>
                                                <TableCell className="font-medium">{kp.en_name}</TableCell>
                                                <TableCell className="text-right">{kp.acount}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </AccordionContent>
                        </AccordionItem>
                    )
                })}
            </Accordion>
            {!isLoggedIn &&
                <div className=" w-full 
                 flex flex-col items-center justify-center">
                    <div className="text-4xl my-4">. . . . . . . </div>
                    <LockKeyhole className="w-16 h-16 mb-2 text-yellow-500" />

                    <Link className="md:text-2xl p-4 mt-4 bg-primary text-white rounded-2xl" href={"/login"} >
                        登录查看更多考点
                    </Link>

                </div>
            }
        </div>
    );
}
