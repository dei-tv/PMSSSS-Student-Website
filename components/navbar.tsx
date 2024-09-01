'use client';
import { useState } from 'react';
import { Link } from 'react-transition-progress/next';
import FlagIcon from './ui/flagicon';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    if (/^\/dashboard\/(college|student)|^\/auth\/student/.test(pathname)) {
        return null;
    }

    return (
        <header className="flex h-14 items-center px-4 lg:px-6">
            <Link
                href="/"
                className="flex items-center justify-center"
                prefetch={false}
            >
                <FlagIcon className="h-11 w-auto" />
                <span className="sr-only">Government Scholarship</span>
            </Link>

            <nav className="ml-auto hidden items-center gap-4 sm:gap-6 lg:flex">
                <Link
                    href="/about"
                    className="text-sm font-medium underline-offset-4 hover:underline"
                    prefetch={false}
                >
                    About
                </Link>
                <Link
                    href="/eligibility"
                    className="text-sm font-medium underline-offset-4 hover:underline"
                    prefetch={false}
                >
                    Eligibility
                </Link>
                <Link
                    href="/benefits"
                    className="text-sm font-medium underline-offset-4 hover:underline"
                    prefetch={false}
                >
                    Benefits
                </Link>
                <Link
                    href="/auth/college"
                    className="text-sm font-medium underline-offset-4 hover:underline"
                    prefetch={false}
                >
                    College
                </Link>
                <Button variant="outline" asChild>
                    <Link
                        href="/auth/student"
                        className="flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
                        prefetch={false}
                    >
                        Apply
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </Button>
            </nav>

            <div className="ml-auto lg:hidden">
                <button
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                    className="focus:outline-none"
                >
                    {isMobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {isMobileMenuOpen && (
                <nav className="absolute left-2 top-14 w-[calc(100%-1rem)] rounded-xl bg-white shadow-lg lg:hidden">
                    <ul className="flex flex-col items-start p-4">
                        <li className="w-full">
                            <Link
                                href="/about"
                                className="block w-full py-2 text-sm font-medium"
                                prefetch={false}
                                onClick={() =>
                                    setMobileMenuOpen(!isMobileMenuOpen)
                                }
                            >
                                About
                            </Link>
                        </li>
                        <li className="w-full">
                            <Link
                                href="/eligibility"
                                className="block w-full py-2 text-sm font-medium"
                                prefetch={false}
                                onClick={() =>
                                    setMobileMenuOpen(!isMobileMenuOpen)
                                }
                            >
                                Eligibility
                            </Link>
                        </li>
                        <li className="w-full">
                            <Link
                                href="/benefits"
                                className="block w-full py-2 text-sm font-medium"
                                prefetch={false}
                                onClick={() =>
                                    setMobileMenuOpen(!isMobileMenuOpen)
                                }
                            >
                                Benefits
                            </Link>
                        </li>
                        <li className="w-full">
                            <Link
                                href="/auth/college"
                                className="block w-full py-2 text-sm font-medium"
                                prefetch={false}
                                onClick={() =>
                                    setMobileMenuOpen(!isMobileMenuOpen)
                                }
                            >
                                College
                            </Link>
                        </li>
                        <li className="w-full">
                            <Button variant="outline" asChild>
                                <Link
                                    href="/auth/student"
                                    className="flex items-center gap-1 py-2 text-sm font-medium"
                                    prefetch={false}
                                    onClick={() =>
                                        setMobileMenuOpen(!isMobileMenuOpen)
                                    }
                                >
                                    Apply
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
