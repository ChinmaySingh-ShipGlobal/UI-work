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
import { Button } from "@/components/ui/button";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from "@/components/ui/select";
import InputFieldTest from "@/components/elements/InputFieldTest";
import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import InputWithTagLeftTest from "@/components/elements/InputWithTagLeftTest";

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

export function NewCustomerDialog() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const [verifiedEnable, setVerifiedEnable] = useState(false);
  const [verified, setVerified] = useState(false);

  // Function to handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  const selectedDocument = form.watch("document");

  // Function to handle file input change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVerifiedEnable(true); // Enable verified styling
    if (event.target.files?.length) {
      // File is selected
      setVerified(true); // Mark as verified
    } else {
      // No file selected
      setVerified(false); // Mark as unverified
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="p-0 overflow-y-auto h-176">
        <AlertDialogHeader className="p-0 pb-1 border-b">
          <AlertDialogTitle className=" text-left flex flex-row justify-between items-center px-6 py-2 font-semibold text-lg">
            Add New Customer
            <AlertDialogCancel className="bg-transparent border-none">
              <X />
            </AlertDialogCancel>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="px-6 pb-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="lg:grid lg:grid-cols-2 gap-y-4 gap-x-6">
                <div className="grid grid-cols-2 lg:col-span-2 gap-x-6">
                  <InputWithTagLeftTest
                    form={form}
                    name="mobileNumber"
                    label="Mobile Number"
                    type="text"
                    tag="+91"
                    placeholder=""
                    divClass=""
                  />
                  <InputFieldTest label="Email" name="email" form={form} type="email" placeholder="" />
                </div>
                <FormField
                  control={form.control}
                  name="document"
                  render={({ field }) => (
                    <FormItem>
                      <div>
                        <Label htmlFor="document" className="font-normal text-xs">
                          Document Type
                        </Label>
                        <div className="mt-1">
                          <Select {...field} onValueChange={field.onChange}>
                            <SelectTrigger className="ring-blue-50 font-normal text-sm h-9">
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
                    <InputFieldTest
                      label={documenttype.find((item) => item.key === selectedDocument)?.value}
                      name="documentValue"
                      form={form}
                      type="text"
                      placeholder=""
                    />
                    <div>
                      <Label className="text-xs font-normal font-poppins" htmlFor="documentUpload">
                        Upload {documenttype.find((item) => item.key === selectedDocument)?.value} Image
                      </Label>

                      <Input
                        type="file"
                        id="documentUpload"
                        className="mt-1"
                        accept=".pdf, .jpg,.png"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="lg:flex lg:justify-start lg:items-center lg:pt-6">
                      <Badge
                        className={`rounded-sm ${
                          verifiedEnable
                            ? verified
                              ? "text-green-700 bg-green-200"
                              : "text-red-600 bg-red-400"
                            : "text-gray-800 border-gray-600 bg-gray-450"
                        }`}
                      >
                        <span className="text-xs font-medium">
                          {verifiedEnable ? (verified ? "Verified" : "Unverified") : "Verify"}
                        </span>
                      </Badge>
                    </div>
                  </>
                )}
                {verifiedEnable && (
                  <div className="lg:col-span-2 gap-y-2">
                    <div className="grid grid-cols-2 gap-x-6 lg:gap-y-2 mt-2">
                      <InputFieldTest label="First Name" name="firstName" form={form} type="text" placeholder="" />
                      <InputFieldTest label="Last Name" name="lastName" form={form} type="text" placeholder="" />
                      <div className="col-span-2">
                        <InputFieldTest label="Address" name="address" form={form} type="text" placeholder="" />
                      </div>
                      <InputFieldTest label="Pincode" name="pincode" form={form} type="text" placeholder="" />
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <div>
                              <Label htmlFor="document" className="font-normal text-xs">
                                City
                              </Label>
                              <div className="mt-1">
                                <Select {...field} onValueChange={field.onChange}>
                                  <SelectTrigger className="ring-blue-50 font-normal text-sm h-9">
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
                          <FormItem>
                            <div>
                              <Label htmlFor="document" className="font-normal text-xs">
                                State
                              </Label>
                              <div className="mt-1">
                                <Select {...field} onValueChange={field.onChange}>
                                  <SelectTrigger className="ring-blue-50 font-normal text-sm h-9">
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
              <div className="flex flex-row justify-end items-center gap-x-4 mt-4">
                <AlertDialogCancel className="mt-0 border-blue-400 border text-blue-400 text-xs font-normal font-poppins bg-transparent">
                  Cancel
                </AlertDialogCancel>
                <Button
                  type="submit"
                  //   disabled={allfieldsFilled}
                  className="text-xs font-normal font-poppins bg-blue-400 text-white"
                >
                  Save
                </Button>
              </div>
            </form>
          </Form>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
}
