'use client';
import { Link } from 'react-transition-progress/next';
import FlagIcon from './ui/flagicon';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    if (/^\/dashboard\/(college|student)/.test(pathname)) {
        return null;
    }
    return (
        <header className="flex h-14 items-center px-4 lg:px-6">
            <Link
                href="/"
                className="flex items-center justify-center"
                prefetch={false}
            >
                <FlagIcon className="h-6 w-6" />
                <span className="sr-only">Government Scholarship</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link
                    href="#"
                    className="text-sm font-medium underline-offset-4 hover:underline"
                    prefetch={false}
                >
                    About
                </Link>
                <Link
                    href="#"
                    className="text-sm font-medium underline-offset-4 hover:underline"
                    prefetch={false}
                >
                    Eligibility
                </Link>
                <Link
                    href="#"
                    className="text-sm font-medium underline-offset-4 hover:underline"
                    prefetch={false}
                >
                    Benefits
                </Link>
                <Link
                    href="#"
                    className="text-sm font-medium underline-offset-4 hover:underline"
                    prefetch={false}
                >
                    Apply
                </Link>
                <Link
                    href="/auth/college"
                    className="text-sm font-medium underline-offset-4 hover:underline"
                    prefetch={false}
                >
                    College
                </Link>
            </nav>
        </header>
    );
}
