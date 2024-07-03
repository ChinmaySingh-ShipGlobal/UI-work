export function CalculatedWeight() {
  return (
    <div className="flex justify-center mt-6 text-gray-700">
      <div className="grid gap-4 grid-cols-3 p-2">
        <div className="py-2 px-0 text-center border border-gray-600 rounded-lg">
          <p className="text-sm font-semibold">1.00 KG</p>
          <p className="text-sm font-semibold text-gray-600">Dead weight</p>
        </div>
        <div className="p-2 text-center border border-gray-600 rounded-lg">
          <p className="text-sm font-semibold">1.20 KG</p>
          <p className="text-sm font-semibold text-gray-600">
            Volumetric weight
          </p>
        </div>
        <div className="p-2 text-center border border-orange-800 text-orange-800 bg-pink-100 rounded-lg">
          <p className="text-sm font-semibold">1.2 KG</p>
          <p className="text-sm font-semibold ">Billed weight</p>
        </div>
      </div>
    </div>
  );
}
