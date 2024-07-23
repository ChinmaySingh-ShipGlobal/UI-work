import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";

interface InputWithLabelProps {
  label: string;
  bracketLabel?: string;
  type: string;
  placeholder?: string;
  divStyles?: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, type, placeholder, divStyles, bracketLabel }) => {
  return (
    <div className={divStyles}>
      <Label htmlFor={label} className="text-xs inline font-normal font-poppins">
        {label} <p className="text-xs inline font-normal font-poppins">{bracketLabel}</p>
      </Label>
      <Input type={type} placeholder={placeholder} className=" placeholder:font-normal placeholder:text-sm mt-1" />
    </div>
  );
};
export default InputWithLabel;
