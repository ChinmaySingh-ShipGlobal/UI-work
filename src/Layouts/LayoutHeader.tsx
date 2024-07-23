import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function LayoutHeader() {
  const navigate = useNavigate();
  return (
    <div className="grid-cols-5 grid gap-4 mb-4">
      <Button onClick={() => navigate("/twocolumns")}>2</Button>
      <Button onClick={() => navigate("/threecolumns")}>3</Button>
      <Button onClick={() => navigate("/fourcolumns")}>4</Button>
      <Button onClick={() => navigate("/mixcolumns")}>mix</Button>
      <Button onClick={() => navigate("/centeronecolumn")}>Center</Button>
    </div>
  );
}
