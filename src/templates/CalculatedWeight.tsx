import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export function CalculatedWeight() {
  const rateForm = useSelector((state: RootState) => state.rate);
  console.log(rateForm, "rate");
  const volumetric_weight =
    parseInt(rateForm.length) *
    parseInt(rateForm.breadth) *
    parseInt(rateForm.height);
  5000;

  return (
    <div className="flex justify-center mt-6 text-gray-700">
      <div className="grid gap-1 grid-cols-3">
        <div className="py-2 px-0 text-center border border-gray-600 rounded-lg">
          <p className="text-sm font-semibold">{rateForm.weight} KG</p>
          <p className="text-sm font-semibold text-gray-600">Dead weight</p>
        </div>
        <div className="p-2 text-center border border-gray-600 rounded-lg">
          <p className="text-sm font-semibold">
            {volumetric_weight > 0.01 ? volumetric_weight : 0.01} KG
          </p>
          <p className="text-sm font-semibold text-gray-600">
            Volumetric weight
          </p>
        </div>
        <div className="p-2 text-center border border-orange-800 text-orange-800 bg-pink-100 rounded-lg">
          <p className="text-sm font-semibold">
            {parseInt(rateForm.weight) > volumetric_weight
              ? rateForm.weight
              : volumetric_weight}{" "}
            KG
          </p>
          <p className="text-sm font-semibold ">Billed weight</p>
        </div>
      </div>
    </div>
  );
}
