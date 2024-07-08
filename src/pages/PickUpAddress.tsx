import PickupAddressSubCard from "@/components/elements/PickupAddressSubCard";
import { Card } from "@/components/ui/card";

export default function PickUpAddress() {
  return (
    <>
      <Card className="border-none shadow-none lg:grid lg:grid-cols-3 lg:gap-x-2">
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
      </Card>
    </>
  );
}
