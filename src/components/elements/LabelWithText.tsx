import { cn } from "@/lib/utils";

interface TextFieldAndValueProps {
  title: string;
  value?: string;
  valuenextline?: string;
  subValue?: string;
  subValueClass?: string;
  divClass?: string;
  valuenextlineClass?: string | undefined;
  titleClass?: string;
  icon?: any;
}

const LabelWithText: React.FC<TextFieldAndValueProps> = ({
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
    <div className={cn("text-xs font-normal", divClass)}>
      <p className={titleClass}>{title}</p>
      <p className={cn("mt-1", subValueClass)}>
        {value} <p>{subValue}</p>
      </p>
      <div className="flex gap-x-1">
        <p className={cn("mt-1", valuenextlineClass)}>{valuenextline}</p>
        {icon}
      </div>
    </div>
  );
};

export default LabelWithText;
