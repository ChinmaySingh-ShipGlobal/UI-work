import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SlidersHorizontal, CloudDownload, Wallet, IndianRupee, Square, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

const partners = [
  {
    transactionCode: "SG2425535353",
    rechargeDate: "29 Mar, 2024 ; 10:30 am",
    rechargeAmount: "₹3500.00",

    status: "Failed",
    paymentGateway: "Paytm",
  },
  {
    transactionCode: "SG2425535353",
    rechargeDate: "29 Mar, 2024 ; 10:30 am",
    rechargeAmount: "₹3500.00",

    status: "Completed",
    paymentGateway: "Paytm",
  },
  {
    transactionCode: "SG2425535353",
    rechargeDate: "29 Mar, 2024 ; 10:30 am",
    rechargeAmount: "₹3500.00",

    status: "Failed",
    paymentGateway: "Paytm",
  },
  {
    transactionCode: "SG2425535353",
    rechargeDate: "29 Mar, 2024 ; 10:30 am",
    rechargeAmount: "₹3500.00",

    status: "Completed",
    paymentGateway: "Paytm",
  },
  {
    transactionCode: "SG2425535353",
    rechargeDate: "29 Mar, 2024 ; 10:30 am",
    rechargeAmount: "₹3500.00",

    status: "Failed",
    paymentGateway: "Paytm",
  },
  {
    transactionCode: "SG2425535353",
    rechargeDate: "29 Mar, 2024 ; 10:30 am",
    rechargeAmount: "₹3500.00",

    status: "Completed",
    paymentGateway: "Paytm",
  },
  {
    transactionCode: "SG2425535353",
    rechargeDate: "29 Mar, 2024 ; 10:30 am",
    rechargeAmount: "₹3500.00",

    status: "Failed",
    paymentGateway: "Paytm",
  },
  {
    transactionCode: "SG2425535353",
    rechargeDate: "29 Mar, 2024 ; 10:30 am",
    rechargeAmount: "₹3500.00",

    status: "Completed",
    paymentGateway: "Paytm",
  },
];
const amountFormSchema = z.object({
  amount: z.coerce
    .number({ message: "Amount must be in digits" })
    .min(200, { message: "Enter amount not less than 200" }),
});

