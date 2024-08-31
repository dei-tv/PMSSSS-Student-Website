import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import { Space_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { ProgressBar, ProgressBarProvider } from 'react-transition-progress';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const fontHeading = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-heading',
});

const fontBody = Space_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-body',
    weight: '400',
});

export const metadata: Metadata = {
    title: 'NextJS + Supabase Template',
    description: 'Created By greeenboi',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'antialiased',
                    fontHeading.variable,
                    fontBody.variable
                )}
            >
                <ProgressBarProvider>
                    <Navbar />
                    <ProgressBar className="fixed top-0 h-1 bg-sky-500 shadow-lg shadow-sky-500/20" />
                    {children}
                    <Toaster />
                    <Footer />
                </ProgressBarProvider>
            </body>
        </html>
    );
}
