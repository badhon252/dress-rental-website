"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const formSchema = z.object({
  businessName: z.string().min(5, {
    message: "Business name must be at least 5 characters.",
  }),
  abnNumber: z.string().optional(),
  instagramHandle: z.string().min(5, {
    message: "Instagram must be at least 5 characters.",
  }),
  businessWebsite: z.string().optional(),
  fullName: z.string().min(5, {
    message: "Full name must be at least 5 characters.",
  }),
  businessEmail: z.string().optional(),
  phoneNumber: z.string().min(5, {
    message: "Phone number must be at least 5 characters.",
  }),
  businessAddress: z.string().min(5, {
    message: "Business address must be at least 5 characters.",
  }),

  numberOfDresses: z.string().optional(),
  reviewStockMethod: z.object({
    website: z.boolean(),
    instagram: z.boolean(),
    keyBrands: z.boolean(),
  }),
  notes: z.string().optional(),
  allowLocalPickup: z.enum(["yes", "no"], {
    required_error: "Please select an option",
  }),
  shipAustraliaWide: z.enum(["yes", "no"], {
    required_error: "Please select an option",
  }),
  allowTryOn: z.enum(["yes", "no"], {
    required_error: "Please select an option",
  }),
  agreedTerms: z.boolean().optional(),
  agreedCurationPolicy: z.boolean().optional(),
});

const BecomeALenderForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      abnNumber: "",
      instagramHandle: "",
      businessWebsite: "",
      fullName: "",
      businessEmail: "",
      phoneNumber: "",
      businessAddress: "",
      numberOfDresses: "",

      reviewStockMethod: {
        website: true,
        instagram: false,
        keyBrands: true,
      },
      notes: "",
      allowLocalPickup: "no",
      shipAustraliaWide: "yes",
      allowTryOn: "yes",
      agreedTerms: false,
      agreedCurationPolicy: false,
    },
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { mutate, isPending } = useMutation({
    mutationKey: ["become-a-lender"],
    mutationFn: (values: z.infer<typeof formSchema>) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/application/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data?.status) {
        toast.error(data.message || "Something went wrong");
        return;
      } else {
        toast.success(data.message || "Application created successfully");
        form.reset();
      }
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values, values.numberOfDresses);
    console.log(values);
    mutate(values)
  }
  return (
    <div className="mt-20 container mx-auto">
      <div className="py-[25px] md:py-[38px] lg:py-[50px]">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-normal font-avenir uppercase leading-[64px] tracking-[10px] text-black text-center">
          APPLY TO LEND WITH MUSE GALA
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl font-normal uppercase text-black leading-[36px] font-nimbus tracking-[10%] text-center pt-[10px] md:pt-[13px] lg:pt-[15px]">
          Join Australia’s curated fashion rental platform. Showcase your
          collection, <br className="block md:hidden" /> expand your reach, and
          grow with us.
        </p>
      </div>
      <div className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <Accordion type="single" collapsible defaultValue="item-1">
              {/* first  */}
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl md:text-[28px] lg:text-[32px] font-normal font-nimbus tracking-[0.2em] leading-[48px] uppercase">
                  BUSINESS INFORMATION
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                            Business Name{" "}
                            <sup className="pl-1 text-[#891D33]">*</sup>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-[90%] h-[60px]  border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-2 shadow-none !text-xl md:text-2xl font-medium leading-normal text-black"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="py-[25px] md:py-[35px] lg:py-[45px]">
                    <FormField
                      control={form.control}
                      name="abnNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                            Business ABN{" "}
                            <span className="pl-4 md:pl-5 text-lg font-normal tracking-[0%] text-[#595959] font-nimbus leading-[24px] ">
                              (if available)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-[90%] h-[60px]  border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-2 shadow-none !text-xl md:text-2xl font-medium leading-normal text-black"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="instagramHandle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                            Instagram Handle{" "}
                            <sup className="pl-1 text-[#891D33]">*</sup>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-[90%] h-[60px]  border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-2 shadow-none !text-xl md:text-2xl font-medium leading-normal text-black"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="pt-[25px] md:pt-[35px] lg:pt-[45px]">
                    <FormField
                      control={form.control}
                      name="businessWebsite"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                            Website
                            <span className="pl-4 md:pl-5 text-lg font-normal tracking-[0%] text-[#595959] font-nimbus leading-[24px] ">
                              (if available)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-[90%] h-[60px]  border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-2 shadow-none !text-xl md:text-2xl font-medium leading-normal text-black"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* second  */}
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-2xl md:text-[28px] lg:text-[32px] font-normal font-nimbus tracking-[0.2em] leading-[48px] uppercase">
                  Contact Information
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                            Full Name
                            <sup className="pl-1 text-[#891D33]">*</sup>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-[90%] h-[60px]  border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-2 shadow-none !text-xl md:text-2xl font-medium leading-normal text-black"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="py-[25px] md:py-[35px] lg:py-[45px]">
                    <FormField
                      control={form.control}
                      name="businessEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                            Email Address
                            <span className="pl-4 md:pl-5 text-lg font-normal tracking-[0%] text-[#595959] font-nimbus leading-[24px] ">
                              (if available)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-[90%] h-[60px]  border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-2 shadow-none !text-xl md:text-2xl font-medium leading-normal text-black"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                            Phone Number
                            <sup className="pl-1 text-[#891D33]">*</sup>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-[90%] h-[60px]  border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-2 shadow-none !text-xl md:text-2xl font-medium leading-normal text-black"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="businessAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                            Business Address
                            <sup className="pl-1 text-[#891D33]">*</sup>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-[90%] h-[60px]  border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-2 shadow-none !text-xl md:text-2xl font-medium leading-normal text-black "
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* third  */}
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-2xl md:text-[28px] lg:text-[32px] font-normal font-nimbus tracking-[0.2em] leading-[48px] uppercase">
                  Collection Overview
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <FormField
                      control={form.control}
                      name="numberOfDresses"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                            How many dresses do you want to list?
                            <sup className="pl-1 text-[#891D33]">*</sup>
                          </FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className="w-[90%] h-[60px] border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 active-visible:ring-0 active-visible:ring-offset-0 focus:ring-0 focus:ring-none px-2 shadow-none !text-xl !md:text-2xl !tracking-[15%] font-medium leading-normal text-black">
                                <SelectValue
                                  placeholder="Please Select"
                                  className="!text-xl !md:text-2xl font-normal font-nimbus !tracking-[15%] leading-[28px] text-black"
                                />
                              </SelectTrigger>
                              <SelectContent className="!text-xl !md:text-2xl font-normal font-nimbus !tracking-[15%] leading-[28px] text-black">
                                <SelectItem value="1-5">1-5 Dresses</SelectItem>
                                <SelectItem value="5-15">
                                  5-15 Dresses
                                </SelectItem>
                                <SelectItem value="15-30">
                                  15-30 Dresses
                                </SelectItem>
                                <SelectItem value="30+">30+ Dresses</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="pt-[25px] md:pt-[35px] lg:pt-[45px]">
                    <FormField
                      control={form.control}
                      name="reviewStockMethod"
                      render={() => (
                        <FormItem>
                          <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                            Best way for us to review your stock
                            <sup className="pl-1 text-[#891D33]">*</sup>
                          </FormLabel>
                          <FormControl>
                            {/* Dropdown */}
                            <div className="relative">
                              <div
                                onClick={toggleDropdown}
                                className="w-[90%] flex justify-between items-center py-3 border-b border-black cursor-pointer"
                              >
                                <span className="text-sm text-gray-700">
                                  Please select
                                </span>
                                <ChevronDown
                                  className={cn(
                                    "h-4 w-4 transition-transform",
                                    isOpen && "rotate-180"
                                  )}
                                />
                              </div>

                              {/* Dropdown content */}
                              {isOpen && (
                                <div className="mt-6 space-y-5 ">
                                  {/* Website option */}
                                  <FormField
                                    control={form.control}
                                    name="reviewStockMethod.website"
                                    render={({ field }) => (
                                      <FormItem className="flex items-center space-x-3 m-0 p-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className="rounded-none border-black h-[18px] w-[18px] data-[state=checked]:bg-black data-[state=checked]:text-white mt-2"
                                          />
                                        </FormControl>
                                        <FormLabel className="text-sm font-normal mt-0 cursor-pointer">
                                          Website
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />

                                  {/* Instagram option */}
                                  <FormField
                                    control={form.control}
                                    name="reviewStockMethod.instagram"
                                    render={({ field }) => (
                                      <FormItem className="flex items-start space-x-3 m-0 p-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className="rounded-none border-black h-[18px] w-[18px] data-[state=checked]:bg-black data-[state=checked]:text-white mt-3"
                                          />
                                        </FormControl>
                                        <FormLabel className="text-sm font-normal mt-0 cursor-pointer">
                                          Instagram
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />

                                  {/* Key brands option */}
                                  <div>
                                    <FormField
                                      control={form.control}
                                      name="reviewStockMethod.keyBrands"
                                      render={({ field }) => (
                                        <FormItem className=" flex items-start space-x-3 m-0 p-0">
                                          <FormControl>
                                            <Checkbox
                                              checked={field.value}
                                              onCheckedChange={field.onChange}
                                              className="rounded-none border-black h-[18px] w-[18px] data-[state=checked]:bg-black data-[state=checked]:text-white mt-3"
                                            />
                                          </FormControl>
                                          <div className="flex items-center">
                                            <FormLabel className=" text-sm font-normal mt-0 cursor-pointer inline-block">
                                              List your key brands
                                            </FormLabel>
                                            <span className="text-xs text-gray-500 ml-1">
                                              (Optional)
                                            </span>

                                            {form.watch("reviewStockMethod")
                                              ?.keyBrands && (
                                              <div className=" flex items-center -mt-1">
                                                <span className="mr-2 text-sm">
                                                  :
                                                </span>
                                                <FormField
                                                  control={form.control}
                                                  name="notes"
                                                  render={({ field }) => (
                                                    <FormItem className="w-full m-0 p-0 ">
                                                      <FormControl className="w-full">
                                                        <Input
                                                          {...field}
                                                          className="w-full md:w-[1032px] border-0 border-b border-black rounded-none p-0 h-7 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                                                        />
                                                      </FormControl>
                                                    </FormItem>
                                                  )}
                                                />
                                              </div>
                                            )}
                                          </div>
                                        </FormItem>
                                      )}
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* fourth part  */}
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-2xl md:text-[28px] lg:text-[32px] font-normal font-nimbus tracking-[0.2em] leading-[48px] uppercase">
                  Service Questions
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <FormField
                      control={form.control}
                      name="allowLocalPickup"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                            Do you offer local pickup?{" "}
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex gap-10 md:gap-[50px] lg:gap-[60px] pt-2"
                            >
                              <FormItem className="flex items-center space-x-2">
                                <FormControl className="mt-3">
                                  <RadioGroupItem value="yes" />
                                </FormControl>
                                <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                                  Yes
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2">
                                <FormControl className="mt-3">
                                  <RadioGroupItem value="no" />
                                </FormControl>
                                <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                                  No
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="py-[30px] md:py-[38px] lg:py-[45px]">
                    <FormField
                      control={form.control}
                      name="shipAustraliaWide"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                            Can you ship Australia-wide?
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex gap-10 md:gap-[50px] lg:gap-[60px] pt-2"
                            >
                              <FormItem className="flex items-center space-x-2">
                                <FormControl className="mt-3">
                                  <RadioGroupItem value="yes" />
                                </FormControl>
                                <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                                  Yes
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2">
                                <FormControl className="mt-3">
                                  <RadioGroupItem value="no" />
                                </FormControl>
                                <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                                  No
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="allowTryOn"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                            Do you offer try ons?
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex gap-10 md:gap-[50px] lg:gap-[60px] pt-2"
                            >
                              <FormItem className="flex items-center space-x-2">
                                <FormControl className="mt-3">
                                  <RadioGroupItem value="yes" />
                                </FormControl>
                                <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                                  Yes
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2">
                                <FormControl className="mt-3">
                                  <RadioGroupItem value="no" />
                                </FormControl>
                                <FormLabel className="text-xl md:text-[22px] lg:text-2xl font-normal font-nimbus tracking-[15%] leading-[28px] text-black ">
                                  No
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-[40px] md:mt-[70px] lg:mt-[100px]">
              <h5 className="text-2xl md:text-[28px] lg:text-[32px] text-black tracking-[20%] uppercase leading-[48px] font-nimbus border-b border-black">
                Agreement
              </h5>
            </div>
            <div className="flex items-center gap-[20px] md:gap-[25px] py-[30px] md:py-[38px] lg:py-[45px]">
              <FormField
                control={form.control}
                name="agreedCurationPolicy"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="w-[25px] h-[25px]"
                      />
                    </FormControl>
                    <FormLabel className="text-base md:text-lg font-nimbus font-normal leading-[24px] tracking-[0%] text-black">
                      I confirm that all dresses listed meet Muse Gala&apos;`s
                      curation and quality standards.
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center gap-[20px] md:gap-[25px]">
              <FormField
                control={form.control}
                name="agreedTerms"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="w-[25px] h-[25px]"
                      />
                    </FormControl>
                    <FormLabel className="text-base md:text-lg font-nimbus font-normal leading-[24px] tracking-[0%] text-black">
                      I agree to Muse Gala&apos;s{" "}
                      <span className="text-[#891D33] underline">
                        Lender Terms & Conditions.
                      </span>
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full flex justify-center items-center mt-[50px] md:mt-[70px] lg:mt-[110px] mb-[30px] md:mb-[40px] lg:mb-[50px]">
              <button
                disabled={isPending}
                className="text-bae font-normal font-nimbus leading-[20px] tracking-[20%] uppercase text-black border-b border-black py-[10px]"
                type="submit"
              >
                {isPending ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default BecomeALenderForm;
