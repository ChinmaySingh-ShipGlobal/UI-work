import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SelectInputField from "@/components/elements/SelectInputField";

const partners = [
  {
    partner: "UPS",
    rating: "4.2",
    time: "4 to 7 days",
    rate: "Rs. 3500.00",
    speed: "Fastest",
  },
  {
    partner: "ABS",
    rating: "4.2",
    time: "4 to 7 days",
    rate: "Rs. 3500.00",
    speed: "Cheapest",
  },
];
const sortType = [
  { key: "cheapest", value: "Cheapest" },
  { key: "fastest", value: "Fastest" },
];

export function PartnerTable() {
  return (
    <div className="bg-white shadow-md rounded-md mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between items-center mb-4">
        <p className="font-semibold text-sm">
          Showing {partners.length} results
        </p>
        <div className="flex items-center justify-end">
          <p className="text-sm text-gray-600 mr-2">Sort by:</p>
          <SelectInputField
            name="sort"
            data={sortType}
            defaultValue="cheapest"
            className="rounded-md border-gray-300 ring-0"
          />
        </div>
      </div>
      <Table className="w-full">
        <TableHeader>
          <TableRow className="bg-gray-200 text-gray-600">
            <TableHead className="w-1/6 px-4 py-2">Courier Partner</TableHead>
            <TableHead className="w-1/6 px-4 py-2">Rating</TableHead>
            <TableHead className="w-1/6 px-4 py-2">
              Estimated Delivery Time
            </TableHead>
            <TableHead className="w-1/6 px-4 py-2">Shipment Rate</TableHead>
            <TableHead className="w-1/6 px-4 py-2">Speed</TableHead>
            <TableHead className="w-1/6 px-4 py-2">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {partners.map((partner, index) => (
            <TableRow
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : ""}
            >
              <TableCell className="px-4 py-2">{partner.partner}</TableCell>
              <TableCell className="px-4 py-2 flex items-center">
                {partner.rating}
                <FontAwesomeIcon
                  icon={solidStar}
                  className="ml-1 text-orange"
                />
              </TableCell>
              <TableCell className="px-4 py-2">{partner.time}</TableCell>
              <TableCell className="px-4 py-2">{partner.rate}</TableCell>
              <TableCell
                className={`px-4 py-2 ${
                  partner.speed === "Fastest" ? "text-orange" : "text-purple"
                }`}
              >
                {partner.speed}
              </TableCell>
              <TableCell className="px-4 py-2">
                <Button className="bg-blue text-white px-4 py-1 rounded-md">
                  Create Order
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
