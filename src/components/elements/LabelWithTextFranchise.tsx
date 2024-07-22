import { cn } from "@/lib/utils";

interface TextFieldAndValueProps {
  title: string;
  value?: string;
  valuenextline?: string | any;
  subValue?: string | any;
  subValueClass?: string;
  divClass?: string;
  valuenextlineClass?: string;
  titleClass?: string;
  icon?: any;
}

const LabelWithTextFranchise: React.FC<TextFieldAndValueProps> = ({
  title,
  value,
  subValue,
  subValueClass,
  divClass,
  valuenextline,
  valuenextlineClass,
  icon,
  titleClass,
}) => {
  return (
    <div className={cn("flex flex-row items-center justify-between md:grid", divClass)}>
      <div>
        <p className={cn("text-xs font-normal font-poppins text-gray-800", titleClass)}>{title}</p>
        <p className={cn("text-xs  mt-1 font-normal font-poppins", subValueClass)}>
          {value} <p className="text-black inline">{subValue}</p>
        </p>
      </div>
      <div className="flex flex-row gap-x-1">
        <p className={cn("text-xs  mt-1 font-normal font-poppins", valuenextlineClass)}>{valuenextline}</p>
        {icon}
      </div>
    </div>
  );
};

export default LabelWithTextFranchise;
