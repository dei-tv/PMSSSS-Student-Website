'use client';

import type { User } from '@supabase/supabase-js';
import { createScopedStore } from 'stan-js';

interface UserStore {
    user: User | null;
}

export const {
    StoreProvider: UserStoreProvider,
    useScopedStore: useUserScopedStore,
    useStore: useUserStore,
} = createScopedStore<UserStore>({
    user: null,
});
