import { Card, CardContent } from "@/components/ui/card";
import { Trash, SquarePen } from "lucide-react";
import { cn } from "@/lib/utils";

interface PickupAddressSubCardProps {
  title: string;
  address: string;
  contact: string;
  buttonLabel?: string;
  buttonClassName?: string;
}

const PickupAddressSubCard: React.FC<PickupAddressSubCardProps> = ({
  title,
  address,
  contact,
  buttonClassName,
  buttonLabel,
}) => {
  return (
    <Card className="shadow-none m-2 border-blue-50">
      <CardContent className="m-2 mb-0 pt-2 px-4">
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm font-semibold font-poppins">{title}</div>
          <div className="flex space-x-5 text-gray-800 items-center">
            <Trash className="h-5 w-5" />
            <SquarePen className="h-5 w-5" />
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
            <span
              className={cn(
                `text-xs p-1 mb-1 rounded px-1 text-right font-poppins font-normal lg:whitespace-nowrap`,
                buttonClassName,
              )}
            >
              {buttonLabel}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PickupAddressSubCard;
