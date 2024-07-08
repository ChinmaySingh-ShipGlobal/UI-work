import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import PersonalInformation from "@/templates/PersonalInformation";
import PickupDetails from "@/templates/PickupDetails";

export default function PickUpAddress() {
  return (
    <>
      <div className="font-semibold m-6 text-left">
        <Card className=" border-none shadow-none px-6">
          <form>
            <PersonalInformation />
            <PickupDetails />
            <CardFooter className="flex justify-center lg:justify-end">
              <div className="flex justify-center gap-4 mt-6 lg:justify-end">
                <Button className="border border-blue-700 bg-transparent text-blue">Cancel</Button>

                <Button className="bg-blue text-white" type="button">
                  Save
                </Button>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
