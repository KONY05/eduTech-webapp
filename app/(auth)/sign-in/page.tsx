"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form validated successfully");
    console.log(values);
  }

  return (
    <main>
      <header className="flex items-center justify-between p-3 md:p-5 lg:mx-8">
        <Image
          src="/examPadiLogo.png"
          alt="ExamPadi Logo"
          width="40"
          height="40"
        />
        <p className="text-[14px] font-medium text-[#6B7083] md:text-[16px]/[24px]">
          Don&apos; have an Account?{" "}
          <span className="text-[#FBBE07]">
            <Link href="/sign-up">Sign up</Link>
          </span>
        </p>
      </header>

      <div className="mt-8 flex flex-col items-center gap-3">
        <div className="text-center">
          <h1 className="text-xl font-medium">Welcome back! 👋</h1>
          <p className="text-[14px] font-normal text-[#6B7083] md:text-[16px]/[24px]">
            We are excited to see you again.
          </p>
        </div>

        <div className="] z-50 w-[85%] overflow-y-auto rounded-lg bg-[#F3F2FF] p-6 md:w-[45%] md:p-9 lg:w-[35%]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#6B7083]">
                      <Image
                        src="/icons/mailIcon.svg"
                        alt="user icon"
                        width={15}
                        height={15}
                      />
                      Email Address
                    </FormLabel>

                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="rounded-sm bg-white ring-0 outline-none placeholder:text-[14px] focus:border-yellow-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#6B7083]">
                      <Image
                        src="/icons/lockIcon.svg"
                        alt="user icon"
                        width={15}
                        height={15}
                      />
                      Password
                    </FormLabel>

                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        className="rounded-sm bg-white ring-0 outline-none placeholder:text-[14px] focus:border-yellow-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="text-right text-[14px] font-medium text-[#4D2456] md:text-[16px]">
                <Link href="/forgot-password">Forgot your password?</Link>
              </p>
              <Button
                type="submit"
                className={`w-full rounded-xl font-semibold ${!form.formState.isValid && "cursor-not-allowed bg-[#CBCAD3]"}`}
              >
                Login
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}

export default Page;
