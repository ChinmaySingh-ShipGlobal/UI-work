import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Columns, Profile } from "@/templates/Columns";
import { DataTable } from "@/templates/DataTable";
import { Button } from "@/components/ui/button";
import handleDownload from "@/lib/HandleDownload";
const baseURL = "https://jsonplaceholder.typicode.com/users";

const JSONtoCSV = () => {
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

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-end mb-4">
        <Button
          onClick={() =>
            handleDownload(
              ["id", "name", "username", "email", "address.suite", "address.street", "address.city", "address.zipcode"],
              data,
              downloadLinkRef,
              "userData",
            )
          }
        >
          Export
        </Button>
        <a ref={downloadLinkRef} className="hidden" />
      </div>
      <DataTable columns={Columns} data={data} />
    </div>
  );
};

export default JSONtoCSV;
