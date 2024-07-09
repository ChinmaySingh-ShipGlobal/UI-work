import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addInputData, updateCountry, updateSortOrder } from "@/redux/actions";
import SelectInputField from "@/components/elements/SelectInputField";
import InputField from "@/components/elements/InputField";
import InputwithTagRight from "@/components/elements/InputwithTagRight";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const selectCountry = [
  { key: "usa", value: "USA" },
  { key: "india", value: "India" },
  { key: "albania", value: "Albania" },
];

const partners = [
  {
    partner: "UPS",
    rating: "4.2",
    time: "4 to 7 days",
    rate: "Rs. 3500.00",
    speed: "Fastest",
  },
  {
    partner: "ABS",
    rating: "4.2",
    time: "4 to 7 days",
    rate: "Rs. 3500.00",
    speed: "Cheapest",
  },
];
const sortType = [
  { key: "cheapest", value: "Cheapest" },
  { key: "fastest", value: "Fastest" },
];

export default function Home() {
  const [showCalculatedWeight, setShowCalculatedWeight] = useState<boolean>(false);

  const dispatch = useDispatch();
  const rateForm = useSelector((state: RootState) => state.rate);
  const volumetric_weight = parseInt(rateForm.length) * parseInt(rateForm.breadth) * parseInt(rateForm.height);
  5000;

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
  const handleSelectSortOrder = (sortOrder: string) => {
    dispatch(updateSortOrder(sortOrder));
  };

  return (
    <>
      <div className=" bg-gray-100">
        <div className="font-semibold text-2xl text-center m-2 lg:text-left lg:ml-6">
          <p className="m-2 p-2">Rate Calculator</p>
          <div className="bg-white">
            <form>
              <Card className="lg:w-2/3">
                <CardContent>
                  {/* Rate Calculator Input Fields */}
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
                    <InputwithTagRight
                      inputName="weight"
                      label="Actual Weight"
                      type="string"
                      unit="KG"
                      inputValue={rateForm.weight}
                      onChangeFn={handleInputChange}
                    />
                    <InputwithTagRight
                      inputName="length"
                      label="Length"
                      type="string"
                      unit="cm"
                      inputValue={rateForm.length}
                      onChangeFn={handleInputChange}
                    />
                    <InputwithTagRight
                      inputName="breadth"
                      label="Breadth"
                      type="string"
                      unit="cm"
                      inputValue={rateForm.breadth}
                      onChangeFn={handleInputChange}
                    />
                    <InputwithTagRight
                      inputName="height"
                      label="Height"
                      type="string"
                      unit="cm"
                      inputValue={rateForm.height}
                      onChangeFn={handleInputChange}
                    />
                  </div>
                  {/* Reset and Calculate buttons */}
                  <div className="flex justify-center gap-4 mt-6 lg:justify-end">
                    <Button className="border border-blue-700 bg-transparent text-blue-700">Reset</Button>
                    <Button
                      className="border border-gray-700 bg-gray-200 text-gray-700"
                      onClick={handleCalculate}
                      type="button"
                    >
                      Calculate
                    </Button>
                  </div>
                  {/* Components when Calculate button is pressed */}
                  {showCalculatedWeight && (
                    <>
                      {/* Weights description as Dead, Volumetric and Billed weights */}
                      <div className="flex justify-center mt-6 text-gray-700">
                        <div className="grid gap-1 grid-cols-3">
                          <div className="py-2 px-0 text-center border border-gray-600 rounded-lg">
                            <p className="text-sm font-semibold">{rateForm.weight} KG</p>
                            <p className="text-sm font-semibold text-gray-600">Dead weight</p>
                          </div>
                          <div className="p-2 text-center border border-gray-600 rounded-lg">
                            <p className="text-sm font-semibold">
                              {volumetric_weight > 0.01 ? volumetric_weight : 0.01} KG
                            </p>
                            <p className="text-sm font-semibold text-gray-600">Volumetric weight</p>
                          </div>
                          <div className="p-2 text-center border border-orange-800 text-orange-800 bg-pink-100 rounded-lg">
                            <p className="text-sm font-semibold">
                              {parseInt(rateForm.weight) > volumetric_weight ? rateForm.weight : volumetric_weight} KG
                            </p>
                            <p className="text-sm font-semibold ">Billed weight</p>
                          </div>
                        </div>
                      </div>
                      {/* Partners Table */}
                      <div className="bg-white shadow-md rounded-md mt-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between items-center mb-4">
                          <p className="font-semibold text-sm">Showing {partners.length} results</p>
                          <div className="flex items-center justify-end">
                            <p className="text-sm text-gray-600 mr-2">Sort by:</p>
                            <SelectInputField
                              name="sort"
                              data={sortType}
                              defaultValue="cheapest"
                              className="rounded-md border-gray-300 ring-0"
                              setSelectValueObj={handleSelectSortOrder}
                            />
                          </div>
                        </div>
                        <Table className="w-full">
                          <TableHeader>
                            <TableRow className="bg-gray-200 text-gray-600 text-sm">
                              <TableHead className="py-2 ">Courier Partner</TableHead>
                              <TableHead className="py-2">Rating</TableHead>
                              <TableHead className="py-2 ">Estimated Delivery Time</TableHead>
                              <TableHead className="py-2">Shipment Rate</TableHead>
                              <TableHead className="py-2"></TableHead>
                              <TableHead className="py-2 ">Action</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody className="text-left">
                            {partners.map((partner, index) => (
                              <TableRow key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                                <TableCell className="py-2">{partner.partner}</TableCell>
                                <TableCell className="py-2 flex items-center mt-2">
                                  {partner.rating}
                                  <FontAwesomeIcon icon={solidStar} className="ml-1 text-orange" />
                                </TableCell>
                                <TableCell className="py-2">{partner.time}</TableCell>
                                <TableCell className="py-2">{partner.rate}</TableCell>
                                <TableCell
                                  className={`py-2 ${
                                    partner.speed === "Fastest" ? "text-orange" : "text-purple"
                                  } lg:whitespace-nowrap`}
                                >
                                  {partner.speed}
                                </TableCell>
                                <TableCell className="py-2">
                                  <Button className="bg-blue text-white py-1 rounded-md">Create Order</Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
              {/* Right Tab */}
              <Card className="hidden lg:w-1/3">
                <CardContent>
                  <div>
                    <div className="bg bg-gray-300 w-full h-full m-4"></div>;
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
