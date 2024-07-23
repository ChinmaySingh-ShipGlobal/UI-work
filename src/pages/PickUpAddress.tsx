import PickupAddressSubCard from "@/components/elements/PickupAddressSubCard";
import { Card, CardContent } from "@/components/ui/card";
import { CirclePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PickUpAddress() {
  const navigate = useNavigate();
  return (
    <>
      <Card className="border-none shadow-none lg:grid lg:grid-cols-3 m-3">
        <PickupAddressSubCard
          title="Harikesh Chaturvedi"
          address="580 Sector -52, Koyal Vihal, Gurgaon, Haryana"
          contact="+91-9837872343"
          buttonLabel="Default"
          buttonClassName="text-purple bg-blue-light"
        />
        <PickupAddressSubCard
          title="Harikesh Chaturvedi"
          address="580 Sector -52, Koyal Vihal, Gurgaon, Haryana"
          contact="+91-9837872343"
          buttonLabel="Make Default"
          buttonClassName="text-blue underline"
        />
        <PickupAddressSubCard
          title="Harikesh Chaturvedi"
          address="580 Sector -52, Koyal Vihal, Gurgaon, Haryana"
          contact="+91-9837872343"
          buttonLabel="Make Default"
          buttonClassName="text-blue underline"
        />
        <Card className="shadow-none m-2 p-8 hover:cursor-pointer" onClick={() => navigate("/addpickupAddress")}>
          <CardContent className="m-2 p-2">
            <div className="flex flex-col items-center justify-center">
              <CirclePlus className="h-12 w-12 p-1" />
              <div className="text-sm mt-3 font-medium">Add New Pickup Address</div>
            </div>
          </CardContent>
        </Card>
      </Card>
    </>
  );
}
