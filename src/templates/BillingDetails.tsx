import EditButton from "@/components/elements/EditButton";
import { MapPin } from "lucide-react";

export default function BillingDetails() {
  return (
    <>
      <div className="flex flex-col justify-center py-4 gap-y-4 text-left lg:grid lg:grid-cols-4 lg:gap-4 lg:items-center">
        <div className="flex flex-row gap-4 items-center py-4 justify-between lg:col-span-4">
          <div className="flex flex-row gap-4">
            <MapPin className="text-orange bg-pink-100 p-1 scale-150 rounded-full" />
            <p className="text-base font-bold">Billing Address</p>
          </div>
          <EditButton />
        </div>
        <div className="">
          <p className="text-sm text-gray-600">House Number</p>
          <p className="text-sm mt-1">L / 176-B</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Locality</p>
          <p className="text-sm mt-1">New Loco Colony</p>
        </div>
        <div className="lg:col-span-2">
          <p className="text-sm text-gray-600">Landmark</p>
          <p className="text-sm mt-1">Railway Colony</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Pin Code</p>
          <p className="text-sm mt-1">228811</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">City</p>
          <p className="text-sm mt-1">New Delhi</p>
        </div>
        <div className="">
          <p className="text-sm text-gray-600">State</p>
          <p className="text-sm mt-1">Delhi</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Country</p>
          <p className="text-sm mt-1">India</p>
        </div>
      </div>
    </>
  );
}
