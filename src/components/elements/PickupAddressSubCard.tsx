import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Trash, SquarePen } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { useState } from "react";

const partners = [
  {
    id: 1,
    name: "ShipGlobal",
  },
  { id: 2, name: "3PL Delhivery" },
];

interface PickupAddressSubCardProps {
  title: string;
  address: string;
  contact: string;
  buttonLabel?: string;
  buttonClassName?: string;
}

const PickupAddressSubCard: React.FC<PickupAddressSubCardProps> = ({ title, address, contact, buttonLabel }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

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
          <div className="flex items-center gap-x-8">
            <div>Contact</div>
            <div>{contact}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-6">
              <div>Pickup by</div>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild className="border-none font-medium text-xs p-0 ">
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="overflow-x-hidden overflow-y-clip"
                  >
                    {value ? `${partners.find((partner) => partner.name === value)?.name}` : "ShipGlobal "}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-max">
                  <Command>
                    <CommandList>
                      {partners.map((partner) => (
                        <CommandItem
                          key={partner.name}
                          value={partner.name}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue);
                            setOpen(false);
                          }}
                        >
                          {partner.name}
                        </CommandItem>
                      ))}
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Badge className="text-xs font-medium">{buttonLabel}</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default PickupAddressSubCard;
