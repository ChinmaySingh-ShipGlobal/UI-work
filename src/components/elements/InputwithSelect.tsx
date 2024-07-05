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
  onChangeFn: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputwithSelect: React.FC<InputWithSelectProps> = ({
  inputName,
  label,
  type,
  classNameInput,
  unit,
  inputValue,
  onChangeFn,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFn(event);
  };
  return (
    <div>
      <Label>{label}</Label>
      <div className="flex-row flex items-center">
        <div className="w-4/5 lg:w-2/3">
          <InputField
            name={inputName}
            type={type}
            className={cn(classNameInput, "rounded rounded-r-none")}
            inputValue={inputValue}
            onChangeFn={(event) => handleChange(event)}
          />
        </div>
        <div className="bg-gray-200 p-2 mt-2 rounded-r-sm text-sm border w-1/5 lg:w-1/3 text-center">{unit}</div>
      </div>
    </div>
  );
};

export default InputwithSelect;
