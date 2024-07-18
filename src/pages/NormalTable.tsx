import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const baseURL = "https://jsonplaceholder.typicode.com/users";

export type Profile = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const NormalTable: React.FC = () => {
  const [data, setData] = useState<Profile[]>([]);

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
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>NAME</TableHead>h
            <TableHead>USERNAME</TableHead>
            <TableHead>EMAIL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((profile) => (
            <TableRow key={profile.id}>
              <TableCell className="w-[100px]">{profile.id}</TableCell>
              <TableCell className="w-[100px]">{profile.name}</TableCell>
              <TableCell className="w-[100px]">{profile.username}</TableCell>
              <TableCell className="w-[100px]">{profile.email}</TableCell>
              <TableCell className="w-[100px]">
                <Popover>
                  <PopoverTrigger>...</PopoverTrigger>
                  <PopoverContent className="flex flex-col items-start">
                    <Button
                      className="bg-transparent text-black hover:bg-transparent"
                      onClick={() => navigator.clipboard.writeText(profile.name)}
                    >
                      Copy name
                    </Button>
                    <Button
                      className="bg-transparent text-black hover:bg-transparent"
                      onClick={() => navigator.clipboard.writeText(profile.username)}
                    >
                      Copy username
                    </Button>
                    <Button
                      className="bg-transparent text-black hover:bg-transparent"
                      onClick={() => navigator.clipboard.writeText(profile.email)}
                    >
                      Copy email
                    </Button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default NormalTable;
