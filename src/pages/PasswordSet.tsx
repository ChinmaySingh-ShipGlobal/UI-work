import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { PasswordForm } from "@/templates/PasswordForm";
import { AlertDialogDescription, AlertDialogTitle } from "@radix-ui/react-alert-dialog";

export function PasswordSet() {
  return (
    <AlertDialog defaultOpen>
      <AlertDialogTrigger asChild></AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle></AlertDialogTitle>
        <AlertDialogDescription>
          <PasswordForm />
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
}
