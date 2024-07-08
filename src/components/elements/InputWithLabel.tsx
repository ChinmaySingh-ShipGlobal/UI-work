import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputWithLabelProps {
  label: string;
  bracketLabel?: string;
  type: string;
  placeholder?: string;
  classNameDiv?: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, type, placeholder, classNameDiv, bracketLabel }) => {
  return (
    <div className={classNameDiv}>
      <Label htmlFor={label}>
        {label} <p className="text-sm text-gray-600 inline font-light">{bracketLabel}</p>
      </Label>
      <Input type={type} placeholder={placeholder} className="mt-1" />
    </div>
  );
};
export default InputWithLabel;
