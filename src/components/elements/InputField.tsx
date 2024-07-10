import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface InputFieldProps {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  className?: string;
  inputValue?: string;
  onChangeFn: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type,
  placeholder = "",
  className,
  inputValue,
  onChangeFn,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFn(event);
  };

  return (
    <div>
      <Label htmlFor={name} className="text-xs font-normal font-poppins">
        {label}
      </Label>
      <div className="mt-2">
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          className={cn(` placeholder:text-sm font-normal placeholder:text-gray-400 ring-gray-150`, className)}
          value={inputValue}
          onChange={(event) => handleChange(event)}
        />
      </div>
    </div>
  );
};

export default InputField;
