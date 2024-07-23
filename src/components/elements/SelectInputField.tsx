import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";

interface SelectItems {
  key: string;
  value: string;
}

interface SelectInputFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  data: SelectItems[];
  defaultValue?: string;
  setSelectValueObj?: (prev: any) => void;
}

const SelectInputField: React.FC<SelectInputFieldProps> = ({
  data,
  name,
  className,
  defaultValue,
  label,
  placeholder,
  setSelectValueObj,
}) => {
  const onSelectChange = (value: any) => {
    if (setSelectValueObj) {
      setSelectValueObj(value);
    }
  };

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <div className="mt-2 text-xs font-normal">
        <Select onValueChange={onSelectChange} defaultValue={defaultValue}>
          <SelectTrigger className={cn(`h-9`, className)}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {data.map((item) => (
                <SelectItem value={item.key} key={item.key}>
                  {item.value}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectInputField;
