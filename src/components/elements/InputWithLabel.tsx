import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputWithLabelProps {
  label: string;
  type: string;
  placeholder?: string;
  classNameDiv?: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, type, placeholder, classNameDiv }) => {
  return (
    <div className={classNameDiv}>
      <Label htmlFor={label}>{label}</Label>
      <Input type={type} placeholder={placeholder} className="mt-1" />
    </div>
  );
};
export default InputWithLabel;
