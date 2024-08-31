'use client';
import { Button } from '@/components/ui/button';
import { logout } from '@/utils/actions/auth';
import { useUserStore } from '@/utils/store/user.store';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { LayoutGrid, Home, Wallet, Clock, Calendar } from 'lucide-react';
import React from 'react';

export default function Page() {
    const supabase = createClient();
    const router = useRouter();
    const { user } = useUserStore();
    // console.log(user);
    return (
        <main className="flex h-screen bg-gray-900 text-white">
            {/* sidebar */}
            <aside className="flex w-16 flex-col items-center space-y-8 bg-gray-800 py-4">
                <Home className="h-6 w-6 text-indigo-500" />
                <LayoutGrid className="h-6 w-6 text-gray-400" />
                <Wallet className="h-6 w-6 text-gray-400" />
                <Clock className="h-6 w-6 text-gray-400" />
                <Calendar className="h-6 w-6 text-gray-400" />
            </aside>

            {/* Main content */}
            <div className="flex flex-1 flex-col">
                {/* Header */}
                <header className="flex w-full items-center justify-between bg-gray-800 p-4">
                    <h1 className="text-xl font-semibold">College Dashboard</h1>
                    <div className="flex flex-row items-center gap-1">
                        <p>{user?.email} </p>
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
                <main className="flex-1 space-y-6 p-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* PMSS Scheme Registration */}
                        <div className="rounded-lg bg-gray-800 p-6">
                            <h2 className="mb-4 text-2xl font-bold">
                                List of students whose accounts have been
                                registered in the pmss scheme
                            </h2>
                            {/* Add a table or list of students here */}
                            <p className="text-gray-400">
                                No students registered yet.
                            </p>
                        </div>

                        {/* Scholarship Recipients */}
                        <div className="rounded-lg bg-gray-800 p-6">
                            <h2 className="mb-4 text-2xl font-bold">
                                Students who got the scholarship
                            </h2>
                            {/* Add a table or list of scholarship recipients here */}
                            <p className="text-gray-400">
                                No scholarship recipients yet.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </main>
    );
}
