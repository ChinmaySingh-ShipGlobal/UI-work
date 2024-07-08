import LabelWithText from "@/components/elements/LabelWithText";
import { MapPin } from "lucide-react";
import { EditBilling } from "./EditBilling";

export default function BillingDetails() {
  return (
    <>
      <div className="flex flex-col justify-center py-4 gap-y-4 text-left lg:grid lg:grid-cols-4 lg:items-center">
        <div className="flex flex-row gap-4 items-center py-4 justify-between lg:col-span-4">
          <div className="flex flex-row gap-4 items-center">
            <MapPin className="text-orange bg-pink-100 p-1 scale-150 rounded-full" />
            <p className="text-base font-bold">Billing Address</p>
          </div>
          <EditBilling />
        </div>
        <LabelWithText title="House Number" value="L / 176-B" />
        <LabelWithText title="Locality" value="New Loco Colony" />
        <LabelWithText title="Landmark" value="Railway Colony" />
        <LabelWithText title="Pin Code" value="228811" />
        <LabelWithText title="City" value="New Delhi" />
        <LabelWithText title="State" value="Delhi" />
        <LabelWithText title="Country" value="India" />
      </div>
    </>
  );
}
