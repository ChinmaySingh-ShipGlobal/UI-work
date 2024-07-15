import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SlidersHorizontal, CloudDownload, Wallet, IndianRupee, WalletCards, X } from "lucide-react";
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
import { CornerDownRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const recharges = [
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

const transactions = [
  {
    transactionDate: "29 Mar, 2024 ; 10:30 am",
    transactionType: "SG2425535353",
    description: "Wallet deduction for order: ",
    subDescription: "SG235367465",
    amount: "₹3500.00",
    status: "Failed",
  },
  {
    transactionDate: "29 Mar, 2024 ; 10:30 am",
    transactionType: "SG2425535353",
    description: "Wallet deduction for order: ",
    subDescription: "SG235367465",
    amount: "₹3500.00",
    status: "Completed",
  },
  {
    transactionDate: "29 Mar, 2024 ; 10:30 am",
    transactionType: "SG2425535353",
    description: "Wallet deduction for order: ",
    subDescription: "SG235367465",
    amount: "₹3500.00",
    status: "Completed",
  },
  {
    transactionDate: "29 Mar, 2024 ; 10:30 am",
    transactionType: "SG2425535353",
    description: "Wallet deduction for order: ",
    subDescription: "SG235367465",
    amount: "₹3500.00",
    status: "Completed",
  },
  {
    transactionDate: "29 Mar, 2024 ; 10:30 am",
    transactionType: "SG2425535353",
    description: "Wallet deduction for order: ",
    subDescription: "SG235367465",
    amount: "₹3500.00",
    status: "Failed",
  },
  {
    transactionDate: "29 Mar, 2024 ; 10:30 am",
    transactionType: "SG2425535353",
    description: "Wallet deduction for order: ",
    subDescription: "SG235367465",
    amount: "₹3500.00",
    status: "Completed",
  },
  {
    transactionDate: "29 Mar, 2024 ; 10:30 am",
    transactionType: "SG2425535353",
    description: "Wallet deduction for order: ",
    subDescription: "SG235367465",
    amount: "₹3500.00",
    status: "Failed",
  },
  {
    transactionDate: "29 Mar, 2024 ; 10:30 am",
    transactionType: "SG2425535353",
    description: "Wallet deduction for order: ",
    subDescription: "SG235367465",
    amount: "₹3500.00",
    status: "Completed",
  },
];

const amountFormSchema = z.object({
  amount: z.coerce
    .number({ message: "Amount must be in digits" })
    .min(200, { message: "Enter amount not less than 200" })
    .default(200),
});

export default function WalletHistory() {
  const amountForm = useForm<z.infer<typeof amountFormSchema>>({
    resolver: zodResolver(amountFormSchema),
  });

  const navigate = useNavigate();
  function onSubmit(values: z.infer<typeof amountFormSchema>) {
    values.amount = inputAmount;
    console.log(values);
  }
  const [inputAmount, setinputAmount] = useState(200);

  return (
    <>
      <div className="bg-gray-100 font-semibold text-2xl text-left px-4 w-full h-screen">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center mb-4">
          <p className="m-2 p-2 text-2xl font-medium font-poppins">Wallet</p>
          <div className="flex flex-row gap-x-4 mt-2 justify-end mr-4">
            <Button className="flex flex-row hover:bg-transparent bg-transparent text-black border border-gray-300 gap-x-2">
              <SlidersHorizontal className="h-5 w-5" />
              <p className="text-sm font-normal hidden lg:block">Filters</p>
            </Button>
            <Button className="flex flex-row  hover:bg-transparent  bg-transparent text-black border border-gray-300 gap-x-2">
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
                          render={({}) => (
                            <FormItem>
                              <div>
                                <Label className="text-xs font-medium font-poppins text-black">
                                  Enter Recharge Amount
                                </Label>
                                <FormControl className="mt-1">
                                  <div>
                                    <div className="flex flex-row items-center border justify-center border-gray-150 px-3 text-black">
                                      <div className="h-3 w-3">
                                        <IndianRupee className="h-3 w-3" />
                                      </div>
                                      <Input
                                        type="text"
                                        value={inputAmount}
                                        onChange={(e) => setinputAmount(parseInt(e.target.value) || 0)}
                                        placeholder="Type amount ..."
                                        className="placeholder:text-sm px-0 font-normal placeholder:text-gray-400 ring-transparent border-transparent"
                                      />
                                      <Button
                                        className="text-xs font-medium bg-transparent p-0 text-blue-400 hover:bg-transparent"
                                        onClick={() => setinputAmount(inputAmount + 500)}
                                      >
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

                        <p className="text-sm font-semibold mt-8 mb-1 text-black">Select Payment Method</p>
                        <Button className="bg-transparent w-full h-16 hover:bg-transparent border mt-2 border-gray-350">
                          <div className="flex w-full justify-between items-center py-3">
                            <div className="text-left">
                              <p className="text-sm font-medium text-black">Cashfree Online Payment</p>
                              <p className="text-xs font-normal text-gray-800 mt-2">
                                Debit Card, Credit Card, Net Banking, UPI
                              </p>
                            </div>
                            <WalletCards className="text-black h-4 w-4" />
                          </div>
                        </Button>
                        <Button className="bg-transparent w-full h-16 hover:bg-transparent border mt-4 border-gray-350">
                          <div className="flex w-full justify-between items-center py-3">
                            <div className="text-left">
                              <p className="text-sm font-medium text-black">Cashfree Online Payment</p>
                              <p className="text-xs font-normal text-gray-800 mt-2">
                                Debit Card, Credit Card, Net Banking, UPI
                              </p>
                            </div>
                            <WalletCards className="text-black h-4 w-4" />
                          </div>
                        </Button>
                      </div>
                      <div className="flex flex-row justify-center items-center gap-x-4 mt-8 mb-4">
                        {/* ------------------------------------------------------------------------ */}
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button className="flex flex-row bg-blue-400 text-white gap-x-2">
                              <p className="text-sm font-normal">Proceed to Payment</p>
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="p-0">
                            <AlertDialogTitle></AlertDialogTitle>
                            <AlertDialogDescription>
                              <Form {...amountForm}>
                                <form onSubmit={amountForm.handleSubmit(onSubmit)}>
                                  <div className="flex justify-between items-center border-b border-b-white-100 px-6 py-2">
                                    <p className="font-semibold text-base text-black">Transaction Details</p>
                                    <AlertDialogCancel className="mt-0 border text-gray-800 border-transparent hover:bg-transparent hover:text-gray-800 text-xs font-normal font-poppins bg-transparent">
                                      <X />
                                    </AlertDialogCancel>
                                  </div>
                                  <div className="flex flex-col items-center justify-center text-gray-800 font-normal text-2xl mt-8">
                                    Transaction Amount
                                  </div>
                                  <div className="flex flex-row gap-x-3 items-center justify-center text-black font-normal text-2xl mt-6">
                                    ₹ {inputAmount}
                                    <Badge className="text-green bg-green-100  border-green">Completed</Badge>
                                  </div>
                                  <div className="flex flex-row items-center justify-center text-gray-800 font-normal text-sm mt-8">
                                    Date added :
                                    <span className="text-black font-normal text-sm ml-2">06-Jun-24 09:25:10 am</span>
                                  </div>
                                  <div className="flex flex-row justify-center items-center gap-x-4 mt-8 mb-4">
                                    <Button
                                      type="submit"
                                      className="bg-blue-400 text-white text-xs font-medium font-poppins"
                                      onClick={() => navigate("/orderDetails")}
                                    >
                                      View Order Details
                                    </Button>
                                  </div>
                                </form>
                              </Form>
                            </AlertDialogDescription>
                          </AlertDialogContent>
                        </AlertDialog>
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
            <span className="border-b border-blue-200 pb-1">
              <TabsList className="active:text-black text-gray-800 font-medium text-xs w-full items-start justify-start">
                <TabsTrigger value="transactionHistory">Transaction History</TabsTrigger>
                <TabsTrigger value="rechargeHistory">Recharge History</TabsTrigger>
              </TabsList>
            </span>
            <TabsContent value="transactionHistory">
              <div className="bg-white lg:flex lg:flex-row p-4 rounded-sm">
                <Card className="shadow-none w-full">
                  <CardContent className="px-0 w-full">
                    {/* Transactions Table */}

                    <Table className="w-full">
                      <TableHeader>
                        <TableRow className="bg-gray-100 text-gray-800 rounded-xl text-xs font-medium font-poppins px-2 whitespace-nowrap">
                          <TableHead className="py-2 text-xs font-medium font-poppins ">Transaction Date</TableHead>
                          <TableHead className="py-2 text-xs font-medium font-poppins ">Transaction Type</TableHead>
                          <TableHead className="py-2 text-xs font-medium font-poppin">Description</TableHead>
                          <TableHead className="py-2 text-xs font-medium font-poppins ">Amount</TableHead>
                          <TableHead className="py-2 text-xs font-medium font-poppins ">Transaction Status</TableHead>
                          <TableHead className="py-2 text-xs font-medium font-poppins ">View Details</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="text-left">
                        {transactions.map((transaction, index) => (
                          <TableRow key={index} className="border border-blue-50 text-xs font-normal space-y-2 ">
                            <TableCell className="py-2 px-6">{transaction.transactionDate}</TableCell>
                            <TableCell className="py-2 flex items-center mt-2 text-gray-800">
                              {transaction.transactionType}
                            </TableCell>
                            <TableCell className="py-2 font-medium  text-gray-800">
                              {transaction.description}
                              <p className="inline font-medium text-xs text-black">{transaction.subDescription}</p>
                            </TableCell>
                            <TableCell className="py-2">{transaction.amount}</TableCell>
                            <TableCell>
                              <Badge
                                className={
                                  transaction.status === "Failed"
                                    ? "text-red bg-pink-200 border-red"
                                    : "text-green bg-green-100  border-green"
                                }
                              >
                                {transaction.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="py-2">
                              <Button
                                className="bg-transparent hover:bg-gray-150"
                                onClick={() => navigate("/orderDetails")}
                              >
                                <CornerDownRight className="text-gray-800" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="rechargeHistory">
              <div className="bg-white lg:flex lg:flex-row p-2 rounded-sm">
                <Card className="shadow-none w-full">
                  <CardContent className="px-0 w-full">
                    {/* recharges Table */}

                    <Table className="w-full">
                      <TableHeader>
                        <TableRow className="bg-gray-100 text-gray-800 rounded-xl text-xs font-medium font-poppins px-2 whitespace-nowrap">
                          <TableHead className="py-2 text-xs font-medium font-poppins ">Transaction Code</TableHead>
                          <TableHead className="py-2 text-xs font-medium font-poppins ">Recharge Date</TableHead>
                          <TableHead className="py-2 text-xs font-medium font-poppins ">Recharge Amount</TableHead>
                          <TableHead className="py-2 text-xs font-medium font-poppins ">Status</TableHead>
                          <TableHead className="py-2 text-xs font-medium font-poppins ">Payment Gateway</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="text-left">
                        {recharges.map((recharge, index) => (
                          <TableRow key={index} className="border border-blue-50 text-xs font-normal space-y-2 ">
                            <TableCell className="py-2 px-6">{recharge.transactionCode}</TableCell>
                            <TableCell className="py-2 flex items-center mt-2">{recharge.rechargeDate}</TableCell>
                            <TableCell className="py-2 font-medium">{recharge.rechargeAmount}</TableCell>
                            <TableCell>
                              <Badge
                                className={
                                  recharge.status === "Failed"
                                    ? "text-red bg-pink-200 border-red"
                                    : "text-green bg-green-100  border-green"
                                }
                              >
                                {recharge.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="py-2">{recharge.paymentGateway}</TableCell>
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
