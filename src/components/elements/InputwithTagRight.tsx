import { Label } from "../ui/label";
import InputField from "./InputField";
import { cn } from "@/lib/utils";

interface InputWithSelectProps {
  inputName: string;
  type: string;
  label?: string;
  classNameInput?: string;
  inputTagClass?: string;
  divClass?: string;
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
  inputTagClass,
  divClass,
  unit,
  placeholder,
  inputValue,
  onChangeFn,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFn(event);
  };
  return (
    <div className={divClass}>
      <Label className="font-normal text-xs font-poppins">{label}</Label>
      <div className={cn(inputTagClass, "flex-row flex items-center")}>
        <div className="w-full">
          <InputField
            name={inputName}
            type={type}
            className={cn(
              classNameInput,
              " rounded rounded-r-none placeholder:text-gray-400 placeholder:font-normal placeholder:font-poppins placeholder:text-sm border-gray-150",
            )}
            inputValue={inputValue}
            onChangeFn={(event) => handleChange(event)}
            placeholder={placeholder}
          />
        </div>
        <div className="bg-gray-200 border-gray-150 border-l-0  rounded-r rounded-l-none p-1.5 font-normal text-sm border w-12 h-9 text-center mt-2">
          {unit}
        </div>
      </div>
    </div>
  );
};

export default InputwithTagRight;
