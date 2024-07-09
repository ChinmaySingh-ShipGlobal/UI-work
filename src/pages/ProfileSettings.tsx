import { Card } from "@/components/ui/card";
import { useState } from "react";
import { MapPin, UserRound } from "lucide-react";
import LabelWithText from "@/components/elements/LabelWithText";
import { Button } from "@/components/ui/button";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { X } from "lucide-react";
import InputWithLabel from "@/components/elements/InputWithLabel";
import { Pencil } from "lucide-react";
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
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      setImage(URL.createObjectURL(event.currentTarget.files[0]));
    }
  };

  const clearImage = () => {
    setImage(null);
  };

  return (
    <>
      <div className="font-semibold m-6 text-left">
        <Card className=" border-none shadow-none">
          <form>
            <Card className="mb-6 px-6">
              <div className="flex flex-col justify-center py-4 gap-y-4 text-left lg:grid lg:grid-cols-4 lg:items-center">
                <div className="flex flex-row gap-4 items-center py-4 justify-between lg:col-span-4">
                  <div className="flex flex-row gap-4 items-center">
                    {image ? (
                      <img src={image} className="h-12 w-12 rounded-full p-1 z-0" />
                    ) : (
                      <UserRound className="scale-150 rounded-full bg-blue text-white p-1" />
                    )}
                    <p className="text-base font-bold">Harikesh Chaturvedi</p>
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="text-gray-600 bg-transparent border border-gray-600 font-normal">
                        <FontAwesomeIcon icon={faPencil} style={{ color: "#c7c7c7" }} className="mr-2" />
                        Edit
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="m-0 p-0">
                      <AlertDialogHeader className="px-6 py-2 border-b">
                        <AlertDialogTitle className=" text-left flex flex-row justify-between items-center">
                          Edit Profile Details
                          <AlertDialogCancel className="bg-transparent border-none">
                            <X />
                          </AlertDialogCancel>
                        </AlertDialogTitle>
                      </AlertDialogHeader>
                      <div className="p-6">
                        <div className="flex justify-center items-center relative">
                          {image ? (
                            <img
                              src={image}
                              className="h-14 w-14 rounded-full p-0 z-0 absolute"
                              alt="Profile Preview"
                            />
                          ) : (
                            <UserRound className="h-14 w-14 rounded-full bg-blue text-white p-1 z-0 absolute" />
                          )}
                          <Label htmlFor="profilePic">
                            <Pencil className="bg-white border border-gray-300 h-5 w-5 z-10 rounded-full mt-1 ml-1 absolute left-36 lg:left-60" />
                            <Input
                              type="file"
                              id="profilePic"
                              placeholder=""
                              onChange={onImageChange}
                              className="hidden"
                            />
                          </Label>
                        </div>

                        <div className="flex-1 gap-4 justify-center text-left mt-8 flex-col lg:gap-4 w-full">
                          <div className="flex flex-col lg:flex-row lg:gap-x-4">
                            <div className="lg:w-1/2">
                              <InputWithLabel
                                label="First Name"
                                type="text"
                                placeholder="Type here ..."
                                classNameDiv="mt-2"
                              />
                            </div>
                            <div className="lg:w-1/2">
                              <InputWithLabel
                                label="Last Name"
                                type="text"
                                placeholder="Type here ..."
                                classNameDiv="mt-2"
                              />
                            </div>
                          </div>
                          <InputWithLabel
                            label="Company Name"
                            type="text"
                            placeholder="Type here ..."
                            classNameDiv="mt-2"
                          />
                          <InputWithLabel
                            label="Email Id"
                            type="email"
                            placeholder="emailid@gmail.com"
                            classNameDiv="mt-2"
                          />
                          <InputWithTagLeft
                            title="Mobile Number"
                            tag="+91"
                            placeholder="Type here ..."
                            classNameDiv="mt-2"
                          />
                        </div>
                      </div>
                      <AlertDialogFooter className="px-6 py-2 flex flex-row items-center border-t gap-4 justify-end">
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
              </div>
            </Card>
            <Card className="px-6">
              <div className="flex flex-col justify-center py-4 gap-y-4 text-left lg:grid lg:grid-cols-4 lg:items-center">
                <div className="flex flex-row gap-4 items-center py-4 justify-between lg:col-span-4">
                  <div className="flex flex-row gap-4 items-center">
                    <MapPin className="text-orange bg-pink-100 p-1 scale-150 rounded-full" />
                    <p className="text-base font-bold">Billing Address</p>
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="text-gray-600 bg-transparent border border-gray-600 font-normal">
                        <FontAwesomeIcon icon={faPencil} style={{ color: "#c7c7c7" }} className="mr-2" />
                        Edit
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="m-0 p-0 ">
                      <AlertDialogHeader className="px-6 py-2 border-b">
                        <AlertDialogTitle className="text-left flex flex-row justify-between items-center">
                          Edit Billing Details
                          <AlertDialogCancel className="bg-transparent border-none">
                            <X />
                          </AlertDialogCancel>
                        </AlertDialogTitle>
                      </AlertDialogHeader>
                      <div className="flex-1 gap-4 justify-center text-left flex-col lg:gap-4 w-full px-6">
                        <InputWithLabel label="Address" type="text" placeholder="Type here ..." classNameDiv="mt-2" />
                        <div className="flex flex-col lg:grid-cols-2 lg:grid lg:gap-x-4">
                          <InputWithLabel
                            label="Locality"
                            type="text"
                            placeholder="Type here ..."
                            classNameDiv="mt-2"
                          />
                          <InputWithLabel
                            label="Landmark"
                            type="text"
                            placeholder="Type here ..."
                            classNameDiv="mt-2"
                          />
                          <InputWithLabel
                            label="Pin code"
                            type="text"
                            placeholder="Type here ..."
                            classNameDiv="mt-2"
                          />
                          <InputWithLabel label="City" type="text" placeholder="Type here ..." classNameDiv="mt-2" />
                          <InputWithLabel label="State" type="text" placeholder="Type here ..." classNameDiv="mt-2" />
                          <InputWithLabel label="Country" type="text" placeholder="Type here ..." classNameDiv="mt-2" />
                        </div>
                      </div>

                      <AlertDialogFooter className="px-6 py-2 flex flex-row items-center border-t mt-6 gap-4 justify-end">
                        <AlertDialogCancel className="mb-2 md:mb-0">Cancel</AlertDialogCancel>
                        <AlertDialogAction>Save</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
                <LabelWithText title="House Number" value="L / 176-B" />
                <LabelWithText title="Locality" value="New Loco Colony" />
                <LabelWithText title="Landmark" value="Railway Colony" />
                <LabelWithText title="Pin Code" value="228811" />
                <LabelWithText title="City" value="New Delhi" />
                <LabelWithText title="State" value="Delhi" />
                <LabelWithText title="Country" value="India" />
              </div>
            </Card>
          </form>
        </Card>
      </div>
    </>
  );
}
