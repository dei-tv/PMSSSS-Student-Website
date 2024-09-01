import Spotlight from '@/components/ui/spotlight';
import { Link } from 'react-transition-progress/next';

const customContent = {
    HowToApply: [
        {
            title: 'Financial Need',
            content:
                'Demonstrate financial need with a family income of ₹8,00,000 or less per year.',
        },
        {
            title: 'Academic Excellence',
            content:
                'To maximize your chances with PMSSS, aim for at least 85% marks. With only 5,000 scholarships available, scoring above 80% is essential for a competitive edge',
        },
        {
            title: 'Application Process',
            content:
                'Online Application: Applicants must apply online via the AICTE web portal',
        },
    ],
    WhatYoullReceive: [
        {
            title: 'Living Allowance',
            content:
                '₹1 lakh per year, paid in two installments of ₹50,000 each, to help with books, stationery, hostel fees, and other expenses.',
        },
        {
            title: 'Tuition Fees',
            content:
                'Coverage up to ₹30,000 per year for general courses, ₹2.25 lakhs for professional courses, and ₹3 lakhs for medical courses. The scholarship will cover actual fees as per the State Fee Regulatory Committee, if lower than these limits.',
        },
        {
            title: 'Merit-Based Support',
            content:
                'A merit-based scholarship program specifically for students in Jammu and Kashmir, recognizing academic excellence.',
        },
    ],
    AreYouEligible: [
        {
            title: 'Submit Application',
            content:
                "Visit AICTE's PMSSS page and register. Go to AICTE JK Scholarship Portal and complete your application.",
        },
        {
            title: 'Provide Supporting Documents',
            content:
                'Upload necessary documents and ensure you meet the academic requirements (60% marks for new applicants; 50% for renewals). Use a new email and phone number if reapplying.',
        },
        {
            title: 'Application Review',
            content:
                'Your application will be reviewed to determine eligibility and selection.',
        },
    ],
};

export default function Component() {
    return (
        <div className="flex min-h-[100dvh] flex-col">
            <main className="flex-1">
                <section className="xl:py- w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Achieve More with PMSSS
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Elevate Your Education with PMSSS.
                                        Unlock Your Potential with Our
                                        Scholarships. Transform your future with
                                        the Prime Minister's Special Scholarship
                                        Scheme. Get the financial support you
                                        need for higher education and open doors
                                        to opportunities that pave the way to
                                        success.
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
                                    Are You Eligible? Check Your Criteria
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    The scholarship is available to all
                                    qualified students who fulfill the academic
                                    and financial criteria. Discover the
                                    eligibility requirements and open the door
                                    to your educational aspirations.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
                            {customContent.HowToApply.map((content, index) => (
                                <Spotlight
                                    key={index}
                                    Byline={(index + 1).toString()}
                                    Title={content.title}
                                    Content={content.content}
                                />
                            ))}
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
                        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
                            {customContent.WhatYoullReceive.map(
                                (content, index) => (
                                    <Spotlight
                                        key={index}
                                        Byline={(index + 1).toString()}
                                        Title={content.title}
                                        Content={content.content}
                                    />
                                )
                            )}
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
                        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
                            {customContent.AreYouEligible.map(
                                (content, index) => (
                                    <Spotlight
                                        key={index}
                                        Byline={(index + 1).toString()}
                                        Title={content.title}
                                        Content={content.content}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Ready to Unlock Your Potential?
                            </h2>
                            <p className="max-w-[600px] text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Take the first step towards your academic and
                                personal growth. Apply for the government
                                scholarship today and embark on a transformative
                                journey.
                            </p>
                            <div className="flex flex-col items-center justify-center gap-2 min-[400px]:flex-row">
                                <Link
                                    href="/auth/student"
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
        </div>
    );
}
