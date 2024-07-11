import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useDispatch } from "react-redux";
import { updateCountry, updateSortOrder } from "@/redux/actions";
import SelectInputField from "@/components/elements/SelectInputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Box, Info } from "lucide-react";
import * as z from "zod"; // Import Zod
import { Form } from "@/components/ui/form";
import InputFieldTest from "@/components/elements/InputFieldTest";
import InputwithTagRightTest from "@/components/elements/InputwithTagRightTest";

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

const formSchema = z.object({
  pincode: z.coerce.number({ message: "Pincode must be in digits" }),
  weight: z.coerce.number({ message: "Weight must be in digits" }),
  length: z.coerce.number({ message: "Length must be in digits" }),
  width: z.coerce.number({ message: "Width must be in digits" }),
  height: z.coerce.number({ message: "Height must be in digits" }),
});

export default function RateCalculator() {
  const [showCalculatedWeight, setShowCalculatedWeight] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleSelectCountry = (selectedCountry: string) => {
    dispatch(updateCountry(selectedCountry));
  };

  const handleSelectSortOrder = (sortOrder: string) => {
    dispatch(updateSortOrder(sortOrder));
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setShowCalculatedWeight(true);
    console.log(values);
  }

  const volumetric_weight = form.getValues("length") * form.getValues("width") * form.getValues("height");

  return (
    <>
      <div className=" bg-gray-100">
        <div className="font-semibold text-2xl text-center m-2 lg:text-left lg:ml-6">
          <p className="m-2 p-2 text-2xl font-medium font-poppins">Rate Calculator</p>
          <div className="bg-white">
            <div className="lg:flex lg:flex-row lg:gap-x-3">
              <Card className="lg:w-2/3 shadow-none">
                <CardContent>
                  {/* Rate Calculator Input Fields */}
                  <div className="lg:flex lg:flex-row lg:gap-x-3">
                    {/* Rate Calculator Input Fields */}
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 gap-x-2 text-left lg:grid-cols-4 max-w-sm m-auto lg:max-w-full">
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
                          <div className="lg:col-span-2 lg:mt-2 lg:gap-2 lg:ml-4">
                            <InputFieldTest
                              name="pincode"
                              label="Destination Pincode"
                              type="text"
                              placeholder="Type code"
                              form={form}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-x-4 text-left lg:flex lg:flex-row lg:justify-between max-w-sm m-auto lg:mt-4 lg:max-w-full">
                          <InputwithTagRightTest
                            label="Actual Weight"
                            type="text"
                            unit="kg"
                            placeholder="Type here ..."
                            form={form}
                            inputTagClass=""
                            classNameInput=""
                            name="weight"
                            divClass="lg:mr-8"
                          />
                          <InputwithTagRightTest
                            label="Length"
                            type="text"
                            unit="cm"
                            placeholder="Type here ..."
                            form={form}
                            inputTagClass=""
                            classNameInput=""
                            name="length"
                            divClass=""
                          />
                          <InputwithTagRightTest
                            label="Width"
                            type="text"
                            unit="cm"
                            placeholder="Type here ..."
                            form={form}
                            inputTagClass=""
                            classNameInput=""
                            name="width"
                            divClass=""
                          />
                          <InputwithTagRightTest
                            label="Height"
                            type="text"
                            unit="cm"
                            placeholder="Type here ..."
                            form={form}
                            inputTagClass=""
                            classNameInput=""
                            name="height"
                            divClass=""
                          />
                        </div>
                        {/* Reset and Calculate buttons */}
                        <div className="flex justify-center gap-4 mt-6 lg:justify-end">
                          <Button className="border border-blue-400 bg-transparent text-blue-400 text-sm font-normal hover:bg-transparent">
                            Reset
                          </Button>
                          <Button
                            className="font-normal text-sm disabled:bg-gray-450 disabled:border-gray-600 disabled:border disabled:hover:bg-gray-450 disabled:text-gray-800 bg-blue-400 text-white"
                            type="submit"
                          >
                            Calculate
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                  {/* Components when Calculate button is pressed */}
                  {showCalculatedWeight && (
                    <>
                      {/* Weights description as Dead, Volumetric and Billed weights */}
                      <div className="flex justify-center mt-10 text-gray-700">
                        <div className="grid gap-x-3 grid-cols-3">
                          <div className="py-2 px-0 text-center border border-gray-350 rounded-lg bg-gray-250">
                            <p className="text-sm font-medium text-gray-650">
                              {form.getValues("weight")}
                              KG
                            </p>
                            <p className="text-sm font-semibold text-gray-600">Dead weight</p>
                          </div>
                          <div className="p-2 text-center border border-gray-350 rounded-lg bg-gray-250">
                            <p className="text-sm font-medium text-gray-650">{volumetric_weight} KG</p>
                            <p className="text-sm font-semibold text-gray-600">Volumetric weight</p>
                          </div>
                          <div className="p-2 text-center border border-orange-700 text-orange-700 bg-pink-100 rounded-lg">
                            <p className="text-sm font-semibold">
                              {form.getValues("weight") > volumetric_weight
                                ? form.getValues("weight")
                                : volumetric_weight}{" "}
                              KG
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
                    <div className="text-xs font-normal space-y-3">
                      <p className="font-semibold">Dead Weight:</p>
                      <p className=" mt-1">
                        Dead/Dry weight or volumetric weight whichever is higher will be taken while calculating the
                        freight rates.
                      </p>
                      <p>
                        Fixed COD charge or COD % of the order value whichever is higher will be taken while calculating
                        the COD fee.
                      </p>
                      <p>Above prices are inclusive of GST</p>
                      <p>
                        The above pricing is subject to change based on fuel surcharges and courier company base rates.
                      </p>
                    </div>
                    <div className="text-xs font-normal mt-4">
                      <p className="font-semibold">Volumetric Weight:</p>
                      <p className="mt-1">
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
          </div>
        </div>
      </div>
    </>
  );
}
