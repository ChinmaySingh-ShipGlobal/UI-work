import { useState } from "react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordFormField({ form, label, name }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-xs font-normal">{label}</FormLabel>
          <div className="flex items-center">
            <FormControl>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Type here ..."
                {...field}
                className="rounded-r-none border-r-0"
              />
            </FormControl>
            <span
              onClick={togglePasswordVisibility}
              className="w-1/6 border rounded-l-none border-l-0 items-center justify-center flex h-9  py-1.5"
            >
              {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
            </span>
          </div>
          <FormDescription></FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
