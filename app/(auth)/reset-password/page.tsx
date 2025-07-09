"use client";

import React from "react";
import Image from "next/image";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {LucideArrowLeft} from "lucide-react";
import {useRouter} from "next/navigation";

const formSchema = z.object({
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z.string().min(8, { message: "Password must be the same" }),
});

function Page() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form validated successfully");
    console.log(values);
  }

  function handleBackClick() {
    router.back();
  }

  return (
    <main>
      <header className="flex items-center p-3 md:p-5 lg:mx-8">
        <Image
          src="/examPadiLogo.png"
          alt="ExamPadi Logo"
          width="40"
          height="40"
        />
      </header>

      <div className="mt-8 flex flex-col items-center gap-3">
        <p className="flex w-full items-center gap-2.5 pl-4 text-[14px] underline-offset-1 hover:underline md:pl-12 md:text-[16px]">
          <LucideArrowLeft className="size-4" onClick={handleBackClick} /> Go Back to Login
        </p>
        <div className="w-[85%] space-y-4 text-center lg:w-[35%]">
          <h1 className="text-xl font-medium">Forgot Password 😢</h1>
          <p className="text-[14px] font-normal text-[#6B7083] md:text-[16px]/[24px]">
            Enter your email address and we will send an email to you with
            instructions on how to change your password
          </p>
        </div>

        <div className="z-50 mt-3 w-[85%] overflow-y-auto rounded-lg bg-[#F3F2FF] p-6 md:w-[45%] md:p-9 lg:w-[35%]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#6B7083]">
                      <Image
                        src="/icons/lockIcon.svg"
                        alt="lock icon"
                        width={15}
                        height={15}
                      />
                      Email Address
                    </FormLabel>

                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Create new password"
                        className="rounded-sm bg-white ring-0 outline-none placeholder:text-[14px] focus:border-yellow-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#6B7083]">
                      <Image
                        src="/icons/lockIcon.svg"
                        alt="lock icon"
                        width={15}
                        height={15}
                      />
                      Email Address
                    </FormLabel>

                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirm new password"
                        className="rounded-sm bg-white ring-0 outline-none placeholder:text-[14px] focus:border-yellow-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className={`w-full rounded-xl font-semibold ${!form.formState.isValid && "cursor-not-allowed bg-[#CBCAD3]"}`}
              >
                Send
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}

export default Page;
