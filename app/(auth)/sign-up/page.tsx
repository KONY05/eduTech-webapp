"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    fullName: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({ message: "Invalid email address" }),
    phoneNumber: z.string().min(10, { message: "Invalid phone number" }),
    level: z.string().min(2, {
      message: "Select a Level",
    }),
    referralCode: z.string().optional(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // This shows the error on the confirm password field
  });

function Page() {
  const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      level: "",
      password: "",
      confirmPassword: "",
      referralCode: "",
    },
  });

  useEffect(() => {
    function handleVeilVisibility() {
      const seenSignUpVeil = localStorage.getItem("seenSignUpVeil");
      if (seenSignUpVeil === "true") {
        setIsFirstSectionVisible(false);
      }
    }

    handleVeilVisibility()
  }, [])

  const handleSectionClick = () => {
    setIsFirstSectionVisible(false);
    localStorage.setItem("seenSignUpVeil", "true");
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form validated successfully");
    console.log(values);
    router.push(`sign-up/success/?subscription=${form.getValues().level}`);
  }

  return (
    <main>
      {isFirstSectionVisible ? (
        <section
          onClick={handleSectionClick}
          className="flex h-screen cursor-pointer items-center justify-center border bg-[#2F2D51] transition-opacity duration-300 hover:opacity-90"
        >
          <Image
            src="/signupLogo.png"
            alt="ExamPadi Logo"
            width="100"
            height="100"
          />
        </section>
      ) : (
        <section className="overflow-y-hidden">
          <header className="flex items-center justify-between p-3 md:p-5 lg:mx-8">
            <Image
              src="/examPadiLogo.png"
              alt="ExamPadi Logo"
              width="40"
              height="40"
            />
            <p className="text-[14px] font-medium text-[#6B7083] md:text-[16px]/[24px]">
              Already have an Account?{" "}
              <span className="text-[#FBBE07]">
                <Link href="/sign-in">Sign in</Link>
              </span>
            </p>
          </header>

          <div className="flex flex-col items-center gap-3">
            <div className="text-center">
              <h1 className="text-xl font-medium">
                Let’s create your account ✍️
              </h1>
              <p className="text-[14px] font-normal text-[#6B7083] md:text-[16px]/[24px]">
                Fill in your details below.
              </p>
            </div>

            <div className="z-50 h-[400px] w-[85%] overflow-y-auto rounded-lg bg-[#F3F2FF] p-6 md:h-[600px] md:w-[60%] md:p-9 lg:h-[550px] lg:w-[35%]">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#6B7083]">
                          <Image
                            src="/icons/userIcon.svg"
                            alt="user icon"
                            width={15}
                            height={15}
                          />
                          Full Name
                        </FormLabel>

                        <FormControl>
                          <Input
                            placeholder="Full name"
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#6B7083]">
                          <Image
                            src="/icons/mailIcon.svg"
                            alt="mail icon"
                            width={15}
                            height={15}
                          />
                          Email Address
                        </FormLabel>

                        <FormControl>
                          <Input
                            placeholder="Email Address"
                            type="email"
                            className="rounded-sm bg-white ring-0 outline-none placeholder:text-[14px] focus:border-yellow-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* TODO: Implement number code generator functionality*/}
                  <div>
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#6B7083]">
                            <Image
                              src="/icons/userIcon.svg"
                              alt="user icon"
                              width={15}
                              height={15}
                            />
                            Phone Number
                          </FormLabel>

                          <FormControl>
                            <Input
                              placeholder="Phone Number"
                              className="rounded-sm bg-white ring-0 outline-none placeholder:text-[14px] focus:border-yellow-300"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="level"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#6B7083]">
                          <Image
                            src="/icons/layersIcon.svg"
                            alt="user icon"
                            width={15}
                            height={15}
                          />
                          Select a level
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl className="w-full rounded-sm bg-white ring-0 outline-none placeholder:text-[14px] focus:border-yellow-300">
                            <SelectTrigger>
                              <SelectValue placeholder="Select a level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="primary">Primary</SelectItem>
                            <SelectItem value="junior">Junior</SelectItem>
                            <SelectItem value="senior">Senior</SelectItem>
                            <SelectItem value="full">Full</SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                          Create Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="Create Password"
                              className="rounded-sm bg-white pr-10 ring-0 outline-none placeholder:text-[14px] focus:border-yellow-300"
                              {...field}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword((pwd) => !pwd)}
                              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-sm text-[#FBBE07] underline underline-offset-1"
                            >
                              {showPassword ? "Hide" : "Show"}
                            </button>
                          </div>
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
                            alt="user icon"
                            width={15}
                            height={15}
                          />
                          Confirm Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="Confirm Password"
                              className="rounded-sm bg-white pr-10 ring-0 outline-none placeholder:text-[14px] focus:border-yellow-300"
                              {...field}
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowConfirmPassword((pwd) => !pwd)
                              }
                              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-sm text-[#FBBE07] underline underline-offset-1"
                            >
                              {showConfirmPassword ? "Hide" : "Show"}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="referralCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#6B7083]">
                          <Image
                            src="/icons/ticketIcon.svg"
                            alt="user icon"
                            width={15}
                            height={15}
                          />
                          Referral Code{" "}
                          <sup>
                            <i className="text-[12px]/18px">(optional)</i>
                          </sup>
                        </FormLabel>

                        <FormControl>
                          <Input
                            placeholder="Referral Code"
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
                    className={`w-full rounded-xl font-semibold ${!form.formState.isValid && "cursor-not-allowed bg-[#CBCAD3] hover:bg-[#CBCAD3]"}`}
                  >
                    Create an Account
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default Page;
