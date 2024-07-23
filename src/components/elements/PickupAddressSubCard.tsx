import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Trash, SquarePen } from "lucide-react";

interface PickupAddressSubCardProps {
  title: string;
  address: string;
  contact: string;
  buttonLabel?: string;
  buttonClassName?: string;
}

const PickupAddressSubCard: React.FC<PickupAddressSubCardProps> = ({ title, address, contact, buttonLabel }) => {
  return (
    <Card className="shadow-none m-2 ">
      <CardContent className="p-6 text-xs font-normal">
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm font-semibold">{title}</div>
          <div className="flex space-x-6">
            <Trash className="h-5 w-5" />
            <SquarePen className="h-5 w-5" />
          </div>
        </div>
        <div className=" space-y-3">
          <div className="flex gap-x-8">
            <div>Address</div>
            <div className="w-3/5">{address}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-8">
              <div>Contact</div>
              <div>{contact}</div>
            </div>

            <Badge className="text-xs font-medium">{buttonLabel}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default PickupAddressSubCard;
