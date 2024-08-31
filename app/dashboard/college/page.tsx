'use client';
import { Button } from '@/components/ui/button';
import { logout } from '@/utils/actions/auth';
import { useUserStore } from '@/utils/store/user.store';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';

export default function Page() {
    const supabase = createClient();
    const router = useRouter();
    const { user } = useUserStore();
    console.log(user);
    return (
        <main className="h-full min-h-screen w-full bg-[#090909] text-white">
            <div className="flex flex-col gap-1">
                <p>{user?.email} </p>
                <p>{user?.role}</p>
            </div>
            <Button
                onClick={async () => {
                    await supabase.auth.signOut();
                    router.replace('/');
                }}
            >
                Sign out
            </Button>
        </main>
    );
}
