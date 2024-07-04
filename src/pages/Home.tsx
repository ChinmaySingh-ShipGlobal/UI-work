import { useState } from "react";
import RateCalculatorForm from "@/templates/RateCalculatorForm";
import Summary from "@/templates/Summary";

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
              {/* Rate calculator form */}
              <RateCalculatorForm
                showCalculatedWeight={showCalculatedWeight}
                setShowCalculatedWeight={setShowCalculatedWeight}
              />
              {/* Summary */}
              <Summary />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
