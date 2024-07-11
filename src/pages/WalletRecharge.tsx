import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { AlertDialogDescription, AlertDialogTitle } from "@radix-ui/react-alert-dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Wallet, IndianRupee, Square, X } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  amount: z.coerce
    .number({ message: "Amount must be in digits" })
    .min(200, { message: "Enter amount not less than 200" }),
});

export function WalletRecharge() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <AlertDialog defaultOpen>
      <AlertDialogTrigger asChild></AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle></AlertDialogTitle>
        <AlertDialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex justify-end">
                <AlertDialogCancel className="mt-0 border text-gray-800 border-transparent hover:bg-transparent hover:text-gray-800 text-xs font-normal font-poppins bg-transparent">
                  <X />
                </AlertDialogCancel>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Wallet />
                <p className="text-base font-semibold">Recharge Wallet</p>
              </div>
              <div className="px-4 mt-6">
                <FormField
                  control={form.control}
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
  );
}
