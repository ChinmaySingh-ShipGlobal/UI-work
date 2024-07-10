import { Label } from "../ui/label";
import InputField from "./InputField";
import { cn } from "@/lib/utils";

interface InputWithSelectProps {
  inputName: string;
  type: string;
  label?: string;
  classNameInput?: string;
  unit: string;
  defaultValue?: string;
  inputValue?: string;
  placeholder?: string;
  onChangeFn: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputwithTagRight: React.FC<InputWithSelectProps> = ({
  inputName,
  label,
  type,
  classNameInput,
  unit,
  placeholder,
  inputValue,
  onChangeFn,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFn(event);
  };
  return (
    <div>
      <Label className="font-normal text-xs font-poppins">{label}</Label>
      <div className="flex-row flex items-center">
        <div className="w-4/5 lg:w-2/3">
          <InputField
            name={inputName}
            type={type}
            className={cn(
              classNameInput,
              "rounded rounded-r-none placeholder:text-gray-400 placeholder:font-normal placeholder:font-poppins placeholder:text-sm border-gray-150",
            )}
            inputValue={inputValue}
            onChangeFn={(event) => handleChange(event)}
            placeholder={placeholder}
          />
        </div>
        <div className="bg-gray-200 border-gray-150 p-2 mt-2 rounded-r-sm text-sm font-normal border w-1/5 lg:w-1/3 h-9 border-l-0 text-center">
          {unit}
        </div>
      </div>
    </div>
  );
};

export default InputwithTagRight;
