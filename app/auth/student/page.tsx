'use client';
import { useState } from 'react';
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
import { Form } from 'react-hook-form';
import Image from 'next/image';

export default function Page() {
    const [activeTab, setActiveTab] = useState('login');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle sign-in logic here
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
                        <CardContent className="space-y-4">
                            {/* <Form {...Loginform}>
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
                                                placeholder="m@example.com"
                                                type="email"
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
                                                className="text-secondary"
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
                    </Form> */}
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
