import InputField from "@/components/elements/InputField";
import SelectInputField from "@/components/elements/SelectInputField";
import { Button } from "@/components/ui/button";
export default function RateCalculator() {
  const selectCountry = [
    { key: "usa", value: "USA" },
    { key: "india", value: "India" },
    { key: "albania", value: "Albania" },
  ];
  const selectUnit = [
    { key: "kg", value: "KG" },
    { key: "gram", value: "g" },
  ];

  return (
    <>
      <div>
        <div className="grid grid-cols-1 gap-2 text-left lg:grid-cols-4 lg:text-center">
          <div className="lg:col-span-2">
            <SelectInputField
              name="country"
              label="Destination Country"
              placeholder="Select Country"
              data={selectCountry}
              required
            />
          </div>
          <div className="lg:col-span-2">
            <InputField
              name="pincode"
              label="Destination Pincode"
              type="number"
              placeholder="Dest. Pincode"
            />
          </div>

          <div className="lg:col-span-1">
            <div className="flex flex-row items-center justify-center text-left lg:justify-start">
              <InputField
                name="weight"
                label="Actual Weight"
                type="number"
                className="rounded-r-none text-sm"
              />
              <SelectInputField
                name="unit"
                data={selectUnit}
                defaultValue="kg"
                className="scale-y-90 rounded-l-none bg-gray-200 mt-10 lg:mt-18"
              />
            </div>
          </div>
          <div className="lg:col-span-3 lg:flex lg:flex-row lg:mt-8 lg:gap-2">
            <div className="flex flex-row items-center justify-center">
              <InputField
                name="length"
                type="number"
                label="Dimensions"
                className="rounded-r-none"
              />
              <div className="bg-gray-200 p-2 mt-10 rounded-r-sm text-sm border px-6">
                cm
              </div>
            </div>

            <div className="flex flex-row items-center justify-center lg:mt-8">
              <InputField
                name="breadth"
                type="number"
                className="rounded-r-none"
              />
              <div className="bg-gray-200 p-2 mt-2 rounded-r-sm text-sm border px-6">
                cm
              </div>
            </div>
            <div className="flex flex-row items-center justify-center lg:mt-8">
              <InputField
                name="height"
                type="number"
                className="rounded-r-none"
              />
              <div className="bg-gray-200 p-2 mt-2 rounded-r-sm text-sm border px-6">
                cm
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-6 lg:justify-end">
        <Button className="border border-blue-700 bg-transparent text-blue-700">
          Reset
        </Button>
        <Button className="border border-gray-700 bg-gray-200 text-gray-700">
          Calculate
        </Button>
      </div>
    </>
  );
}
