import { UserStoreProvider } from '@/utils/store/user.store';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

interface LayoutProps {
    children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
    const supabase = createClient();
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();

    if (error) {
        return redirect(`/?error=${error.message}`);
    }

    return (
        <UserStoreProvider initialValue={{ user }}>
            {children}
        </UserStoreProvider>
    );
}
