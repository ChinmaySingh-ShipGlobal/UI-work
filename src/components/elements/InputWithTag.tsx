import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
interface TextFieldAndValueProps {
  title: string;
  unit: string;
  placeholder?: string;
  classNameDiv?: string;
}

const InputWithTag: React.FC<TextFieldAndValueProps> = ({ title, unit, placeholder, classNameDiv }) => {
  return (
    <div className={cn(`grid w-full max-w-sm items-center gap-1.5`, classNameDiv)}>
      <p className="text-sm font-semibold">{title}</p>
      <div className="flex flex-row items-center">
        <p className="bg-gray-200 p-2 rounded-l rounded-r-none scale-y-95 text-sm border w-1/5 lg:w-1/3 text-center">
          {unit}
        </p>
        <div className="w-4/5 lg:w-2/3">
          <Input type="text" className="rounded-l-none" placeholder={placeholder} />
        </div>
      </div>
    </div>
  );
};

export default InputWithTag;
