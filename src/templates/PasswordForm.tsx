"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import PasswordFormField from "@/components/elements/PasswordFormField";

const formSchema = z
  .object({
    newPassword: z.string().min(8, { message: "Password is too short" }).max(20, { message: "Password is too long" }),
    oldPassword: z.string().min(1),
    confirmPassword: z.string().min(8),
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
