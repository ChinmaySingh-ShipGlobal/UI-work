import LabelWithText from "@/components/elements/LabelWithText";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Box, MapPin, MessageCircle } from "lucide-react";

const billDetails = [
  {
    srno: "1",
    productName: "Book",
    sku: "1232",
    hsn: "232323",
    qty: "5",
    unitPrice: "₹ 250.00",
    total: "₹ 250.00",
  },
  {
    srno: "2",
    productName: "Pen",
    sku: "1232",
    hsn: "232323",
    qty: "5",
    unitPrice: "₹ 250.00",
    total: "₹ 250.00",
  },
];

export default function OrderDetails() {
  return (
    <>
      <div className="lg:flex lg:flex-row lg:gap-x-3 bg-gray-50 p-4">
        <div className="lg:w-2/3">
          <Card className="mb-2 px-6 border-blue-50  shadow-none">
            <div className="flex flex-col justify-center py-4 gap-y-4 text-left md:grid md:grid-cols-5 md:items-center">
              <div className="flex flex-row gap-4 items-center  justify-between md:col-span-5 ">
                <div className="flex flex-row gap-x-2 items-center">
                  <Box className="h-7 w-7 rounded-full bg-blue-50 text-blue-400 p-1" />
                  <p className="text-sm font-semibold">Order Details</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:col-span-2">
                <LabelWithText title="Order Created On" value="12 June, 2024" />
                <LabelWithText title="Dimensions (in cm)" value="12 x 13 x 15" />
              </div>
              <div className="grid grid-cols-3 md:col-span-3">
                <LabelWithText title="Dead Wt" value="10 kg" />
                <LabelWithText title="Volumetric Wt" value="12 kg" />
                <LabelWithText title="Billed Wt" value="12 kg" />
              </div>
            </div>
          </Card>
          <Card className=" border-blue-50 shadow-none mb-2">
            <CardContent className="lg:flex lg:flex-row justify-between lg:gap-x-8">
              <div className="w-full">
                <div className="flex flex-row gap-x-4 items-center mt-3 mb-2">
                  <MapPin className="text-orange bg-pink-100 p-1 h-6 w-6 rounded-full" />
                  <p className="text-sm font-semibold">Pickup From</p>
                </div>
                <div className="flex flex-row space-x-8">
                  <div className="flex flex-col space-y-2">
                    <div className=" text-gray-800 font-normal font-poppins text-xs">Name</div>
                    <div className=" text-gray-800 font-normal font-poppins text-xs">Address</div>
                    <div className=" text-gray-800 font-normal font-poppins text-xs">Contact</div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className=" text-gray-800 font-normal font-poppins text-xs">Indrajeet Singh</div>
                    <div className=" text-gray-800 font-normal font-poppins text-xs">
                      580 Sector-52, Koyal Vihar Gurgaon, Haryana
                    </div>
                    <div className=" text-gray-800 font-normal font-poppins text-xs">+91-9837872343</div>
                  </div>
                </div>
              </div>
              <div className="lg:mt-6 lg:border-r lg:border-blue-50 border-b border-blue-50 mt-4 h-0.5 lg:hidden"></div>
              <span className="lg:mt-6 hidden lg:block lg:border-r lg:border-blue-50 "></span>
              <div className="w-full">
                <div className="flex flex-row gap-x-4 items-center mt-3 mb-2">
                  <MapPin className="text-orange bg-pink-100 p-1 h-6 w-6 rounded-full" />
                  <p className="text-sm font-semibold">Delivery To</p>
                </div>
                <div className="flex flex-row space-x-8">
                  <div className="flex flex-col space-y-2">
                    <div className=" text-gray-800 font-normal font-poppins text-xs">Name</div>
                    <div className=" text-gray-800 font-normal font-poppins text-xs">Address</div>
                    <div className=" text-gray-800 font-normal font-poppins text-xs">Contact</div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className=" text-gray-800 font-normal font-poppins text-xs">Indrajeet Singh</div>
                    <div className=" text-gray-800 font-normal font-poppins text-xs">
                      580 Sector-52, Koyal Vihar Gurgaon, Haryana
                    </div>
                    <div className=" text-gray-800 font-normal font-poppins text-xs">+91-9837872343</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="bg-white rounded-md mt-2">
                <div className="flex flex-row gap-x-2 items-center">
                  <Box className="h-7 w-7 rounded-full bg-blue-50 text-blue-400 p-1" />
                  <p className="text-sm font-semibold">Billed Details</p>
                </div>
                <Table className="w-full mt-4">
                  <TableHeader>
                    <TableRow className="bg-gray-100 text-gray-800 text-xs font-medium font-poppins whitespace-nowrap">
                      <TableHead className="py-2 text-xs font-medium font-poppins ">Sr No.</TableHead>
                      <TableHead className="py-2 text-xs font-medium font-poppins ">Product Name</TableHead>
                      <TableHead className="py-2 text-xs font-medium font-poppins ">SKU</TableHead>
                      <TableHead className="py-2 text-xs font-medium font-poppins ">HSN</TableHead>
                      <TableHead className="py-2 text-xs font-medium font-poppins ">Qty</TableHead>
                      <TableHead className="py-2 text-xs font-medium font-poppins ">Unit Price</TableHead>
                      <TableHead className="py-2 text-xs font-medium font-poppins ">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-left">
                    {billDetails.map((billDetail, index) => (
                      <TableRow key={index} className="border border-blue-light">
                        <TableCell className="px-6">{billDetail.srno}.</TableCell>
                        <TableCell>{billDetail.productName}</TableCell>
                        <TableCell>{billDetail.sku}</TableCell>
                        <TableCell>{billDetail.hsn}</TableCell>
                        <TableCell>{billDetail.qty}</TableCell>
                        <TableCell>{billDetail.unitPrice}</TableCell>
                        <TableCell>{billDetail.total}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={6} className="text-right font-semibold text-sm">
                        Total
                      </TableCell>
                      <TableCell className="font-semibold text-sm"> ₹ 2322.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:w-1/3 bg-gray-50">
          <Card className="shadow-none bg-orange-200 px-0 border rounded-lg mt-2 lg:mt-0">
            <CardContent className="px-0">
              <div className="flex border-b border-orange-150 py-2">
                <p className="text-base text-orange-300 font-semibold px-4">Summary</p>
              </div>
              <div className="flex flex-row justify-between px-4 py-2 text-black">
                <div className="flex flex-col space-y-4">
                  <div className="font-normal font-poppins text-xs">Logistic Fee</div>
                  <div className="font-normal font-poppins text-xs">GST</div>
                  <div className="font-normal font-poppins text-xs">Other Charges</div>
                  <div className="font-normal font-poppins text-xs">Other Charges</div>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="font-medium font-poppins text-xs">₹ 2322.00</div>
                  <div className=" font-medium font-poppins text-xs">₹ 2322.00</div>
                  <div className="font-medium font-poppins text-xs">₹ 2322.00</div>
                  <div className="font-medium font-poppins text-xs">₹ 2322.00</div>
                </div>
              </div>
              <div className="flex flex-row justify-between px-4 py-3 bg-orange-150 mt-4 mb-1">
                <p className="text-xs font-semibold">Total</p>
                <p className="text-xs font-semibold">₹ 2322.00</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-none px-0 border rounded-lg mt-2">
            <CardContent>
              <div className="flex  py-2">
                <p className="text-base font-semibold">Activity</p>
              </div>
              <div className="flex flex-row justify-between pl-4 py-2 text-black">
                <div className="flex flex-col space-y-2 w-full">
                  <div>
                    <div className="font-medium font-poppins text-xs">Shipment Created, Awaiting Package</div>
                    <div className="flex flex-row justify-between mt-1">
                      <div className="font-normal font-poppins text-xs text-gray-800">25 Apr, 2024 11:30 pm</div>
                      <div className="font-normal font-poppins text-xs text-gray-800">Delhi, India</div>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium font-poppins text-xs mt-3">Shipment Created, Awaiting Package</div>
                    <div className="flex flex-row justify-between mt-1">
                      <div className="font-normal font-poppins text-xs text-gray-800">25 Apr, 2024 11:30 pm</div>
                      <div className="font-normal font-poppins text-xs text-gray-800">Delhi, India</div>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium font-poppins text-xs mt-3">Shipment Created, Awaiting Package</div>
                    <div className="flex flex-row justify-between mt-1">
                      <div className="font-normal font-poppins text-xs text-gray-800">25 Apr, 2024 11:30 pm</div>
                      <div className="font-normal font-poppins text-xs text-gray-800">Delhi, India</div>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium font-poppins text-xs mt-3">Shipment Created, Awaiting Package</div>
                    <div className="flex flex-row justify-between mt-1">
                      <div className="font-normal font-poppins text-xs text-gray-800">25 Apr, 2024 11:30 pm</div>
                      <div className="font-normal font-poppins text-xs text-gray-800">Delhi, India</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
