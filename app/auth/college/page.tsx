'use client';

import { startTransition, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { login, signup } from '@/utils/actions/auth';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';
import {
    LoginFormData,
    loginSchema,
    SignupFormData,
    signupSchema,
} from '@/utils/types/forms';
import { useProgress } from 'react-transition-progress';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { Check, X } from 'lucide-react';

const PasswordChecklist = ({ password }: { password: string }) => {
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);

    return (
        <ul className="mt-2 space-y-1">
            <li
                className={`flex flex-row items-center ${hasNumber ? 'text-green-500' : 'text-red-500'}`}
            >
                {hasNumber ? <Check /> : <X />}
                <span className="ml-2">At least 1 number</span>
            </li>
            <li
                className={`flex flex-row items-center ${hasSpecialChar ? 'text-green-500' : 'text-red-500'}`}
            >
                {hasSpecialChar ? <Check /> : <X />}
                <span className="ml-2">At least 1 special symbol</span>
            </li>
            <li
                className={`flex flex-row items-center ${hasUpperCase ? 'text-green-500' : 'text-red-500'}`}
            >
                {hasUpperCase ? <Check /> : <X />}
                <span className="ml-2">At least 1 uppercase alphabet</span>
            </li>
            <li
                className={`flex flex-row items-center ${hasLowerCase ? 'text-green-500' : 'text-red-500'}`}
            >
                {hasLowerCase ? <Check /> : <X />}
                <span className="ml-2">At least 1 lowercase alphabet</span>
            </li>
        </ul>
    );
};

export default function LoginPage() {
    const [activeTab, setActiveTab] = useState('login');
    const [password, setPassword] = useState('');
    const Router = useRouter();
    const startProgress = useProgress();
    const supabase = createClient();

    useEffect(() => {
        const awaitUser = async () => {
            const {
                data: { user },
                error,
            } = await supabase.auth.getUser();

            if (user) {
                Router.replace('/dashboard/college');
            }
        };
        awaitUser();
    });

    const Loginform = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const Signupform = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: '',
            password: '',
            aicteId: '',
        },
    });

    const onSignupSubmit: SubmitHandler<SignupFormData> = (data) => {
        startTransition(async () => {
            startProgress();
            signup(data);
            toast.success('Account created successfully');
            console.log(data);
        });
    };

    const onLoginSubmit: SubmitHandler<LoginFormData> = (data) => {
        startTransition(async () => {
            startProgress();
            login(data);
            toast.success('Logged in successfully');
            console.log(data);
        });
    };

    return (
        <main className="flex h-screen items-center justify-center bg-background">
            <Card className="w-full max-w-md">
                <Tabs
                    defaultValue="login"
                    className="w-full"
                    value={activeTab}
                    onValueChange={setActiveTab}
                >
                    <TabsList className="grid grid-cols-2 border-b">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <CardHeader>
                            <CardTitle>Login to your account</CardTitle>
                            <CardDescription>
                                Enter your email and password to access your
                                account.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Form {...Loginform}>
                                <form
                                    onSubmit={Loginform.handleSubmit(
                                        onLoginSubmit
                                    )}
                                >
                                    <FormField
                                        control={Loginform.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="my-2 space-y-2">
                                                <FormLabel htmlFor="email">
                                                    Email ID
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id="email"
                                                        placeholder="john.doe@example.com"
                                                        type="email"
                                                        {...field}
                                                        className="placeholder:text-white/50"
                                                    />
                                                </FormControl>
                                                <FormDescription>
                                                    The Email assigned to the
                                                    representative.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={Loginform.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem className="my-2 space-y-2">
                                                <FormLabel htmlFor="password">
                                                    Password
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id="password"
                                                        type="password"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button
                                        className="mt-6 w-full"
                                        type="submit"
                                    >
                                        Login
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </TabsContent>
                    <TabsContent value="signup">
                        <CardHeader>
                            <CardTitle>Create a new account</CardTitle>
                            <CardDescription>
                                Enter your email, password, and AICTE ID to sign
                                up.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Form {...Signupform}>
                                <form
                                    onSubmit={Signupform.handleSubmit(
                                        onSignupSubmit
                                    )}
                                >
                                    <FormField
                                        control={Signupform.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="my-2 space-y-2">
                                                <FormLabel htmlFor="email">
                                                    Email ID
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id="email"
                                                        placeholder="john.doe@example.com"
                                                        type="email"
                                                        {...field}
                                                        className="placeholder:text-white/50"
                                                    />
                                                </FormControl>
                                                <FormDescription>
                                                    The Email assigned to the
                                                    representative.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={Signupform.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem className="my-2 space-y-2">
                                                <FormLabel htmlFor="password">
                                                    Password
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id="password"
                                                        type="password"
                                                        {...field}
                                                        onChange={(e) => {
                                                            setPassword(
                                                                e.target.value
                                                            );
                                                            field.onChange(e);
                                                        }}
                                                    />
                                                </FormControl>
                                                <PasswordChecklist
                                                    password={password}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={Signupform.control}
                                        name="aicteId"
                                        render={({ field }) => (
                                            <FormItem className="my-2 space-y-2">
                                                <FormLabel htmlFor="aicteid">
                                                    AICTE ID
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id="aicteid"
                                                        type="text"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription>
                                                    The AICTE ID assigned to the
                                                    college.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button
                                        className="mt-6 w-full"
                                        type="submit"
                                    >
                                        Sign Up
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </TabsContent>
                </Tabs>
            </Card>
        </main>
    );
}
