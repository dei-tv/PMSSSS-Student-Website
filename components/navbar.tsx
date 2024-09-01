'use client';
import { Link } from 'react-transition-progress/next';
import FlagIcon from './ui/flagicon';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();

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
            <nav className="ml-auto flex items-center gap-4 sm:gap-6">
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
        </header>
    );
}
