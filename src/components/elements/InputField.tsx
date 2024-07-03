import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SGFormFieldProps {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  className?: string;
  inputValue?: string;
}
export default function InputField({
  name,
  label,
  type,
  placeholder = "",
  className,
  inputValue,
}: SGFormFieldProps) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <div className="mt-2">
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          className={cn(`ring-1 ring-gray-100`, className)}
          value={inputValue}
        />
      </div>
    </div>
  );
}
