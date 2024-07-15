import { Card } from "@/components/ui/card";
import { useState } from "react";
import { UserRound } from "lucide-react";
import LabelWithText from "@/components/elements/LabelWithText";
import { Button } from "@/components/ui/button";
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
            <Card className="mb-6 px-6 border-blue-50">
              <div className="flex flex-col justify-center py-4 gap-y-4 text-left lg:grid lg:grid-cols-4 lg:items-center">
                <div className="flex flex-row gap-4 items-center  justify-between lg:col-span-4 ">
                  <div className="flex flex-row gap-x-4 items-center">
                    {image ? (
                      <img src={image} className="h-15 w-15 rounded-full p-1 z-0" />
                    ) : (
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="30" fill="#1F499E" />
                        <path
                          d="M20.6667 37.0002C20.6667 35.7625 21.1584 34.5755 22.0336 33.7003C22.9088 32.8252 24.0957 32.3335 25.3334 32.3335H34.6667C35.9044 32.3335 37.0914 32.8252 37.9666 33.7003C38.8417 34.5755 39.3334 35.7625 39.3334 37.0002C39.3334 37.619 39.0876 38.2125 38.65 38.6501C38.2124 39.0877 37.6189 39.3335 37.0001 39.3335H23.0001C22.3812 39.3335 21.7878 39.0877 21.3502 38.6501C20.9126 38.2125 20.6667 37.619 20.6667 37.0002Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M30 27.6667C31.933 27.6667 33.5 26.0997 33.5 24.1667C33.5 22.2338 31.933 20.6667 30 20.6667C28.067 20.6667 26.5 22.2338 26.5 24.1667C26.5 26.0997 28.067 27.6667 30 27.6667Z"
                          stroke="white"
                          stroke-width="2"
                        />
                      </svg>
                    )}
                    <p className="text-sm font-semibold ml-3">Harikesh Chaturvedi</p>
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="h-8 w-18 text-gray-700 bg-transparent border border-gray-700 font-normal">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.37333 6L10 6.62667L3.94667 12.6667H3.33333V12.0533L9.37333 6ZM11.7733 2C11.6067 2 11.4333 2.06667 11.3067 2.19333L10.0867 3.41333L12.5867 5.91333L13.8067 4.69333C14.0667 4.43333 14.0667 4 13.8067 3.75333L12.2467 2.19333C12.1133 2.06 11.9467 2 11.7733 2ZM9.37333 4.12667L2 11.5V14H4.5L11.8733 6.62667L9.37333 4.12667Z"
                            fill="#77809C"
                          />
                        </svg>

                        <div className="text-xs font-normal">Edit</div>
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
                      <div className="px-8">
                        <div className="flex justify-center items-center relative mt-1">
                          {image ? (
                            <img
                              src={image}
                              className="h-14 w-14 rounded-full p-0 z-0 absolute"
                              alt="Profile Preview"
                            />
                          ) : (
                            <UserRound className="h-18 w-18 rounded-full bg-blue text-white p-1 z-0 absolute" />
                          )}
                          <Label htmlFor="profilePic" className="relative">
                            {image ? (
                              <img src={image} className="h-15 w-15 rounded-full p-1 z-0" />
                            ) : (
                              <UserRound className="h-15 w-15 rounded-full bg-blue text-white lg:p-3 p-1" />
                            )}
                            <Pencil className="bg-white border border-gray-300 h-6 w-6 p-1 z-10 rounded-full absolute bottom-1 right-1 text-gray-400" />
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
                            label="Email"
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
                        <AlertDialogCancel
                          className="mb-2 md:mb-0 border-blue-400 text-blue-400 text-xs font-normal font-poppins"
                          onClick={clearImage}
                        >
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction className="bg-blue-400 text-white text-xs font-normal font-poppins">
                          Save
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
                <LabelWithText title="Company Name" value="ShipGlobal Direct" />
                <LabelWithText title="Email Id" value="Harikesh.chaturvedi@gmail.com" />
                <LabelWithText title="Mobile Number" value="+91-8829881129" />
              </div>
            </Card>
            <Card className="px-6 border-blue-50">
              <div className="flex flex-col justify-center text-left lg:grid lg:grid-cols-4 lg:items-center">
                <div className="flex flex-row gap-x-4 items-center justify-between lg:col-span-4">
                  <div className="flex flex-row gap-x-4 items-center mt-6 mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#FFEEE9" />
                      <path
                        d="M11.998 11.6661C11.5559 11.6661 11.132 11.4905 10.8195 11.1779C10.5069 10.8654 10.3313 10.4415 10.3313 9.99943C10.3313 9.5574 10.5069 9.13348 10.8195 8.82092C11.132 8.50836 11.5559 8.33276 11.998 8.33276C12.44 8.33276 12.8639 8.50836 13.1765 8.82092C13.489 9.13348 13.6646 9.5574 13.6646 9.99943C13.6646 10.2183 13.6215 10.435 13.5378 10.6372C13.454 10.8394 13.3312 11.0232 13.1765 11.1779C13.0217 11.3327 12.838 11.4555 12.6358 11.5392C12.4336 11.623 12.2168 11.6661 11.998 11.6661ZM11.998 5.33276C10.7603 5.33276 9.5733 5.82443 8.69813 6.6996C7.82296 7.57477 7.3313 8.76175 7.3313 9.99943C7.3313 13.4994 11.998 18.6661 11.998 18.6661C11.998 18.6661 16.6646 13.4994 16.6646 9.99943C16.6646 8.76175 16.173 7.57477 15.2978 6.6996C14.4226 5.82443 13.2356 5.33276 11.998 5.33276Z"
                        fill="#FF7F12"
                      />
                    </svg>

                    <p className="text-sm font-semibold">Billing Address</p>
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="h-8 w-18 text-gray-700 bg-transparent border border-gray-700 font-normal mt-7">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.37333 6L10 6.62667L3.94667 12.6667H3.33333V12.0533L9.37333 6ZM11.7733 2C11.6067 2 11.4333 2.06667 11.3067 2.19333L10.0867 3.41333L12.5867 5.91333L13.8067 4.69333C14.0667 4.43333 14.0667 4 13.8067 3.75333L12.2467 2.19333C12.1133 2.06 11.9467 2 11.7733 2ZM9.37333 4.12667L2 11.5V14H4.5L11.8733 6.62667L9.37333 4.12667Z"
                            fill="#77809C"
                          />
                        </svg>

                        <div className="text-xs font-normal">Edit</div>
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
                        <AlertDialogCancel className="mb-2 md:mb-0 border-blue-400 text-blue-400 text-xs font-normal font-poppins">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction className="bg-blue-400 text-white text-xs font-normal font-poppins">
                          Save
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
                <div className="lg:grid lg:grid-cols-4 lg:col-span-4 grid grid-cols-2">
                  <LabelWithText title="House Number" value="L / 176-B" divClass="mb-7" />
                  <LabelWithText title="Locality" value="New Loco Colony" divClass="mb-7" />
                  <LabelWithText title="Pin Code" value="228811" divClass="mb-7" />
                  <LabelWithText title="City" value="New Delhi" divClass="mb-7" />
                  <LabelWithText title="State" value="Delhi" divClass="mb-7 lg:mb-5" />
                  <LabelWithText title="Country" value="India" divClass="mb-7 lg:mb-5" />
                </div>
              </div>
            </Card>
          </form>
        </Card>
      </div>
    </>
  );
}
