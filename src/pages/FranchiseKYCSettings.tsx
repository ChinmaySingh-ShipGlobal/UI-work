import { Card } from "@/components/ui/card";
import LabelWithText from "@/components/elements/LabelWithText";
import LabelWithTextFranchise from "@/components/elements/LabelWithTextFranchise";
import { FilePen, BookUser, MapPin } from "lucide-react";

export default function FranchiseKYCSettings() {
  return (
    <>
      <div className="font-semibold text-left">
        <Card className="border-none shadow-none p-5">
          <Card className="px-6 shadow-none rounded-lg">
            <div className="flex gap-x-3 items-center py-3 border-b lg:col-span-4">
              <BookUser className="h-10 w-10 rounded-full p-1 border" />
              <p className="text-base font-semibold">Documents</p>
            </div>
            <div className="grid gap-y-4 md:grid-cols-4 md:col-span-4 py-4">
              <LabelWithTextFranchise title="Aadhar" value="XXXX - XXXX - 5262" subValueClass="text-sm font-medium" />
              <LabelWithTextFranchise title="GST" value="XXXX - XXXX - 5262" subValueClass="text-sm font-medium" />
              <LabelWithTextFranchise
                title="Company PAN"
                value="XXXX - XXXX - 5262"
                subValueClass="text-sm font-medium"
              />
              <LabelWithTextFranchise
                title="Signature with Stamp"
                subValue={<FilePen className="mx-auto" />}
                divClass="lg:mx-auto"
              />
            </div>
          </Card>
          <Card className="px-6 shadow-none rounded-lg mt-5">
            <div className="flex gap-x-3 items-center py-3 border-b">
              <MapPin className="h-10 w-10 border rounded-full p-2" />
              <p className="text-base font-semibold">Billing Details</p>
            </div>
            <div className="grid lg:grid-cols-6 lg:col-span-6  grid-cols-2 pt-4 pb-5 gap-x-6 gap-y-4">
              <LabelWithText title="Legal Name" value="Mukesh Kumar" subValueClass="text-sm font-medium" />
              <LabelWithText
                title="Address"
                value="580, Sector 52, Mahatma Gandhi Road,"
                subValueClass="text-sm font-medium"
                divClass="col-span-2 lg:col-span-1"
              />
              <LabelWithText title="City" value="Gurgaon" subValueClass="text-sm font-medium" />
              <LabelWithText title="Pin Code" value="122044" subValueClass="text-sm font-medium" />
              <LabelWithText title="State" value="Haryana" subValueClass="text-sm font-medium" />
              <LabelWithText title="Country" value="India" subValueClass="text-sm font-medium" />
            </div>
          </Card>
        </Card>
      </div>
    </>
  );
}
