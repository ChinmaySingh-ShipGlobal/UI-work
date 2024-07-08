import InputWithLabel from "@/components/elements/InputWithLabel";
import SelectInputField from "@/components/elements/SelectInputField";

export default function PickupDetails() {
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
  return (
    <>
      <div className="flex flex-col justify-center py-4 gap-y-4 text-left lg:grid lg:grid-cols-3 lg:gap-x-16 lg:items-center">
        <div className="flex flex-row gap-4 items-center justify-between lg:col-span-3">
          <p className="text-lg font-bold">Pickup Details</p>
        </div>
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
    </>
  );
}
