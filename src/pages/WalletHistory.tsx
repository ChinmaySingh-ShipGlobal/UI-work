import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Wallet, IndianRupee, X } from "lucide-react";
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
import { CornerDownRight, SlidersVertical, CloudDownload } from "lucide-react";
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
    description: "Wallet deduction for order:",
    subDescription: "SG235367465",
    amount: "₹3500.00",
    status: "Failed",
  },
  {
    transactionDate: "29 Mar, 2024 ; 10:30 am",
    transactionType: "SG2425535353",
    description: "Wallet deduction for order:",
    subDescription: "SG235367465",
    amount: "₹3500.00",
    status: "Completed",
  },
  {
    transactionDate: "29 Mar, 2024 ; 10:30 am",
    transactionType: "SG2425535353",
    description: "Wallet deduction for order:",
    subDescription: "SG235367465",
    amount: "₹3500.00",
    status: "Completed",
  },
  {
    transactionDate: "29 Mar, 2024 ; 10:30 am",
    transactionType: "SG2425535353",
    description: "Wallet deduction for order:",
    subDescription: "SG235367465",
    amount: "₹3500.00",
    status: "Completed",
  },
  {
    transactionDate: "29 Mar, 2024 ; 10:30 am",
    transactionType: "SG2425535353",
    description: "Wallet deduction for order:",
    subDescription: "SG235367465",
    amount: "₹3500.00",
    status: "Failed",
  },
  {
    transactionDate: "29 Mar, 2024 ; 10:30 am",
    transactionType: "SG2425535353",
    description: "Wallet deduction for order:",
    subDescription: "SG235367465",
    amount: "₹3500.00",
    status: "Completed",
  },
  {
    transactionDate: "29 Mar, 2024 ; 10:30 am",
    transactionType: "SG2425535353",
    description: "Wallet deduction for order:",
    subDescription: "SG235367465",
    amount: "₹3500.00",
    status: "Failed",
  },
  {
    transactionDate: "29 Mar, 2024 ; 10:30 am",
    transactionType: "SG2425535353",
    description: "Wallet deduction for order:",
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
  const [rechargeWalletDialog, setRechargeWalletDialog] = useState(false);
  const [proceedPaymentDialog, setProceedPaymentDialog] = useState(false);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const time = today.toLocaleTimeString();
  const now = `${date < 10 ? `0${date}` : date}-${monthNames[month - 1]}-${year % 100}`;

  return (
    <>
      <div className="bg-gray-100 font-semibold text-2xl text-left px-4 w-full h-screen">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center mb-4">
          <p className="m-2 p-2 text-2xl font-medium s">Wallet</p>
          <div className="flex gap-x-4 mt-2 justify-end items-center mr-4 font-normal text-xs">
            <Button className="flex gap-x-2">
              <SlidersVertical className="h-5 w-5 p-1" />
              <p className="text-sm hidden lg:block">Filters</p>
            </Button>
            <Button className="flex gap-x-2">
              <CloudDownload className="h-5 w-5 p-1" />
              <p className="text-sm hidden lg:block">Export</p>
            </Button>
            <div className="px-2 rounded-sm gap-x-2 hidden lg:block">
              <i className="mt-1">
                Wallet Balance <i className="font-semibold inline">₹ 3500.00</i>
              </i>
            </div>
            <AlertDialog open={rechargeWalletDialog}>
              <AlertDialogTrigger asChild>
                <Button className="flex gap-x-2" onClick={() => setRechargeWalletDialog(true)}>
                  <Wallet className="h-5 w-5" />
                  <p className="text-sm">Recharge Wallet</p>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogTitle></AlertDialogTitle>
                <AlertDialogDescription>
                  <Form {...amountForm}>
                    <form onSubmit={amountForm.handleSubmit(onSubmit)} className="text-black">
                      <div className="flex justify-end">
                        <AlertDialogCancel className="mt-0 border">
                          <X onClick={() => setRechargeWalletDialog(false)} />
                        </AlertDialogCancel>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <img src="src\assets\Wallet1.png" />
                        <p className="text-base font-semibold mt-2">Recharge Wallet</p>
                      </div>
                      <div className="px-4 mt-6">
                        <FormField
                          control={amountForm.control}
                          name="amount"
                          render={({}) => (
                            <FormItem>
                              <div>
                                <Label className="font-medium">Enter Recharge Amount</Label>
                                <FormControl className="mt-1">
                                  <div>
                                    <div className="flex items-center border justify-center px-3">
                                      <div className="h-3 w-3">
                                        <IndianRupee className="h-3 w-3" />
                                      </div>
                                      <Input
                                        type="text"
                                        value={inputAmount}
                                        onChange={(e) => setinputAmount(parseInt(e.target.value) || 0)}
                                        placeholder="Type amount ..."
                                        className="placeholder:text-sm px-0 placeholder:text-gray-400 ring-transparent border-transparent"
                                      />
                                      <Button
                                        className="font-medium bg-transparent hover:bg-transparent p-0 text-blue-400"
                                        onClick={() => setinputAmount(inputAmount + 500)}
                                      >
                                        + ₹ <span className="underline">500.00</span>
                                      </Button>
                                    </div>
                                    <p className="mt-1">
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

                        <p className="text-sm font-semibold mt-8 mb-1">Select Payment Method</p>
                        <Button className="w-full h-16 bg-transparent hover:bg-transparent border mt-2 border-gray-350 text-black">
                          <div className="flex w-full justify-between items-center py-3">
                            <div className="text-left">
                              <p className="text-sm font-medium">Cashfree Online Payment</p>
                              <p className="mt-2">Debit Card, Credit Card, Net Banking, UPI</p>
                            </div>
                            <img src="src\assets\cashfreePayments.png" />
                          </div>
                        </Button>
                        <Button className="w-full h-16 bg-transparent hover:bg-transparent border mt-4 border-gray-350 text-black">
                          <div className="flex w-full justify-between items-center py-3">
                            <div className="text-left">
                              <p className="text-sm font-medium">Paytm Online Payment</p>
                              <p className="mt-2">Debit Card, Credit Card, Net Banking, UPI</p>
                            </div>
                            <img src="src\assets\paytm.png" />
                          </div>
                        </Button>
                      </div>
                      <div className="flex justify-center items-center gap-x-4 mt-8 mb-4">
                        {/* ------------------------------------------------------------------------ */}
                        <Button
                          className="flex bg-blue-400 text-white gap-x-2"
                          onClick={() => {
                            setProceedPaymentDialog(true);
                            setRechargeWalletDialog(false);
                          }}
                        >
                          <p className="text-sm font-normal">Proceed to Payment</p>
                        </Button>
                      </div>
                    </form>
                  </Form>
                </AlertDialogDescription>
              </AlertDialogContent>
            </AlertDialog>
            <AlertDialog open={proceedPaymentDialog}>
              <AlertDialogTrigger asChild></AlertDialogTrigger>
              <AlertDialogContent className="p-0">
                <AlertDialogTitle></AlertDialogTitle>
                <AlertDialogDescription>
                  <Form {...amountForm}>
                    <form onSubmit={amountForm.handleSubmit(onSubmit)}>
                      <div className="flex justify-between items-center border-b border-b-white-100 px-6">
                        <p className="font-semibold text-base text-black">Transaction Details</p>
                        <AlertDialogCancel className="mt-0 border  border-transparent hover: hover:">
                          <X onClick={() => setProceedPaymentDialog(false)} />
                        </AlertDialogCancel>
                      </div>
                      <div className="flex flex-col items-center justify-center  text-2xl mt-8">Transaction Amount</div>
                      <div className="flex gap-x-3 items-center justify-center text-black font-medium text-2xl mt-6">
                        ₹ {inputAmount}
                        <Badge className="text-green bg-green-100  border-green">Completed</Badge>
                      </div>
                      <div className="flex items-center justify-center  text-sm mt-4">
                        Date added :
                        <span className="text-black text-sm ml-2">
                          {now} {time}
                        </span>
                      </div>
                      <div className="flex justify-center items-center gap-x-4 mt-8 mb-4">
                        <Button
                          type="submit"
                          className="bg-blue-400 text-white  font-medium s"
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
        </div>
        <div className="text-left">
          <Tabs defaultValue="rechargeHistory" className="w-full mt-4">
            <span className="border-b border-blue-200 pb-1">
              <TabsList className="active:text-black font-medium text-xs w-full items-start justify-start">
                <TabsTrigger value="transactionHistory">Transaction History</TabsTrigger>
                <TabsTrigger value="rechargeHistory">Recharge History</TabsTrigger>
              </TabsList>
            </span>
            <TabsContent value="transactionHistory">
              <div className="bg-white lg:flex lg:flex-row p-2 rounded-sm">
                <Card className="shadow-none w-full">
                  <CardContent className="px-0">
                    {/* Transactions Table */}
                    <Table className="text-xs ">
                      <TableHeader>
                        <TableRow className="font-medium px-2 whitespace-nowrap">
                          <TableHead>Transaction Date</TableHead>
                          <TableHead>Transaction Type</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Transaction Status</TableHead>
                          <TableHead>View Details</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="text-left">
                        {transactions.map((transaction, index) => (
                          <TableRow key={index} className="border font-normal space-y-2">
                            <TableCell className="px-6">{transaction.transactionDate}</TableCell>
                            <TableCell className="flex items-center mt-2">{transaction.transactionType}</TableCell>
                            <TableCell className="font-medium">
                              {transaction.description} {transaction.subDescription}
                            </TableCell>
                            <TableCell>{transaction.amount}</TableCell>
                            <TableCell>
                              <Badge>{transaction.status}</Badge>
                            </TableCell>
                            <TableCell>
                              <Button onClick={() => navigate("/orderDetails")} className="h-6">
                                <CornerDownRight className="h-3 w-3" />
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
                  <CardContent className="px-0">
                    {/* recharges Table */}
                    <Table className="w-full text-xs ">
                      <TableHeader className="font-medium">
                        <TableRow className="px-2 whitespace-nowrap">
                          <TableHead>Transaction Code</TableHead>
                          <TableHead>Recharge Date</TableHead>
                          <TableHead>Recharge Amount</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Payment Gateway</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="text-left">
                        {recharges.map((recharge, index) => (
                          <TableRow key={index} className="border font-normal space-y-2">
                            <TableCell className="px-6">{recharge.transactionCode}</TableCell>
                            <TableCell className="flex items-center mt-2">{recharge.rechargeDate}</TableCell>
                            <TableCell className="font-medium">{recharge.rechargeAmount}</TableCell>
                            <TableCell>
                              <Badge>{recharge.status}</Badge>
                            </TableCell>
                            <TableCell>{recharge.paymentGateway}</TableCell>
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
