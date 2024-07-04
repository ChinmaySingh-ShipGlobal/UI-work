import { Card, CardContent } from "@/components/ui/card";
import RateCalculator from "./RateCalculator";
import { CalculatedWeight } from "./CalculatedWeight";
import { PartnerTable } from "./PartnerTable";

export default function RateCalculatorForm({
  showCalculatedWeight,
  setShowCalculatedWeight,
}) {
  return (
    <>
      <Card className="lg:w-2/3">
        <CardContent>
          <div>
            <RateCalculator setShowCalculatedWeight={setShowCalculatedWeight} />
            {showCalculatedWeight && (
              <>
                <CalculatedWeight />
                <PartnerTable />
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
