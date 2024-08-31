'use client';

import { useState } from 'react';
import { z } from 'zod';
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

const signupSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    aicteId: z.string().min(10, 'AICTE ID must be at least 10 characters'),
});

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
});

type SignupFormData = z.infer<typeof signupSchema>;
type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const [activeTab, setActiveTab] = useState('login');

    const {
        register: signupRegister,
        handleSubmit: signupHandleSubmit,
        formState: { errors: signupErrors },
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
    });

    const {
        register: loginRegister,
        handleSubmit: loginHandleSubmit,
        formState: { errors: loginErrors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSignupSubmit: SubmitHandler<SignupFormData> = (data) => {
        console.log(data);
    };

    const onLoginSubmit: SubmitHandler<LoginFormData> = (data) => {
        console.log(data);
    };

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
        submitHandler: () => void
    ) => {
        if (event.key === 'Enter') {
            submitHandler();
        }
    };

    return (
        <form className="flex h-screen items-center justify-center bg-background">
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
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    {...loginRegister('email')}
                                    onKeyDown={(e) =>
                                        handleKeyDown(
                                            e,
                                            loginHandleSubmit(onLoginSubmit)
                                        )
                                    }
                                />
                                {loginErrors.email?.message && (
                                    <span>{loginErrors.email.message}</span>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    {...loginRegister('password')}
                                    onKeyDown={(e) =>
                                        handleKeyDown(
                                            e,
                                            loginHandleSubmit(onLoginSubmit)
                                        )
                                    }
                                />
                                {loginErrors.password?.message && (
                                    <span>{loginErrors.password.message}</span>
                                )}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" formAction={login}>
                                Login
                            </Button>
                        </CardFooter>
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
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    {...signupRegister('email')}
                                    onKeyDown={(e) =>
                                        handleKeyDown(
                                            e,
                                            signupHandleSubmit(onSignupSubmit)
                                        )
                                    }
                                />
                                {signupErrors.email?.message && (
                                    <span>{signupErrors.email.message}</span>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    {...signupRegister('password')}
                                    onKeyDown={(e) =>
                                        handleKeyDown(
                                            e,
                                            signupHandleSubmit(onSignupSubmit)
                                        )
                                    }
                                />
                                {signupErrors.password?.message && (
                                    <span>{signupErrors.password.message}</span>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="aicte-id">AICTE ID</Label>
                                <Input
                                    id="aicte-id"
                                    {...signupRegister('aicteId')}
                                    onKeyDown={(e) =>
                                        handleKeyDown(
                                            e,
                                            signupHandleSubmit(onSignupSubmit)
                                        )
                                    }
                                />
                                {signupErrors.aicteId?.message && (
                                    <span>{signupErrors.aicteId.message}</span>
                                )}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" formAction={signup}>
                                Sign Up
                            </Button>
                        </CardFooter>
                    </TabsContent>
                </Tabs>
            </Card>
        </form>
    );
}
