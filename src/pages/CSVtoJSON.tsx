import React, { useRef, useState } from "react";
import { Columns } from "@/templates/Columns";
import { DataTable } from "@/templates/DataTable";
import handleUpload from "@/lib/HandleUpload";

const CSVtoJSON: React.FC = () => {
  const [jsonData, setJsonData] = useState<any[]>([]);
  const [showConvertedData, setShowConvertedData] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onDataExtracted = (data: any[]) => {
    setJsonData(data);
    setShowConvertedData(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleUpload(file, onDataExtracted);
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="mb-4">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          id="file"
          className="w-52 mt-4 bg-blue text-white"
        />
      </div>
      <DataTable columns={Columns} data={showConvertedData ? jsonData : []} />
    </div>
  );
};

export default CSVtoJSON;
