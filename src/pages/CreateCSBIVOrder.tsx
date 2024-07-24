import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Info, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import LabelWithText from "@/components/elements/LabelWithText";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { AlertDialogDescription, AlertDialogTitle } from "@radix-ui/react-alert-dialog";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from "@/components/ui/select";
import InputFieldTest from "@/components/elements/InputFieldTest";
import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import InputWithTagLeftTest from "@/components/elements/InputWithTagLeftTest";

const frameworks = [
  {
    number: "9727352876",
    name: "Kushal Parihar",
    mail: "kushalparihar@213gmail.com",
    address: "580 Sector-52, Koyal Vihar, Gurgaon, Haryana, 122932",
    docType: "Aadhar Card",
    docNumber: "XXXX-XXXX-3253",
  },
  {
    number: "9832343258",
    name: "Shivansh Kush",
    mail: "shivanshkush212@gmail.com",
    address: "580 Sector-52, Koyal Vihar, Gurgaon, Haryana, 122932",
    docType: "Passport",
    docNumber: "XXXX-XXXX-3253",
  },
  {
    number: "9832343258",
    name: "Random Person",
    mail: "randomperson212@gmail.com",
    address: "580 Sector-52, Koyal Vihar, Gurgaon, Haryana, 122932",
    docType: "Driving License",
    docNumber: "XXXX-XXXX-3253",
  },
];
const documenttype = [
  { key: "aadhar", value: "Aadhar Card" },
  { key: "drivingLicense", value: "Driving License" },
  { key: "passport", value: "Passport" },
];
const city = [
  { key: "city1", value: "City1" },
  { key: "city2", value: "City2" },
  { key: "city3", value: "City3" },
];
const state = [
  { key: "state1", value: "State1" },
  { key: "state2", value: "State2" },
  { key: "state3", value: "State3" },
];

const formSchema = z.object({
  mobileNumber: z.coerce.number({ message: "Mobile Number must be in digits" }),
  email: z.string({ message: "Enter email" }).email({ message: "Enter valid email" }),
  document: z.string({ message: "Select Document" }),
  documentValue: z.string({ message: "Enter detail" }),
  firstName: z.string({ message: "Enter first name" }),
  lastName: z.string({ message: "Enter last name" }),
  address: z.string({ message: "Enter address" }),
  pincode: z.coerce
    .number({ message: "Pincode must be in digits" })
    .min(100000, { message: "Pincode must be 6 digits" })
    .max(999999, { message: "Pincode must be 6 digits" }),
  city: z.string({ message: "Enter City" }),
  state: z.string({ message: "Enter State" }),
});

