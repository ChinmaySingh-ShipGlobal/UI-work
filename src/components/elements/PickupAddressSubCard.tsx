import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";

interface PickupAddressSubCardProps {
  title: string;
  address: string;
  contact: string;
  buttonLabel?: string;
  buttonClassName?: string;
}

const PickupAddressSubCard: React.FC<PickupAddressSubCardProps> = ({ title, address, contact, buttonLabel }) => {
  return (
    <Card className="shadow-none m-2 border-blue-50">
      <CardContent className="m-2 mb-0 pt-2 px-4">
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm font-semibold font-poppins">{title}</div>
          <div className="flex space-x-5 text-gray-800 items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.3334 7.5V15.8333H6.66675V7.5H13.3334ZM12.0834 2.5H7.91675L7.08341 3.33333H4.16675V5H15.8334V3.33333H12.9167L12.0834 2.5ZM15.0001 5.83333H5.00008V15.8333C5.00008 16.75 5.75008 17.5 6.66675 17.5H13.3334C14.2501 17.5 15.0001 16.75 15.0001 15.8333V5.83333Z"
                fill="#647082"
              />
            </svg>

            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_826)">
                <path
                  d="M10.8333 2.5C11.0457 2.50024 11.25 2.58157 11.4045 2.72737C11.5589 2.87318 11.6519 3.07246 11.6643 3.2845C11.6768 3.49653 11.6078 3.70532 11.4714 3.86819C11.3351 4.03107 11.1417 4.13575 10.9308 4.16083L10.8333 4.16667H4.16667V15.8333H15.8333V9.16667C15.8336 8.95427 15.9149 8.74997 16.0607 8.59553C16.2065 8.44108 16.4058 8.34814 16.6178 8.33569C16.8299 8.32324 17.0386 8.39223 17.2015 8.52855C17.3644 8.66488 17.4691 8.85825 17.4942 9.06917L17.5 9.16667V15.8333C17.5001 16.2538 17.3413 16.6588 17.0554 16.9671C16.7695 17.2754 16.3776 17.4643 15.9583 17.4958L15.8333 17.5H4.16667C3.74619 17.5001 3.34119 17.3413 3.03288 17.0554C2.72456 16.7695 2.5357 16.3776 2.50417 15.9583L2.5 15.8333V4.16667C2.49987 3.74619 2.65867 3.34119 2.94458 3.03288C3.23049 2.72456 3.62237 2.5357 4.04167 2.50417L4.16667 2.5H10.8333ZM16.0358 2.78583C16.1858 2.63638 16.387 2.54961 16.5987 2.54314C16.8103 2.53668 17.0164 2.61101 17.1752 2.75104C17.334 2.89107 17.4336 3.08629 17.4537 3.29706C17.4737 3.50783 17.4128 3.71834 17.2833 3.88583L17.2142 3.965L8.96417 12.2142C8.8142 12.3636 8.61297 12.4504 8.40135 12.4569C8.18972 12.4633 7.98357 12.389 7.82477 12.249C7.66596 12.1089 7.56641 11.9137 7.54633 11.7029C7.52626 11.4922 7.58716 11.2817 7.71667 11.1142L7.78583 11.0358L16.0358 2.78583Z"
                  fill="#647082"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_826">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex  gap-x-4">
          <div className="w-3/4 text-sm">
            <div className="flex flex-row">
              <div className="w-1/3 text-gray-800 font-normal font-poppins text-xs">Address</div>
              <div className="w-2/3 m-0 p-0 font-poppins text-xs font-normal ">{address}</div>
            </div>
            <div className="flex flex-row mt-3 items-center">
              <div className="w-1/3 text-gray-800 font-normal font-poppins text-xs">Contact</div>
              <div className="w-2/3 font-poppins text-xs font-normal ">{contact}</div>
            </div>
          </div>

          <div className="w-1/4 flex place-content-end place-items-end text-right">
            <Badge className="text-purple bg-blue-light">{buttonLabel}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PickupAddressSubCard;
