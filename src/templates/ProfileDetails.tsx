import EditButton from "@/components/elements/EditButton";
import { UserRound } from "lucide-react";

export default function ProfileDetails() {
  return (
    <div className="flex flex-col justify-center py-4 gap-y-4 text-left lg:grid lg:grid-cols-6 lg:gap-4 lg:items-center">
      <div className="flex flex-row gap-4 items-center py-4 lg:justify-start lg:col-span-2">
        <UserRound className="scale-150 rounded-full bg-blue text-white p-1" />
        <div>
          <p className="text-base font-bold">Harikesh Chaturvedi</p>
          <p className="text-sm text-gray-600 mt-1">
            Company Name: <p className="text-black lg:inline">ShipGlobal Direct</p>{" "}
          </p>
        </div>
      </div>
      <div className="lg:col-span-2">
        <p className="text-sm text-gray-600">Email Id</p>
        <p className="text-sm mt-1">Harikesh.chaturvedi@gmail.com</p>
      </div>
      <div>
        <p className="text-sm text-gray-600">Mobile Number</p>
        <p className="text-sm mt-1">+91-8829881129</p>
      </div>
      <div className="w-1/2 lg:ml-15">
        <EditButton />
      </div>
    </div>
  );
}
