'use client';
import { usePathname } from 'next/navigation';
import { Link } from 'react-transition-progress/next';

export default function Footer() {
    const pathname = usePathname();

    if (/^\/dashboard\/(college|student)|^\/auth\/student/.test(pathname)) {
        return null;
    }

    return (
        <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
            <p className="text-xs text-muted-foreground">
                &copy; 2024 Government Scholarship Program. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:ml-auto sm:gap-6">
                <Link
                    href="/policy/tos"
                    className="text-xs underline-offset-4 hover:underline"
                    prefetch={false}
                >
                    Terms of Service
                </Link>
                <Link
                    href="#"
                    className="text-xs underline-offset-4 hover:underline"
                    prefetch={false}
                >
                    Privacy Policy
                </Link>
            </nav>
        </footer>
    );
}
