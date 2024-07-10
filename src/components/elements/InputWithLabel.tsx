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
      <Label htmlFor={label} className="text-xs inline font-normal font-poppins">
        {label} <p className="text-xs inline font-normal font-poppins">{bracketLabel}</p>
      </Label>
      <Input type={type} placeholder={placeholder} className="mt-1 ring-gray-150 text-gray-400" />
    </div>
  );
};
export default InputWithLabel;
