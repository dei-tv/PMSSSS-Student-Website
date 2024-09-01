import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className="flex min-h-[100dvh] flex-col">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Unlock Your Potential with the Prime
                                        Minister\'s Special Scholarship Scheme
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        The Prime Minister\'s Special
                                        Scholarship Scheme (PMSSS) offers
                                        life-changing educational opportunities
                                        for deserving students. Explore the
                                        financial support, academic excellence,
                                        and transformative impact of this
                                        prestigious program.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link
                                        href="/auth/student"
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                            <img
                                src="/placeholder.svg"
                                width="550"
                                height="550"
                                alt="PMSSS"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                                    Financial Support
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Comprehensive Financial Assistance
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    The PMSSS provides generous financial
                                    support, including tuition fees, living
                                    expenses, and other educational costs,
                                    ensuring that deserving students can focus
                                    on their studies without the burden of
                                    financial constraints.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <img
                                src="/placeholder.svg"
                                width="550"
                                height="310"
                                alt="Financial Support"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <ul className="grid gap-6">
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">
                                                Tuition Fees
                                            </h3>
                                            <p className="text-muted-foreground">
                                                The PMSSS covers the full
                                                tuition fees for selected
                                                programs, ensuring accessibility
                                                to quality education.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">
                                                Living Expenses
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Students receive a generous
                                                monthly stipend to cover living
                                                costs, including accommodation,
                                                food, and other essential
                                                expenses.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">
                                                Additional Benefits
                                            </h3>
                                            <p className="text-muted-foreground">
                                                The PMSSS also provides support
                                                for books, study materials, and
                                                other educational resources,
                                                ensuring a comprehensive
                                                financial package.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full border-t py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                Empowering Students, Transforming Lives
                            </h2>
                            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                The PMSSS is a life-changing opportunity that
                                empowers students to pursue their dreams, break
                                the cycle of poverty, and make a lasting impact
                                on their communities. Join the thousands of
                                scholars who have benefited from this
                                transformative program.
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-sm space-y-2">
                            <Link
                                href="/auth/student"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Apply Now
                            </Link>
                            <p className="text-xs text-muted-foreground">
                                Hurry, the application deadline is approaching.{' '}
                                <Link
                                    href="#"
                                    className="underline underline-offset-2"
                                    prefetch={false}
                                >
                                    Learn more
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};
export default page;
