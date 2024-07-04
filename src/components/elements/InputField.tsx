// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { cn } from "@/lib/utils";

// interface SGFormFieldProps {
//   name: string;
//   type: string;
//   label?: string;
//   placeholder?: string;
//   className?: string;
//   inputValue?: string;
//   onChangeFn: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }
// export default function InputField({
//   name,
//   label,
//   type,
//   placeholder = "",
//   className,
//   inputValue,
//   onChangeFn,
// }: SGFormFieldProps) {
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     onChangeFn(event);
//   };

//   return (
//     <div>
//       <Label htmlFor={name}>{label}</Label>
//       <div className="mt-2">
//         <Input
//           type={type}
//           name={name}
//           placeholder={placeholder}
//           className={cn(`ring-1 ring-gray-100`, className)}
//           value={inputValue}
//           onChange={(event) => handleChange(event)}
//         />
//       </div>
//     </div>
//   );
// }
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface InputFieldProps {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  className?: string;
  inputValue?: string;
  onChangeFn: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type,
  placeholder = "",
  className,
  inputValue,
  onChangeFn,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFn(event);
  };

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <div className="mt-2">
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          className={cn(`ring-1 ring-gray-100`, className)}
          value={inputValue}
          onChange={(event) => handleChange(event)}
        />
      </div>
    </div>
  );
};

export default InputField;
