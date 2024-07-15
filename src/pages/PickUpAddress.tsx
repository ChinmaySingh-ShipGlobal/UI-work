import PickupAddressSubCard from "@/components/elements/PickupAddressSubCard";
import { Card, CardContent } from "@/components/ui/card";

export default function PickUpAddress() {
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
        <Card className="shadow-none m-2 p-8">
          <CardContent className="m-2 p-2">
            <div className="flex flex-col items-center justify-center">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 0C15.4514 0.0673249 10.149 2.30143 6.2252 6.2252C2.30143 10.149 0.0673249 15.4514 0 21C0.0673249 26.5486 2.30143 31.851 6.2252 35.7748C10.149 39.6986 15.4514 41.9327 21 42C26.5486 41.9327 31.851 39.6986 35.7748 35.7748C39.6986 31.851 41.9327 26.5486 42 21C41.9327 15.4514 39.6986 10.149 35.7748 6.2252C31.851 2.30143 26.5486 0.0673249 21 0ZM33 22.5H22.5V33H19.5V22.5H9V19.5H19.5V9H22.5V19.5H33V22.5Z"
                  fill="#1F499E"
                />
              </svg>

              <div className="text-sm mt-3 font-medium text-blue-400">Add New Pickup Address</div>
            </div>
          </CardContent>
        </Card>
      </Card>
    </>
  );
}
