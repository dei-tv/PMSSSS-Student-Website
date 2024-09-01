'use client';
import { useState } from 'react';
import { Menu, Home, Layers, Wallet, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { useUserStore } from '@/utils/store/user.store';
import { Badge } from '@/components/ui/badge';

export default function Page() {
    const [activeSection, setActiveSection] = useState('home');
    const router = useRouter();
    const supabase = createClient();
    const { user } = useUserStore();

    const NavButton = ({
        icon: Icon,
        section,
    }: {
        icon: React.ElementType;
        section: string;
    }) => (
        <button
            onClick={() => setActiveSection(section)}
            className={`rounded-lg p-2 ${
                activeSection === section
                    ? 'bg-indigo-500 text-white'
                    : 'text-gray-400 hover:bg-gray-700'
            }`}
        >
            <Icon className="h-6 w-6" />
        </button>
    );

    const ScholarshipProgress = () => (
        <Card className="col-span-2 bg-gray-800 text-white">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">
                    Track your Overall progress of scholarship here
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Progress value={33} className="w-full" />
                <p className="mt-2">
                    33% of scholarship requirements completed
                </p>
            </CardContent>
        </Card>
    );

    const AcademicPerformance = () => (
        <Card className="bg-gray-800 text-white">
            <CardHeader>
                <CardTitle>Academic Performance</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Current GPA: 3.7</p>
                <p>Credits Completed: 60/120</p>
            </CardContent>
        </Card>
    );

    const FinancialAid = () => (
        <Card className="bg-gray-800 text-white">
            <CardHeader>
                <CardTitle>Financial Aid</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Scholarship Amount: $10,000</p>
                <p>Next Disbursement: 09/15/2023</p>
            </CardContent>
        </Card>
    );

    const StudentDetails = () => (
        <Card className="col-span-2 bg-gray-800 text-white">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">
                    Student Details
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>Name: John Doe</p>
                <p>Student ID: 12345678</p>
                <p>Major: Computer Science</p>
                <p>Year: Junior</p>
            </CardContent>
        </Card>
    );

    return (
        <div className="flex h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <aside className="flex w-16 flex-col items-center space-y-8 bg-gray-800 py-4">
                <NavButton icon={Home} section="home" />
                <NavButton icon={Layers} section="courses" />
                <NavButton icon={Wallet} section="finance" />
                <NavButton icon={Clock} section="schedule" />
                <NavButton icon={Calendar} section="calendar" />
            </aside>

            {/* Main content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Header */}
                <header className="flex w-full items-center justify-between bg-gray-800 p-4">
                    <h1 className="text-xl font-semibold">College Dashboard</h1>
                    <div className="flex flex-row items-center gap-1">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                        <Badge variant="secondary">{user?.email}</Badge>
                        <Button
                            variant="outline"
                            className="rounded-lg"
                            onClick={async () => {
                                await supabase.auth.signOut();
                                router.replace('/');
                            }}
                        >
                            Sign out
                        </Button>
                    </div>
                </header>

                {/* Dashboard content */}
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <ScholarshipProgress />
                        <AcademicPerformance />
                        <FinancialAid />
                        <StudentDetails />
                    </div>
                </main>
            </div>
        </div>
    );
}