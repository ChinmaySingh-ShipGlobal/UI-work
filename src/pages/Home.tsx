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
import { Box, Info } from "lucide-react";

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
              <div className="lg:flex lg:flex-row lg:gap-x-3">
                <Card className="lg:w-2/3 shadow-none">
                  <CardContent>
                    {/* Rate Calculator Input Fields */}
                    <div className="grid grid-cols-1 gap-x=2 text-left lg:grid-cols-4 max-w-sm m-auto lg:max-w-full">
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
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 text-left lg:flex lg:flex-row lg:justify-between max-w-sm m-auto lg:max-w-full">
                      <InputwithTagRight
                        inputName="weight"
                        label="Actual Weight"
                        type="string"
                        unit="kg"
                        inputValue={rateForm.weight}
                        onChangeFn={handleInputChange}
                        placeholder="Type here ..."
                        divClass="lg:mr-8"
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
                        className="font-normal text-sm disabled:bg-gray-450 disabled:border-gray-600 disabled:border disabled:hover:bg-gray-450 disabled:text-gray-800 bg-blue-400 text-white"
                        onClick={handleCalculate}
                        type="button"
                        disabled={
                          rateForm.length === "" ||
                          rateForm.breadth === "" ||
                          rateForm.height === "" ||
                          rateForm.pincode === "" ||
                          rateForm.weight === ""
                        }
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
                        <div className="bg-white rounded-md mt-4">
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
                              <TableRow className="bg-gray-100 text-gray-800 text-xs font-medium font-poppins">
                                <TableHead className="py-2 text-xs font-medium font-poppins ">
                                  Courier Partner
                                </TableHead>
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
                                <TableRow key={index} className="border border-blue-light">
                                  <TableCell className="py-2 px-6">{partner.partner}</TableCell>
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
                <Card className="invisible lg:visible lg:w-1/3 shadow-none">
                  <CardContent>
                    <div className="px-2">
                      <div className="w-full h-full m-4 flex flex-col items-center justify-center">
                        <p className="font-semibold text-base">Quick Tips</p>
                        <Box className="mt-3 h-22 w-22" />
                      </div>
                      <div className="text-xs">
                        <p className="font-semibold">Dead Weight:</p>
                        <p className="font-normal mt-1">
                          Dead/Dry weight or volumetric weight whichever is higher will be taken while calculating the
                          freight rates.
                        </p>
                        <p className="font-normal mt-3">
                          Fixed COD charge or COD % of the order value whichever is higher will be taken while
                          calculating the COD fee.
                        </p>
                        <p className="font-normal mt-3">Above prices are inclusive of GST</p>
                        <p className="font-normal mt-3">
                          The above pricing is subject to change based on fuel surcharges and courier company base
                          rates.
                        </p>
                      </div>
                      <div className="text-xs mt-4">
                        <p className="font-semibold">Volumetric Weight:</p>
                        <p className="font-normal mt-1">
                          Volumetric weight is calculated LxBxH/5000 for all courier companies except for Fedex Surface,
                          Aramex, Fedex Surface Light and Gati Surface.
                        </p>
                      </div>
                      <div className="text-xs mt-4 flex flex-row gap-x-4 items-center bg-orange-200 p-1.5">
                        <Info className="h-4 w-4 mb-2.5 text-orange" />
                        <p className="font-normal mt-1">
                          <p className="font-medium text-xs inline">Important:</p> The standard courier RTO charge will
                          also apply to their additional weight courier type.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
