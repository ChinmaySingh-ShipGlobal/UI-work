import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";

interface InputFieldProps {
  label: string;
}

const PasswordInput: React.FC<InputFieldProps> = ({ label }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Label className="font-semibold">{label}</Label>
      <div className="flex flex-row items-center">
        <Input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type here ..."
          className="w-5/6 rounded-r-none"
        />
        <span
          onClick={togglePasswordVisibility}
          className="w-1/6 border border-gray-600 rounded-l-none items-center justify-center flex scale-y-95 py-1.5"
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </span>
      </div>
    </>
  );
};

export default PasswordInput;
