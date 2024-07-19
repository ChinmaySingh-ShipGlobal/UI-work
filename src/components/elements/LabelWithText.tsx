import { cn } from "@/lib/utils";

interface TextFieldAndValueProps {
  title: string;
  value: string;
  valuenextline?: string;
  subValue?: string;
  divClass?: string;
  titleClass?: string;
}

const LabelWithText: React.FC<TextFieldAndValueProps> = ({
  title,
  value,
  subValue,
  divClass,
  valuenextline,
  titleClass,
}) => {
  return (
    <div className={divClass}>
      <p className={cn("text-xs font-normal font-poppins text-gray-800", titleClass)}>{title}</p>
      <p className="text-xs  mt-1 font-normal font-poppins">
        {value} <p className="text-black inline">{subValue}</p>
      </p>
      <p className="text-xs  mt-1 font-normal font-poppins">{valuenextline}</p>
    </div>
  );
};

export default LabelWithText;
