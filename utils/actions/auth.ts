'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import { LoginFormData, SignupFormData } from '../types/forms';

export async function login(formData: LoginFormData) {
    const supabase = createClient();

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.email as string,
        password: formData.password as string,
    };

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        redirect(`/error?=${error.message}`);
    }

    revalidatePath('/dashboard/college');
    redirect('/dashboard/college');
}

export async function signup(formData: SignupFormData) {
    const supabase = createClient();

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.email as string,
        password: formData.password as string,
        options: {
            data: {
                aicteId: formData.aicteId,
                account_type: 'college',
            },
        },
    };

    const { error } = await supabase.auth.signUp(data);

    if (error) {
        redirect('/error');
    }

    revalidatePath('/dashboard/college');
    redirect('/dashboard/college');
}

export async function logout() {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
        redirect('/error');
    }
    revalidatePath('/');
    redirect('/');
}
