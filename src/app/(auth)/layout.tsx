import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/mycomponents/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <header className="container max-w-[80%] mx-auto bg-white my-6">
                <Header />
            </header>
            <main>
                {children}
            </main>
            <footer className="container max-w-[80%] mx-auto bg-white my-6">
                <div className="mt-16 border-t border-gray-100 pt-8 flex items-center justify-center lg:mt-24 gap-4">

                    <a href="#" className="text-gray-500 transition hover:opacity-75">Terms & Conditions</a>

                    <a href="#" className="text-gray-500 transition hover:opacity-75">Privacy Policy</a>

                    <a href="#" className="text-gray-500 transition hover:opacity-75">Cookies</a>

                </div>
            </footer>
        </div>
    );
} 