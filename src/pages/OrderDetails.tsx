import LabelWithText from "@/components/elements/LabelWithText";
import ProcessSvg from "@/components/elements/ProcessSvg";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Box, MapPin, Receipt } from "lucide-react";

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
      <div className="lg:flex lg:gap-x-3 p-4">
        <div className="lg:w-2/3">
          <Card className="mb-2 px-6 shadow-none">
            <div className="flex gap-x-2 items-center my-4">
              <Box className="w-7 h-7 rounded-full p-1" />
              <p className="text-sm font-semibold">Order Details</p>
            </div>
            <div className="grid pb-4 gap-y-4 md:grid-cols-5">
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
          <Card className="shadow-none mb-2">
            <CardContent className="lg:flex justify-between lg:gap-x-8">
              <div className="w-full font-normal text-xs">
                <div className="flex gap-x-4 items-center mt-3 mb-2">
                  <MapPin className="w-7 h-7 rounded-full p-1" />
                  <p className="text-sm font-semibold">Pickup From</p>
                </div>
                <div className="flex space-x-8">
                  <div className="grid space-y-2">
                    <p>Name</p>
                    <p>Address</p>
                    <p>Contact</p>
                  </div>
                  <div className="grid space-y-2">
                    <p>Indrajeet Singh</p>
                    <p>580 Sector-52, Koyal Vihar Gurgaon, Haryana</p>
                    <p>+91-9837872343</p>
                  </div>
                </div>
              </div>
              <div className="lg:mt-6 lg:border-r border-b mt-4 h-0.5 lg:hidden"></div>
              <span className="lg:mt-6 hidden lg:block lg:border-r"></span>
              <div className="w-full font-normal text-xs">
                <div className="flex gap-x-4 items-center mt-3 mb-2">
                  <MapPin className="w-7 h-7 rounded-full p-1" />
                  <p className="text-sm font-semibold">Delivery To</p>
                </div>
                <div className="flex space-x-8">
                  <div className="grid space-y-2">
                    <p>Name</p>
                    <p>Address</p>
                    <p>Contact</p>
                  </div>
                  <div className="grid space-y-2">
                    <p>Indrajeet Singh</p>
                    <p>580 Sector-52, Koyal Vihar Gurgaon, Haryana</p>
                    <p>+91-9837872343</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="rounded-md mt-2">
                <div className="flex gap-x-2 items-center">
                  <Receipt className="w-7 h-7 p-1" />
                  <p className="text-sm font-semibold">Billed Details</p>
                </div>
                <Table className="w-full mt-4">
                  <TableHeader>
                    <TableRow className="text-xs font-medium whitespace-nowrap">
                      <TableHead>Sr No.</TableHead>
                      <TableHead>Product Name</TableHead>
                      <TableHead>SKU</TableHead>
                      <TableHead>HSN</TableHead>
                      <TableHead>Qty</TableHead>
                      <TableHead>Unit Price</TableHead>
                      <TableHead>Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-left">
                    {billDetails.map((billDetail, index) => (
                      <TableRow key={index} className="border">
                        <TableCell className="px-6">{billDetail.srno}.</TableCell>
                        <TableCell>{billDetail.productName}</TableCell>
                        <TableCell>{billDetail.sku}</TableCell>
                        <TableCell>{billDetail.hsn}</TableCell>
                        <TableCell>{billDetail.qty}</TableCell>
                        <TableCell>{billDetail.unitPrice}</TableCell>
                        <TableCell className="whitespace-nowrap">{billDetail.total}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="font-semibold text-sm">
                      <TableCell colSpan={6} className="text-right">
                        Total
                      </TableCell>
                      <TableCell className="whitespace-nowrap"> ₹ 2322.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:w-1/3">
          <Card className="shadow-none px-0 border rounded-lg mt-2 lg:mt-0">
            <CardContent className="px-0 py-0 font-normal text-xs">
              <p className="text-base font-semibold border-b pt-2 px-4">Summary</p>
              <div className="flex justify-between px-4 py-2">
                <div className="grid gap-y-4">
                  <p>Logistic Fee</p>
                  <p>GST</p>
                  <p>Other Charges</p>
                  <p>Other Charges</p>
                </div>
                <div className="grid gap-y-4 font-medium">
                  <p>₹ 2322.00</p>
                  <p>₹ 2322.00</p>
                  <p>₹ 2322.00</p>
                  <p>₹ 2322.00</p>
                </div>
              </div>
              <div className="flex justify-between font-semibold px-4 py-3 mt-4">
                <p>Total</p>
                <p>₹ 2322.00</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-none px-0 border rounded-lg mt-2">
            <CardContent className="py-0 font-normal text-xs">
              <p className="text-base mt-4 mb-1 font-semibold">Activity</p>
              <div className="flex">
                <ProcessSvg />
                <div className="grid w-full pl-4 py-2">
                  <div>
                    <p className="font-medium">Shipment Created, Awaiting Package</p>
                    <div className="flex justify-between mt-1">
                      <p>25 Apr, 2024 11:30 pm</p>
                      <p>Delhi, India</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Shipment Created, Awaiting Package</p>
                    <div className="flex justify-between mt-1">
                      <p>25 Apr, 2024 11:30 pm</p>
                      <p>Delhi, India</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Shipment Created, Awaiting Package</p>
                    <div className="flex justify-between mt-1">
                      <p>25 Apr, 2024 11:30 pm</p>
                      <p>Delhi, India</p>
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
