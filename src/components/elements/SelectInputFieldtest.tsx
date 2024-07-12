import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { FormDescription, FormField, FormItem, FormMessage } from "../ui/form";

export default function SelectInputFieldTest({ form, data, name, className, defaultValue, label, placeholder }) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div>
            <Label htmlFor={name} className="font-normal text-xs">
              {label}
            </Label>
            <div className="mt-2">
              <Select onValueChange={field.onChange} defaultValue={defaultValue}>
                <SelectTrigger className={cn(` ring-blue-50 font-normal text-sm h-9`, className)}>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {data.map((item) => (
                      <SelectItem value={item.key} key={item.key}>
                        {item.value}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <FormDescription></FormDescription>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}
