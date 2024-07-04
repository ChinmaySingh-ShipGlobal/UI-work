import InputField from "@/components/elements/InputField";
import InputwithSelect from "@/components/elements/InputwithSelect";
import SelectInputField from "@/components/elements/SelectInputField";
import { Button } from "@/components/ui/button";
import { addInputData, updateCountry } from "@/redux/actions";
import { RateCalculatorProps } from "@/redux/interfaces";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function RateCalculator({
  setShowCalculatedWeight,
}: RateCalculatorProps) {
  const selectCountry = [
    { key: "usa", value: "USA" },
    { key: "india", value: "India" },
    { key: "albania", value: "Albania" },
  ];
  const dispatch = useDispatch();
  const rateForm = useSelector((state: RootState) => state.rate);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(addInputData(name, value));
  };

  const handleSelectCountry = (selectedCountry: string) => {
    dispatch(updateCountry(selectedCountry));
  };

  const handleCalculate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(rateForm);
    setShowCalculatedWeight(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-2 text-left lg:grid-cols-4 max-w-sm m-auto lg:max-w-full">
        <div className="lg:col-span-2 lg:mr-4 lg:gap-2 justify-center items-center ">
          <SelectInputField
            name="country"
            label="Destination Country"
            placeholder="Select Country"
            data={selectCountry}
            required
            setSelectValueObj={handleSelectCountry}
          />
        </div>
        <div className="lg:col-span-2 lg:gap-2 lg:ml-4 justify-center items-center">
          <InputField
            name="pincode"
            label="Destination Pincode"
            type="text"
            placeholder="Dest. Pincode"
            inputValue={rateForm.pincode}
            onChangeFn={handleInputChange}
          />
        </div>

        <div>
          <InputwithSelect
            inputName="weight"
            label="Actual Weight"
            type="string"
            unit="KG"
            inputValue={rateForm.weight}
            onChangeFn={handleInputChange}
          />
        </div>
        <div>
          <InputwithSelect
            inputName="length"
            label="Length"
            type="string"
            unit="cm"
            inputValue={rateForm.length}
            onChangeFn={handleInputChange}
          />
        </div>
        <div>
          <InputwithSelect
            inputName="breadth"
            label="Breadth"
            type="string"
            unit="cm"
            inputValue={rateForm.breadth}
            onChangeFn={handleInputChange}
          />
        </div>
        <div>
          <InputwithSelect
            inputName="height"
            label="Height"
            type="string"
            unit="cm"
            inputValue={rateForm.height}
            onChangeFn={handleInputChange}
          />
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-6 lg:justify-end">
        <Button className="border border-blue-700 bg-transparent text-blue-700">
          Reset
        </Button>

        <Button
          className="border border-gray-700 bg-gray-200 text-gray-700"
          onClick={handleCalculate}
          type="button"
        >
          Calculate
        </Button>
      </div>
    </>
  );
}
