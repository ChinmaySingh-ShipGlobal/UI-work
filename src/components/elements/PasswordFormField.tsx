import { useState } from "react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Eye } from "lucide-react";

export default function PasswordFormField({ form, label, name }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-xs font-normal font-poppins">{label}</FormLabel>
          <div className="flex flex-row items-center">
            <FormControl>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Type here ..."
                {...field}
                className="rounded-r-none border-gray-150 border-r-0 placeholder:text-gray-400"
              />
            </FormControl>
            <span
              onClick={togglePasswordVisibility}
              className="w-1/6 border border-gray-150 rounded-l-none border-l-0 items-center justify-center flex h-9  py-1.5"
            >
              {showPassword ? (
                <Eye className="h-5 w-5" />
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.27473 14.0687L4.16848 13.1812C3.18987 12.3026 2.42097 11.2154 1.91848 10C3.18723 6.83125 6.68723 4.375 9.99973 4.375C10.8522 4.38625 11.6969 4.5383 12.4997 4.825L13.4685 3.85C12.3701 3.38583 11.192 3.13959 9.99973 3.125C7.96256 3.20161 5.99248 3.87347 4.33298 5.05755C2.67349 6.24163 1.39733 7.88603 0.662234 9.7875C0.612589 9.92482 0.612589 10.0752 0.662234 10.2125C1.21739 11.6856 2.1125 13.0069 3.27473 14.0687Z"
                    fill="#221F20"
                  />
                  <path
                    d="M7.5 9.83125C7.54346 9.23232 7.80106 8.66905 8.22568 8.24443C8.6503 7.81981 9.21357 7.56221 9.8125 7.51875L10.9438 6.38125C10.3099 6.21434 9.64327 6.21651 9.01047 6.38754C8.37767 6.55857 7.80076 6.89248 7.33725 7.356C6.87373 7.81951 6.53982 8.39642 6.36879 9.02922C6.19776 9.66202 6.19559 10.3286 6.3625 10.9625L7.5 9.83125ZM19.3375 9.7875C18.6208 7.92075 17.3738 6.30439 15.75 5.1375L18.75 2.13125L17.8687 1.25L1.25 17.8687L2.13125 18.75L5.31875 15.5625C6.73992 16.3963 8.35253 16.8484 10 16.875C12.0372 16.7984 14.0073 16.1265 15.6667 14.9424C17.3262 13.7584 18.6024 12.114 19.3375 10.2125C19.3871 10.0752 19.3871 9.92482 19.3375 9.7875ZM12.5 10C12.4974 10.4376 12.3799 10.8668 12.1594 11.2447C11.9389 11.6227 11.6231 11.9361 11.2435 12.1538C10.8639 12.3714 10.4338 12.4856 9.99625 12.485C9.55868 12.4843 9.12894 12.3688 8.75 12.15L12.15 8.75C12.3747 9.12858 12.4954 9.55978 12.5 10ZM10 15.625C8.68879 15.6021 7.40243 15.2634 6.25 14.6375L7.8375 13.05C8.55959 13.551 9.43471 13.7825 10.3101 13.704C11.1855 13.6256 12.0055 13.2421 12.6269 12.6207C13.2484 11.9992 13.6318 11.1792 13.7103 10.3038C13.7888 9.42846 13.5573 8.55333 13.0562 7.83125L14.85 6.0375C16.2841 7.02186 17.4056 8.39714 18.0812 10C16.8125 13.1687 13.3125 15.625 10 15.625Z"
                    fill="#221F20"
                  />
                </svg>
              )}
            </span>
          </div>
          <FormDescription></FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
