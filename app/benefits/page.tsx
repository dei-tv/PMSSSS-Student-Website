import { AwardIcon, BriefcaseIcon, CompassIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className="flex min-h-[100dvh] flex-col">
                <main className="flex-1">
                    <section className="w-full py-12 md:py-24 lg:py-32">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                            Unlock Your Potential with the Prime
                                            Minister's Special Scholarship
                                            Scheme
                                        </h1>
                                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                            Discover the life-changing
                                            opportunities offered by the PMSSS,
                                            empowering students to achieve their
                                            academic and professional dreams.
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
                                    width="550"
                                    height="550"
                                    alt="Hero"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
                                />
                            </div>
                        </div>
                    </section>
                    <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="flex flex-col items-start space-y-2">
                                    <AwardIcon className="h-8 w-8 text-primary" />
                                    <h3 className="text-xl font-bold">
                                        Prestigious Scholarships
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Gain access to prestigious scholarships
                                        that cover tuition fees, living
                                        expenses, and more, empowering you to
                                        focus on your studies.
                                    </p>
                                </div>
                                <div className="flex flex-col items-start space-y-2">
                                    <BriefcaseIcon className="h-8 w-8 text-primary" />
                                    <h3 className="text-xl font-bold">
                                        Career Opportunities
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Unlock a world of career opportunities
                                        through the PMSSS, connecting you with
                                        leading institutions and industry
                                        partners.
                                    </p>
                                </div>
                                <div className="flex flex-col items-start space-y-2">
                                    <CompassIcon className="h-8 w-8 text-primary" />
                                    <h3 className="text-xl font-bold">
                                        Global Exposure
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Gain valuable international experience
                                        and broaden your horizons through the
                                        PMSSS, preparing you for success in a
                                        global marketplace.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default page;
