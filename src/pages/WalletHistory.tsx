import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SlidersHorizontal, CloudDownload, Wallet } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const partners = [
  {
    transactionCode: "SG2425535353",
    rechargeDate: "29 Mar, 2024 ; 10:30 am",
    rechargeAmount: "3500.00",

    status: "Failed",
    paymentGateway: "Paytm",
  },
  {
    transactionCode: "SG2425535353",
    rechargeDate: "29 Mar, 2024 ; 10:30 am",
    rechargeAmount: "3500.00",

    status: "Completed",
    paymentGateway: "Paytm",
  },
  {
    transactionCode: "SG2425535353",
    rechargeDate: "29 Mar, 2024 ; 10:30 am",
    rechargeAmount: "3500.00",

    status: "Failed",
    paymentGateway: "Paytm",
  },
  {
    transactionCode: "SG2425535353",
    rechargeDate: "29 Mar, 2024 ; 10:30 am",
    rechargeAmount: "3500.00",

    status: "Completed",
    paymentGateway: "Paytm",
  },
  {
    transactionCode: "SG2425535353",
    rechargeDate: "29 Mar, 2024 ; 10:30 am",
    rechargeAmount: "3500.00",

    status: "Failed",
    paymentGateway: "Paytm",
  },
  {
    transactionCode: "SG2425535353",
    rechargeDate: "29 Mar, 2024 ; 10:30 am",
    rechargeAmount: "₹ 3500.00",

    status: "Completed",
    paymentGateway: "Paytm",
  },
  {
    transactionCode: "SG2425535353",
    rechargeDate: "29 Mar, 2024 ; 10:30 am",
    rechargeAmount: "3500.00",

    status: "Failed",
    paymentGateway: "Paytm",
  },
  {
    transactionCode: "SG2425535353",
    rechargeDate: "29 Mar, 2024 ; 10:30 am",
    rechargeAmount: "3500.00",

    status: "Completed",
    paymentGateway: "Paytm",
  },
];

export default function WalletHistory() {
  return (
    <>
      <div className=" bg-gray-100">
        <div className="font-semibold text-2xl text-center m-2 lg:text-left lg:ml-6">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center my-4">
            <p className="m-2 p-2 text-2xl font-medium font-poppins">Wallet</p>
            <div className="flex flex-row gap-x-4">
              <Button className="flex flex-row bg-transparent text-black border border-gray-300 gap-x-2">
                <SlidersHorizontal className="h-5 w-5" />
                <p className="text-sm font-normal hidden lg:block">Filters</p>
              </Button>
              <Button className="flex flex-row bg-transparent text-black border border-gray-300 gap-x-2">
                <CloudDownload className="h-5 w-5" />
                <p className="text-sm font-normal hidden lg:block">Export</p>
              </Button>
              <Button disabled className=" bg-blue-150 text-black border border-gray-300 gap-x-2 hidden lg:block">
                <p className="text-xs text-gray-800 font-normal">
                  Wallet Balance <span className="text-xs font-semibold text-black inline">₹ 3500.00</span>
                </p>
              </Button>
              <Button className="flex flex-row bg-blue-400 text-white gap-x-2">
                <Wallet className="h-5 w-5" />
                <p className="text-sm font-normal">Recharge Wallet</p>
              </Button>
            </div>
          </div>
          <Tabs defaultValue="rechargeHistory" className="w-full mt-4">
            <TabsList className=" active:text-black text-gray-800 font-medium text-xs">
              <TabsTrigger value="transactionHistory">Transaction History</TabsTrigger>
              <TabsTrigger value="rechargeHistory">Recharge History</TabsTrigger>
            </TabsList>
            <TabsContent value="transactionHistory">Make changes to your account here.</TabsContent>
            <TabsContent value="rechargeHistory">
              <div className="bg-white">
                <div className="lg:flex lg:flex-row">
                  <Card className="shadow-none w-full">
                    <CardContent className="px-0 w-full">
                      {/* Partners Table */}

                      <Table className="w-full">
                        <TableHeader>
                          <TableRow className="bg-gray-100 text-gray-800 text-xs font-medium font-poppins px-2">
                            <TableHead className="py-2 text-xs font-medium font-poppins ">Transaction Code</TableHead>
                            <TableHead className="py-2 text-xs font-medium font-poppins ">Recharge Date</TableHead>
                            <TableHead className="py-2 text-xs font-medium font-poppins ">Recharge Amount</TableHead>
                            <TableHead className="py-2 text-xs font-medium font-poppins ">Status</TableHead>
                            <TableHead className="py-2 text-xs font-medium font-poppins ">Payment Gateway</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody className="text-left">
                          {partners.map((partner, index) => (
                            <TableRow key={index} className="border border-blue-50 text-xs font-normal space-y-2 ">
                              <TableCell className="py-2 px-6">{partner.transactionCode}</TableCell>
                              <TableCell className="py-2 flex items-center mt-2">{partner.rechargeDate}</TableCell>
                              <TableCell className="py-2 font-medium">{partner.rechargeAmount}</TableCell>
                              <TableCell>
                                <div className="text-center">
                                  <div
                                    className={`rounded-full px-0
                                        ${
                                          partner.status === "Failed"
                                            ? "text-red bg-pink-200"
                                            : "text-green bg-green-100"
                                        }
                                      `}
                                  >
                                    {partner.status}
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="py-2">{partner.paymentGateway}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
