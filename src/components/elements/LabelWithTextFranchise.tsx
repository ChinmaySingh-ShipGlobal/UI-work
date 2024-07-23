import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";

interface TextFieldAndValueProps {
  title: string;
  value?: string;
  subValue?: string | any;
  subValueClass?: string;
  divClass?: string;
  titleClass?: string;
  icon?: any;
}

const LabelWithTextFranchise: React.FC<TextFieldAndValueProps> = ({
  title,
  value,
  subValue,
  subValueClass,
  divClass,
  icon,
  titleClass,
}) => {
  return (
    <div className={cn("flex items-center justify-between md:grid text-xs font-normal ", divClass)}>
      <div>
        <p className={titleClass}>{title}</p>
        <p className={cn("mt-1", subValueClass)}>
          {value} <p>{subValue}</p>
        </p>
      </div>
      <div className="flex gap-x-1">
        <p className="mt-1">
          <>
            <Link to="#" className=" hover:cursor-pointer flex items-center gap-x-2">
              Download icon
              <Download className="h-6 w-6 p-1" />
            </Link>
          </>
        </p>
        {icon}
      </div>
    </div>
  );
};

export default LabelWithTextFranchise;
