import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Wallet, IndianRupee, WalletCards, X } from "lucide-react";
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
          <p className="m-2 p-2 text-2xl font-medium font-poppins">Wallet</p>
          <div className="flex flex-row gap-x-4 mt-2 justify-end mr-4">
            <Button className="flex flex-row hover:bg-transparent bg-transparent text-black border border-gray-300 gap-x-2">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.16699 10.4997V3.83301M15.8337 17.1663V14.6663M4.16699 17.1663V13.833M15.8337 11.333V3.83301M10.0003 6.33301V3.83301M10.0003 17.1663V9.66634"
                  stroke="#040404"
                  stroke-linecap="round"
                />
                <path
                  d="M4.16667 13.8333C5.08714 13.8333 5.83333 13.0871 5.83333 12.1667C5.83333 11.2462 5.08714 10.5 4.16667 10.5C3.24619 10.5 2.5 11.2462 2.5 12.1667C2.5 13.0871 3.24619 13.8333 4.16667 13.8333Z"
                  stroke="#040404"
                  stroke-linecap="round"
                />
                <path
                  d="M9.99967 9.66634C10.9201 9.66634 11.6663 8.92015 11.6663 7.99967C11.6663 7.0792 10.9201 6.33301 9.99967 6.33301C9.0792 6.33301 8.33301 7.0792 8.33301 7.99967C8.33301 8.92015 9.0792 9.66634 9.99967 9.66634Z"
                  stroke="#040404"
                  stroke-linecap="round"
                />
                <path
                  d="M15.8337 14.6663C16.7541 14.6663 17.5003 13.9201 17.5003 12.9997C17.5003 12.0792 16.7541 11.333 15.8337 11.333C14.9132 11.333 14.167 12.0792 14.167 12.9997C14.167 13.9201 14.9132 14.6663 15.8337 14.6663Z"
                  stroke="#040404"
                  stroke-linecap="round"
                />
              </svg>

              <p className="text-sm font-normal hidden lg:block">Filters</p>
            </Button>
            <Button className="flex flex-row  hover:bg-transparent  bg-transparent text-black border border-gray-300 gap-x-2">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.16689 3.83295C8.72198 3.83292 8.28156 3.92195 7.8716 4.09481C7.46163 4.26766 7.09042 4.52084 6.77984 4.83942C6.46927 5.15799 6.22561 5.53552 6.06323 5.94975C5.90086 6.36397 5.82305 6.80651 5.83439 7.25128C5.83885 7.4394 5.77951 7.62349 5.66603 7.77359C5.55254 7.92369 5.3916 8.03096 5.20939 8.07795C4.62192 8.23184 4.11048 8.59417 3.77047 9.09736C3.43047 9.60055 3.28511 10.2102 3.36152 10.8127C3.43792 11.4152 3.73087 11.9693 4.18572 12.3717C4.64058 12.7741 5.22627 12.9973 5.83356 12.9996H6.66689C6.88791 12.9996 7.09987 13.0874 7.25615 13.2437C7.41243 13.4 7.50023 13.6119 7.50023 13.833C7.50023 14.054 7.41243 14.2659 7.25615 14.4222C7.09987 14.5785 6.88791 14.6663 6.66689 14.6663H5.83356C4.87381 14.6665 3.94343 14.3354 3.19961 13.7289C2.45579 13.1224 1.94415 12.2777 1.75114 11.3375C1.55814 10.3974 1.6956 9.41945 2.14031 8.56896C2.58502 7.71846 3.3097 7.04756 4.19189 6.66962C4.29698 5.61634 4.73363 4.62359 5.43895 3.83432C6.14427 3.04505 7.08188 2.49998 8.11677 2.2776C9.15165 2.05523 10.2304 2.16702 11.1977 2.59688C12.165 3.02674 12.9709 3.75249 13.4994 4.66962C14.8075 4.71722 16.0447 5.27588 16.9455 6.22563C17.8462 7.17538 18.3386 8.44048 18.3169 9.74924C18.2952 11.058 17.7611 12.3061 16.8293 13.2254C15.8976 14.1448 14.6425 14.6621 13.3336 14.6663C13.1125 14.6663 12.9006 14.5785 12.7443 14.4222C12.588 14.2659 12.5002 14.054 12.5002 13.833C12.5002 13.6119 12.588 13.4 12.7443 13.2437C12.9006 13.0874 13.1125 12.9996 13.3336 12.9996C13.7824 12.999 14.2265 12.9077 14.6392 12.7312C15.0519 12.5547 15.4247 12.2968 15.7353 11.9727C16.0458 11.6486 16.2878 11.2652 16.4465 10.8454C16.6053 10.4255 16.6776 9.97798 16.6592 9.52951C16.6408 9.08105 16.532 8.64092 16.3394 8.23552C16.1467 7.83013 15.8742 7.46782 15.5381 7.17032C15.202 6.87282 14.8093 6.64626 14.3835 6.50424C13.9577 6.36221 13.5076 6.30763 13.0602 6.34378C12.8866 6.3579 12.7129 6.31726 12.5636 6.22758C12.4143 6.1379 12.2968 6.00368 12.2277 5.84378C11.9694 5.24648 11.542 4.73781 10.9981 4.3805C10.4542 4.02318 9.81765 3.83285 9.16689 3.83295ZM10.0002 8.83295C10.2212 8.83295 10.4332 8.92075 10.5895 9.07703C10.7458 9.23331 10.8336 9.44527 10.8336 9.66628V15.988L11.0777 15.7438C11.2349 15.592 11.4454 15.508 11.6639 15.5099C11.8824 15.5118 12.0914 15.5994 12.2459 15.7539C12.4004 15.9084 12.4881 16.1175 12.49 16.336C12.4919 16.5544 12.4079 16.765 12.2561 16.9221L10.5894 18.5888C10.4331 18.745 10.2212 18.8328 10.0002 18.8328C9.77926 18.8328 9.56733 18.745 9.41106 18.5888L7.74439 16.9221C7.6648 16.8452 7.60132 16.7533 7.55764 16.6516C7.51397 16.55 7.49098 16.4406 7.49002 16.33C7.48906 16.2193 7.51014 16.1096 7.55204 16.0072C7.59394 15.9047 7.65582 15.8117 7.73406 15.7335C7.81231 15.6552 7.90535 15.5933 8.00776 15.5514C8.11018 15.5095 8.21991 15.4884 8.33056 15.4894C8.44121 15.4904 8.55056 15.5134 8.65223 15.557C8.7539 15.6007 8.84585 15.6642 8.92273 15.7438L9.16689 15.988V9.66628C9.16689 9.44527 9.25469 9.23331 9.41097 9.07703C9.56725 8.92075 9.77921 8.83295 10.0002 8.83295Z"
                  fill="#040404"
                />
              </svg>

              <p className="text-sm font-normal hidden lg:block">Export</p>
            </Button>
            <div className=" bg-blue-150 px-2 rounded-sm text-black  gap-x-2 hidden lg:block">
              <i className="text-xs text-gray-800 font-normal mt-1">
                Wallet Balance <i className="text-xs font-semibold text-black inline">₹ 3500.00</i>
              </i>
            </div>

            <AlertDialog open={rechargeWalletDialog}>
              <AlertDialogTrigger asChild>
                <Button
                  className="flex flex-row bg-blue-400 text-white gap-x-2"
                  onClick={() => setRechargeWalletDialog(true)}
                >
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
                          <X onClick={() => setRechargeWalletDialog(false)} />
                        </AlertDialogCancel>
                      </div>
                      <div className="flex flex-col items-center justify-center text-black">
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
                                        + ₹ <span className="underline">500.00</span>
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
                            <img src="src\assets\cashfreePayments.png" />
                          </div>
                        </Button>
                        <Button className="bg-transparent w-full h-16 hover:bg-transparent border mt-4 border-gray-350">
                          <div className="flex w-full justify-between items-center py-3">
                            <div className="text-left">
                              <p className="text-sm font-medium text-black">Paytm Online Payment</p>
                              <p className="text-xs font-normal text-gray-800 mt-2">
                                Debit Card, Credit Card, Net Banking, UPI
                              </p>
                            </div>
                            <img src="src\assets\paytm.png" />
                          </div>
                        </Button>
                      </div>
                      <div className="flex flex-row justify-center items-center gap-x-4 mt-8 mb-4">
                        {/* ------------------------------------------------------------------------ */}
                        <Button
                          className="flex flex-row bg-blue-400 text-white gap-x-2"
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
                      <div className="flex justify-between items-center border-b border-b-white-100 px-6 py-2">
                        <p className="font-semibold text-base text-black">Transaction Details</p>
                        <AlertDialogCancel className="mt-0 border text-gray-800 border-transparent hover:bg-transparent hover:text-gray-800 text-xs font-normal font-poppins bg-transparent">
                          <X onClick={() => setProceedPaymentDialog(false)} />
                        </AlertDialogCancel>
                      </div>
                      <div className="flex flex-col items-center justify-center text-gray-800 font-normal text-2xl mt-8">
                        Transaction Amount
                      </div>
                      <div className="flex flex-row gap-x-3 items-center justify-center text-black font-medium text-2xl mt-6">
                        ₹ {inputAmount}
                        <Badge className="text-green bg-green-100  border-green">Completed</Badge>
                      </div>
                      <div className="flex flex-row items-center justify-center text-gray-800 font-normal text-sm mt-4">
                        Date added :
                        <span className="text-black font-normal text-sm ml-2">
                          {now} {time}
                        </span>
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
