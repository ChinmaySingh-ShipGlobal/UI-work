import IconAndText from "@/components/elements/IconAndText";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { UserRound, CircleUserRound, Users, ThumbsUp, ShieldEllipsis, CircleHelp, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProfilePopover() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between items-center">
        <p className="m-2 p-2">Profile</p>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <UserRound className="rounded-full h-8 w-8 p-1" />
            </PopoverTrigger>
            <PopoverContent className="w-60 p-0">
              <div className="flex gap-4 items-center space-y-2 m-2 p-2 border-b">
                <UserRound className="scale-150 rounded-full p-1" />
                <div>
                  <p className="text-base font-bold">User Name</p>
                  <p className="text-sm font-normal">example@gmail.com</p>
                </div>
              </div>
              <div className="grid gap-y-3 gap-x-2 m-2 p-2 border-b">
                <IconAndText icon={<CircleUserRound />} text="Edit Profile" onClick={() => navigate("/profile")} />
                <IconAndText icon={<Users />} text="Refer and Earn" href="/referAndEarn" />
              </div>
              <div className="m-2 p-2 border-b">
                <IconAndText icon={<ThumbsUp />} text="Rate Us" />
              </div>
              <div className="grid gap-y-3 gap-x-2 m-2 border-b p-2">
                <div>
                  <IconAndText
                    icon={<ShieldEllipsis />}
                    text="Change Password"
                    onClick={() => navigate("/setPassword")}
                  />
                </div>
                <IconAndText icon={<CircleHelp />} text="Help Center" href="/helpCenter" />
              </div>
              <div className="m-2 p-2">
                <IconAndText icon={<LogOut />} text="Sign Out" href="/signOut" />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
}