export default function CreateCSBIVOrder() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const [verifiedEnable, setVerifiedEnable] = useState(false);
  const [verified, setVerified] = useState(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  const selectedDocument = form.watch("document");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVerifiedEnable(true);
    if (event.target.files?.length) {
      setVerified(true);
    } else {
      setVerified(false);
    }
  };

  const selectValue = `${frameworks.find((framework) => framework.mail === value)?.number} / ${
    frameworks.find((framework) => framework.mail === value)?.name
  } / ${frameworks.find((framework) => framework.mail === value)?.mail}`;
  return (
    <>
      <div className="font-semibold text-2xl m-2 lg:ml-6">
        <p className="m-2 p-2 text-2xl font-medium">Create CSB-IV Order</p>
        <div className="lg:flex lg:gap-x-3">
          <Accordion type="single" collapsible className="w-full h-max lg:w-2/3 shadow rounded-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm px-6">
                <p>
                  <span className="text-xs text-white bg-black inline py-1 px-2 mr-3">1</span>
                  Customer/Consigner Details
                </p>
              </AccordionTrigger>
              <AccordionContent className="rounded-sm p-6 bg-white text-left">
                <div className="grid space-y-2 text-xs font-normal">
                  <Label className="text-xs font-normal">Search Customer</Label>
                  <Popover open={open} onOpenChange={setOpen}>
                    <div></div>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="justify-between lg:w-3/5 overflow-x-hidden overflow-y-clip"
                      >
                        {value ? selectValue : "Select"}
                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[--radix-popover-trigger-width]">
                      <Command>
                        <CommandInput
                          placeholder="Search by Mobile Number Or Customer Name or Email id"
                          className="text-xs font-normal"
                        />
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandList>
                          {frameworks.map((framework) => (
                            <CommandItem
                              key={framework.mail}
                              value={framework.mail}
                              onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue);
                                setOpen(false);
                              }}
                            >
                              {`${framework.number} / ${framework.name} / ${framework.mail}`}
                            </CommandItem>
                          ))}
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button className="font-medium text-xs mt-2">+ Add New Customer</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="p-0 overflow-y-auto h-176">
                              <AlertDialogHeader className="p-0 pb-1 border-b">
                                <AlertDialogTitle className="flex justify-between items-center px-6 py-2 font-semibold text-lg">
                                  Add New Customer
                                  <AlertDialogCancel className="border-none">
                                    <X />
                                  </AlertDialogCancel>
                                </AlertDialogTitle>
                              </AlertDialogHeader>
                              <AlertDialogDescription className="px-6 pb-6">
                                <Form {...form}>
                                  <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <div className="grid grid-cols-2 items-center gap-x-6">
                                      <InputWithTagLeftTest
                                        form={form}
                                        name="mobileNumber"
                                        label="Mobile Number"
                                        type="text"
                                        tag="+91"
                                      />
                                      <InputFieldTest label="Email" name="email" form={form} type="email" />
                                    </div>
                                    <div className="lg:grid lg:grid-cols-2 gap-y-4 gap-x-6">
                                      <FormField
                                        control={form.control}
                                        name="document"
                                        render={({ field }) => (
                                          <FormItem className="mt-2">
                                            <div>
                                              <Label htmlFor="document" className="font-normal text-xs">
                                                Document Type
                                              </Label>
                                              <div className="mt-1">
                                                <Select {...field} onValueChange={field.onChange}>
                                                  <SelectTrigger className="text-sm h-9">
                                                    <SelectValue placeholder="Select" />
                                                  </SelectTrigger>
                                                  <SelectContent>
                                                    <SelectGroup>
                                                      {documenttype.map((item) => (
                                                        <SelectItem value={item.key} key={item.key}>
                                                          {item.value}
                                                        </SelectItem>
                                                      ))}
                                                    </SelectGroup>
                                                  </SelectContent>
                                                </Select>
                                              </div>
                                              <FormDescription></FormDescription>
                                              <FormMessage />
                                            </div>
                                          </FormItem>
                                        )}
                                      />
                                      {selectedDocument && (
                                        <>
                                          <div className="mt-2">
                                            <InputFieldTest
                                              label={documenttype.find((item) => item.key === selectedDocument)?.value}
                                              name="documentValue"
                                              form={form}
                                              type="text"
                                            />
                                          </div>
                                          <div className="mt-2 lg:mt-0">
                                            <Label className="font-normal text-xs" htmlFor="documentUpload">
                                              Upload {documenttype.find((item) => item.key === selectedDocument)?.value}{" "}
                                              Image
                                            </Label>

                                            <Input
                                              type="file"
                                              id="documentUpload"
                                              className="mt-1"
                                              accept=".pdf, .jpg,.png"
                                              onChange={handleFileChange}
                                            />
                                          </div>
                                          <div className="lg:flex lg:justify-start lg:items-center lg:pt-6 mt-2 lg:mt-0">
                                            <Badge className="rounded-sm">
                                              <span className="font-medium">
                                                {verifiedEnable ? (verified ? "Verified" : "Unverified") : "Verify"}
                                              </span>
                                            </Badge>
                                          </div>
                                        </>
                                      )}
                                      {verifiedEnable && (
                                        <div className="lg:col-span-2 gap-y-2">
                                          <div className="grid grid-cols-2 gap-x-6 lg:gap-y-2 mt-2">
                                            <InputFieldTest
                                              label="First Name"
                                              name="firstName"
                                              form={form}
                                              type="text"
                                            />
                                            <InputFieldTest label="Last Name" name="lastName" form={form} type="text" />
                                            <div className="col-span-2 mt-2">
                                              <InputFieldTest label="Address" name="address" form={form} type="text" />
                                            </div>
                                            <div className="mt-2 lg:mt-0">
                                              <InputFieldTest label="Pincode" name="pincode" form={form} type="text" />
                                            </div>
                                            <FormField
                                              control={form.control}
                                              name="city"
                                              render={({ field }) => (
                                                <FormItem className="mt-2 lg:mt-0">
                                                  <div>
                                                    <Label htmlFor="document" className="font-normal text-xs">
                                                      City
                                                    </Label>
                                                    <div className="mt-1 lg:mt-0">
                                                      <Select {...field} onValueChange={field.onChange}>
                                                        <SelectTrigger className="text-sm h-9">
                                                          <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                          <SelectGroup>
                                                            {city.map((item) => (
                                                              <SelectItem value={item.key} key={item.key}>
                                                                {item.value}
                                                              </SelectItem>
                                                            ))}
                                                          </SelectGroup>
                                                        </SelectContent>
                                                      </Select>
                                                    </div>
                                                    <FormDescription></FormDescription>
                                                    <FormMessage />
                                                  </div>
                                                </FormItem>
                                              )}
                                            />
                                            <FormField
                                              control={form.control}
                                              name="state"
                                              render={({ field }) => (
                                                <FormItem className="mt-2 lg:mt-0">
                                                  <div>
                                                    <Label htmlFor="document" className="font-normal text-xs">
                                                      State
                                                    </Label>
                                                    <div className="mt-1">
                                                      <Select {...field} onValueChange={field.onChange}>
                                                        <SelectTrigger className="text-sm h-9">
                                                          <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                          <SelectGroup>
                                                            {state.map((item) => (
                                                              <SelectItem value={item.key} key={item.key}>
                                                                {item.value}
                                                              </SelectItem>
                                                            ))}
                                                          </SelectGroup>
                                                        </SelectContent>
                                                      </Select>
                                                    </div>
                                                    <FormDescription></FormDescription>
                                                    <FormMessage />
                                                  </div>
                                                </FormItem>
                                              )}
                                            />
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                    <div className="flex justify-end items-center gap-x-4 mt-4">
                                      <AlertDialogCancel className="mt-0 border">Cancel</AlertDialogCancel>
                                      <Button type="submit">Save</Button>
                                    </div>
                                  </form>
                                </Form>
                              </AlertDialogDescription>
                            </AlertDialogContent>
                          </AlertDialog>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="lg:grid-cols-4 grid gap-y-4 lg:gap-x-8 mt-6 pl-4">
                  <div className="space-y-2 font-normal text-xs">
                    <p className="text-sm font-semibold">
                      {value ? frameworks.find((framework) => framework.mail === value)?.name : "Kushal Parihar"}
                    </p>
                    <p>
                      {value
                        ? frameworks.find((framework) => framework.mail === value)?.mail
                        : "kushalparihar@213gmail.com"}
                    </p>
                    <p>
                      +91-
                      {value ? frameworks.find((framework) => framework.mail === value)?.number : "9727352876"}
                    </p>
                  </div>
                  <LabelWithText
                    title="Address"
                    titleClass="font-medium"
                    value={
                      value
                        ? frameworks.find((framework) => framework.mail === value)?.address
                        : "580 Sector-52, Koyal Vihar, Gurgaon, Haryana, 122932"
                    }
                  />
                  <LabelWithText
                    title="Document Type"
                    titleClass="font-medium"
                    value={value ? frameworks.find((framework) => framework.mail === value)?.docType : "Aadhar Card"}
                    valuenextline={
                      value ? frameworks.find((framework) => framework.mail === value)?.docNumber : "XXXX-XXXX-3253"
                    }
                  />
                  <div className="place-content-end">
                    <Button>Continue</Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Right Tab */}
          <Card className="hidden lg:w-1/3 lg:block shadow-none">
            <CardContent className="text-xs font-normal">
              <div className="px-2">
                <div className="w-full h-full m-4 grid items-center justify-center">
                  <p className="font-semibold text-base">Quick Tips</p>
                  <Box className="h-16 w-22" />
                </div>
                <div className="space-y-3">
                  <p className="font-semibold">Dead Weight:</p>
                  <p className="mt-1">
                    Dead/Dry weight or volumetric weight whichever is higher will be taken while calculating the freight
                    rates.
                  </p>
                  <p>
                    Fixed COD charge or COD % of the order value whichever is higher will be taken while calculating the
                    COD fee.
                  </p>
                  <p>Above prices are inclusive of GST</p>
                  <p>The above pricing is subject to change based on fuel surcharges and courier company base rates.</p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Volumetric Weight:</p>
                  <p className="mt-1">
                    Volumetric weight is calculated LxBxH/5000 for all courier companies except for Fedex Surface,
                    Aramex, Fedex Surface Light and Gati Surface.
                  </p>
                </div>
                <div className="mt-4 flex gap-x-4 items-center p-1.5">
                  <Info className="h-4 w-4" />

                  <p className="mt-1">
                    <p className="font-medium inline">Important:</p> The standard courier RTO charge will also apply to
                    their additional weight courier type.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
