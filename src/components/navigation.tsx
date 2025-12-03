'use client'
import { CheckSquare, Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { TbSquareAsterisk } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import {
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavBody,
    Navbar,
    NavbarButton,
    NavbarLogo,
    NavItems,
} from "@/components/ui/resizable-navbar";
import LogoutButton from "../modules/auth/components/logout-button";

export function Navigation() {
    const navItems = [
        {
            name: "Features",
            link: "#features",
        },
        {
            name: "Pricing",
            link: "#pricing",
        },
        {
            name: "Contact",
            link: "#contact",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        // <nav className="border-b sticky top-0 z-50">
        //     <div className="container mx-auto px-4 py-3">
        //         <div className="flex items-center justify-between">
        //             <div className="flex items-center space-x-6">
        //                 <Link
        //                     href="/"
        //                     className="flex items-center"
        //                 >
        //                     <TbSquareAsterisk className="size-10" /> Euger
        //                 </Link>
        //                 <div className="items-center space-x-4 hidden md:flex">
        //                     <Link href="/">
        //                         <Button variant="ghost" size="sm">
        //                             <Home className="mr-2 h-4 w-4" />
        //                             Home
        //                         </Button>
        //                     </Link>
        //                     <Link href="/todos">
        //                         <Button variant="ghost" size="sm">
        //                             <CheckSquare className="mr-2 h-4 w-4" />
        //                             Todos
        //                         </Button>
        //                     </Link>
        //                 </div>
        //             </div>
        //             <LogoutButton />
        //         </div>
        //     </div>
        // </nav>
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">
                        <NavbarButton variant="secondary">Login</NavbarButton>
                        <NavbarButton variant="primary">Book a call</NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${item.name}${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Login
                            </NavbarButton>
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Book a call
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>

            {/* Navbar */}
        </div>
    );
}
