/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Z2EgbEXp7Rt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';
import { SVGProps } from 'react';

export default function Component() {
    return (
        <div className="flex min-h-[100dvh] flex-col">
            <header className="flex h-14 items-center px-4 lg:px-6">
                <Link
                    href="#"
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
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Government Scholarship Program
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Unlock your academic potential with our
                                        prestigious government scholarship.
                                        Explore the life-changing opportunities
                                        awaiting you.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link
                                        href="#"
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                            <img
                                src="/placeholder.svg"
                                alt="Scholarship"
                                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                                width="550"
                                height="550"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                                    Eligibility Criteria
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Who Can Apply?
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    The government scholarship is open to all
                                    eligible students who meet the academic and
                                    financial requirements. Explore the criteria
                                    and unlock your educational dreams.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <img
                                src="/placeholder.svg"
                                alt="Eligibility"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                width="550"
                                height="310"
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <ul className="grid gap-6">
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">
                                                Academic Excellence
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Maintain a minimum GPA of 3.5 or
                                                above to be eligible for the
                                                scholarship.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">
                                                Financial Need
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Demonstrate financial need based
                                                on household income and assets.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">
                                                Extracurricular Activities
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Actively participate in
                                                community service, leadership
                                                roles, or other extracurricular
                                                activities.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                                    Scholarship Benefits
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    What You'll Receive
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    The government scholarship offers a
                                    comprehensive package to support your
                                    academic journey. Explore the benefits and
                                    unlock your full potential.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <img
                                src="/placeholder.svg"
                                alt="Benefits"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                width="550"
                                height="310"
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <ul className="grid gap-6">
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">
                                                Tuition Fees
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Full coverage of tuition fees
                                                for the duration of your
                                                program.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">
                                                Living Allowance
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Monthly stipend to cover living
                                                expenses, including housing,
                                                food, and transportation.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">
                                                Academic Support
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Access to mentorship, tutoring,
                                                and resources to ensure your
                                                academic success.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                                    Application Process
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    How to Apply
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    The government scholarship application
                                    process is designed to be straightforward
                                    and accessible. Follow the steps below to
                                    submit your application.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <img
                                src="/placeholder.svg"
                                alt="Application"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                width="550"
                                height="310"
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <ul className="grid gap-6">
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">
                                                Submit Application
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Complete the online application
                                                form with the required personal,
                                                academic, and financial
                                                information.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">
                                                Provide Supporting Documents
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Upload the necessary documents,
                                                such as transcripts, financial
                                                statements, and letters of
                                                recommendation.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">
                                                Application Review
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Your application will be
                                                carefully reviewed by our panel
                                                of experts to determine your
                                                eligibility and selection.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Ready to Unlock Your Potential?
                                </h2>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Take the first step towards your academic
                                    and personal growth. Apply for the
                                    government scholarship today and embark on a
                                    transformative journey.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
                <p className="text-xs text-muted-foreground">
                    &copy; 2024 Government Scholarship Program. All rights
                    reserved.
                </p>
                <nav className="flex gap-4 sm:ml-auto sm:gap-6">
                    <Link
                        href="#"
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
        </div>
    );
}

function FlagIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" x2="4" y1="22" y2="15" />
        </svg>
    );
}
