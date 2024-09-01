import React from 'react';

const page = () => {
    return (
        <section className="mx-auto w-full max-w-4xl px-4 py-12 md:px-6 md:py-16">
            <header className="mb-8">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Eligibility Criteria
                </h1>
            </header>
            <div className="grid gap-8 md:gap-12">
                <section>
                    <h2 className="mb-4 text-2xl font-bold">
                        Academic Excellence
                    </h2>
                    <p className="text-muted-foreground">
                        To maximize your chances of getting the scholarship, you
                        should aim for at least 85% marks. There are only 5,000
                        scholarships available, and scoring above 80% is
                        essential for a competitive edge.
                    </p>
                </section>
                <section>
                    <h2 className="mb-4 text-2xl font-bold">Financial Need</h2>
                    <p className="text-muted-foreground">
                        Applicants must demonstrate financial need by having a
                        family income of ₹8,00,000 or less per year.
                    </p>
                </section>
                <section>
                    <h2 className="mb-4 text-2xl font-bold">
                        Application Process (Older)
                    </h2>
                    <p className="text-muted-foreground">
                        Applicants must apply online via the AICTE web portal.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default page;
