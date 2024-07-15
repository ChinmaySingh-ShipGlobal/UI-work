import LabelWithText from "@/components/elements/LabelWithText";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="#EBF2FF" />
                    <path
                      d="M22.4261 9.38989L16.1761 5.95239C16.0838 5.90162 15.9801 5.875 15.8748 5.875C15.7695 5.875 15.6658 5.90162 15.5736 5.95239L9.32356 9.38989C9.22556 9.44385 9.14385 9.52311 9.08694 9.61941C9.03002 9.71572 9 9.82553 9 9.93739C9 10.0493 9.03002 10.1591 9.08694 10.2554C9.14385 10.3517 9.22556 10.4309 9.32356 10.4849L15.2498 13.7443V20.4436L13.3523 19.3999L12.7498 20.4943L15.5736 22.0474C15.6658 22.0982 15.7695 22.1248 15.8748 22.1248C15.9801 22.1248 16.0838 22.0982 16.1761 22.0474L22.4261 18.6099C22.5241 18.556 22.6058 18.4767 22.6628 18.3804C22.7197 18.2841 22.7498 18.1743 22.7498 18.0624V9.93739C22.7498 9.82551 22.7197 9.71568 22.6628 9.61938C22.6058 9.52307 22.5241 9.44382 22.4261 9.38989ZM15.8748 7.21364L20.8279 9.93739L15.8748 12.6611L10.9217 9.93739L15.8748 7.21364ZM21.4998 17.693L16.4998 20.443V13.7436L21.4998 10.9936V17.693Z"
                      fill="#1F499E"
                    />
                    <path
                      d="M10.25 14H5.25V12.75H10.25V14ZM11.5 19H6.5V17.75H11.5V19ZM12.75 16.5H7.75V15.25H12.75V16.5Z"
                      fill="#1F499E"
                    />
                  </svg>

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
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="#FFEEE9" />
                    <path
                      d="M13.9974 13.5827C13.4449 13.5827 12.915 13.3632 12.5243 12.9725C12.1336 12.5818 11.9141 12.0519 11.9141 11.4993C11.9141 10.9468 12.1336 10.4169 12.5243 10.0262C12.915 9.63551 13.4449 9.41602 13.9974 9.41602C14.5499 9.41602 15.0798 9.63551 15.4705 10.0262C15.8612 10.4169 16.0807 10.9468 16.0807 11.4993C16.0807 11.7729 16.0268 12.0438 15.9221 12.2966C15.8174 12.5494 15.664 12.779 15.4705 12.9725C15.2771 13.1659 15.0474 13.3194 14.7947 13.4241C14.5419 13.5288 14.271 13.5827 13.9974 13.5827ZM13.9974 5.66602C12.4503 5.66602 10.9666 6.2806 9.87261 7.37456C8.77864 8.46852 8.16406 9.95225 8.16406 11.4993C8.16406 15.8743 13.9974 22.3327 13.9974 22.3327C13.9974 22.3327 19.8307 15.8743 19.8307 11.4993C19.8307 9.95225 19.2161 8.46852 18.1222 7.37456C17.0282 6.2806 15.5445 5.66602 13.9974 5.66602Z"
                      fill="#FF7F12"
                    />
                  </svg>

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
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="#FFEEE9" />
                    <path
                      d="M13.9974 13.5827C13.4449 13.5827 12.915 13.3632 12.5243 12.9725C12.1336 12.5818 11.9141 12.0519 11.9141 11.4993C11.9141 10.9468 12.1336 10.4169 12.5243 10.0262C12.915 9.63551 13.4449 9.41602 13.9974 9.41602C14.5499 9.41602 15.0798 9.63551 15.4705 10.0262C15.8612 10.4169 16.0807 10.9468 16.0807 11.4993C16.0807 11.7729 16.0268 12.0438 15.9221 12.2966C15.8174 12.5494 15.664 12.779 15.4705 12.9725C15.2771 13.1659 15.0474 13.3194 14.7947 13.4241C14.5419 13.5288 14.271 13.5827 13.9974 13.5827ZM13.9974 5.66602C12.4503 5.66602 10.9666 6.2806 9.87261 7.37456C8.77864 8.46852 8.16406 9.95225 8.16406 11.4993C8.16406 15.8743 13.9974 22.3327 13.9974 22.3327C13.9974 22.3327 19.8307 15.8743 19.8307 11.4993C19.8307 9.95225 19.2161 8.46852 18.1222 7.37456C17.0282 6.2806 15.5445 5.66602 13.9974 5.66602Z"
                      fill="#FF7F12"
                    />
                  </svg>

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
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="#FCE8E8" />
                    <path
                      d="M12.125 12.8751H14C14.1989 12.8751 14.3897 12.796 14.5303 12.6554C14.671 12.5147 14.75 12.324 14.75 12.1251C14.75 11.9261 14.671 11.7354 14.5303 11.5947C14.3897 11.4541 14.1989 11.3751 14 11.3751H13.25V11.0001C13.25 10.8011 13.171 10.6104 13.0303 10.4697C12.8897 10.3291 12.6989 10.2501 12.5 10.2501C12.3011 10.2501 12.1103 10.3291 11.9697 10.4697C11.829 10.6104 11.75 10.8011 11.75 11.0001V11.4126C11.2943 11.5051 10.8893 11.7636 10.6135 12.138C10.3377 12.5124 10.2109 12.9759 10.2576 13.4385C10.3043 13.9011 10.5213 14.3299 10.8664 14.6415C11.2115 14.9532 11.66 15.1255 12.125 15.1251H12.875C12.9745 15.1251 13.0698 15.1646 13.1402 15.2349C13.2105 15.3052 13.25 15.4006 13.25 15.5001C13.25 15.5995 13.2105 15.6949 13.1402 15.7652C13.0698 15.8355 12.9745 15.8751 12.875 15.8751H11C10.8011 15.8751 10.6103 15.9541 10.4697 16.0947C10.329 16.2354 10.25 16.4261 10.25 16.6251C10.25 16.824 10.329 17.0147 10.4697 17.1554C10.6103 17.296 10.8011 17.3751 11 17.3751H11.75V17.7501C11.75 17.949 11.829 18.1397 11.9697 18.2804C12.1103 18.421 12.3011 18.5001 12.5 18.5001C12.6989 18.5001 12.8897 18.421 13.0303 18.2804C13.171 18.1397 13.25 17.949 13.25 17.7501V17.3376C13.7057 17.245 14.1107 16.9865 14.3865 16.6121C14.6623 16.2377 14.7891 15.7742 14.7424 15.3116C14.6957 14.849 14.4787 14.4202 14.1336 14.1086C13.7886 13.7969 13.34 13.6246 12.875 13.6251H12.125C12.0256 13.6251 11.9302 13.5855 11.8598 13.5152C11.7895 13.4449 11.75 13.3495 11.75 13.2501C11.75 13.1506 11.7895 13.0552 11.8598 12.9849C11.9302 12.9146 12.0256 12.8751 12.125 12.8751ZM20.75 14.0001H18.5V7.25005C18.5005 7.11789 18.4661 6.98794 18.4003 6.87336C18.3344 6.75878 18.2395 6.66363 18.125 6.59755C18.011 6.53173 17.8817 6.49707 17.75 6.49707C17.6184 6.49707 17.489 6.53173 17.375 6.59755L15.125 7.88755L12.875 6.59755C12.761 6.53173 12.6317 6.49707 12.5 6.49707C12.3684 6.49707 12.239 6.53173 12.125 6.59755L9.87501 7.88755L7.62501 6.59755C7.51099 6.53173 7.38166 6.49707 7.25001 6.49707C7.11835 6.49707 6.98902 6.53173 6.87501 6.59755C6.76055 6.66363 6.66559 6.75878 6.59974 6.87336C6.53389 6.98794 6.49948 7.11789 6.50001 7.25005V19.2501C6.50001 19.8468 6.73706 20.4191 7.15902 20.841C7.58097 21.263 8.15327 21.5001 8.75001 21.5001H19.25C19.8467 21.5001 20.419 21.263 20.841 20.841C21.263 20.4191 21.5 19.8468 21.5 19.2501V14.7501C21.5 14.5511 21.421 14.3604 21.2803 14.2197C21.1397 14.0791 20.9489 14.0001 20.75 14.0001ZM8.75001 20.0001C8.55109 20.0001 8.36033 19.921 8.21968 19.7804C8.07902 19.6397 8.00001 19.449 8.00001 19.2501V8.54755L9.50001 9.40255C9.61576 9.46301 9.74442 9.49459 9.87501 9.49459C10.0056 9.49459 10.1343 9.46301 10.25 9.40255L12.5 8.11255L14.75 9.40255C14.8658 9.46301 14.9944 9.49459 15.125 9.49459C15.2556 9.49459 15.3843 9.46301 15.5 9.40255L17 8.54755V19.2501C17.002 19.5059 17.0477 19.7595 17.135 20.0001H8.75001ZM20 19.2501C20 19.449 19.921 19.6397 19.7803 19.7804C19.6397 19.921 19.4489 20.0001 19.25 20.0001C19.0511 20.0001 18.8603 19.921 18.7197 19.7804C18.579 19.6397 18.5 19.449 18.5 19.2501V15.5001H20V19.2501Z"
                      fill="#FC5353"
                    />
                  </svg>

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
                        <TableCell className="whitespace-nowrap">{billDetail.total}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={6} className="text-right font-semibold text-sm">
                        Total
                      </TableCell>
                      <TableCell className="font-semibold text-sm whitespace-nowrap"> ₹ 2322.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:w-1/3 bg-gray-50">
          <Card className="shadow-none bg-orange-200 px-0 border rounded-lg mt-2 lg:mt-0">
            <CardContent className="px-0 py-0">
              <div className="flex border-b border-orange-150 pt-2">
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
              <div className="flex flex-row justify-between px-4 py-3 bg-orange-150 mt-4">
                <p className="text-xs font-semibold">Total</p>
                <p className="text-xs font-semibold">₹ 2322.00</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-none px-0 border rounded-lg mt-2">
            <CardContent className="py-0">
              <div className="flex mt-4 mb-1">
                <p className="text-base font-semibold">Activity</p>
              </div>
              <div className="flex flex-row">
                <svg
                  width="20"
                  height="230"
                  viewBox="0 0 20 230"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2"
                >
                  <line
                    x1="10.5"
                    y1="19.5"
                    x2="10.5"
                    y2="215.5"
                    stroke="#A0A8B4"
                    stroke-linecap="round"
                    stroke-dasharray="5 5"
                  />
                  <g clip-path="url(#clip0_19_3011)">
                    <path
                      d="M10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.16751 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.16751 1.25 10C1.25 14.8325 5.16751 18.75 10 18.75Z"
                      fill="#02BC77"
                    />
                    <path
                      d="M14.4167 6.08301L8.75 11.7497L6.41667 9.41634L5.25 10.583L8.75 14.083L15.5833 7.24967L14.4167 6.08301Z"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M10 88.75C14.8325 88.75 18.75 84.8325 18.75 80C18.75 75.1675 14.8325 71.25 10 71.25C5.16751 71.25 1.25 75.1675 1.25 80C1.25 84.8325 5.16751 88.75 10 88.75Z"
                    fill="#A0A8B4"
                  />
                  <path
                    d="M14.4167 76.083L8.75 81.7497L6.41667 79.4163L5.25 80.583L8.75 84.083L15.5833 77.2497L14.4167 76.083Z"
                    fill="white"
                  />
                  <path
                    d="M10 158.75C14.8325 158.75 18.75 154.832 18.75 150C18.75 145.168 14.8325 141.25 10 141.25C5.16751 141.25 1.25 145.168 1.25 150C1.25 154.832 5.16751 158.75 10 158.75Z"
                    fill="#A0A8B4"
                  />
                  <path
                    d="M14.4167 146.083L8.75 151.75L6.41667 149.416L5.25 150.583L8.75 154.083L15.5833 147.25L14.4167 146.083Z"
                    fill="white"
                  />
                  <defs>
                    <clipPath id="clip0_19_3011">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="flex-1 flex-row justify-between pl-4 py-2 text-black">
                  <div className="flex flex-col space-y-5 w-full">
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
