import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { PasswordForm } from "@/templates/PasswordForm";
import { AlertDialogDescription, AlertDialogTitle } from "@radix-ui/react-alert-dialog";

export function PasswordSet() {
  return (
    <AlertDialog defaultOpen>
      <AlertDialogTrigger asChild></AlertDialogTrigger>
      <AlertDialogContent>
        {/* <PasswordInput label="Old Password" />
        <PasswordInput label="New Password" />
        <PasswordInput label="Confirm New Password" /> */}
        <AlertDialogTitle></AlertDialogTitle>
        <AlertDialogDescription>
          <PasswordForm />
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {/* <AlertDialogAction>Save</AlertDialogAction> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
