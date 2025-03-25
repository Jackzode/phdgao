"use client"
import { GalleryVerticalEnd } from "lucide-react"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { LoginForm } from "@/mycomponents/loginForm"
import { SignUpForm } from "@/mycomponents/SignupForm"
import Link from "next/link"





export default function Signup() {





    return (

        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-white p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Link href="/" className="flex items-center gap-2 self-center font-medium">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <GalleryVerticalEnd className="size-4" />
                    </div>
                    Phd Inc.
                </Link>
                <Tabs defaultValue="Login" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="Login">Login</TabsTrigger>
                        <TabsTrigger value="SignUp">SignUp</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Login">
                        <LoginForm />
                    </TabsContent>
                    <TabsContent value="SignUp">
                        <SignUpForm />
                    </TabsContent>
                    <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
                        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                        and <a href="#">Privacy Policy</a>.
                    </div>
                </Tabs>
            </div>
        </div>



    )
}
