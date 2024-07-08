import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { z } from "zod";

interface InputFieldProps {
  label: string;
}

const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters long")
  .max(50, "Password must not exceed 50 characters");

const PasswordInput: React.FC<InputFieldProps> = ({ label }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    try {
      passwordSchema.parse(newPassword);
      setError(null);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0]?.message ? error.errors[0]?.message : "Invalid password");
      } else {
        setError("Invalid password");
      }
    }
  };
  return (
    <>
      <Label className="font-semibold">{label}</Label>
      <div className="flex flex-row items-center">
        <Input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handleChange}
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
      {error && <p className="text-red text-sm">{error}</p>}
    </>
  );
};

export default PasswordInput;