export default function WalletHistory() {
  const amountForm = useForm<z.infer<typeof amountFormSchema>>({
    resolver: zodResolver(amountFormSchema),
  });

  function onSubmit(values: z.infer<typeof amountFormSchema>) {
    console.log(values);
  }
  return (
    <>
      <div className="bg-gray-100 font-semibold text-2xl m-2 text-left ">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center my-4">
          <p className="m-2 p-2 text-2xl font-medium font-poppins">Wallet</p>
          <div className="flex flex-row gap-x-4 mt-2 justify-end mr-4">
            <Button className="flex flex-row bg-transparent text-black border border-gray-300 gap-x-2">
              <SlidersHorizontal className="h-5 w-5" />
              <p className="text-sm font-normal hidden lg:block">Filters</p>
            </Button>
            <Button className="flex flex-row bg-transparent text-black border border-gray-300 gap-x-2">
              <CloudDownload className="h-5 w-5" />
              <p className="text-sm font-normal hidden lg:block">Export</p>
            </Button>
            <div className=" bg-blue-150 px-2 rounded-sm text-black  gap-x-2 hidden lg:block">
              <i className="text-xs text-gray-800 font-normal mt-1">
                Wallet Balance <i className="text-xs font-semibold text-black inline">₹ 3500.00</i>
              </i>
            </div>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="flex flex-row bg-blue-400 text-white gap-x-2">
                  <Wallet className="h-5 w-5" />
                  <p className="text-sm font-normal">Recharge Wallet</p>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogTitle></AlertDialogTitle>
                <AlertDialogDescription>
                  <Form {...amountForm}>
                    <form onSubmit={amountForm.handleSubmit(onSubmit)}>
                      <div className="flex justify-end">
                        <AlertDialogCancel className="mt-0 border text-gray-800 border-transparent hover:bg-transparent hover:text-gray-800 text-xs font-normal font-poppins bg-transparent">
                          <X />
                        </AlertDialogCancel>
                      </div>
                      <div className="flex flex-col items-center justify-center text-black">
                        <Wallet />
                        <p className="text-base font-semibold">Recharge Wallet</p>
                      </div>
                      <div className="px-4 mt-6">
                        <FormField
                          control={amountForm.control}
                          name="amount"
                          render={({ field }) => (
                            <FormItem>
                              <div>
                                <Label className="text-xs font-medium font-poppins">Enter Recharge Amount</Label>

                                <FormControl>
                                  <div>
                                    <div className="flex flex-row items-center border justify-center border-gray-150 px-3">
                                      <div className="h-3 w-3">
                                        <IndianRupee className="h-3 w-3" />
                                      </div>
                                      <Input
                                        type="text"
                                        {...field}
                                        placeholder="Type amount ..."
                                        className="placeholder:text-sm px-0 font-normal placeholder:text-gray-400 ring-transparent border-transparent "
                                        defaultValue={200}
                                      />
                                      <Button className="text-xs font-medium bg-transparent p-0 text-blue-400">
                                        + ₹ 500.00
                                      </Button>
                                    </div>
                                    <p className="text-gray-800 text-xs font-normal mt-1">
                                      Minimum recharge value
                                      <span className="font-medium">₹ 200</span>
                                    </p>
                                  </div>
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />

                        <p className="text-sm font-semibold mt-8">Select Payment Method</p>
                        <Button className="bg-transparent w-full h-14 hover:bg-transparent border mt-2 border-gray-350">
                          <div className="flex w-full justify-between items-center py-3">
                            <div className="text-left">
                              <p className="text-sm font-medium text-black">Cashfree Online Payment</p>
                              <p className="text-xs font-normal text-gray-800 mt-2">
                                Debit Card, Credit Card, Net Banking, UPI
                              </p>
                            </div>
                            <Square className="text-black h-4 w-4" />
                          </div>
                        </Button>
                        <Button className="bg-transparent w-full h-14 hover:bg-transparent border mt-4 border-gray-350">
                          <div className="flex w-full justify-between items-center py-3">
                            <div className="text-left">
                              <p className="text-sm font-medium text-black">Cashfree Online Payment</p>
                              <p className="text-xs font-normal text-gray-800 mt-2">
                                Debit Card, Credit Card, Net Banking, UPI
                              </p>
                            </div>
                            <Square className="text-black h-4 w-4" />
                          </div>
                        </Button>
                      </div>
                      <div className="flex flex-row justify-center items-center gap-x-4 mt-8 mb-4">
                        <Button type="submit" className="bg-blue-400 text-white text-xs font-medium font-poppins">
                          Proceed To Payment
                        </Button>
                      </div>
                    </form>
                  </Form>
                </AlertDialogDescription>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <div className="text-left">
          <Tabs defaultValue="rechargeHistory" className="w-full mt-4">
            <TabsList className=" active:text-black text-gray-800 font-medium text-xs w-full items-start justify-start">
              <TabsTrigger value="transactionHistory">Transaction History</TabsTrigger>
              <TabsTrigger value="rechargeHistory">Recharge History</TabsTrigger>
            </TabsList>
            <TabsContent value="transactionHistory">Make changes to your account here.</TabsContent>
            <TabsContent value="rechargeHistory">
              <div className="bg-white lg:flex lg:flex-row pt-2">
                <Card className="shadow-none w-full">
                  <CardContent className="px-0 w-full">
                    {/* Partners Table */}

                    <Table className="w-full">
                      <TableHeader>
                        <TableRow className="bg-gray-100 text-gray-800 rounded-xl text-xs font-medium font-poppins px-2">
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
                              <div
                                className={`rounded-full px-0 inline-block
                                        ${
                                          partner.status === "Failed"
                                            ? "text-red bg-pink-200 border border-red"
                                            : "text-green bg-green-100 border border-green"
                                        }
                                      `}
                              >
                                <p className="px-2">{partner.status}</p>
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
