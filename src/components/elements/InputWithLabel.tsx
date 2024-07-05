import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface InputWithLabelProps {
  label: string;
  type: string;
  placeholder?: string;
  classNameDiv?: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, type, placeholder, classNameDiv }) => {
  return (
    <div className={cn(`grid w-full max-w-sm items-center gap-1.5`, classNameDiv)}>
      <Label htmlFor={label}>{label}</Label>
      <Input type={type} placeholder={placeholder} className="mt-2" />
    </div>
  );
};
export default InputWithLabel;
