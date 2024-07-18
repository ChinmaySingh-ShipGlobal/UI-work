import { Columns, Profile } from "@/templates/Columns";
import { DataTable } from "@/templates/DataTable";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const baseURL = "https://jsonplaceholder.typicode.com/users";

const TanTable: React.FC = () => {
  const [data, setData] = useState<Profile[]>([]);

  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Profile[]>(baseURL);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDownload = () => {
    // Construct CSV content
    const csvContent =
      "id,name,username,email,address\n" +
      data
        .map(
          (profile) =>
            `${profile.id},"${profile.name}","${profile.username}","${profile.email}","${[
              profile.address.suite,
              profile.address.street,
              profile.address.city,
              profile.address.zipcode,
            ].join(", ")}"`,
        )
        .join("\n");

    // Create Blob
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    // Create URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Trigger download
    if (downloadLinkRef.current) {
      downloadLinkRef.current.href = url;
      downloadLinkRef.current.download = "data.csv";
      downloadLinkRef.current.click();
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-end mb-4">
        <Button onClick={handleDownload}>Export</Button>
        {/* Hidden download link */}
        <a ref={downloadLinkRef} style={{ display: "none" }} />
      </div>
      <DataTable columns={Columns} data={data} />
    </div>
  );
};

export default TanTable;
