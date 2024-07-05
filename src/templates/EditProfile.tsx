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
            Edit Profile Details <X />
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div>
          <div className="flex justify-center items-center relative">
            <UserRound className="scale-150 rounded-full bg-blue text-white p-1 z-0" />
            <Pencil className="bg-white border border-gray-300  h-4 w-4 z-10 rounded-full mt-4" />
          </div>
          <div className="flex gap-y-4 justify-center items-center text-left mt-8 flex-col lg:gap-4">
            <div className="flex flex-col lg:flex-row">
              <InputWithLabel label="Last Name" type="text" placeholder="Type here ..." />
              <InputWithLabel label="First Name" type="text" placeholder="Type here ..." />
            </div>
            <InputWithLabel label="Company Name" type="text" placeholder="Type here ..." classNameDiv="" />
            <InputWithLabel label="Email Id" type="email" placeholder="emailid@gmail.com" />
            <InputWithTag title="Mobile Number" unit="+91" placeholder="Type here ..." />
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
