import { Card } from "@/components/ui/card";
import { useState } from "react";
import { MapPin, UserRound } from "lucide-react";
import LabelWithText from "@/components/elements/LabelWithText";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import InputWithLabel from "@/components/elements/InputWithLabel";
import { Pencil, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import InputWithTagLeft from "@/components/elements/InputWithTagLeft";

export default function ProfileSettings() {
  const [image, setImage] = useState(null);

  const onImageChange = (event: React.FormEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files;
    if (file && file[0]) {
      setImage(URL.createObjectURL(file[0]));
    }
  };

  const clearImage = () => {
    setImage(null);
  };

  return (
    <>
      <div className="font-semibold m-6 text-left">
        <Card className="border-none shadow-none">
          <form>
            {/* Profile Details */}
            <Card className="mb-6 px-6 border grid py-4 gap-y-4 lg:grid-cols-4 lg:items-center">
              <div className="flex items-center  justify-between lg:col-span-4 ">
                <div className="flex gap-x-4 items-center">
                  {image ? (
                    <img src={image} className="h-15 w-15 rounded-full p-1 z-0" />
                  ) : (
                    <User className="w-15 h-15 border p-3 rounded-full" />
                  )}
                  <p className="text-sm font-semibold ml-3">Harikesh Chaturvedi</p>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="h-8 w-18 text-xs font-normal">
                      <Pencil className="h-4 w-4 mr-1" />
                      <p>Edit</p>
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="m-0 p-0">
                    <AlertDialogHeader className="px-6 py-2 border-b">
                      <AlertDialogTitle className="  flex justify-between items-center">
                        Edit Profile Details
                        <AlertDialogCancel className="bg-transparent border-none">
                          <X />
                        </AlertDialogCancel>
                      </AlertDialogTitle>
                    </AlertDialogHeader>
                    <div className="px-8">
                      <div className="flex justify-center items-center relative mt-1">
                        {image ? (
                          <img src={image} className="h-14 w-14 rounded-full p-0 z-0 absolute" alt="Profile Preview" />
                        ) : (
                          <UserRound className="h-14 w-14 rounded-full p-1 z-0 absolute" />
                        )}
                        <Label htmlFor="profilePic" className="relative">
                          {image ? (
                            <img src={image} className="h-15 w-15 rounded-full p-1 z-0" />
                          ) : (
                            <UserRound className="h-15 w-15 rounded-full p-1 border" />
                          )}
                          <Pencil className="h-6 w-6 p-1 z-10 rounded-full absolute bottom-0 right-0 shadow-md bg-white stroke-1" />
                          <Input
                            type="file"
                            id="profilePic"
                            placeholder=""
                            onChange={onImageChange}
                            className="hidden"
                          />
                        </Label>
                      </div>
                      <div className="flex-1 gap-4 justify-center  mt-8 flex-col lg:gap-4 w-full">
                        <div className="flex flex-col lg:flex-row lg:gap-x-4">
                          <InputWithLabel
                            label="First Name"
                            type="text"
                            placeholder="Type here ..."
                            divStyles="mt-2 lg:w-1/2"
                          />
                          <InputWithLabel
                            label="Last Name"
                            type="text"
                            placeholder="Type here ..."
                            divStyles="mt-2 lg:w-1/2"
                          />
                        </div>
                        <InputWithLabel label="Company Name" type="text" placeholder="Type here ..." divStyles="mt-2" />
                        <InputWithLabel label="Email" type="email" placeholder="emailid@gmail.com" divStyles="mt-2" />
                        <InputWithTagLeft
                          title="Mobile Number"
                          tag="+91"
                          placeholder="Type here ..."
                          divStyles="mt-2"
                        />
                      </div>
                    </div>
                    <AlertDialogFooter className="px-6 py-2 flex items-center border-t gap-4 justify-end text-xs font-normal">
                      <AlertDialogCancel className="mb-2 md:mb-0" onClick={clearImage}>
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction>Save</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <LabelWithText title="Company Name" value="ShipGlobal Direct" />
              <LabelWithText title="Email Id" value="Harikesh.chaturvedi@gmail.com" />
              <LabelWithText title="Mobile Number" value="+91-8829881129" />
            </Card>

            {/* Billing Address */}
            <Card className="px-6 border">
              <div className="flex gap-x-4 items-center justify-between">
                <div className="flex gap-x-4 items-center mt-6 mb-4">
                  <MapPin className="h-6 w-6 mr-2 rounded-full border" />
                  <p className="text-sm font-semibold">Billing Address</p>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="h-8 w-18 text-xs font-normal">
                      <Pencil className="h-4 w-4 mr-1" />
                      <p>Edit</p>
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="m-0 p-0 ">
                    <AlertDialogHeader className="px-6 py-2 border-b">
                      <AlertDialogTitle className=" flex justify-between items-center">
                        Edit Billing Details
                        <AlertDialogCancel className="bg-transparent border-none">
                          <X />
                        </AlertDialogCancel>
                      </AlertDialogTitle>
                    </AlertDialogHeader>
                    <div className="gap-4 px-6">
                      <InputWithLabel label="Address" type="text" placeholder="Type here ..." divStyles="mt-2" />
                      <div className="lg:grid-cols-2 grid lg:gap-x-4">
                        <InputWithLabel label="Locality" type="text" placeholder="Type here ..." divStyles="mt-2" />
                        <InputWithLabel label="Landmark" type="text" placeholder="Type here ..." divStyles="mt-2" />
                        <InputWithLabel label="Pin code" type="text" placeholder="Type here ..." divStyles="mt-2" />
                        <InputWithLabel label="City" type="text" placeholder="Type here ..." divStyles="mt-2" />
                        <InputWithLabel label="State" type="text" placeholder="Type here ..." divStyles="mt-2" />
                        <InputWithLabel label="Country" type="text" placeholder="Type here ..." divStyles="mt-2" />
                      </div>
                    </div>
                    <AlertDialogFooter className="px-6 py-2 flex flex-row items-center border-t mt-6 gap-4 justify-end text-xs font-normal">
                      <AlertDialogCancel className="mb-2 md:mb-0">Cancel</AlertDialogCancel>
                      <AlertDialogAction>Save</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <div className="lg:grid-cols-4 lg:col-span-4 grid grid-cols-2">
                <LabelWithText title="House Number" value="L / 176-B" divClass="mb-7" />
                <LabelWithText title="Locality" value="New Loco Colony" divClass="mb-7" />
                <LabelWithText title="Pin Code" value="228811" divClass="mb-7" />
                <LabelWithText title="City" value="New Delhi" divClass="mb-7" />
                <LabelWithText title="State" value="Delhi" divClass="mb-7 lg:mb-5" />
                <LabelWithText title="Country" value="India" divClass="mb-7 lg:mb-5" />
              </div>
            </Card>
          </form>
        </Card>
      </div>
    </>
  );
}
