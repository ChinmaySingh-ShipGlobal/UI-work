import InputWithLabel from "@/components/elements/InputWithLabel";
import InputWithTagLeft from "@/components/elements/InputWithTagLeft";
import SelectInputField from "@/components/elements/SelectInputField";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";

const selectCity = [
  { key: "cityone", value: "CityOne" },
  { key: "citytwo", value: "CityTwo" },
  { key: "citythree", value: "Citythree" },
];
const selectState = [
  { key: "stateone", value: "StateOne" },
  { key: "statetwo", value: "StateTwo" },
  { key: "statethree", value: "Statethree" },
];

export default function AddPickUpAddress() {
  return (
    <>
      <div className="font-semibold m-6 text-left">
        <Card className=" border-none shadow-none px-6">
          <form>
            <div className="flex mb-1">
              <p className="font-poppins font-semibold text-sm">Personal Information</p>
            </div>
            <div className="flex flex-col justify-center  gap-y-4 text-left lg:grid lg:grid-cols-3 lg:gap-x-16 lg:items-center">
              <InputWithLabel label="Address Nick Name" type="text" placeholder="Type here ..." />
              <InputWithLabel label="First Name" type="text" placeholder="Type here ..." />
              <InputWithLabel label="Last Name" type="text" placeholder="Type here ..." />
              <InputWithLabel label="Email Id" bracketLabel="(Optional)" type="email" placeholder="Type here ..." />
              <InputWithTagLeft tag="+91" title="Mobile Number" placeholder="Type here ..." classNameDiv="lg:mt-1" />
            </div>
            <div className="flex mt-5 mb-1">
              <p className="font-poppins font-semibold text-sm">Pickup Details</p>
            </div>
            <div className="flex flex-col justify-center gap-y-4 text-left lg:grid lg:grid-cols-3 lg:gap-x-16 lg:items-center">
              <InputWithLabel label="House Number" type="text" placeholder="Type here ..." />
              <InputWithLabel label="Locality" type="text" placeholder="Type here ..." />
              <InputWithLabel label="Landmark" bracketLabel="(Optional)" type="text" placeholder="Type here ..." />
              <InputWithLabel label="Pin Code" type="text" placeholder="Type here ..." />
              <SelectInputField
                name="city"
                label="City"
                placeholder="Select"
                data={selectCity}
                required
                setSelectValueObj={() => console.log("")}
              />
              <SelectInputField
                name="state"
                label="State"
                placeholder="Select"
                data={selectState}
                required
                setSelectValueObj={() => console.log("")}
              />
            </div>
            <CardFooter className="flex justify-center lg:justify-end lg:mt-14 mt-8">
              <div className="flex justify-center gap-4 mt-6 lg:justify-end">
                <Button className="border-blue-400 border text-blue-400 text-xs font-normal font-poppins bg-transparent">
                  Cancel
                </Button>

                <Button className="bg-blue-400 text-white text-xs font-normal font-poppins" type="button">
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
