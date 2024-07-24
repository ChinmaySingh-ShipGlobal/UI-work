import React from "react";
import { FormField, FormItem, FormControl, FormDescription, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface InputWithTagLeftTestProps {
  form: {
    control: any;
  };
  name: string;
  divClass?: string;
  label: string;
  type: string;
  tag: string;
  placeholder?: string;
}

const InputWithTagLeftTest: React.FC<InputWithTagLeftTestProps> = ({
  form,
  name,
  divClass,
  label,
  type,
  tag,
  placeholder,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className={divClass}>
            <Label className="text-xs inline font-normal font-poppins">{label}</Label>
            <div className="flex flex-row items-center mt-1">
              <FormControl className="w-full">
                <div className="flex-row flex items-center">
                  <p className="bg-gray-200 border-gray-150 border-r-0 rounded-l rounded-r-none p-1.5 font-normal text-sm border w-12 h-9 text-center">
                    {tag}
                  </p>
                  <Input
                    type={type}
                    placeholder={placeholder}
                    {...field}
                    className="rounded-l-none ring-gray-150 placeholder:text-sm placeholder:font-normal"
                  />
                </div>
              </FormControl>
            </div>
            <FormDescription />
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};

export default InputWithTagLeftTest;
