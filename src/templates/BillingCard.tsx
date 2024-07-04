import { Card, CardContent } from "@/components/ui/card";
import BillingDetails from "./BillingDetails";

export default function BillingCard() {
  return (
    <>
      <Card>
        <CardContent>
          <BillingDetails />
        </CardContent>
      </Card>
    </>
  );
}
