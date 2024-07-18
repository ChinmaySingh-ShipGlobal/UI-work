import { Columns, Profile } from "@/templates/Columns";
import { DataTable } from "@/templates/DataTable";
import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";

const TanTableUpload: React.FC = () => {
  const [jsonData, setJsonData] = useState<Profile[]>([]);
  const [showcsvtojson, setShowscvtojson] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      if (!event.target) return;

      // Parse CSV data
      const csv = event.target.result as string;
      const lines = csv.split(/\r\n|\n/);

      // Assuming first row is header, parse data
      const extractedData = lines
        .map((line) => line.split(","))
        .filter((columns) => columns[0].trim() !== "") // Ensure each row has exactly 5 columns
        .slice(1) // Skip the header row
        .map((columns) => ({
          id: parseInt(columns[0].trim()),
          name: columns[1].trim(),
          username: columns[2].trim(),
          email: columns[3].trim(),
          address: columns[4].trim(),
        }));

      setJsonData(extractedData);
      setShowscvtojson(true);
    };

    reader.readAsText(file);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Input
        type="file"
        ref={fileInputRef}
        onChange={handleUpload}
        id="file"
        className="w-52 mt-4 bg-blue text-white"
      />
      <DataTable columns={Columns} data={showcsvtojson ? jsonData : []} />
    </div>
  );
};

export default TanTableUpload;
