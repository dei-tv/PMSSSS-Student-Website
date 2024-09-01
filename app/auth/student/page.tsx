'use client';
import { startTransition, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card';
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from '@/components/ui/form';
import { Form, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';
import { VerifyEmailOtpParams } from '@supabase/supabase-js';
import { zodResolver } from '@hookform/resolvers/zod';
import { studentOtpSchema } from '@/utils/types/forms';
import { useProgress } from 'react-transition-progress';
import { toast } from 'sonner';
import useSWR from 'swr';
import { signInWithOtp, verifyStudentOtp } from '@/utils/actions/auth';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import { useServerAction } from '@/utils/hooks/use-server-action';
import { Loader2 } from 'lucide-react';

export default function Page() {
    const [activeTab, setActiveTab] = useState('login');
    const startProgress = useProgress();

    const { execute: getOtp, loading } = useServerAction(signInWithOtp, () => {
        toast.success('Otp Sent To your Mail');
    });

    const formMethods = useForm<VerifyEmailOtpParams>({
        resolver: zodResolver(studentOtpSchema),
        defaultValues: {
            email: '',
            token: '',
        },
    });

    const onOtpSubmit: SubmitHandler<VerifyEmailOtpParams> = (data) => {
        startTransition(async () => {
            startProgress();
            verifyStudentOtp(data);
            toast.success('Sign in successful');
            console.log(data);
        });
    };

    return (
        <main className="flex h-screen items-center justify-evenly bg-[#F6F5F5]">
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
                        <CardContent>
                            <FormProvider {...formMethods}>
                                <form
                                    onSubmit={formMethods.handleSubmit(
                                        onOtpSubmit
                                    )}
                                    className="space-y-4"
                                >
                                    <FormField
                                        control={formMethods.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id="email"
                                                        placeholder="Enter email"
                                                        {...field}
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
                                    <Button
                                        variant={'secondary'}
                                        disabled={loading}
                                        onClick={() => {
                                            const email =
                                                formMethods.getValues('email');
                                            getOtp(email);
                                        }}
                                    >
                                        {loading && (
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        )}
                                        Send OTP
                                    </Button>
                                    <FormField
                                        control={formMethods.control}
                                        name="token"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    One-Time Password
                                                </FormLabel>
                                                <FormControl>
                                                    <InputOTP
                                                        maxLength={6}
                                                        {...field}
                                                    >
                                                        <InputOTPGroup>
                                                            <InputOTPSlot
                                                                index={0}
                                                            />
                                                            <InputOTPSlot
                                                                index={1}
                                                            />
                                                            <InputOTPSlot
                                                                index={2}
                                                            />
                                                            <InputOTPSlot
                                                                index={3}
                                                            />
                                                            <InputOTPSlot
                                                                index={4}
                                                            />
                                                            <InputOTPSlot
                                                                index={5}
                                                            />
                                                        </InputOTPGroup>
                                                    </InputOTP>
                                                </FormControl>
                                                <FormDescription>
                                                    Please enter the one-time
                                                    password sent to your email.
                                                </FormDescription>
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
                            </FormProvider>
                        </CardContent>
                    </TabsContent>
                    <TabsContent value="signup">
                        <CardHeader>
                            <CardTitle>Create a new account</CardTitle>
                            <CardDescription>
                                Sign up not available for students.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <h2>
                                {' '}
                                Ask your College Admin to create an account for
                                you..
                            </h2>
                        </CardContent>
                    </TabsContent>
                </Tabs>
            </Card>
            <Image
                src="/woohoo.png"
                alt="Student"
                width={800}
                height={450}
                className="h-[calc(100%-1rem)] w-[50%] rounded-xl bg-gradient-to-b from-[#28354F] to-[#040312] object-cover shadow-2xl"
            />
        </main>
    );
}
