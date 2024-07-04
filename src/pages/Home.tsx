import { CalculatedWeight } from "@/templates/CalculatedWeight";
import EmptyTab from "@/templates/EmptyTab";
import { PartnerTable } from "@/templates/PartnerTable";
import RateCalculator from "@/templates/RateCalculator";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function Home() {
  const [showCalculatedWeight, setShowCalculatedWeight] =
    useState<boolean>(false);

  return (
    <>
      <div className=" bg-gray-100">
        <div className="font-semibold text-2xl text-center m-2 lg:text-left lg:ml-6">
          <p className="m-2 p-2">Rate Calculator</p>
          <div className="bg-white">
            <form>
              <Card className="lg:w-2/3">
                <CardContent>
                  <div>
                    <RateCalculator
                      setShowCalculatedWeight={setShowCalculatedWeight}
                    />
                    {showCalculatedWeight && (
                      <>
                        <CalculatedWeight />
                        <PartnerTable />
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
              <Card className="hidden lg:w-1/3">
                <CardContent>
                  <div>
                    <EmptyTab />
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
