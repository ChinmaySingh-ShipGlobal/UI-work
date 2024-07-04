import { Card, CardContent } from "@/components/ui/card";
import EmptyTab from "./EmptyTab";

export default function Summary() {
  return (
    <>
      <Card className="hidden lg:w-1/3">
        <CardContent>
          <div>
            <EmptyTab />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
