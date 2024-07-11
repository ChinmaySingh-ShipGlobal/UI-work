import { Label } from "@radix-ui/react-label";
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

export default function InputFieldTest({ form, label, name, type, placeholder }) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div>
            <Label htmlFor={name} className="text-xs font-normal font-poppins">
              {label}
            </Label>
            <div className="flex flex-row items-center">
              <FormControl>
                <Input
                  type={type}
                  {...field}
                  placeholder={placeholder ? placeholder : "Type here ..."}
                  className="placeholder:text-sm font-normal placeholder:text-gray-400 ring-gray-150"
                />
              </FormControl>
            </div>
            <FormDescription></FormDescription>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}
