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
import { X } from "lucide-react";

export function EditBilling() {
  return (
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
        {/* <hr className="flex-1"></hr> */}
        <div className="flex-1 gap-4 justify-center text-left flex-col lg:gap-4 w-full px-6">
          <InputWithLabel label="Address" type="text" placeholder="Type here ..." classNameDiv="mt-2" />
          <div className="flex flex-col lg:grid-cols-2 lg:grid lg:gap-x-4">
            <InputWithLabel label="Locality" type="text" placeholder="Type here ..." classNameDiv="mt-2" />
            <InputWithLabel label="Landmark" type="text" placeholder="Type here ..." classNameDiv="mt-2" />
            <InputWithLabel label="Pin code" type="text" placeholder="Type here ..." classNameDiv="mt-2" />
            <InputWithLabel label="City" type="text" placeholder="Type here ..." classNameDiv="mt-2" />
            <InputWithLabel label="State" type="text" placeholder="Type here ..." classNameDiv="mt-2" />
            <InputWithLabel label="Country" type="text" placeholder="Type here ..." classNameDiv="mt-2" />
          </div>
        </div>

        <AlertDialogFooter className="px-6 py-4 flex flex-row items-center border-t mt-6 gap-4 justify-end">
          <AlertDialogCancel className="mb-2 md:mb-0">Cancel</AlertDialogCancel>
          <AlertDialogAction>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
