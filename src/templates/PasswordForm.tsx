import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import PasswordFormField from "@/components/elements/PasswordFormField";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";

export const formSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, { message: "Password must be of 8 characters" })
      .max(20, { message: "Password must not be more than 20 characters" }),
    oldPassword: z.string().min(1, { message: "Password must be of 8 characters" }),
    confirmPassword: z.string().min(8, { message: "Password must be of 8 characters" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export function PasswordForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <PasswordFormField label="Old Password" name="oldPassword" form={form} />
        <PasswordFormField label="New Password" name="newPassword" form={form} />
        <PasswordFormField label="Confirm Password" name="confirmPassword" form={form} />
        <div className="flex flex-row justify-end items-center gap-4">
          <Button type="submit">Submit</Button>
          <AlertDialogCancel className="mt-0">Cancel</AlertDialogCancel>
        </div>
      </form>
    </Form>
  );
}
