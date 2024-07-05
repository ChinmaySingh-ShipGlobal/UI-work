import EditButton from "@/components/elements/EditButton";
import TextFieldAndValue from "@/components/elements/TextFieldAndValue";
import { MapPin } from "lucide-react";

export default function BillingDetails() {
  return (
    <>
      <div className="flex flex-col justify-center py-4 gap-y-4 text-left lg:grid lg:grid-cols-4 lg:items-center">
        <div className="flex flex-row gap-4 items-center py-4 justify-between lg:col-span-4">
          <div className="flex flex-row gap-4">
            <MapPin className="text-orange bg-pink-100 p-1 scale-150 rounded-full" />
            <p className="text-base font-bold">Billing Address</p>
          </div>
          <EditButton />
        </div>
        <TextFieldAndValue title="House Number" value="L / 176-B" />
        <TextFieldAndValue title="Locality" value="New Loco Colony" />
        <TextFieldAndValue title="Landmark" value="Railway Colony" />
        <TextFieldAndValue title="Pin Code" value="228811" />
        <TextFieldAndValue title="City" value="New Delhi" />
        <TextFieldAndValue title="State" value="Delhi" />
        <TextFieldAndValue title="Country" value="India" />
      </div>
    </>
  );
}
