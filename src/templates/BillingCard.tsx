import { Card } from "@/components/ui/card";
import BillingDetails from "./BillingDetails";

export default function BillingCard() {
  return (
    <>
      <Card className="px-6">
        <BillingDetails />
      </Card>
    </>
  );
}
