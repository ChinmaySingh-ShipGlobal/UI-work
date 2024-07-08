import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
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
    <Card className="shadow-none m-4">
      <CardContent className="m-2 p-2">
        <div className="flex justify-between items-center mb-6">
          <div className="text-baseline font-bold">{title}</div>
          <div className="flex space-x-6 text-gray-800">
            <Trash className="h-5 w-5" />
            <SquarePen className="h-5 w-5" />
          </div>
        </div>
        <div className="flex mt-4 gap-x-4">
          <div className="w-5/6 text-sm">
            <div className="flex flex-row">
              <Label htmlFor="name" className="w-1/3 text-gray-800 font-semibold">
                Address
              </Label>
              <div className="w-2/3">{address}</div>
            </div>
            <div className="flex flex-row mt-4">
              <Label htmlFor="contact" className="w-1/3 text-gray-800 font-semibold">
                Contact
              </Label>
              <div className="w-2/3">{contact}</div>
            </div>
          </div>

          <div className="w-1/6 flex place-content-end place-items-end">
            <span className={cn(`text-sm p-1 rounded px-1 font-semibold whitespace-nowrap`, buttonClassName)}>
              {buttonLabel}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PickupAddressSubCard;
