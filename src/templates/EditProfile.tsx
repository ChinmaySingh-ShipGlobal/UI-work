import InputWithLabel from "@/components/elements/InputWithLabel";
import InputWithTag from "@/components/elements/InputWithTag";
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
import { useState } from "react";

export function EditProfile() {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const clearImage = () => {
    setImage(null);
  };

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
            Edit Profile Details{" "}
            <AlertDialogCancel className="bg-transparent border-none" onClick={clearImage}>
              <X />
            </AlertDialogCancel>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="p-6">
          <div className="flex justify-center items-center">
            <label>
              {image ? (
                <img src={image} className="h-12 w-12 rounded-full p-1 z-0" />
              ) : (
                <UserRound className="scale-150 rounded-full bg-blue text-white p-1 z-0" />
              )}
              <input type="file" accept="image/png, image/jpeg" onChange={onImageChange} className="filetype hidden" />
            </label>
            <Pencil className="bg-white border border-gray-300 h-4 w-4 z-10 rounded-full mt-4" />
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
            <InputWithTag title="Mobile Number" tag="+91" placeholder="Type here ..." classNameDiv="mt-2" />
          </div>
        </div>
        <AlertDialogFooter className="px-6 py-2 flex flex-row items-center border-t gap-4 justify-end">
          <AlertDialogCancel className="mb-2 md:mb-0">Cancel</AlertDialogCancel>
          <AlertDialogAction>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
