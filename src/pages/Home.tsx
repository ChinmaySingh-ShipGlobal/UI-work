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
          <p className="m-2 p-2 text-2xl font-medium font-poppins">Rate Calculator</p>
          <div className="bg-white">
            <form>
              <Card className="lg:w-2/3 border-none shadow-none">
                <CardContent>
                  {/* Rate Calculator Input Fields */}
                  <div className="grid grid-cols-1 gap-2 text-left lg:grid-cols-4 max-w-sm m-auto lg:max-w-full">
                    <div className="lg:col-span-2 lg:mr-4 lg:gap-2 justify-center items-center ">
                      <SelectInputField
                        name="country"
                        label="Destination Country"
                        placeholder="Select"
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
                        placeholder="Type code"
                        inputValue={rateForm.pincode}
                        onChangeFn={handleInputChange}
                      />
                    </div>
                    <InputwithTagRight
                      inputName="weight"
                      label="Actual Weight"
                      type="string"
                      unit="kg"
                      inputValue={rateForm.weight}
                      onChangeFn={handleInputChange}
                      placeholder="Type here ..."
                    />
                    <InputwithTagRight
                      inputName="length"
                      label="Length"
                      type="string"
                      unit="cm"
                      placeholder="Length"
                      inputValue={rateForm.length}
                      onChangeFn={handleInputChange}
                    />
                    <InputwithTagRight
                      inputName="breadth"
                      label="Width"
                      type="string"
                      placeholder="Width"
                      unit="cm"
                      inputValue={rateForm.breadth}
                      onChangeFn={handleInputChange}
                    />
                    <InputwithTagRight
                      inputName="height"
                      label="Height"
                      type="string"
                      placeholder="Height"
                      unit="cm"
                      inputValue={rateForm.height}
                      onChangeFn={handleInputChange}
                    />
                  </div>
                  {/* Reset and Calculate buttons */}
                  <div className="flex justify-center gap-4 mt-6 lg:justify-end">
                    <Button className="border border-blue-400 bg-transparent text-blue-400 text-sm font-normal hover:bg-transparent">
                      Reset
                    </Button>
                    <Button
                      className={`font-normal text-sm ${
                        showCalculatedWeight
                          ? "bg-gray-450 border-gray-600 border hover:bg-gray-450 text-gray-800"
                          : " bg-blue-400 text-white"
                      }`}
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
                      <div className="flex justify-center mt-10 text-gray-700">
                        <div className="grid gap-x-3 grid-cols-3">
                          <div className="py-2 px-0 text-center border border-gray-350 rounded-lg bg-gray-250">
                            <p className="text-sm font-medium text-gray-650">{rateForm.weight} KG</p>
                            <p className="text-sm font-semibold text-gray-600">Dead weight</p>
                          </div>
                          <div className="p-2 text-center border border-gray-350 rounded-lg bg-gray-250">
                            <p className="text-sm font-medium text-gray-650">
                              {volumetric_weight > 0.01 ? volumetric_weight : 0.01} KG
                            </p>
                            <p className="text-sm font-semibold text-gray-600">Volumetric weight</p>
                          </div>
                          <div className="p-2 text-center border border-orange-700 text-orange-700 bg-pink-100 rounded-lg">
                            <p className="text-sm font-semibold">
                              {parseInt(rateForm.weight) > volumetric_weight ? rateForm.weight : volumetric_weight} KG
                            </p>
                            <p className="text-sm font-semibold ">Billed weight</p>
                          </div>
                        </div>
                      </div>
                      {/* Partners Table */}
                      <div className="bg-white shadow-md rounded-md mt-4">
                        <div className="grid grid-cols-1 lg:flex lg:flex-row lg:justify-between items-center mb-4">
                          <p className="font-semibold text-sm font-poppins">Showing {partners.length} results</p>
                          <div className="flex h-9 flex-row rounded-sm items-center justify-end lg:border-gray-150 lg:border px-2">
                            <p className="text-xs font-normal font-poppins h-1/2 text-gray-700 mr-2">Sort by:</p>
                            <SelectInputField
                              name="sort"
                              data={sortType}
                              defaultValue="cheapest"
                              className="rounded-sm h-7 mb-3 border-transparent placeholder:text-xs placeholder:font-medium text-black"
                              setSelectValueObj={handleSelectSortOrder}
                            />
                          </div>
                        </div>
                        <Table className="w-full">
                          <TableHeader>
                            <TableRow className="bg-gray-100 text-gray-800 text-xs font-medium font-poppins border-blue-50">
                              <TableHead className="py-2 text-xs font-medium font-poppins ">Courier Partner</TableHead>
                              <TableHead className="py-2 text-xs font-medium font-poppins ">Rating</TableHead>
                              <TableHead className="py-2 text-xs font-medium font-poppins ">
                                Estimated Delivery Time
                              </TableHead>
                              <TableHead className="py-2 text-xs font-medium font-poppins ">Shipment Rate</TableHead>
                              <TableHead className="py-2 text-xs font-medium font-poppins "></TableHead>
                              <TableHead className="py-2 text-xs font-medium font-poppins ">Action</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody className="text-left">
                            {partners.map((partner, index) => (
                              <TableRow key={index} className="border-blue-light">
                                <TableCell className="py-2">{partner.partner}</TableCell>
                                <TableCell className="py-2 flex items-center mt-2">
                                  {partner.rating}
                                  <FontAwesomeIcon icon={solidStar} className="ml-1 text-orange" />
                                </TableCell>
                                <TableCell className="py-2">{partner.time}</TableCell>
                                <TableCell className="py-2">{partner.rate}</TableCell>
                                <TableCell>
                                  <div className={`text-center`}>
                                    <div
                                      className={`rounded-sm 
                                        ${
                                          partner.speed === "Fastest"
                                            ? "text-orange-dark bg-orange-light"
                                            : "text-purple bg-blue-light"
                                        }
                                      `}
                                    >
                                      {partner.speed}
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell className="py-2 m-auto">
                                  <Button className="bg-blue-400 text-white text-xs font-medium font-poppins py-1 rounded-md">
                                    Create Order
                                  </Button>
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
