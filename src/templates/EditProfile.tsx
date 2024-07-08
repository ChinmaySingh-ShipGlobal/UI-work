import React from "react";
import InputWithLabel from "@/components/elements/InputWithLabel";
import InputWithTagLeft from "@/components/elements/InputWithTagLeft";
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
import { Button } from "@/components/ui/button";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserRound } from "lucide-react";
import { X } from "lucide-react";
import { Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EditProfileProps {
  image: string | null;
  onImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearImage: () => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ image, onImageChange, clearImage }) => {
  return (
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
              <img src={image} className="h-14 w-14 rounded-full p-0 z-0 absolute" alt="Profile Preview" />
            ) : (
              <UserRound className="h-14 w-14 rounded-full bg-blue text-white p-1 z-0 absolute" />
            )}
            <Label htmlFor="profilePic">
              <Pencil className="bg-white border border-gray-300 h-5 w-5 z-10 rounded-full mt-1 ml-1 absolute left-36 lg:left-60" />
              <Input type="file" id="profilePic" placeholder="" onChange={onImageChange} className="hidden" />
            </Label>
          </div>

          <div className="flex-1 gap-4 justify-center text-left mt-8 flex-col lg:gap-4 w-full">
            <div className="flex flex-col lg:flex-row lg:gap-x-4">
              <div className="lg:w-1/2">
                <InputWithLabel label="First Name" type="text" placeholder="Type here ..." classNameDiv="mt-2" />
              </div>
              <div className="lg:w-1/2">
                <InputWithLabel label="Last Name" type="text" placeholder="Type here ..." classNameDiv="mt-2" />
              </div>
            </div>
            <InputWithLabel label="Company Name" type="text" placeholder="Type here ..." classNameDiv="mt-2" />
            <InputWithLabel label="Email Id" type="email" placeholder="emailid@gmail.com" classNameDiv="mt-2" />
            <InputWithTagLeft title="Mobile Number" tag="+91" placeholder="Type here ..." classNameDiv="mt-2" />
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
  );
};

export default EditProfile;
