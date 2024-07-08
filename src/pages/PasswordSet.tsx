import PasswordInput from "@/components/elements/PasswordInput";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function PasswordSet() {
  return (
    <AlertDialog defaultOpen>
      <AlertDialogTrigger asChild></AlertDialogTrigger>
      <AlertDialogContent>
        <PasswordInput label="Old Password" />
        <PasswordInput label="New Password" />
        <PasswordInput label="Confirm New Password" />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
