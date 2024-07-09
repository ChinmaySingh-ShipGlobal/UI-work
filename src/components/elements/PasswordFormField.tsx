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
          <FormLabel className="text-sm font-semibold">{label}</FormLabel>
          <div className="flex flex-row items-center">
            <FormControl>
              <Input type={showPassword ? "text" : "password"} placeholder="" {...field} className="rounded-r-none" />
            </FormControl>
            <span
              onClick={togglePasswordVisibility}
              className="w-1/6 border border-gray-600 rounded-l-none items-center justify-center flex scale-y-95 py-1.5"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </span>
          </div>
          <FormDescription></FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
