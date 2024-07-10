import { Input } from "../ui/input";
interface TextFieldAndValueProps {
  title: string;
  tag: string;
  placeholder?: string;
  classNameDiv?: string;
}

const InputWithTagLeft: React.FC<TextFieldAndValueProps> = ({ title, tag, placeholder, classNameDiv }) => {
  return (
    <div className={classNameDiv}>
      <p className="text-sm font-semibold">{title}</p>
      <div className="flex flex-row items-center mt-1">
        <p className="bg-gray-200 border-gray-150 border-r-0  rounded-l rounded-r-none p-1.5 text-sm border w-12 h-9 text-center">
          {tag}
        </p>
        <div className="w-full">
          <Input type="text" className="rounded-l-none" placeholder={placeholder} />
        </div>
      </div>
    </div>
  );
};

export default InputWithTagLeft;
