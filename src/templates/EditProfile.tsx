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

export function EditProfile() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="text-gray-600 bg-transparent border border-gray-600 font-normal">
          <FontAwesomeIcon icon={faPencil} style={{ color: "#c7c7c7" }} className="mr-2" />
          Edit
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-4 text-left flex flex-row justify-between items-center">
            Edit Profile Details{" "}
            <AlertDialogCancel className="bg-transparent border-none">
              <X />
            </AlertDialogCancel>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div>
          <div className="flex justify-center items-center ">
            <UserRound className="scale-150 rounded-full bg-blue text-white p-1 z-0" />
            <Pencil className="bg-white border border-gray-300  h-4 w-4 z-10 rounded-full mt-4" />
          </div>
          <div className="flex-1 gap-4 justify-center  text-left mt-8 flex-col lg:gap-4 w-full">
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

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
