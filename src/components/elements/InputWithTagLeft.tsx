import { Input } from "../ui/input";
interface TextFieldAndValueProps {
  title: string;
  tag: string;
  placeholder?: string;
  divStyles?: string;
}

const InputWithTagLeft: React.FC<TextFieldAndValueProps> = ({ title, tag, placeholder, divStyles }) => {
  return (
    <div className={divStyles}>
      <p className="text-xs inline font-normal font-poppins">{title}</p>
      <div className="flex flex-row items-center mt-1">
        <p className="bg-gray-200 border-gray-150 border-r-0  rounded-l rounded-r-none p-1.5 font-normal text-sm border w-12 h-9 text-center">
          {tag}
        </p>
        <div className="w-full">
          <Input
            type="text"
            className="rounded-l-none ring-gray-150 placeholder:text-sm placeholder:font-normal"
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default InputWithTagLeft;
