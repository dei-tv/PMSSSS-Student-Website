'use client';
import { Button } from '@/components/ui/button';
import { useUserStore } from '@/utils/store/user.store';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import {
    LayoutGrid,
    Home,
    Wallet,
    Clock,
    CalendarDays,
    CalendarIcon,
} from 'lucide-react';
import { format } from 'date-fns';
import React, { startTransition, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { NavButtonProps } from '@/utils/types/core';
import { Badge } from '@/components/ui/badge';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { StudentAddFormData, studentAddSchema } from '@/utils/types/forms';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { signUpStudent } from '@/utils/actions/auth';
import { toast } from 'sonner';
import { useProgress } from 'react-transition-progress';

export default function Page() {
    const [activeSection, setActiveSection] = useState('home');
    const router = useRouter();
    const supabase = createClient();
    const { user } = useUserStore();
    const startProgress = useProgress();

    useEffect(() => {
        if (user?.user_metadata.account_type !== 'college') {
            router.replace('/');
        }
    }, [user]);

    const form = useForm<StudentAddFormData>({
        resolver: zodResolver(studentAddSchema),
        defaultValues: {
            studentName: '',
            studentId: '',
            course: '',
            email: '',
            phone: '',
            address: '',
        },
    });

    const onSubmit: SubmitHandler<StudentAddFormData> = (data) => {
        startTransition(async () => {
            startProgress();
            signUpStudent(data);
            toast.success('Account created successfully');
            console.log(data);
        });
    };

    const NavButton: React.FC<NavButtonProps> = ({ icon: Icon, section }) => (
        <Button
            variant="ghost"
            onClick={() => setActiveSection(section)}
            className={`rounded-lg p-2 ${
                activeSection === section
                    ? 'bg-indigo-500 text-white'
                    : 'text-gray-400 hover:bg-gray-700'
            }`}
        >
            <Icon className="h-6 w-6" />
        </Button>
    );

    const HomeSection = () => (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-800 p-6">
                <h2 className="mb-4 text-2xl font-bold">
                    Students registered in PMSSS scheme
                </h2>
                <p className="text-gray-400">No students registered yet.</p>
            </div>
            <div className="rounded-lg bg-gray-800 p-6">
                <h2 className="mb-4 text-2xl font-bold">
                    Scholarship Recipients
                </h2>
                <p className="text-gray-400">No scholarship recipients yet.</p>
            </div>
        </div>
    );

    const AddStudentSection = () => (
        <div className="mx-auto max-w-md rounded-lg bg-gray-800 p-6">
            <h2 className="mb-4 text-2xl font-bold">
                Add Student to PMSSS Scheme
            </h2>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FormField
                        control={form.control}
                        name="studentName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Student Name</FormLabel>
                                <FormControl>
                                    <Input
                                        id="studentName"
                                        placeholder="Enter student name"
                                        className="bg-gray-700 text-white"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="studentId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Student ID</FormLabel>
                                <FormControl>
                                    <Input
                                        id="studentId"
                                        placeholder="Enter student ID"
                                        className="bg-gray-700 text-white"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="course"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Course</FormLabel>
                                <FormControl>
                                    <Input
                                        id="course"
                                        placeholder="Enter course name"
                                        className="bg-gray-700 text-white"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter student email"
                                        className="bg-gray-700 text-white"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="Enter phone number"
                                        className="bg-gray-700 text-white"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Input
                                        id="address"
                                        placeholder="Enter student address"
                                        className="bg-gray-700 text-white"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Gender</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a Gender" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="male">
                                            Male
                                        </SelectItem>
                                        <SelectItem value="female">
                                            Female
                                        </SelectItem>
                                        <SelectItem value="other">
                                            Other
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dob"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Date of birth</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={'outline'}
                                                className={cn(
                                                    'pl-3 text-left font-normal',
                                                    !field.value &&
                                                        'text-muted-foreground'
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, 'PPP')
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="w-auto p-0"
                                        align="start"
                                    >
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date > new Date() ||
                                                date < new Date('1900-01-01')
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">
                        Add to PMSSS Scheme
                    </Button>
                </form>
            </Form>
        </div>
    );

    const PlaceholderSection = ({ title }: { title: string }) => (
        <div className="rounded-lg bg-gray-800 p-6">
            <h2 className="mb-4 text-2xl font-bold">{title}</h2>
            <p className="text-gray-400">This section is under construction.</p>
        </div>
    );

    return (
        <div className="flex h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <aside className="flex w-16 flex-col items-center space-y-8 bg-gray-800 py-4">
                <NavButton icon={Home} section="home" />
                <NavButton icon={LayoutGrid} section="dashboard" />
                <NavButton icon={Wallet} section="finance" />
                <NavButton icon={Clock} section="schedule" />
                <NavButton icon={CalendarDays} section="calendar" />
            </aside>

            {/* Main content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Header */}
                <header className="flex w-full items-center justify-between bg-gray-800 p-4">
                    <h1 className="text-xl font-semibold">College Dashboard</h1>
                    <div className="flex flex-row items-center gap-1">
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
                    {activeSection === 'home' && <HomeSection />}
                    {activeSection === 'dashboard' && <AddStudentSection />}
                    {activeSection === 'finance' && (
                        <PlaceholderSection title="Finance" />
                    )}
                    {activeSection === 'schedule' && (
                        <PlaceholderSection title="Schedule" />
                    )}
                    {activeSection === 'calendar' && (
                        <PlaceholderSection title="Calendar" />
                    )}
                </main>
            </div>
        </div>
    );
}
